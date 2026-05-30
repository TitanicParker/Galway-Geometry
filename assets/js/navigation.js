(function(){
  function initNavigation(){
    document.querySelectorAll('a[href^="#"]').forEach(function(link){
      link.addEventListener('click',function(event){
        var id=link.getAttribute('href');
        if(!id || id==='#') return;
        var target=document.querySelector(id);
        if(!target) return;
        event.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      });
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initNavigation); else initNavigation();
})();
