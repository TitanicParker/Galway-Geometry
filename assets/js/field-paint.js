window.GalwayFieldPaint=(function(){
  function make(tag,attrs,parent){var n=document.createElementNS('http://www.w3.org/2000/svg',tag);Object.keys(attrs||{}).forEach(function(k){n.setAttribute(k,attrs[k]);});parent.appendChild(n);return n;}
  function download(filename,text,type){var blob=new Blob([text],{type:type||'image/svg+xml'});var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(a.href);},500);}
  function init(selector){
    var root=document.querySelector(selector||'[data-field-paint]'); if(!root) return;
    var svg=root.querySelector('svg'); var palette=root.querySelector('[data-palette]'); var clear=root.querySelector('[data-clear]'); var save=root.querySelector('[data-save-svg]');
    var field=GalwayGeometryField.makeField(8); var project=GalwayGeometryField.projector({ox:450,oy:450,unit:34,rotation:-Math.PI/2});
    var active='#9fffe0'; var painted={}; svg.setAttribute('viewBox','0 0 900 900'); svg.innerHTML=''; make('rect',{width:900,height:900,fill:'#02070c'},svg);
    var grid=make('g',{},svg),cells=make('g',{},svg);
    field.edges.forEach(function(e){var a=project(e.a),b=project(e.b);make('line',{x1:a.x,y1:a.y,x2:b.x,y2:b.y,stroke:'#f3fbff','stroke-opacity':.16,'stroke-width':1},grid);});
    field.cells.forEach(function(cell){var poly=make('polygon',{points:GalwayGeometryField.polygonPoints(cell.points,project),fill:'transparent',stroke:'#f3fbff','stroke-opacity':.08,'stroke-width':.8,'data-cell':cell.id},cells);poly.addEventListener('pointerdown',function(){painted[cell.id]=active;poly.setAttribute('fill',active);poly.setAttribute('fill-opacity','.82');});});
    if(palette) palette.querySelectorAll('[data-colour]').forEach(function(btn){btn.style.background=btn.getAttribute('data-colour');btn.addEventListener('click',function(){active=btn.getAttribute('data-colour');});});
    if(clear) clear.addEventListener('click',function(){painted={};cells.querySelectorAll('polygon').forEach(function(p){p.setAttribute('fill','transparent');p.removeAttribute('fill-opacity');});});
    if(save) save.addEventListener('click',function(){download('galway-field-paint.svg',new XMLSerializer().serializeToString(svg));});
  }
  return{init:init};
})();
document.addEventListener('DOMContentLoaded',function(){GalwayFieldPaint.init();});
