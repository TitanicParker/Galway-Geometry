window.GalwayConstructionsTinder=(function(){
  var engine=function(){return window.GalwayConstructionsMode;};
  function next(index){var p=engine().plates[index%engine().plates.length];return Object.assign({},p,{kicker:'Construction candidate',tags:[p.id,p.family,'runtime','lawful substrate']});}
  function render(svg,p,idx,thumb){engine().drawCandidate?engine().drawCandidate(svg,p,thumb):engine()._drawForTinder(svg,p,thumb);}
  function init(){window.GalwayTinderMode.init({mode:'constructions',kicker:'Construction candidate',next:next,render:render});}
  return{init:init};
})();
