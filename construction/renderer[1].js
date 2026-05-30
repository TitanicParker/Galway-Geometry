(function(){
  "use strict";

  var NS = "http://www.w3.org/2000/svg";
  var SQRT3 = Math.sqrt(3);

  function create(tag, attrs, parent){
    var el = document.createElementNS(NS, tag);
    Object.keys(attrs || {}).forEach(function(k){
      if(attrs[k] !== undefined && attrs[k] !== null){
        el.setAttribute(k, attrs[k]);
      }
    });
    if(parent){ parent.appendChild(el); }
    return el;
  }

  function mulberry32(a){
    return function(){
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function substrate(width, height, unit, originX, originY, rotation){
    var ox = originX == null ? width / 2 : originX;
    var oy = originY == null ? height / 2 : originY;
    var c = Math.cos(rotation || 0);
    var s = Math.sin(rotation || 0);

    function P(q, r){
      var x = unit * (q + r / 2);
      var y = -unit * (r * SQRT3 / 2);
      return {
        x: ox + x * c - y * s,
        y: oy + x * s + y * c,
        q: q,
        r: r
      };
    }

    return {
      width: width,
      height: height,
      unit: unit,
      ox: ox,
      oy: oy,
      P: P,
      stationsQR: [[-1,0],[-1,1],[0,1],[1,0],[1,-1],[0,-1]],
      stations: function(){
        return this.stationsQR.map(function(v){ return P(v[0], v[1]); });
      }
    };
  }

  function axialDist(q, r){
    return Math.max(Math.abs(q), Math.abs(r), Math.abs(q + r));
  }

  function ring(n){
    if(n === 0){ return [[0,0]]; }
    var dirs = [[1,0],[0,1],[-1,1],[-1,0],[0,-1],[1,-1]];
    var out = [];
    var q = -n, r = 0;
    for(var side = 0; side < 6; side++){
      for(var i = 0; i < n; i++){
        out.push([q, r]);
        q += dirs[side][0];
        r += dirs[side][1];
      }
    }
    return out;
  }

  function triCell(S, q, r, up){
    var a = S.P(q, r);
    var b = S.P(q + 1, r);
    var c = S.P(q, r + 1);
    var d = S.P(q + 1, r - 1);
    return up ? [a,b,c] : [a,d,b];
  }

  function hexPoints(S, q, r, scale){
    var s = scale || 1;
    return [[-1,0],[-1,1],[0,1],[1,0],[1,-1],[0,-1]].map(function(v){
      return S.P(q + v[0] * s, r + v[1] * s);
    });
  }

  function visiblePoints(S, margin){
    var range = Math.ceil(Math.max(S.width, S.height) / S.unit * 1.45) + (margin || 2);
    var out = [];
    for(var q = -range; q <= range; q++){
      for(var r = -range; r <= range; r++){
        var p = S.P(q, r);
        if(p.x > -S.unit * 2 && p.x < S.width + S.unit * 2 && p.y > -S.unit * 2 && p.y < S.height + S.unit * 2){
          out.push(p);
        }
      }
    }
    return out;
  }

  function pathData(points, close){
    return points.map(function(p, i){
      return (i ? "L" : "M") + p.x.toFixed(3) + " " + p.y.toFixed(3);
    }).join(" ") + (close ? " Z" : "");
  }

  function drawPath(parent, points, attrs, close){
    return create("path", Object.assign({ d: pathData(points, close) }, attrs || {}), parent);
  }

  function drawCircle(parent, p, r, attrs){
    return create("circle", Object.assign({ cx: p.x, cy: p.y, r: r }, attrs || {}), parent);
  }

  function drawLine(parent, a, b, attrs){
    return create("line", Object.assign({ x1: a.x, y1: a.y, x2: b.x, y2: b.y }, attrs || {}), parent);
  }

  function drawPoly(parent, points, attrs){
    return create("polygon", Object.assign({
      points: points.map(function(p){ return p.x.toFixed(3) + "," + p.y.toFixed(3); }).join(" ")
    }, attrs || {}), parent);
  }

  function sheetPalette(mode){
    if(mode === "preview"){
      return { bg:"#ffffff", line:"#101010", accent:"#4a4a4a", faint:"#8e8e8e" };
    }
    return { bg:"#ffffff", line:"#111111", accent:"#222222", faint:"#808080" };
  }

  function prepareSVG(svg, width, height){
    svg.replaceChildren();
    svg.setAttribute("xmlns", NS);
    svg.setAttribute("viewBox", "0 0 " + width + " " + height);
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("aria-label", "Galway Geometry colouring design");
  }

  function baseSheet(svg, width, height, palette, meta){
    create("rect", { x:0, y:0, width:width, height:height, fill:palette.bg }, svg);
    create("rect", { x:18, y:18, width:width - 36, height:height - 36, fill:"none", stroke:"#d8d8d8", "stroke-width":1 }, svg);
    if(meta && meta.caption){
      create("text", {
        x:32, y:height - 22, fill:"#5a5a5a", "font-size":"11", "font-family":"ui-monospace, monospace", "letter-spacing":"1.1"
      }, svg).textContent = meta.caption;
    }
  }

  function maybeRotateBySeed(seed){
    var options = [0, Math.PI / 6, Math.PI / 3];
    return options[seed % options.length];
  }

  function lineWidth(recipe){
    return recipe.complexity === "high" ? 0.9 : recipe.complexity === "medium" ? 1 : 1.1;
  }

  function drawStations(parent, S, palette, size){
    S.stations().forEach(function(p){
      drawCircle(parent, p, size || S.unit * 0.04, { fill:"none", stroke:palette.line, "stroke-width":0.9 });
    });
  }

  function drawDiameters(parent, S, palette, w){
    var st = S.stations();
    [[0,3],[1,4],[2,5]].forEach(function(pair){
      drawLine(parent, st[pair[0]], st[pair[1]], { stroke:palette.line, "stroke-width":w || 1 });
    });
  }

  function drawHexShell(parent, S, palette, scale, w){
    drawPath(parent, hexPoints(S, 0, 0, scale), { fill:"none", stroke:palette.line, "stroke-width":w || 1 }, true);
  }

  function drawRingPolygon(parent, S, palette, n, w){
    var pts = ring(n).map(function(v){ return S.P(v[0], v[1]); });
    drawPath(parent, pts, { fill:"none", stroke:palette.line, "stroke-width":w || 1 }, true);
  }

  function drawRingCircles(parent, S, palette, levels, radius, w){
    levels.forEach(function(level){
      ring(level).forEach(function(v){
        drawCircle(parent, S.P(v[0], v[1]), S.unit * (radius || 1), {
          fill:"none", stroke:palette.line, "stroke-width":w || 1
        });
      });
    });
  }

  function drawFirstCircle(parent, S, palette, w){
    drawCircle(parent, S.P(0,0), S.unit, { fill:"none", stroke:palette.line, "stroke-width":w || 1.1 });
  }

  function patternOpen(q, r, d){ return (q + r + d) % 2 === 0; }
  function patternAlternate(q, r){ return (q + r) % 2 === 0; }
  function patternDense(){ return true; }
  function patternStripe(q, r){ return Math.abs(q - r) % 3 !== 1; }
  function patternMod5(q, r){ return (q + 2 * r) % 5 === 0; }
  function patternEveryThird(q, r){ return (q - r) % 3 === 0; }
  function cellRule(name){
    if(name === "open"){ return patternOpen; }
    if(name === "alternate"){ return patternAlternate; }
    if(name === "dense"){ return patternDense; }
    if(name === "stripe"){ return patternStripe; }
    if(name === "mod5"){ return patternMod5; }
    if(name === "everyThird"){ return patternEveryThird; }
    if(name === "hexBands"){ return function(q, r, d){ return d % 2 === 0; }; }
    if(name === "checker"){ return function(q, r){ return (q + r) % 2 === 0; }; }
    if(name === "diagonal"){ return function(q, r){ return (q - r + 30) % 4 !== 1; }; }
    if(name === "sparse"){ return function(q, r){ return (q + 2 * r + 30) % 5 === 0; }; }
    return patternAlternate;
  }

  function chordCondition(name, a, b){
    if(name === "none"){ return false; }
    if(name === "diameters"){ return (b - a + 6) % 6 === 3; }
    if(name === "everySecond"){ return (b - a + 6) % 6 === 2; }
    if(name === "skipOne"){ return (b - a + 6) % 6 === 2 || (b - a + 6) % 6 === 4; }
    if(name === "allSafe"){ return (b - a + 6) % 6 !== 1 && (b - a + 6) % 6 !== 5; }
    if(name === "safeAll"){ return a < b && (b - a + 6) % 6 !== 1 && (b - a + 6) % 6 !== 5; }
    return false;
  }

  function drawChords(parent, points, palette, ruleName, w){
    for(var a = 0; a < points.length; a++){
      for(var b = a + 1; b < points.length; b++){
        if(chordCondition(ruleName, a, b)){
          drawLine(parent, points[a], points[b], { stroke:palette.line, "stroke-width":w || 0.95 });
        }
      }
    }
  }

  function drawLatticeField(parent, S, palette, options){
    options = options || {};
    var pts = visiblePoints(S, 3);
    pts.forEach(function(p){
      [[1,0],[0,1],[1,-1]].forEach(function(v){
        var b = S.P(p.q + v[0], p.r + v[1]);
        if(b.x > -S.unit * 2 && b.x < S.width + S.unit * 2 && b.y > -S.unit * 2 && b.y < S.height + S.unit * 2){
          drawLine(parent, p, b, { stroke:palette.faint, "stroke-width":options.w || 0.55 });
        }
      });
    });
  }

  function renderTemplate(svg, design, options){
    var recipe = design.recipe;
    var width = (options && options.width) || 794;
    var height = (options && options.height) || 1123;
    var includeCaption = !!(options && options.includeCaption);
    var palette = sheetPalette((options && options.mode) || "preview");
    prepareSVG(svg, width, height);
    baseSheet(svg, width, height, palette, includeCaption ? {
      caption: design.designId + " · " + recipe.title + " · " + recipe.family
    } : null);

    var rand = mulberry32(design.seed);
    var portrait = recipe.orientation !== "landscape";
    var pageW = width - 120;
    var pageH = height - 120;
    var rotation = maybeRotateBySeed(design.seed);
    if(recipe.template === "triangleField" && recipe.orientation === "landscape"){ rotation = 0; }
    if(recipe.template === "cellPoster" && recipe.orientation === "landscape"){ rotation = 0; }

    var unit = portrait ? Math.min(pageW, pageH) * 0.075 : Math.min(pageW, pageH) * 0.078;
    if(recipe.template === "triangleField"){ unit = Math.min(pageW, pageH) * (recipe.complexity === "high" ? 0.048 : 0.058); }
    if(recipe.template === "cellPoster"){ unit = Math.min(pageW, pageH) * (recipe.complexity === "high" ? 0.05 : 0.058); }
    if(recipe.template === "circleField"){ unit = Math.min(pageW, pageH) * 0.068; }
    if(recipe.template === "quietSheet"){ unit = Math.min(pageW, pageH) * 0.11; }

    var S = substrate(width, height, unit, width / 2, height / 2, rotation);
    var main = create("g", {}, svg);
    var lw = lineWidth(recipe);

    switch(recipe.template){

      case "firstCircleSeed":
        drawFirstCircle(main, S, palette, lw + 0.1);
        (recipe.params.rings || []).forEach(function(n){
          drawCircle(main, S.P(0,0), S.unit * n, { fill:"none", stroke:palette.line, "stroke-width":lw });
        });
        if(recipe.params.stationStyle === "points"){ drawStations(main, S, palette, S.unit * 0.03); }
        if(recipe.params.stationStyle === "small-circles"){
          S.stations().forEach(function(p){ drawCircle(main, p, S.unit * 0.2, { fill:"none", stroke:palette.line, "stroke-width":lw }); });
        }
        if(recipe.params.stationStyle === "lines"){
          S.stations().forEach(function(p){ drawLine(main, S.P(0,0), p, { stroke:palette.line, "stroke-width":lw }); });
        }
        if(recipe.params.centerDot){
          drawCircle(main, S.P(0,0), S.unit * 0.04, { fill:palette.line, stroke:"none" });
        }
        var st = S.stations();
        if(recipe.params.petalStyle === "wedges"){
          for(var i = 0; i < 6; i++){
            drawPoly(main, [S.P(0,0), st[i], st[(i + 1) % 6]], { fill:"none", stroke:palette.line, "stroke-width":lw });
          }
        }
        if(recipe.params.petalStyle === "nested-wedges" || recipe.params.petalStyle === "radial-triangles" || recipe.params.petalStyle === "alternating-shells"){
          var scales = recipe.params.petalStyle === "alternating-shells" ? [1,2,3] : [1,2];
          scales.forEach(function(scale, si){
            for(var j = 0; j < 6; j++){
              var a = S.P(S.stationsQR[j][0] * scale, S.stationsQR[j][1] * scale);
              var b = S.P(S.stationsQR[(j + 1) % 6][0] * scale, S.stationsQR[(j + 1) % 6][1] * scale);
              drawPoly(main, [S.P(0,0), a, b], { fill:"none", stroke:palette.line, "stroke-width":si === 0 ? lw : lw * 0.88 });
            }
          });
        }
        break;

      case "stationRosette":
        drawFirstCircle(main, S, palette, lw);
        var baseStations = S.stations();
        baseStations.forEach(function(p){
          drawCircle(main, p, S.unit * recipe.params.stationRadius, { fill:"none", stroke:palette.line, "stroke-width":lw });
        });
        if(recipe.params.connectRule === "hex"){
          drawPath(main, baseStations, { fill:"none", stroke:palette.line, "stroke-width":lw }, true);
        } else if(recipe.params.connectRule === "diameters"){
          drawDiameters(main, S, palette, lw);
        }
        (recipe.params.outerScales || []).forEach(function(scale){
          if(scale === 1){ return; }
          var pts = S.stationsQR.map(function(v){ return S.P(v[0] * scale, v[1] * scale); });
          drawPath(main, pts, { fill:"none", stroke:palette.line, "stroke-width":lw * 0.92 }, true);
          pts.forEach(function(p){ drawCircle(main, p, S.unit * 0.16, { fill:"none", stroke:palette.line, "stroke-width":lw * 0.85 }); });
        });
        drawChords(main, baseStations, palette, recipe.params.chordRule, lw * 0.88);
        break;

      case "ringMandala":
        (recipe.params.circleRings || []).forEach(function(rn){
          drawCircle(main, S.P(0,0), S.unit * rn, { fill:"none", stroke:palette.line, "stroke-width":lw });
        });
        (recipe.params.polygonRings || []).forEach(function(rn){
          drawRingPolygon(main, S, palette, rn, lw);
        });
        if(recipe.params.axis){ drawDiameters(main, S, palette, lw * 0.95); }
        break;

      case "overlapMandala":
        if(recipe.params.centerCircles){
          drawCircle(main, S.P(0,0), S.unit * recipe.params.radius, { fill:"none", stroke:palette.line, "stroke-width":lw });
        }
        drawRingCircles(main, S, palette, recipe.params.ringLevels || [1], recipe.params.radius, lw);
        if(recipe.params.chords){ drawChords(main, S.stations(), palette, "skipOne", lw * 0.85); }
        break;

      case "circleField":
        drawLatticeField(main, S, palette, { w:0.45 });
        visiblePoints(S, 2).forEach(function(p){
          var keep = true;
          if(recipe.params.skipPattern === "mod4"){ keep = (p.q - p.r + 100) % 4 !== 1; }
          if(recipe.params.skipPattern === "none"){ keep = true; }
          if(axialDist(p.q, p.r) > (recipe.params.density || 3) + 2){ keep = false; }
          if(keep){
            drawCircle(main, p, S.unit * (recipe.params.radius || 1), { fill:"none", stroke:palette.line, "stroke-width":lw * 0.88 });
          }
        });
        if(recipe.params.overlayFirstCircle){ drawFirstCircle(main, S, palette, lw); }
        break;

      case "hexCrown":
        (recipe.params.scales || []).forEach(function(scale){
          drawHexShell(main, S, palette, scale, lw);
        });
        if(recipe.params.includeTriangles){
          var scales = recipe.params.scales || [1,2];
          scales.forEach(function(scale){
            for(var i = 0; i < 6; i++){
              var a = S.P(S.stationsQR[i][0] * scale, S.stationsQR[i][1] * scale);
              var b = S.P(S.stationsQR[(i + 1) % 6][0] * scale, S.stationsQR[(i + 1) % 6][1] * scale);
              drawPoly(main, [S.P(0,0), a, b], { fill:"none", stroke:palette.line, "stroke-width":lw * 0.86 });
            }
          });
        }
        if(recipe.params.includeStations){ drawStations(main, S, palette, S.unit * 0.03); }
        break;

      case "triangleField":
        var rule = cellRule(recipe.params.pattern);
        var fieldR = recipe.params.fieldRadius || 8;
        for(var q = -fieldR; q <= fieldR; q++){
          for(var r = -fieldR; r <= fieldR; r++){
            var d = axialDist(q, r);
            if(d > fieldR){ continue; }
            if(!rule(q, r, d)){ continue; }
            drawPoly(main, triCell(S, q, r, true), { fill:"none", stroke:palette.line, "stroke-width":lw * 0.82 });
            drawPoly(main, triCell(S, q, r, false), { fill:"none", stroke:palette.line, "stroke-width":lw * 0.82 });
          }
        }
        if(recipe.params.withCircle){ drawFirstCircle(main, S, palette, lw); }
        break;

      case "diameterAxis":
        (recipe.params.rings || []).forEach(function(rn){
          drawCircle(main, S.P(0,0), S.unit * rn, { fill:"none", stroke:palette.line, "stroke-width":lw });
        });
        drawDiameters(main, S, palette, lw);
        if(recipe.params.extraChords === "diameters"){
          drawChords(main, S.stations(), palette, "diameters", lw * 0.9);
        }
        if(recipe.params.extraChords === "skipOne"){
          drawChords(main, S.stations(), palette, "skipOne", lw * 0.82);
        }
        if(recipe.params.stationMarks){ drawStations(main, S, palette, S.unit * 0.03); }
        break;

      case "chordWheel":
        var levels = recipe.params.scaleLevels || [1];
        levels.forEach(function(scale){
          var pts = S.stationsQR.map(function(v){ return S.P(v[0] * scale, v[1] * scale); });
          drawPath(main, pts, { fill:"none", stroke:palette.line, "stroke-width":lw * 0.88 }, true);
          drawChords(main, pts, palette, recipe.params.chordRule, lw * 0.84);
        });
        if(recipe.params.includeHex){ drawHexShell(main, S, palette, 1, lw); }
        break;

      case "cellPoster":
        var cRule = cellRule(recipe.params.cellRule);
        var fr = recipe.params.fieldRadius || 8;
        for(var cq = -fr; cq <= fr; cq++){
          for(var cr = -fr; cr <= fr; cr++){
            var cd = axialDist(cq, cr);
            if(cd > fr){ continue; }
            if(!cRule(cq, cr, cd)){ continue; }
            drawPoly(main, triCell(S, cq, cr, (cq + cr) % 2 === 0), { fill:"none", stroke:palette.line, "stroke-width":lw * 0.78 });
          }
        }
        if(recipe.params.overlay === "firstCircle"){ drawFirstCircle(main, S, palette, lw); }
        if(recipe.params.overlay === "rings"){ drawCircle(main, S.P(0,0), S.unit * 2, { fill:"none", stroke:palette.line, "stroke-width":lw }); drawCircle(main, S.P(0,0), S.unit * 4, { fill:"none", stroke:palette.line, "stroke-width":lw }); }
        if(recipe.params.overlay === "hex"){ drawHexShell(main, S, palette, 2, lw); drawHexShell(main, S, palette, 4, lw); }
        if(recipe.params.overlay === "axes"){ drawDiameters(main, S, palette, lw * 0.92); }
        break;

      case "quietSheet":
        if(recipe.params.base === "circle-hex"){
          drawFirstCircle(main, S, palette, lw);
          for(var ir = 1; ir <= (recipe.params.innerRings || 1); ir++){
            drawCircle(main, S.P(0,0), S.unit * ir, { fill:"none", stroke:palette.line, "stroke-width":lw });
          }
          drawHexShell(main, S, palette, recipe.params.outerHex || 2, lw);
        }
        if(recipe.params.base === "hex-rings"){
          drawHexShell(main, S, palette, 1, lw);
          drawHexShell(main, S, palette, recipe.params.outerHex || 3, lw);
          for(var hr = 1; hr <= (recipe.params.innerRings || 1); hr++){
            drawCircle(main, S.P(0,0), S.unit * hr, { fill:"none", stroke:palette.line, "stroke-width":lw });
          }
        }
        if(recipe.params.diameters){ drawDiameters(main, S, palette, lw * 0.92); }
        break;
    }

    return svg;
  }

  function svgString(design, options){
    var svg = document.createElementNS(NS, "svg");
    renderTemplate(svg, design, options || {});
    return new XMLSerializer().serializeToString(svg);
  }

  function downloadSVG(design, options){
    var serialized = svgString(design, options || {});
    var href = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(serialized);
    var a = document.createElement("a");
    a.href = href;
    a.download = (design.designId || "galway-colouring") + ".svg";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function printSVG(design, options){
    var serialized = svgString(design, options || {});
    var win = window.open("", "_blank");
    if(!win){ return; }
    win.document.write("<!doctype html><html><head><title>" + design.designId + "</title><style>html,body{margin:0;background:#fff}svg{display:block;width:100%;height:auto}</style></head><body>" + serialized + "</body></html>");
    win.document.close();
    win.focus();
    setTimeout(function(){ win.print(); }, 180);
  }

  window.GGColouringRenderer = {
    renderTemplate: renderTemplate,
    svgString: svgString,
    downloadSVG: downloadSVG,
    printSVG: printSVG
  };
})();