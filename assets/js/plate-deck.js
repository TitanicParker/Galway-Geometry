(function(){
  function qs(s){return document.querySelector(s);}
  function plate(i){var all=window.GalwayPlateRegistry.all();return all[(i+all.length)%all.length];}
  function clear(n){while(n.firstChild)n.removeChild(n.firstChild);}
  function render(){
    var root=qs('[data-plate-deck]'); if(!root||!window.GalwayPlateRegistry)return;
    var all=window.GalwayPlateRegistry.all(); if(!all.length)return;
    var index=Number(root.dataset.index||0), p=plate(index);
    root.dataset.index=index;
    clear(root);
    var stage=document.createElement('div'); stage.className='deck-stage';
    stage.setAttribute('data-substrate-viewport',''); stage.dataset.view=p.view; stage.dataset.width='900'; stage.dataset.height='620'; stage.dataset.unit=p.unit; stage.dataset.shells=p.shells; stage.setAttribute('aria-label',p.title+' plate still');
    var meta=document.createElement('div'); meta.className='deck-meta';
    meta.innerHTML='<p class="kicker">Plate '+(index+1)+' of '+all.length+'</p><h2>'+p.title+'</h2><p>'+p.caption+'</p>';
    var actions=document.createElement('div'); actions.className='deck-actions';
    actions.innerHTML='<button type="button" data-pass>Pass</button><a href="../readers/plate-engine/?plate='+p.id+'">Watch</a><button type="button" data-keep>Keep</button>';
    root.appendChild(stage); root.appendChild(meta); root.appendChild(actions);
    if(window.GalwaySubstrateViewport) window.GalwaySubstrateViewport.draw(stage);
    actions.querySelector('[data-pass]').onclick=function(){root.dataset.index=(index+1)%all.length;render();};
    actions.querySelector('[data-keep]').onclick=function(){save(p.id);root.dataset.index=(index+1)%all.length;render();};
  }
  function save(id){try{var k='galway-liked-plates',list=JSON.parse(localStorage.getItem(k)||'[]');if(list.indexOf(id)<0)list.push(id);localStorage.setItem(k,JSON.stringify(list));}catch(e){}}
  function init(){render();document.addEventListener('keydown',function(e){var root=qs('[data-plate-deck]');if(!root)return;var all=window.GalwayPlateRegistry.all();var i=Number(root.dataset.index||0);if(e.key==='ArrowLeft'||e.key==='ArrowRight'){root.dataset.index=(i+1)%all.length;render();}});}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
