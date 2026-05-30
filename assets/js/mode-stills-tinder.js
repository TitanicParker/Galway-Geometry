window.GalwayStillsTinder=(function(){
  function next(index){var a=window.GalwayStillsMode.assets[index%window.GalwayStillsMode.assets.length];return Object.assign({},a,{kicker:'Still candidate',tags:[a.id,a.section,a.printable?'printable':'gallery','lawful still']});}
  function render(svg,a,idx,thumb){window.GalwayStillsMode.render(svg,a,!!thumb);}
  function init(){window.GalwayTinderMode.init({mode:'stills',kicker:'Still candidate',next:next,render:render});}
  return{init:init};
})();
