(function(){
  function param(name){return new URLSearchParams(location.search).get(name);}
  function text(node,value){if(node)node.textContent=value;}
  function clear(node){while(node&&node.firstChild)node.removeChild(node.firstChild);}
  function reduced(){return window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;}
  function statesFor(plate){
    return [
      {label:'field',view:'minimal',hold:1400},
      {label:'compose',view:'field',hold:2200},
      {label:'relation',view:plate.view,hold:3200},
      {label:'release',view:'minimal',hold:1600}
    ];
  }
  function renderStage(stage,plate,state){
    clear(stage);
    stage.dataset.view=state.view;
    stage.dataset.width='900';
    stage.dataset.height='620';
    stage.dataset.unit=plate.unit;
    stage.dataset.shells=plate.shells;
    stage.setAttribute('data-substrate-viewport','');
    stage.setAttribute('aria-label',plate.title+' reader viewport, '+state.label+' state');
    window.GalwaySubstrateViewport.draw(stage);
    stage.dataset.phase=state.label;
  }
  function init(){
    if(!window.GalwayPlateRegistry||!window.GalwaySubstrateViewport)return;
    var id=param('plate');
    var plate=window.GalwayPlateRegistry.get(id);
    var title=document.querySelector('[data-reader-title]');
    var caption=document.querySelector('[data-reader-caption]');
    var phase=document.querySelector('[data-reader-phase]');
    var stage=document.querySelector('[data-reader-stage]');
    var deck=document.querySelector('[data-back-to-deck]');
    var running=true,index=0,timer=null,states=statesFor(plate);
    text(title,plate.title);
    text(caption,plate.caption);
    if(deck)deck.href='../../plates/';
    function step(){
      var state=states[index%states.length];
      if(stage)renderStage(stage,plate,state);
      text(phase,state.label);
      index++;
      if(running&&!reduced())timer=setTimeout(step,state.hold);
    }
    step();
    var toggle=document.querySelector('[data-reader-toggle]');
    if(toggle){
      toggle.onclick=function(){
        running=!running;
        toggle.textContent=running?'Pause':'Play';
        if(running){clearTimeout(timer);step();}else clearTimeout(timer);
      };
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
