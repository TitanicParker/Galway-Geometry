(function(){
  function startTypewriter(){
    var nodes=document.querySelectorAll('[data-typewriter]');
    var reduced=window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    nodes.forEach(function(node){
      var raw=node.getAttribute('data-lines') || '[]';
      var lines=[];
      try{ lines=JSON.parse(raw); }catch(e){ lines=[node.textContent.trim()]; }
      if(!lines.length) return;
      var target=node.querySelector('[data-typed-output]') || node;
      if(reduced){ target.innerHTML=lines.join('<br>'); return; }
      var line=0, ch=0;
      function step(){
        target.innerHTML=lines.slice(0,line).join('<br>')+(line?'<br>':'')+lines[line].slice(0,ch);
        ch++;
        if(ch<=lines[line].length){ window.setTimeout(step,26); }
        else{ line++; ch=0; if(line<lines.length) window.setTimeout(step,520); }
      }
      step();
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',startTypewriter); else startTypewriter();
})();
