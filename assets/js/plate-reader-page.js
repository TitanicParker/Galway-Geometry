(function(){
  function param(name){return new URLSearchParams(location.search).get(name);}
  function text(node,value){if(node)node.textContent=value;}
  function init(){
    if(!window.GalwayPlateRegistry||!window.GalwaySubstrateViewport)return;
    var id=param('plate');
    var plate=window.GalwayPlateRegistry.get(id);
    var title=document.querySelector('[data-reader-title]');
    var caption=document.querySelector('[data-reader-caption]');
    var stage=document.querySelector('[data-reader-stage]');
    text(title,plate.title);
    text(caption,plate.caption);
    if(stage){
      stage.dataset.view=plate.view;
      stage.dataset.width='900';
      stage.dataset.height='620';
      stage.dataset.unit=plate.unit;
      stage.dataset.shells=plate.shells;
      stage.setAttribute('data-substrate-viewport','');
      stage.setAttribute('aria-label',plate.title+' reader viewport');
      window.GalwaySubstrateViewport.draw(stage);
    }
    var deck=document.querySelector('[data-back-to-deck]');
    if(deck)deck.href='../../plates/';
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
