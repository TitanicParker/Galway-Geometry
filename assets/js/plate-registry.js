window.GalwayPlateRegistry=(function(){
  function seq(a,b,c){return[
    {label:'field',view:'minimal',hold:1200},
    {label:'compose',view:a,hold:1800},
    {label:'relation',view:b,hold:3200},
    {label:'release',view:c,hold:1600}
  ];}
  var plates=[
    {id:'first-circle-six-stations',title:'First Circle, Six Stations',view:'field',unit:72,shells:5,caption:'The fixed radius selects six lawful stations around the first circle.',sequence:seq('minimal','field','minimal')},
    {id:'diameter-study',title:'Diameter Study',view:'diameters',unit:72,shells:5,caption:'Opposite stations expose the three diameter lines of the first circle.',sequence:seq('field','diameters','minimal')},
    {id:'triangle-catalogue',title:'Triangle Catalogue',view:'catalogue',unit:70,shells:5,caption:'The six boundary stations become a compact catalogue of triangle relations.',sequence:seq('diameters','catalogue','field')},
    {id:'wide-field',title:'Wide Field',view:'field',unit:54,shells:7,caption:'The local sixfold construction opens into the repeated triangular field.',sequence:seq('minimal','field','minimal')},
    {id:'quiet-unit',title:'Quiet Unit',view:'minimal',unit:86,shells:4,caption:'A quieter view of the first unit, six stations, and boundary relation.',sequence:seq('minimal','minimal','minimal')}
  ];
  function all(){return plates.slice();}
  function get(id){return plates.filter(function(p){return p.id===id;})[0]||plates[0];}
  return{all:all,get:get};
})();
