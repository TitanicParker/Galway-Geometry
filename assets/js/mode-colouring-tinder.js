window.GalwayColouringTinder=(function(){
  var REC,REN,designs=[];
  function ensure(){REC=window.GGColouringRecipes;REN=window.GGColouringRenderer;if(REC&&REN&&!designs.length)designs=REC.buildDesignCatalog(8);}
  function next(index){ensure();var d=designs[index%designs.length];return Object.assign({},d,{id:d.designId,title:d.recipe.title,kicker:'Colouring candidate',tags:[d.family,d.recipeId,'seed '+d.seed,'printable']});}
  function render(svg,d,idx,thumb){ensure();REN.renderTemplate(svg,d,{width:thumb?320:794,height:thumb?450:1123,includeCaption:false,mode:'print'});}
  function init(){window.GalwayTinderMode.init({mode:'colouring',kicker:'Colouring candidate',next:next,render:render});}
  return{init:init};
})();
