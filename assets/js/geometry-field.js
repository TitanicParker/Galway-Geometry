window.GalwayGeometryField=(function(){
  var SQRT3=Math.sqrt(3);
  function axial(q,r){return{q:q,r:r,x:q+r/2,y:r*SQRT3/2,id:q+','+r};}
  function dist(p){return Math.max(Math.abs(p.q),Math.abs(p.r),Math.abs(p.q+p.r));}
  function makeField(radius){
    var points=[],edges=[],cells=[];
    for(var q=-radius;q<=radius;q++) for(var r=-radius;r<=radius;r++){var p=axial(q,r);if(dist(p)<=radius)points.push(p);}
    var map={};points.forEach(function(p){map[p.id]=p;});
    points.forEach(function(p){[[1,0],[0,1],[1,-1]].forEach(function(s,i){var n=map[(p.q+s[0])+','+(p.r+s[1])];if(n)edges.push({a:p,b:n,family:i});});});
    points.forEach(function(p){var a=map[(p.q+1)+','+p.r],b=map[p.q+','+(p.r+1)],c=map[(p.q+1)+','+(p.r-1)];if(a&&b)cells.push({id:'u:'+p.id,points:[p,a,b],q:p.q,r:p.r});if(a&&c)cells.push({id:'d:'+p.id,points:[p,c,a],q:p.q,r:p.r});});
    return{radius:radius,points:points,edges:edges,cells:cells,map:map};
  }
  function projector(options){
    options=options||{};var ox=options.ox||450,oy=options.oy||450,unit=options.unit||32,rot=options.rotation||0;
    var c=Math.cos(rot),s=Math.sin(rot);
    return function(p){var xr=p.x*c-p.y*s,yr=p.x*s+p.y*c;return{x:ox+unit*xr,y:oy-unit*yr};};
  }
  function polygonPoints(points,project){return points.map(project).map(function(p){return p.x.toFixed(2)+','+p.y.toFixed(2);}).join(' ');}
  return{axial:axial,dist:dist,makeField:makeField,projector:projector,polygonPoints:polygonPoints};
})();
