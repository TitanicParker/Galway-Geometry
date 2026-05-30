(function(){
  var NS='http://www.w3.org/2000/svg';
  var G=function(){return window.GalwayGeometryField;};
  function make(tag,attrs,parent){
    var node=document.createElementNS(NS,tag);
    Object.keys(attrs||{}).forEach(function(key){node.setAttribute(key,attrs[key]);});
    parent.appendChild(node);
    return node;
  }
  function draw(viewport){
    if(!G()) return;
    var width=Number(viewport.dataset.width||900);
    var height=Number(viewport.dataset.height||420);
    var radius=Number(viewport.dataset.shells||5);
    var unit=Number(viewport.dataset.unit||72);
    var mode=viewport.dataset.view||'first-circle';
    var svg=make('svg',{viewBox:'0 0 '+width+' '+height,role:'img','aria-label':viewport.getAttribute('aria-label')||'Lawful Galway Geometry substrate viewport'},viewport);
    render(svg,{width:width,height:height,radius:radius,unit:unit,mode:mode});
  }
  function render(svg,opt){
    var GF=G(), field=GF.makeField(opt.radius), project=GF.projector({ox:opt.width/2,oy:opt.height/2,unit:opt.unit});
    make('rect',{width:opt.width,height:opt.height,fill:'#02070c'},svg);
    drawField(svg,field,project);
    drawFirstCircle(svg,project,opt.unit,opt.mode);
  }
  function drawField(svg,field,project){
    var group=make('g',{fill:'none','stroke-linecap':'round'},svg);
    var colors=['#aeefff','#9fffe0','#ffe08a'];
    field.edges.forEach(function(edge){var a=project(edge.a),b=project(edge.b);make('line',{x1:a.x,y1:a.y,x2:b.x,y2:b.y,stroke:colors[edge.family],'stroke-width':1.1,'stroke-opacity':0.2},group);});
  }
  function drawFirstCircle(svg,project,unit,mode){
    var GF=G(), O=GF.station({q:0,r:0},'O'), boundary=GF.boundary({q:0,r:0});
    var g=make('g',{fill:'none','stroke-linecap':'round','stroke-linejoin':'round'},svg);
    var o=project(O);
    make('circle',{cx:o.x,cy:o.y,r:unit,stroke:'#f3fbff','stroke-width':3,'stroke-opacity':0.78},g);
    if(mode!=='minimal') boundary.forEach(function(p){var c=project(p);make('circle',{cx:c.x,cy:c.y,r:unit,stroke:'#aeefff','stroke-width':1.5,'stroke-opacity':0.22},g);});
    for(var i=0;i<6;i++){var tri=[O,boundary[i],boundary[(i+1)%6]];make('polygon',{points:GF.polygonPoints(tri,project),fill:['#aeefff','#9fffe0','#ffe08a','#ff8ca4','#d7c8ff','#f3fbff'][i],'fill-opacity':0.075,stroke:'#f3fbff','stroke-opacity':0.18,'stroke-width':1.1},g);}
    make('polygon',{points:GF.polygonPoints(boundary,project),stroke:'#9fffe0','stroke-width':3,'stroke-opacity':0.82},g);
    if(mode==='diameters'||mode==='catalogue'||mode==='field')[[0,3],[1,4],[2,5]].forEach(function(pair,i){var a=project(boundary[pair[0]]),b=project(boundary[pair[1]]);make('line',{x1:a.x,y1:a.y,x2:b.x,y2:b.y,stroke:['#aeefff','#ffe08a','#ff8ca4'][i],'stroke-width':3,'stroke-opacity':0.66},g);});
    make('circle',{cx:o.x,cy:o.y,r:5.5,fill:'#ff8ca4',stroke:'none'},g);
    boundary.forEach(function(p){var c=project(p);make('circle',{cx:c.x,cy:c.y,r:4.2,fill:'#f3fbff',stroke:'none',opacity:0.92},g);});
  }
  function init(){document.querySelectorAll('[data-substrate-viewport]').forEach(draw);}
  window.GalwaySubstrateViewport={draw:draw,render:render};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
