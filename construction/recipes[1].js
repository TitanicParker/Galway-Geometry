(function(){
  "use strict";

  function recipe(id, title, family, template, complexity, params, description){
    return {
      id: id,
      title: title,
      family: family,
      template: template,
      complexity: complexity,
      description: description,
      printable: true,
      exportable: true,
      seedBase: params.seedBase || 1000,
      variantCount: params.variantCount || 8,
      orientation: params.orientation || "portrait",
      params: params
    };
  }

  var recipes = [];
  function add(r){ recipes.push(r); }

  /* First Circle Studies */
  add(recipe("FC-01","Origin Halo","First Circle Studies","firstCircleSeed","low",
    {seedBase:1101,rings:[1,2,3],stationStyle:"points",petalStyle:"none",centerDot:true},
    "First circle with three lawful rings and quiet station marks."));
  add(recipe("FC-02","Station Lantern","First Circle Studies","firstCircleSeed","low",
    {seedBase:1102,rings:[1,2],stationStyle:"small-circles",petalStyle:"wedges",centerDot:true},
    "The first circle with six station circles and six wedge petals."));
  add(recipe("FC-03","First Circle Archive","First Circle Studies","firstCircleSeed","medium",
    {seedBase:1103,rings:[1,2,3,4],stationStyle:"points",petalStyle:"nested-wedges",centerDot:true},
    "Nested lawful rings with alternating radial petals."));
  add(recipe("FC-04","Quiet Aperture","First Circle Studies","quietSheet","low",
    {seedBase:1104,base:"circle-hex",innerRings:1,outerHex:2,diameters:false},
    "A sparse study built from the first circle and a scaled hex relation."));
  add(recipe("FC-05","Compass Birth","First Circle Studies","firstCircleSeed","medium",
    {seedBase:1105,rings:[1,2,3],stationStyle:"lines",petalStyle:"radial-triangles",centerDot:true},
    "Origin circle, radial lines to stations, and lawful triangle petals."));
  add(recipe("FC-06","Origin Reliquary","First Circle Studies","firstCircleSeed","high",
    {seedBase:1106,rings:[1,2,3,4,5],stationStyle:"small-circles",petalStyle:"alternating-shells",centerDot:true},
    "A denser first-circle mandala with lawful shells and station echoes."));

  /* Six Station Rosettes */
  add(recipe("SS-01","Six Lamp Rosette","Six Station Rosettes","stationRosette","low",
    {seedBase:1201,stationRadius:1,connectRule:"hex",outerScales:[1],chordRule:"none"},
    "Six equal-radius station circles around the unit circle."));
  add(recipe("SS-02","Boundary Choir","Six Station Rosettes","stationRosette","medium",
    {seedBase:1202,stationRadius:1,connectRule:"hex",outerScales:[1,2],chordRule:"everySecond"},
    "Station circles with hex boundary and alternating chords."));
  add(recipe("SS-03","Sixfold Crown","Six Station Rosettes","stationRosette","medium",
    {seedBase:1203,stationRadius:1,connectRule:"hex",outerScales:[1,2,3],chordRule:"diameters"},
    "Station rosette with expanding scaled station sets."));
  add(recipe("SS-04","Opposition Wheel","Six Station Rosettes","stationRosette","low",
    {seedBase:1204,stationRadius:.6,connectRule:"diameters",outerScales:[1,2],chordRule:"diameters"},
    "A cleaner wheel emphasizing opposed stations."));
  add(recipe("SS-05","Station Garden","Six Station Rosettes","stationRosette","high",
    {seedBase:1205,stationRadius:1,connectRule:"hex",outerScales:[1,2,3],chordRule:"allSafe"},
    "Dense but lawful station circles, chords, and radial shell marks."));
  add(recipe("SS-06","Hex Boundary Flower","Six Station Rosettes","stationRosette","medium",
    {seedBase:1206,stationRadius:.85,connectRule:"hex",outerScales:[1,2],chordRule:"skipOne"},
    "A station flower contained by the hex boundary."));

  /* Ring Systems */
  add(recipe("RS-01","Ring Ledger","Ring Systems","ringMandala","low",
    {seedBase:1301,ringCount:4,polygonRings:[1,2,3],circleRings:[1],axis:false},
    "Three shell polygons and quiet circular measures."));
  add(recipe("RS-02","Concentric Law","Ring Systems","ringMandala","medium",
    {seedBase:1302,ringCount:6,polygonRings:[1,2,3,4],circleRings:[1,2],axis:true},
    "Layered lawful shell rings with axial measures."));
  add(recipe("RS-03","Shell Choir","Ring Systems","ringMandala","medium",
    {seedBase:1303,ringCount:5,polygonRings:[2,3,4,5],circleRings:[1],axis:false},
    "Outer shell polygons with an inner first-circle anchor."));
  add(recipe("RS-04","Halo Archive","Ring Systems","ringMandala","high",
    {seedBase:1304,ringCount:7,polygonRings:[1,2,3,4,5,6],circleRings:[1,2,3],axis:true},
    "A denser archive of lawful ring relations."));
  add(recipe("RS-05","Measured Crown","Ring Systems","ringMandala","high",
    {seedBase:1305,ringCount:8,polygonRings:[3,4,5,6,7],circleRings:[1,2],axis:true},
    "A crown-like ring plate built from outer shell relations."));
  add(recipe("RS-06","Quiet Ring Map","Ring Systems","ringMandala","low",
    {seedBase:1306,ringCount:3,polygonRings:[1,2],circleRings:[1],axis:false},
    "A minimal ring map for careful colouring."));

  /* Overlap Fields */
  add(recipe("OV-01","Vesica Six","Overlap Fields","overlapMandala","medium",
    {seedBase:1401,centerCircles:1,ringLevels:[1],radius:1,chords:false},
    "Seven equal-radius circles arranged around the origin."));
  add(recipe("OV-02","Overlap Choir","Overlap Fields","overlapMandala","medium",
    {seedBase:1402,centerCircles:1,ringLevels:[1,2],radius:1,chords:false},
    "Two lawful levels of equal-radius circles."));
  add(recipe("OV-03","Pearl Interference","Overlap Fields","overlapMandala","high",
    {seedBase:1403,centerCircles:1,ringLevels:[1,2,3],radius:1,chords:true},
    "Three levels of lawful equal-radius overlaps."));
  add(recipe("OV-04","Moon Shell","Overlap Fields","overlapMandala","low",
    {seedBase:1404,centerCircles:1,ringLevels:[1],radius:.7,chords:false},
    "A quieter overlap plate using reduced lawful radii."));
  add(recipe("OV-05","Station Sea","Overlap Fields","circleField","high",
    {seedBase:1405,density:4,radius:1,skipPattern:"mod4",overlayFirstCircle:true},
    "A page-filling field of equal-radius circles at lawful centres."));
  add(recipe("OV-06","Lunar Lattice","Overlap Fields","circleField","medium",
    {seedBase:1406,density:3,radius:.75,skipPattern:"none",overlayFirstCircle:true},
    "A calmer field of smaller lawful circles."));

  /* Hex Relations */
  add(recipe("HX-01","First Hex Crown","Hex Relations","hexCrown","low",
    {seedBase:1501,scales:[1,2],includeTriangles:false,includeStations:true},
    "The first lawful hex and one expanded shell."));
  add(recipe("HX-02","Nested Hex Reliquary","Hex Relations","hexCrown","medium",
    {seedBase:1502,scales:[1,2,3,4],includeTriangles:false,includeStations:true},
    "Nested hex shells for colouring depth."));
  add(recipe("HX-03","Hex Nave","Hex Relations","hexCrown","medium",
    {seedBase:1503,scales:[1,2,4],includeTriangles:true,includeStations:false},
    "Expanded hex shells with triangle buttresses."));
  add(recipe("HX-04","Broken Crown","Hex Relations","hexCrown","high",
    {seedBase:1504,scales:[2,3,4,5],includeTriangles:true,includeStations:true},
    "Outer crown shells with interior lawful construction."));
  add(recipe("HX-05","Hex Chamber","Hex Relations","hexCrown","low",
    {seedBase:1505,scales:[1,3],includeTriangles:false,includeStations:false},
    "A spare two-shell hex study."));
  add(recipe("HX-06","Six Wall","Hex Relations","hexCrown","high",
    {seedBase:1506,scales:[1,2,3,4,5],includeTriangles:true,includeStations:true},
    "A fuller hex plate suitable for extended colouring."));

  /* Triangle Tessellations */
  add(recipe("TR-01","Classroom Triangles","Triangle Tessellations","triangleField","low",
    {seedBase:1601,fieldRadius:7,pattern:"open",withCircle:false,orientation:"portrait"},
    "An open triangle grid for classrooms."));
  add(recipe("TR-02","Alternating Cells","Triangle Tessellations","triangleField","medium",
    {seedBase:1602,fieldRadius:8,pattern:"alternate",withCircle:true,orientation:"portrait"},
    "Alternating equilateral cells with a central anchor."));
  add(recipe("TR-03","Dense Tessellation","Triangle Tessellations","triangleField","high",
    {seedBase:1603,fieldRadius:10,pattern:"dense",withCircle:false,orientation:"landscape"},
    "A denser triangle field for immersive colouring."));
  add(recipe("TR-04","Poster Triangles","Triangle Tessellations","triangleField","medium",
    {seedBase:1604,fieldRadius:9,pattern:"stripe",withCircle:true,orientation:"landscape"},
    "Poster-like triangle bands across the page."));
  add(recipe("TR-05","Triangular Rain","Triangle Tessellations","triangleField","high",
    {seedBase:1605,fieldRadius:10,pattern:"mod5",withCircle:false,orientation:"portrait"},
    "Selected lawful triangle cells across a wider field."));
  add(recipe("TR-06","Quiet Cell Ground","Triangle Tessellations","triangleField","low",
    {seedBase:1606,fieldRadius:6,pattern:"everyThird",withCircle:true,orientation:"portrait"},
    "Sparse triangle cells held by a first-circle reference."));

  /* Chord and Diameter Systems */
  add(recipe("CD-01","Three Axes","Chord & Diameter Systems","diameterAxis","low",
    {seedBase:1701,rings:[1,2],extraChords:"none",stationMarks:true},
    "The three lawful diameters and two reference rings."));
  add(recipe("CD-02","Chord Harp","Chord & Diameter Systems","chordWheel","medium",
    {seedBase:1702,chordRule:"safeAll",scaleLevels:[1],includeHex:true},
    "A lawful harp of chords between six stations."));
  add(recipe("CD-03","Opposed Strings","Chord & Diameter Systems","diameterAxis","medium",
    {seedBase:1703,rings:[1,2,3],extraChords:"diameters",stationMarks:true},
    "Opposed stations emphasized inside ring measures."));
  add(recipe("CD-04","Legal Chord Net","Chord & Diameter Systems","chordWheel","high",
    {seedBase:1704,chordRule:"skipOne",scaleLevels:[1,2],includeHex:true},
    "Two lawful station scales connected by chosen chord families."));
  add(recipe("CD-05","Measured Wheel","Chord & Diameter Systems","chordWheel","low",
    {seedBase:1705,chordRule:"diameters",scaleLevels:[1],includeHex:false},
    "A simpler wheel built from diameters and radial spokes."));
  add(recipe("CD-06","Axis Archive","Chord & Diameter Systems","diameterAxis","high",
    {seedBase:1706,rings:[1,2,3,4],extraChords:"skipOne",stationMarks:true},
    "Dense lawful axis work for extended colouring sessions."));

  /* Cell Fields and Poster Sheets */
  add(recipe("PF-01","Cell Poster Quiet","Cell Poster Sheets","cellPoster","low",
    {seedBase:1801,fieldRadius:8,cellRule:"hexBands",overlay:"firstCircle",orientation:"portrait"},
    "Poster sheet with calm lawful cell bands."));
  add(recipe("PF-02","Field Broadside","Cell Poster Sheets","cellPoster","medium",
    {seedBase:1802,fieldRadius:10,cellRule:"checker",overlay:"rings",orientation:"landscape"},
    "A wide poster field built from cell distributions."));
  add(recipe("PF-03","Crown Poster","Cell Poster Sheets","cellPoster","medium",
    {seedBase:1803,fieldRadius:9,cellRule:"diagonal",overlay:"hex",orientation:"portrait"},
    "Poster cells under a hex crown overlay."));
  add(recipe("PF-04","Workshop Ground","Cell Poster Sheets","cellPoster","low",
    {seedBase:1804,fieldRadius:7,cellRule:"sparse",overlay:"none",orientation:"portrait"},
    "A simpler cell sheet for workshop colouring."));
  add(recipe("PF-05","Cathedral Field","Cell Poster Sheets","cellPoster","high",
    {seedBase:1805,fieldRadius:10,cellRule:"dense",overlay:"axes",orientation:"landscape"},
    "A larger lawful poster field with strong axial overlay."));
  add(recipe("PF-06","Monastic Sheet","Cell Poster Sheets","quietSheet","low",
    {seedBase:1806,base:"hex-rings",innerRings:2,outerHex:3,diameters:true},
    "A restrained page for careful line-based colouring."));

  function buildDesignCatalog(seedVariants){
    var variants = seedVariants || 8;
    var designs = [];
    recipes.forEach(function(r){
      var vCount = r.variantCount || variants;
      for(var i=0;i<vCount;i++){
        var seed = r.seedBase + i * 97 + 13;
        designs.push({
          designId: r.id + "-V" + (i + 1),
          recipeId: r.id,
          title: r.title + " · Variant " + (i + 1),
          family: r.family,
          complexity: r.complexity,
          seed: seed,
          recipe: r
        });
      }
    });
    return designs;
  }

  var api = {
    RECIPES: recipes,
    buildDesignCatalog: buildDesignCatalog,
    families: Array.from(new Set(recipes.map(function(r){ return r.family; }))),
    complexities: ["low","medium","high"]
  };

  window.GGColouringRecipes = api;
})();