(function(){
  function make(tag, attrs, parent){
    var node=document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.keys(attrs || {}).forEach(function(key){ node.setAttribute(key, attrs[key]); });
    parent.appendChild(node);
    return node;
  }

  function draw(svg){
    svg.setAttribute('viewBox','0 0 900 1100');
    svg.innerHTML='';
    make('rect',{width:900,height:1100,fill:'#02070c'},svg);

    var lines=make('g',{},svg);
    var top=make('g',{},svg);
    var unit=52, ox=450, oy=550;

    function point(q,r){
      var x=q+r/2;
      var y=r*Math.sqrt(3)/2;
      return {x:ox+unit*x,y:oy-unit*y,q:q,r:r};
    }

    function dist(p){ return Math.max(Math.abs(p.q),Math.abs(p.r),Math.abs(p.q+p.r)); }

    for(var q=-8;q<=8;q++){
      for(var r=-8;r<=8;r++){
        var p=point(q,r);
        [[1,0],[0,1],[1,-1]].forEach(function(step,i){
          var n=point(q+step[0],r+step[1]);
          if(dist(p)<=8 && dist(n)<=8){
            make('line',{x1:p.x,y1:p.y,x2:n.x,y2:n.y,stroke:['#aeefff','#9fffe0','#ffe08a'][i], 'stroke-width':1.1, 'stroke-opacity':0.18},lines);
          }
        });
      }
    }

    var boundary=[point(-1,0),point(-1,1),point(0,1),point(1,0),point(1,-1),point(0,-1)];
    for(var i=0;i<6;i++){
      var tri=[point(0,0),boundary[i],boundary[(i+1)%6]];
      make('polygon',{points:tri.map(function(p){return p.x+','+p.y;}).join(' '),fill:['#aeefff','#9fffe0','#ffe08a','#ff8ca4','#d7c8ff','#f3fbff'][i], 'fill-opacity':0.09, stroke:'#f3fbff', 'stroke-opacity':0.22, 'stroke-width':1.2},top);
    }

    make('polygon',{points:boundary.map(function(p){return p.x+','+p.y;}).join(' '),fill:'none',stroke:'#f3fbff','stroke-opacity':0.75,'stroke-width':3},top);
    make('circle',{cx:ox,cy:oy,r:unit,fill:'none',stroke:'#aeefff','stroke-opacity':0.58,'stroke-width':2},top);
    make('circle',{cx:ox,cy:oy,r:5,fill:'#ff8ca4'},top);

    if(!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      var start=performance.now();
      function pulse(now){
        var t=(now-start)/1000;
        top.setAttribute('transform','rotate('+(Math.sin(t*.35)*3)+' 450 550)');
        requestAnimationFrame(pulse);
      }
      requestAnimationFrame(pulse);
    }
  }

  function init(){ document.querySelectorAll('[data-field-preview]').forEach(draw); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
