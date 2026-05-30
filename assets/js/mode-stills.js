window.GalwayStillsMode=(function(){
  var NS='http://www.w3.org/2000/svg',SQRT3=Math.sqrt(3),TAU=Math.PI*2;
  var sections=['Tessellation Assets','Colouring Assets','Gallery Assets','Exhibition Assets','Daily Geometry Assets','Downloadable SVG Sheets','Renderer View Modes'];
  var palettes=[['#020916','#aeefff','#ff8ce8','#ffffff'],['#02040d','#73ffdb','#bd63ff','#f2ffff'],['#f7fbff','#081018','#26384a','#000000'],['#090403','#ffd36b','#ff794f','#fff0c2'],['#020806','#98ffbf','#29d6a5','#e8fff2'],['#070308','#ff4e70','#ffd36b','#ffe9ee'],['#090704','#ffe08a','#b9f7ff','#fff7d6'],['#03040b','#d6e3ff','#7df9ff','#ffffff']];
  var titleWords=['Hex Field','Circle Weather','Station Bloom','Triangle Sheet','Gold Poster','Lattice Net','Quiet Mandala','Daily Halo','Download Sheet','Cathedral Field','Overlap Study','Renderer Mode','Glass Ring','Coastal Grid','First Circle','Sixfold Still'];
  var assets=[];
  for(var i=0;i<96;i++){assets.push({id:'S-'+String(i+1).padStart(3,'0'),title:titleWords[i%titleWords.length],section:sections[i%sections.length],palette:palettes[i%palettes.length],style:i%16,printable:i%4===0});}
  function el(n,a,p){var x=document.createElementNS(NS,n);Object.keys(a||{}).forEach(function(k){x.setAttribute(k,a[k]);});if(p)p.appendChild(x);return x;}
  function P(unit,ox,oy,q,r,rot){var x=unit*(q+r/2),y=-unit*(r*SQRT3/2),c=Math.cos(rot||0),s=Math.sin(rot||0);return{x:ox+x*c-y*s,y:oy+x*s+y*c,q:q,r:r};}
  function dist(q,r){return Math.max(Math.abs(q),Math.abs(r),Math.abs(q+r));}
  function stations(){return[[-1,0],[-1,1],[0,1],[1,0],[1,-1],[0,-1]];}
  function path(pts,close){return pts.map(function(p,i){return(i?'L':'M')+p.x.toFixed(2)+' '+p.y.toFixed(2);}).join(' ')+(close?' Z':'');}
  function line(g,a,b,c,w,o){el('line',{x1:a.x,y1:a.y,x2:b.x,y2:b.y,stroke:c,'stroke-width':w||1,'stroke-opacity':o==null?1:o},g);}
  function circle(g,p,r,c,w,o,fill){el('circle',{cx:p.x,cy:p.y,r:r,fill:fill||'none',stroke:c,'stroke-width':w||1,'stroke-opacity':o==null?1:o},g);}
  function poly(g,pts,c,w,o,fill){el('path',{d:path(pts,true),fill:fill||'none',stroke:c,'stroke-width':w||1,'stroke-opacity':o==null?1:o},g);}
  function render(svg,asset,thumb){var W=thumb?320:(svg.clientWidth||innerWidth),H=thumb?210:(svg.clientHeight||innerHeight),unit=Math.min(W,H)/(thumb?7:(asset.style%3===0?5.8:8.4)),ox=W/2,oy=H/2,rot=(asset.style%6)*Math.PI/18,pal=asset.palette,print=asset.section==='Colouring Assets'||asset.section==='Downloadable SVG Sheets';svg.replaceChildren();svg.setAttribute('viewBox','0 0 '+W+' '+H);el('rect',{width:W,height:H,fill:print?'#fbfbf7':pal[0]},svg);var main=el('g',{},svg),S=function(q,r){return P(unit,ox,oy,q,r,rot);};
    var lineCol=print?'#111111':pal[1],alt=print?'#222222':pal[2],hi=print?'#111111':pal[3];
    if(!print){for(var q=-12;q<=12;q++)for(var r=-12;r<=12;r++){var a=S(q,r);[[1,0],[0,1],[1,-1]].forEach(function(v){var b=S(q+v[0],r+v[1]);if(a.x>-unit&&a.x<W+unit&&a.y>-unit&&a.y<H+unit)line(main,a,b,lineCol,.55,.10);});}}
    var st=stations().map(function(v){return S(v[0],v[1]);});
    if(asset.style<3){for(var n=1;n<=5;n++)circle(main,S(0,0),unit*n*.72,lineCol,thumb?.9:1.4,.22+.08*n);st.forEach(function(p){circle(main,p,unit,lineCol,thumb?.8:1.2,.55);});}
    else if(asset.style<6){for(var q=-6;q<=6;q++)for(var r=-6;r<=6;r++){if(dist(q,r)>6)continue;if((q+r+asset.style)%2===0)poly(main,[S(q,r),S(q+1,r),S(q,r+1)],lineCol,thumb?.6:1,.45,'none');}}
    else if(asset.style<9){[1,2,3,4].forEach(function(n){poly(main,stations().map(function(v){return S(v[0]*n,v[1]*n);}),n%2?lineCol:alt,thumb?.9:1.4,.55);});[[0,3],[1,4],[2,5]].forEach(function(pair){line(main,st[pair[0]],st[pair[1]],hi,thumb?.8:1.3,.55);});}
    else if(asset.style<12){for(var a=0;a<6;a++)for(var b=a+1;b<6;b++){if((b-a)%2===0||asset.style%2)line(main,st[a],st[b],lineCol,thumb?.7:1.1,.48);}circle(main,S(0,0),unit,lineCol,thumb?1:1.5,.8);}
    else {for(var n=0;n<4;n++){stations().forEach(function(v){circle(main,S(v[0]*n,v[1]*n),unit*(asset.style%2?1:.5),n%2?lineCol:alt,thumb?.7:1.1,.35);});}poly(main,stations().map(function(v){return S(v[0]*3,v[1]*3);}),hi,thumb?1:1.6,.65);}
    if(!thumb){el('text',{x:24,y:H-24,fill:print?'#555':pal[3],'font-size':12,'font-family':'ui-monospace,monospace','letter-spacing':1.2},svg).textContent=asset.id+' · '+asset.title+' · '+asset.section;}
  }
  function init(){var viewer=document.querySelector('#viewer'),grid=document.querySelector('#grid'),title=document.querySelector('#title'),meta=document.querySelector('#meta'),filter=document.querySelector('#sectionFilter'),idx=0,current=assets.slice();function set(i){idx=i;var a=current[idx%current.length];render(viewer,a,false);if(title)title.textContent=a.title;if(meta)meta.textContent=a.id+' · '+a.section+(a.printable?' · printable':'');Array.from(grid.children).forEach(function(c,k){c.classList.toggle('active',k===idx);});}
    function build(list){current=list.length?list:assets.slice();grid.innerHTML='';current.forEach(function(a,i){var card=document.createElement('button');card.className='still-card';var s=document.createElementNS(NS,'svg');card.appendChild(s);var label=document.createElement('span');label.textContent=a.id;card.appendChild(label);card.onclick=function(){set(i);};grid.appendChild(card);render(s,a,true);});set(0);}
    if(filter){filter.innerHTML='<option value="all">All sections</option>'+sections.map(function(s){return'<option>'+s+'</option>';}).join('');filter.onchange=function(){var v=filter.value;build(v==='all'?assets:assets.filter(function(a){return a.section===v;}));};}
    document.querySelector('#next').onclick=function(){set((idx+1)%current.length);};document.querySelector('#prev').onclick=function(){set((idx+current.length-1)%current.length);};document.querySelector('#download').onclick=function(){var data=new XMLSerializer().serializeToString(viewer);var a=document.createElement('a');a.href='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(data);a.download=(current[idx].id||'galway-still')+'.svg';document.body.appendChild(a);a.click();a.remove();};build(assets);}
  return{init:init,assets:assets,render:render};
})();
