(function(b){b.color={};b.color.make=function(d,e,g,f){var c={};c.r=d||0;c.g=e||0;c.b=g||0;c.a=f!=null?f:1;c.add=function(h,i){for(var j=0;j<h.length;++j){c[h.charAt(j)]+=i}return c.normalize()};c.scale=function(h,i){for(var j=0;j<h.length;++j){c[h.charAt(j)]*=i}return c.normalize()};c.toString=function(){if(c.a>=1){return"rgb("+[c.r,c.g,c.b].join(",")+")"}else{return"rgba("+[c.r,c.g,c.b,c.a].join(",")+")"}};c.normalize=function(){function h(j,i,k){return i<j?j:(i>k?k:i)}c.r=h(0,parseInt(c.r),255);c.g=h(0,parseInt(c.g),255);c.b=h(0,parseInt(c.b),255);c.a=h(0,c.a,1);return c};c.clone=function(){return b.color.make(c.r,c.b,c.g,c.a)};return c.normalize()};b.color.extract=function(d,e){var c;do{c=d.css(e).toLowerCase();if(c!=""&&c!="transparent"){break}d=d.parent()}while(!b.nodeName(d.get(0),"body"));if(c=="rgba(0, 0, 0, 0)"){c="transparent"}return b.color.parse(c)};b.color.parse=function(c){var d,f=b.color.make;if(d=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c)){return f(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10))}if(d=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c)){return f(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10),parseFloat(d[4]))}if(d=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c)){return f(parseFloat(d[1])*2.55,parseFloat(d[2])*2.55,parseFloat(d[3])*2.55)}if(d=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c)){return f(parseFloat(d[1])*2.55,parseFloat(d[2])*2.55,parseFloat(d[3])*2.55,parseFloat(d[4]))}if(d=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c)){return f(parseInt(d[1],16),parseInt(d[2],16),parseInt(d[3],16))}if(d=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c)){return f(parseInt(d[1]+d[1],16),parseInt(d[2]+d[2],16),parseInt(d[3]+d[3],16))}var e=b.trim(c).toLowerCase();if(e=="transparent"){return f(255,255,255,0)}else{d=a[e]||[0,0,0];return f(d[0],d[1],d[2])}};var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);(function(e){var d=Object.prototype.hasOwnProperty;function a(h,g){var j=g.children("."+h)[0];if(j==null){j=document.createElement("canvas");j.className=h;e(j).css({direction:"ltr",position:"absolute",left:0,top:0}).appendTo(g);if(!j.getContext){if(window.G_vmlCanvasManager){j=window.G_vmlCanvasManager.initElement(j)}else{throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.")}}}this.element=j;var i=this.context=j.getContext("2d");var f=window.devicePixelRatio||1,k=i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1;this.pixelRatio=f/k;this.resize(g.width(),g.height());this.textContainer=null;this.text={};this._textCache={}}a.prototype.resize=function(i,f){if(i<=0||f<=0){throw new Error("Invalid dimensions for plot, width = "+i+", height = "+f)}var h=this.element,g=this.context,j=this.pixelRatio;if(this.width!=i){h.width=i*j;h.style.width=i+"px";this.width=i}if(this.height!=f){h.height=f*j;h.style.height=f+"px";this.height=f}g.restore();g.save();g.scale(j,j)};a.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)};a.prototype.render=function(){var f=this._textCache;for(var o in f){if(d.call(f,o)){var n=this.getTextLayer(o),g=f[o];n.hide();for(var m in g){if(d.call(g,m)){var h=g[m];for(var p in h){if(d.call(h,p)){var k=h[p].positions;for(var j=0,l;l=k[j];j++){if(l.active){if(!l.rendered){n.append(l.element);l.rendered=true}}else{k.splice(j--,1);if(l.rendered){l.element.detach()}}}if(k.length==0){delete h[p]}}}}}n.show()}}};a.prototype.getTextLayer=function(g){var f=this.text[g];if(f==null){if(this.textContainer==null){this.textContainer=e("<div class='flot-text'></div>").css({position:"absolute",top:0,left:0,bottom:0,right:0,"font-size":"smaller",color:"#545454"}).insertAfter(this.element)}f=this.text[g]=e("<div></div>").addClass(g).css({position:"absolute",top:0,left:0,bottom:0,right:0}).appendTo(this.textContainer)}return f};a.prototype.getTextInfo=function(m,o,j,k,g){var n,f,i,h;o=""+o;if(typeof j==="object"){n=j.style+" "+j.variant+" "+j.weight+" "+j.size+"px/"+j.lineHeight+"px "+j.family}else{n=j}f=this._textCache[m];if(f==null){f=this._textCache[m]={}}i=f[n];if(i==null){i=f[n]={}}h=i[o];if(h==null){var l=e("<div></div>").html(o).css({position:"absolute","max-width":g,top:-9999}).appendTo(this.getTextLayer(m));if(typeof j==="object"){l.css({font:n,color:j.color})}else{if(typeof j==="string"){l.addClass(j)}}h=i[o]={width:l.outerWidth(true),height:l.outerHeight(true),element:l,positions:[]};l.detach()}return h};a.prototype.addText=function(o,r,p,s,h,j,f,n,q){var g=this.getTextInfo(o,s,h,j,f),l=g.positions;if(n=="center"){r-=g.width/2}else{if(n=="right"){r-=g.width}}if(q=="middle"){p-=g.height/2}else{if(q=="bottom"){p-=g.height}}for(var k=0,m;m=l[k];k++){if(m.x==r&&m.y==p){m.active=true;return}}m={active:true,rendered:false,element:l.length?g.element.clone():g.element,x:r,y:p};l.push(m);m.element.css({top:Math.round(p),left:Math.round(r),"text-align":n})};a.prototype.removeText=function(o,q,p,s,h,j){if(s==null){var f=this._textCache[o];if(f!=null){for(var n in f){if(d.call(f,n)){var g=f[n];for(var r in g){if(d.call(g,r)){var l=g[r].positions;for(var k=0,m;m=l[k];k++){m.active=false}}}}}}}else{var l=this.getTextInfo(o,s,h,j).positions;for(var k=0,m;m=l[k];k++){if(m.x==q&&m.y==p){m.active=false}}}};function c(Q,A,C,g){var t=[],L={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:true,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:0.85,sorted:null},xaxis:{show:null,position:"bottom",mode:null,font:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null},yaxis:{autoscaleMargin:0.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:false,radius:3,lineWidth:2,fill:true,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:false,fillColor:null,steps:false},bars:{show:false,lineWidth:2,barWidth:1,fill:true,fillColor:null,align:"left",horizontal:false,zero:true},shadowSize:3,highlightColor:null},grid:{show:true,aboveData:false,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,margin:0,labelMargin:5,axisMargin:8,borderWidth:2,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:false,hoverable:false,autoHighlight:true,mouseActiveRadius:10},interaction:{redrawOverlayInterval:1000/60},hooks:{}},ac=null,al=null,am=null,D=null,aw=null,ao=[],W=[],J={left:0,right:0,top:0,bottom:0},k=0,ad=0,p={processOptions:[],processRawData:[],processDatapoints:[],processOffset:[],drawBackground:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},h=this;h.setData=K;h.setupGrid=O;h.draw=au;h.getPlaceholder=function(){return Q};h.getCanvas=function(){return ac.element};h.getPlotOffset=function(){return J};h.width=function(){return k};h.height=function(){return ad};h.offset=function(){var ay=am.offset();ay.left+=J.left;ay.top+=J.top;return ay};h.getData=function(){return t};h.getAxes=function(){var az={},ay;e.each(ao.concat(W),function(aA,aB){if(aB){az[aB.direction+(aB.n!=1?aB.n:"")+"axis"]=aB}});return az};h.getXAxes=function(){return ao};h.getYAxes=function(){return W};h.c2p=Y;h.p2c=R;h.getOptions=function(){return L};h.highlight=an;h.unhighlight=ah;h.triggerRedrawOverlay=X;h.pointOffset=function(ay){return{left:parseInt(ao[x(ay,"x")-1].p2c(+ay.x)+J.left,10),top:parseInt(W[x(ay,"y")-1].p2c(+ay.y)+J.top,10)}};h.shutdown=o;h.resize=function(){var az=Q.width(),ay=Q.height();ac.resize(az,ay);al.resize(az,ay)};h.hooks=p;H(h);aa(C);ax();K(A);O();au();ar();function F(aA,ay){ay=[h].concat(ay);for(var az=0;az<aA.length;++az){aA[az].apply(this,ay)}}function H(){var az={Canvas:a};for(var ay=0;ay<g.length;++ay){var aA=g[ay];aA.init(h,az);if(aA.options){e.extend(true,L,aA.options)}}}function aa(aA){e.extend(true,L,aA);if(aA&&aA.colors){L.colors=aA.colors}if(L.xaxis.color==null){L.xaxis.color=e.color.parse(L.grid.color).scale("a",0.22).toString()}if(L.yaxis.color==null){L.yaxis.color=e.color.parse(L.grid.color).scale("a",0.22).toString()}if(L.xaxis.tickColor==null){L.xaxis.tickColor=L.grid.tickColor||L.xaxis.color}if(L.yaxis.tickColor==null){L.yaxis.tickColor=L.grid.tickColor||L.yaxis.color}if(L.grid.borderColor==null){L.grid.borderColor=L.grid.color}if(L.grid.tickColor==null){L.grid.tickColor=e.color.parse(L.grid.color).scale("a",0.22).toString()}var ay,aD,aB,az={style:Q.css("font-style"),size:Math.round(0.8*(+Q.css("font-size").replace("px","")||13)),variant:Q.css("font-variant"),weight:Q.css("font-weight"),family:Q.css("font-family")};az.lineHeight=az.size*1.15;aB=L.xaxes.length||1;for(ay=0;ay<aB;++ay){aD=L.xaxes[ay];if(aD&&!aD.tickColor){aD.tickColor=aD.color}aD=e.extend(true,{},L.xaxis,aD);L.xaxes[ay]=aD;if(aD.font){aD.font=e.extend({},az,aD.font);if(!aD.font.color){aD.font.color=aD.color}}}aB=L.yaxes.length||1;for(ay=0;ay<aB;++ay){aD=L.yaxes[ay];if(aD&&!aD.tickColor){aD.tickColor=aD.color}aD=e.extend(true,{},L.yaxis,aD);L.yaxes[ay]=aD;if(aD.font){aD.font=e.extend({},az,aD.font);if(!aD.font.color){aD.font.color=aD.color}}}if(L.xaxis.noTicks&&L.xaxis.ticks==null){L.xaxis.ticks=L.xaxis.noTicks}if(L.yaxis.noTicks&&L.yaxis.ticks==null){L.yaxis.ticks=L.yaxis.noTicks}if(L.x2axis){L.xaxes[1]=e.extend(true,{},L.xaxis,L.x2axis);L.xaxes[1].position="top"}if(L.y2axis){L.yaxes[1]=e.extend(true,{},L.yaxis,L.y2axis);L.yaxes[1].position="right"}if(L.grid.coloredAreas){L.grid.markings=L.grid.coloredAreas}if(L.grid.coloredAreasColor){L.grid.markingsColor=L.grid.coloredAreasColor}if(L.lines){e.extend(true,L.series.lines,L.lines)}if(L.points){e.extend(true,L.series.points,L.points)}if(L.bars){e.extend(true,L.series.bars,L.bars)}if(L.shadowSize!=null){L.series.shadowSize=L.shadowSize}if(L.highlightColor!=null){L.series.highlightColor=L.highlightColor}for(ay=0;ay<L.xaxes.length;++ay){M(ao,ay+1).options=L.xaxes[ay]}for(ay=0;ay<L.yaxes.length;++ay){M(W,ay+1).options=L.yaxes[ay]}for(var aC in p){if(L.hooks[aC]&&L.hooks[aC].length){p[aC]=p[aC].concat(L.hooks[aC])}}F(p.processOptions,[L])}function K(ay){t=q(ay);y();S()}function q(aB){var az=[];for(var ay=0;ay<aB.length;++ay){var aA=e.extend(true,{},L.series);if(aB[ay].data!=null){aA.data=aB[ay].data;delete aB[ay].data;e.extend(true,aA,aB[ay]);aB[ay].data=aA.data}else{aA.data=aB[ay]}az.push(aA)}return az}function x(az,aA){var ay=az[aA+"axis"];if(typeof ay=="object"){ay=ay.n}if(typeof ay!="number"){ay=1}return ay}function j(){return e.grep(ao.concat(W),function(ay){return ay})}function Y(aB){var az={},ay,aA;for(ay=0;ay<ao.length;++ay){aA=ao[ay];if(aA&&aA.used){az["x"+aA.n]=aA.c2p(aB.left)}}for(ay=0;ay<W.length;++ay){aA=W[ay];if(aA&&aA.used){az["y"+aA.n]=aA.c2p(aB.top)}}if(az.x1!==undefined){az.x=az.x1}if(az.y1!==undefined){az.y=az.y1}return az}function R(aC){var aA={},az,aB,ay;for(az=0;az<ao.length;++az){aB=ao[az];if(aB&&aB.used){ay="x"+aB.n;if(aC[ay]==null&&aB.n==1){ay="x"}if(aC[ay]!=null){aA.left=aB.p2c(aC[ay]);break}}}for(az=0;az<W.length;++az){aB=W[az];if(aB&&aB.used){ay="y"+aB.n;if(aC[ay]==null&&aB.n==1){ay="y"}if(aC[ay]!=null){aA.top=aB.p2c(aC[ay]);break}}}return aA}function M(az,ay){if(!az[ay-1]){az[ay-1]={n:ay,direction:az==ao?"x":"y",options:e.extend(true,{},az==ao?L.xaxis:L.yaxis)}}return az[ay-1]}function y(){var aJ=t.length,aA=-1,aB;for(aB=0;aB<t.length;++aB){var aG=t[aB].color;if(aG!=null){aJ--;if(typeof aG=="number"&&aG>aA){aA=aG}}}if(aJ<=aA){aJ=aA+1}var aF,ay=[],aE=L.colors,aD=aE.length,az=0;for(aB=0;aB<aJ;aB++){aF=e.color.parse(aE[aB%aD]||"#666");if(aB%aD==0&&aB){if(az>=0){if(az<0.5){az=-az-0.2}else{az=0}}else{az=-az}}ay[aB]=aF.scale("rgb",1+az)}var aC=0,aK;for(aB=0;aB<t.length;++aB){aK=t[aB];if(aK.color==null){aK.color=ay[aC].toString();++aC}else{if(typeof aK.color=="number"){aK.color=ay[aK.color].toString()}}if(aK.lines.show==null){var aI,aH=true;for(aI in aK){if(aK[aI]&&aK[aI].show){aH=false;break}}if(aH){aK.lines.show=true}}if(aK.lines.zero==null){aK.lines.zero=!!aK.lines.fill}aK.xaxis=M(ao,x(aK,"x"));aK.yaxis=M(W,x(aK,"y"))}}function S(){var aM=Number.POSITIVE_INFINITY,aG=Number.NEGATIVE_INFINITY,ay=Number.MAX_VALUE,aT,aR,aQ,aL,aA,aH,aS,aN,aF,aE,az,aZ,aW,aJ,aY,aV;function aC(a2,a1,a0){if(a1<a2.datamin&&a1!=-ay){a2.datamin=a1}if(a0>a2.datamax&&a0!=ay){a2.datamax=a0}}e.each(j(),function(a0,a1){a1.datamin=aM;a1.datamax=aG;a1.used=false});for(aT=0;aT<t.length;++aT){aH=t[aT];aH.datapoints={points:[]};F(p.processRawData,[aH,aH.data,aH.datapoints])}for(aT=0;aT<t.length;++aT){aH=t[aT];aY=aH.data;aV=aH.datapoints.format;if(!aV){aV=[];aV.push({x:true,number:true,required:true});aV.push({y:true,number:true,required:true});if(aH.bars.show||(aH.lines.show&&aH.lines.fill)){var aO=!!((aH.bars.show&&aH.bars.zero)||(aH.lines.show&&aH.lines.zero));aV.push({y:true,number:true,required:false,defaultValue:0,autoscale:aO});if(aH.bars.horizontal){delete aV[aV.length-1].y;aV[aV.length-1].x=true}}aH.datapoints.format=aV}if(aH.datapoints.pointsize!=null){continue}aH.datapoints.pointsize=aV.length;aN=aH.datapoints.pointsize;aS=aH.datapoints.points;var aD=aH.lines.show&&aH.lines.steps;aH.xaxis.used=aH.yaxis.used=true;for(aR=aQ=0;aR<aY.length;++aR,aQ+=aN){aJ=aY[aR];var aB=aJ==null;if(!aB){for(aL=0;aL<aN;++aL){aZ=aJ[aL];aW=aV[aL];if(aW){if(aW.number&&aZ!=null){aZ=+aZ;if(isNaN(aZ)){aZ=null}else{if(aZ==Infinity){aZ=ay}else{if(aZ==-Infinity){aZ=-ay}}}}if(aZ==null){if(aW.required){aB=true}if(aW.defaultValue!=null){aZ=aW.defaultValue}}}aS[aQ+aL]=aZ}}if(aB){for(aL=0;aL<aN;++aL){aZ=aS[aQ+aL];if(aZ!=null){aW=aV[aL];if(aW.autoscale){if(aW.x){aC(aH.xaxis,aZ,aZ)}if(aW.y){aC(aH.yaxis,aZ,aZ)}}}aS[aQ+aL]=null}}else{if(aD&&aQ>0&&aS[aQ-aN]!=null&&aS[aQ-aN]!=aS[aQ]&&aS[aQ-aN+1]!=aS[aQ+1]){for(aL=0;aL<aN;++aL){aS[aQ+aN+aL]=aS[aQ+aL]}aS[aQ+1]=aS[aQ-aN+1];aQ+=aN}}}}for(aT=0;aT<t.length;++aT){aH=t[aT];F(p.processDatapoints,[aH,aH.datapoints])}for(aT=0;aT<t.length;++aT){aH=t[aT];aS=aH.datapoints.points;aN=aH.datapoints.pointsize;aV=aH.datapoints.format;var aI=aM,aP=aM,aK=aG,aU=aG;for(aR=0;aR<aS.length;aR+=aN){if(aS[aR]==null){continue}for(aL=0;aL<aN;++aL){aZ=aS[aR+aL];aW=aV[aL];if(!aW||aW.autoscale===false||aZ==ay||aZ==-ay){continue}if(aW.x){if(aZ<aI){aI=aZ}if(aZ>aK){aK=aZ}}if(aW.y){if(aZ<aP){aP=aZ}if(aZ>aU){aU=aZ}}}}if(aH.bars.show){var aX;switch(aH.bars.align){case"left":aX=0;break;case"right":aX=-aH.bars.barWidth;break;case"center":aX=-aH.bars.barWidth/2;break;default:throw new Error("Invalid bar alignment: "+aH.bars.align)}if(aH.bars.horizontal){aP+=aX;aU+=aX+aH.bars.barWidth}else{aI+=aX;aK+=aX+aH.bars.barWidth}}aC(aH.xaxis,aI,aK);aC(aH.yaxis,aP,aU)}e.each(j(),function(a0,a1){if(a1.datamin==aM){a1.datamin=null}if(a1.datamax==aG){a1.datamax=null}})}function ax(){Q.css("padding",0).children(":not(.flot-base,.flot-overlay)").remove();if(Q.css("position")=="static"){Q.css("position","relative")}ac=new a("flot-base",Q);al=new a("flot-overlay",Q);D=ac.context;aw=al.context;am=e(al.element).unbind();var ay=Q.data("plot");if(ay){ay.shutdown();al.clear()}Q.data("plot",h)}function ar(){if(L.grid.hoverable){am.mousemove(f);am.bind("mouseleave",P)}if(L.grid.clickable){am.click(I)}F(p.bindEvents,[am])}function o(){if(l){clearTimeout(l)}am.unbind("mousemove",f);am.unbind("mouseleave",P);am.unbind("click",I);F(p.shutdown,[am])}function n(aD){function az(aE){return aE}var aC,ay,aA=aD.options.transform||az,aB=aD.options.inverseTransform;if(aD.direction=="x"){aC=aD.scale=k/Math.abs(aA(aD.max)-aA(aD.min));ay=Math.min(aA(aD.max),aA(aD.min))}else{aC=aD.scale=ad/Math.abs(aA(aD.max)-aA(aD.min));aC=-aC;ay=Math.max(aA(aD.max),aA(aD.min))}if(aA==az){aD.p2c=function(aE){return(aE-ay)*aC}}else{aD.p2c=function(aE){return(aA(aE)-ay)*aC}}if(!aB){aD.c2p=function(aE){return ay+aE/aC}}else{aD.c2p=function(aE){return aB(ay+aE/aC)}}}function Z(aA){var ay=aA.options,aE=aA.ticks||[],aD=ay.labelWidth||0,aB=ay.labelHeight||0,aF=aD||aA.direction=="x"?Math.floor(ac.width/(aE.length||1)):null;legacyStyles=aA.direction+"Axis "+aA.direction+aA.n+"Axis",layer="flot-"+aA.direction+"-axis flot-"+aA.direction+aA.n+"-axis "+legacyStyles,font=ay.font||"flot-tick-label tickLabel";for(var aC=0;aC<aE.length;++aC){var aG=aE[aC];if(!aG.label){continue}var az=ac.getTextInfo(layer,aG.label,font,null,aF);aD=Math.max(aD,az.width);aB=Math.max(aB,az.height)}aA.labelWidth=ay.labelWidth||aD;aA.labelHeight=ay.labelHeight||aB}function E(aA){var az=aA.labelWidth,aI=aA.labelHeight,aE=aA.options.position,aC=aA.options.tickLength,aD=L.grid.axisMargin,aG=L.grid.labelMargin,aH=aA.direction=="x"?ao:W,aB,aJ;var ay=e.grep(aH,function(aK){return aK&&aK.options.position==aE&&aK.reserveSpace});if(e.inArray(aA,ay)==ay.length-1){aD=0}if(aC==null){var aF=e.grep(aH,function(aK){return aK&&aK.reserveSpace});aJ=e.inArray(aA,aF)==0;if(aJ){aC="full"}else{aC=5}}if(!isNaN(+aC)){aG+=+aC}if(aA.direction=="x"){aI+=aG;if(aE=="bottom"){J.bottom+=aI+aD;aA.box={top:ac.height-J.bottom,height:aI}}else{aA.box={top:J.top+aD,height:aI};J.top+=aI+aD}}else{az+=aG;if(aE=="left"){aA.box={left:J.left+aD,width:az};J.left+=az+aD}else{J.right+=az+aD;aA.box={left:ac.width-J.right,width:az}}}aA.position=aE;aA.tickLength=aC;aA.box.padding=aG;aA.innermost=aJ}function ab(ay){if(ay.direction=="x"){ay.box.left=J.left-ay.labelWidth/2;ay.box.width=ac.width-J.left-J.right+ay.labelWidth}else{ay.box.top=J.top-ay.labelHeight/2;ay.box.height=ac.height-J.bottom-J.top+ay.labelHeight}}function B(){var aA=L.grid.minBorderMargin,aB={x:0,y:0},ay,az;if(aA==null){aA=0;for(ay=0;ay<t.length;++ay){aA=Math.max(aA,2*(t[ay].points.radius+t[ay].points.lineWidth/2))}}aB.x=aB.y=Math.ceil(aA);e.each(j(),function(aD,aE){var aC=aE.direction;if(aE.reserveSpace){aB[aC]=Math.ceil(Math.max(aB[aC],(aC=="x"?aE.labelWidth:aE.labelHeight)/2))}});J.left=Math.max(aB.x,J.left);J.right=Math.max(aB.x,J.right);J.top=Math.max(aB.y,J.top);J.bottom=Math.max(aB.y,J.bottom)}function O(){var aA,aC=j(),aD=L.grid.show;for(var az in J){var aB=L.grid.margin||0;J[az]=typeof aB=="number"?aB:aB[az]||0}F(p.processOffset,[J]);for(var az in J){if(typeof(L.grid.borderWidth)=="object"){J[az]+=aD?L.grid.borderWidth[az]:0}else{J[az]+=aD?L.grid.borderWidth:0}}e.each(aC,function(aE,aF){aF.show=aF.options.show;if(aF.show==null){aF.show=aF.used}aF.reserveSpace=aF.show||aF.options.reserveSpace;m(aF)});if(aD){var ay=e.grep(aC,function(aE){return aE.reserveSpace});e.each(ay,function(aE,aF){aq(aF);V(aF);u(aF,aF.ticks);Z(aF)});for(aA=ay.length-1;aA>=0;--aA){E(ay[aA])}B();e.each(ay,function(aE,aF){ab(aF)})}k=ac.width-J.left-J.right;ad=ac.height-J.bottom-J.top;e.each(aC,function(aE,aF){n(aF)});if(aD){at()}av()}function m(aB){var aC=aB.options,aA=+(aC.min!=null?aC.min:aB.datamin),ay=+(aC.max!=null?aC.max:aB.datamax),aE=ay-aA;if(aE==0){var az=ay==0?1:0.01;if(aC.min==null){aA-=az}if(aC.max==null||aC.min!=null){ay+=az}}else{var aD=aC.autoscaleMargin;if(aD!=null){if(aC.min==null){aA-=aE*aD;if(aA<0&&aB.datamin!=null&&aB.datamin>=0){aA=0}}if(aC.max==null){ay+=aE*aD;if(ay>0&&aB.datamax!=null&&aB.datamax<=0){ay=0}}}}aB.min=aA;aB.max=ay}function aq(aD){var az=aD.options;var aC;if(typeof az.ticks=="number"&&az.ticks>0){aC=az.ticks}else{aC=0.3*Math.sqrt(aD.direction=="x"?ac.width:ac.height)}var aI=(aD.max-aD.min)/aC,aE=-Math.floor(Math.log(aI)/Math.LN10),aB=az.tickDecimals;if(aB!=null&&aE>aB){aE=aB}var ay=Math.pow(10,-aE),aA=aI/ay,aK;if(aA<1.5){aK=1}else{if(aA<3){aK=2;if(aA>2.25&&(aB==null||aE+1<=aB)){aK=2.5;++aE}}else{if(aA<7.5){aK=5}else{aK=10}}}aK*=ay;if(az.minTickSize!=null&&aK<az.minTickSize){aK=az.minTickSize}aD.delta=aI;aD.tickDecimals=Math.max(0,aB!=null?aB:aE);aD.tickSize=az.tickSize||aK;if(az.mode=="time"&&!aD.tickGenerator){throw new Error("Time mode requires the flot.time plugin.")}if(!aD.tickGenerator){aD.tickGenerator=function(aN){var aP=[],aQ=b(aN.min,aN.tickSize),aM=0,aL=Number.NaN,aO;do{aO=aL;aL=aQ+aM*aN.tickSize;aP.push(aL);++aM}while(aL<aN.max&&aL!=aO);return aP};aD.tickFormatter=function(aQ,aO){var aN=aO.tickDecimals?Math.pow(10,aO.tickDecimals):1;var aP=""+Math.round(aQ*aN)/aN;if(aO.tickDecimals!=null){var aM=aP.indexOf(".");var aL=aM==-1?0:aP.length-aM-1;if(aL<aO.tickDecimals){return(aL?aP:aP+".")+(""+aN).substr(1,aO.tickDecimals-aL)}}return aP}}if(e.isFunction(az.tickFormatter)){aD.tickFormatter=function(aL,aM){return""+az.tickFormatter(aL,aM)}}if(az.alignTicksWithAxis!=null){var aF=(aD.direction=="x"?ao:W)[az.alignTicksWithAxis-1];if(aF&&aF.used&&aF!=aD){var aJ=aD.tickGenerator(aD);if(aJ.length>0){if(az.min==null){aD.min=Math.min(aD.min,aJ[0])}if(az.max==null&&aJ.length>1){aD.max=Math.max(aD.max,aJ[aJ.length-1])}}aD.tickGenerator=function(aN){var aO=[],aL,aM;for(aM=0;aM<aF.ticks.length;++aM){aL=(aF.ticks[aM].v-aF.min)/(aF.max-aF.min);aL=aN.min+aL*(aN.max-aN.min);aO.push(aL)}return aO};if(!aD.mode&&az.tickDecimals==null){var aH=Math.max(0,-Math.floor(Math.log(aD.delta)/Math.LN10)+1),aG=aD.tickGenerator(aD);if(!(aG.length>1&&/\..*0$/.test((aG[1]-aG[0]).toFixed(aH)))){aD.tickDecimals=aH}}}}}function V(aC){var aE=aC.options.ticks,aD=[];if(aE==null||(typeof aE=="number"&&aE>0)){aD=aC.tickGenerator(aC)}else{if(aE){if(e.isFunction(aE)){aD=aE(aC)}else{aD=aE}}}var aB,ay;aC.ticks=[];for(aB=0;aB<aD.length;++aB){var az=null;var aA=aD[aB];if(typeof aA=="object"){ay=+aA[0];if(aA.length>1){az=aA[1]}}else{ay=+aA}if(az==null){az=aC.tickFormatter(ay,aC)}if(!isNaN(ay)){aC.ticks.push({v:ay,label:az})}}}function u(ay,az){if(ay.options.autoscaleMargin&&az.length>0){if(ay.options.min==null){ay.min=Math.min(ay.min,az[0].v)}if(ay.options.max==null&&az.length>1){ay.max=Math.max(ay.max,az[az.length-1].v)}}}function au(){ac.clear();F(p.drawBackground,[D]);var az=L.grid;if(az.show&&az.backgroundColor){r()}if(az.show&&!az.aboveData){w()}for(var ay=0;ay<t.length;++ay){F(p.drawSeries,[D,t[ay]]);aj(t[ay])}F(p.draw,[D]);if(az.show&&az.aboveData){w()}ac.render();X()}function s(ay,aC){var az,aE,aF,aG,aD=j();for(var aB=0;aB<aD.length;++aB){az=aD[aB];if(az.direction==aC){aG=aC+az.n+"axis";if(!ay[aG]&&az.n==1){aG=aC+"axis"}if(ay[aG]){aE=ay[aG].from;aF=ay[aG].to;break}}}if(!ay[aG]){az=aC=="x"?ao[0]:W[0];aE=ay[aC+"1"];aF=ay[aC+"2"]}if(aE!=null&&aF!=null&&aE>aF){var aA=aE;aE=aF;aF=aA}return{from:aE,to:aF,axis:az}}function r(){D.save();D.translate(J.left,J.top);D.fillStyle=v(L.grid.backgroundColor,ad,0,"rgba(255, 255, 255, 0)");D.fillRect(0,0,k,ad);D.restore()}function w(){var aC,aI,aK,aG;D.save();D.translate(J.left,J.top);var aE=L.grid.markings;if(aE){if(e.isFunction(aE)){aI=h.getAxes();aI.xmin=aI.xaxis.min;aI.xmax=aI.xaxis.max;aI.ymin=aI.yaxis.min;aI.ymax=aI.yaxis.max;aE=aE(aI)}for(aC=0;aC<aE.length;++aC){var aA=aE[aC],az=s(aA,"x"),aF=s(aA,"y");if(az.from==null){az.from=az.axis.min}if(az.to==null){az.to=az.axis.max}if(aF.from==null){aF.from=aF.axis.min}if(aF.to==null){aF.to=aF.axis.max}if(az.to<az.axis.min||az.from>az.axis.max||aF.to<aF.axis.min||aF.from>aF.axis.max){continue}az.from=Math.max(az.from,az.axis.min);az.to=Math.min(az.to,az.axis.max);aF.from=Math.max(aF.from,aF.axis.min);aF.to=Math.min(aF.to,aF.axis.max);if(az.from==az.to&&aF.from==aF.to){continue}az.from=az.axis.p2c(az.from);az.to=az.axis.p2c(az.to);aF.from=aF.axis.p2c(aF.from);aF.to=aF.axis.p2c(aF.to);if(az.from==az.to||aF.from==aF.to){D.beginPath();D.strokeStyle=aA.color||L.grid.markingsColor;D.lineWidth=aA.lineWidth||L.grid.markingsLineWidth;D.moveTo(az.from,aF.from);D.lineTo(az.to,aF.to);D.stroke()}else{D.fillStyle=aA.color||L.grid.markingsColor;D.fillRect(az.from,aF.to,az.to-az.from,aF.from-aF.to)}}}aI=j();aK=L.grid.borderWidth;for(var aB=0;aB<aI.length;++aB){var ay=aI[aB],aD=ay.box,aO=ay.tickLength,aL,aJ,aN,aH;if(!ay.show||ay.ticks.length==0){continue}D.lineWidth=1;if(ay.direction=="x"){aL=0;if(aO=="full"){aJ=(ay.position=="top"?0:ad)}else{aJ=aD.top-J.top+(ay.position=="top"?aD.height:0)}}else{aJ=0;if(aO=="full"){aL=(ay.position=="left"?0:k)}else{aL=aD.left-J.left+(ay.position=="left"?aD.width:0)}}if(!ay.innermost){D.strokeStyle=ay.options.color;D.beginPath();aN=aH=0;if(ay.direction=="x"){aN=k+1}else{aH=ad+1}if(D.lineWidth==1){if(ay.direction=="x"){aJ=Math.floor(aJ)+0.5}else{aL=Math.floor(aL)+0.5}}D.moveTo(aL,aJ);D.lineTo(aL+aN,aJ+aH);D.stroke()}D.strokeStyle=ay.options.tickColor;D.beginPath();for(aC=0;aC<ay.ticks.length;++aC){var aM=ay.ticks[aC].v;aN=aH=0;if(isNaN(aM)||aM<ay.min||aM>ay.max||(aO=="full"&&((typeof aK=="object"&&aK[ay.position]>0)||aK>0)&&(aM==ay.min||aM==ay.max))){continue}if(ay.direction=="x"){aL=ay.p2c(aM);aH=aO=="full"?-ad:aO;if(ay.position=="top"){aH=-aH}}else{aJ=ay.p2c(aM);aN=aO=="full"?-k:aO;if(ay.position=="left"){aN=-aN}}if(D.lineWidth==1){if(ay.direction=="x"){aL=Math.floor(aL)+0.5}else{aJ=Math.floor(aJ)+0.5}}D.moveTo(aL,aJ);D.lineTo(aL+aN,aJ+aH)}D.stroke()}if(aK){aG=L.grid.borderColor;if(typeof aK=="object"||typeof aG=="object"){if(typeof aK!=="object"){aK={top:aK,right:aK,bottom:aK,left:aK}}if(typeof aG!=="object"){aG={top:aG,right:aG,bottom:aG,left:aG}}if(aK.top>0){D.strokeStyle=aG.top;D.lineWidth=aK.top;D.beginPath();D.moveTo(0-aK.left,0-aK.top/2);D.lineTo(k,0-aK.top/2);D.stroke()}if(aK.right>0){D.strokeStyle=aG.right;D.lineWidth=aK.right;D.beginPath();D.moveTo(k+aK.right/2,0-aK.top);D.lineTo(k+aK.right/2,ad);D.stroke()}if(aK.bottom>0){D.strokeStyle=aG.bottom;D.lineWidth=aK.bottom;D.beginPath();D.moveTo(k+aK.right,ad+aK.bottom/2);D.lineTo(0,ad+aK.bottom/2);D.stroke()}if(aK.left>0){D.strokeStyle=aG.left;D.lineWidth=aK.left;D.beginPath();D.moveTo(0-aK.left/2,ad+aK.bottom);D.lineTo(0-aK.left/2,0);D.stroke()}}else{D.lineWidth=aK;D.strokeStyle=L.grid.borderColor;D.strokeRect(-aK/2,-aK/2,k+aK,ad+aK)}}D.restore()}function at(){e.each(j(),function(aJ,az){if(!az.show||az.ticks.length==0){return}var aC=az.box,aB=az.direction+"Axis "+az.direction+az.n+"Axis",aF="flot-"+az.direction+"-axis flot-"+az.direction+az.n+"-axis "+aB,ay=az.options.font||"flot-tick-label tickLabel",aD,aI,aG,aE,aH;ac.removeText(aF);for(var aA=0;aA<az.ticks.length;++aA){aD=az.ticks[aA];if(!aD.label||aD.v<az.min||aD.v>az.max){continue}if(az.direction=="x"){aE="center";aI=J.left+az.p2c(aD.v);if(az.position=="bottom"){aG=aC.top+aC.padding}else{aG=aC.top+aC.height-aC.padding;aH="bottom"}}else{aH="middle";aG=J.top+az.p2c(aD.v);if(az.position=="left"){aI=aC.left+aC.width-aC.padding;aE="right"}else{aI=aC.left+aC.padding}}ac.addText(aF,aI,aG,aD.label,ay,null,null,aE,aH)}})}function aj(ay){if(ay.lines.show){G(ay)}if(ay.bars.show){T(ay)}if(ay.points.show){U(ay)}}function G(aB){function aA(aM,aN,aF,aR,aQ){var aS=aM.points,aG=aM.pointsize,aK=null,aJ=null;D.beginPath();for(var aL=aG;aL<aS.length;aL+=aG){var aI=aS[aL-aG],aP=aS[aL-aG+1],aH=aS[aL],aO=aS[aL+1];if(aI==null||aH==null){continue}if(aP<=aO&&aP<aQ.min){if(aO<aQ.min){continue}aI=(aQ.min-aP)/(aO-aP)*(aH-aI)+aI;aP=aQ.min}else{if(aO<=aP&&aO<aQ.min){if(aP<aQ.min){continue}aH=(aQ.min-aP)/(aO-aP)*(aH-aI)+aI;aO=aQ.min}}if(aP>=aO&&aP>aQ.max){if(aO>aQ.max){continue}aI=(aQ.max-aP)/(aO-aP)*(aH-aI)+aI;aP=aQ.max}else{if(aO>=aP&&aO>aQ.max){if(aP>aQ.max){continue}aH=(aQ.max-aP)/(aO-aP)*(aH-aI)+aI;aO=aQ.max}}if(aI<=aH&&aI<aR.min){if(aH<aR.min){continue}aP=(aR.min-aI)/(aH-aI)*(aO-aP)+aP;aI=aR.min}else{if(aH<=aI&&aH<aR.min){if(aI<aR.min){continue}aO=(aR.min-aI)/(aH-aI)*(aO-aP)+aP;aH=aR.min}}if(aI>=aH&&aI>aR.max){if(aH>aR.max){continue}aP=(aR.max-aI)/(aH-aI)*(aO-aP)+aP;aI=aR.max}else{if(aH>=aI&&aH>aR.max){if(aI>aR.max){continue}aO=(aR.max-aI)/(aH-aI)*(aO-aP)+aP;aH=aR.max}}if(aI!=aK||aP!=aJ){D.moveTo(aR.p2c(aI)+aN,aQ.p2c(aP)+aF)}aK=aH;aJ=aO;D.lineTo(aR.p2c(aH)+aN,aQ.p2c(aO)+aF)}D.stroke()}function aC(aF,aN,aM){var aT=aF.points,aS=aF.pointsize,aK=Math.min(Math.max(0,aM.min),aM.max),aU=0,aR,aQ=false,aJ=1,aI=0,aO=0;while(true){if(aS>0&&aU>aT.length+aS){break}aU+=aS;var aW=aT[aU-aS],aH=aT[aU-aS+aJ],aV=aT[aU],aG=aT[aU+aJ];if(aQ){if(aS>0&&aW!=null&&aV==null){aO=aU;aS=-aS;aJ=2;continue}if(aS<0&&aU==aI+aS){D.fill();aQ=false;aS=-aS;aJ=1;aU=aI=aO+aS;continue}}if(aW==null||aV==null){continue}if(aW<=aV&&aW<aN.min){if(aV<aN.min){continue}aH=(aN.min-aW)/(aV-aW)*(aG-aH)+aH;aW=aN.min}else{if(aV<=aW&&aV<aN.min){if(aW<aN.min){continue}aG=(aN.min-aW)/(aV-aW)*(aG-aH)+aH;aV=aN.min}}if(aW>=aV&&aW>aN.max){if(aV>aN.max){continue}aH=(aN.max-aW)/(aV-aW)*(aG-aH)+aH;aW=aN.max}else{if(aV>=aW&&aV>aN.max){if(aW>aN.max){continue}aG=(aN.max-aW)/(aV-aW)*(aG-aH)+aH;aV=aN.max}}if(!aQ){D.beginPath();D.moveTo(aN.p2c(aW),aM.p2c(aK));aQ=true}if(aH>=aM.max&&aG>=aM.max){D.lineTo(aN.p2c(aW),aM.p2c(aM.max));D.lineTo(aN.p2c(aV),aM.p2c(aM.max));continue}else{if(aH<=aM.min&&aG<=aM.min){D.lineTo(aN.p2c(aW),aM.p2c(aM.min));D.lineTo(aN.p2c(aV),aM.p2c(aM.min));continue}}var aL=aW,aP=aV;if(aH<=aG&&aH<aM.min&&aG>=aM.min){aW=(aM.min-aH)/(aG-aH)*(aV-aW)+aW;aH=aM.min}else{if(aG<=aH&&aG<aM.min&&aH>=aM.min){aV=(aM.min-aH)/(aG-aH)*(aV-aW)+aW;aG=aM.min}}if(aH>=aG&&aH>aM.max&&aG<=aM.max){aW=(aM.max-aH)/(aG-aH)*(aV-aW)+aW;aH=aM.max}else{if(aG>=aH&&aG>aM.max&&aH<=aM.max){aV=(aM.max-aH)/(aG-aH)*(aV-aW)+aW;aG=aM.max}}if(aW!=aL){D.lineTo(aN.p2c(aL),aM.p2c(aH))}D.lineTo(aN.p2c(aW),aM.p2c(aH));D.lineTo(aN.p2c(aV),aM.p2c(aG));if(aV!=aP){D.lineTo(aN.p2c(aV),aM.p2c(aG));D.lineTo(aN.p2c(aP),aM.p2c(aG))}}}D.save();D.translate(J.left,J.top);D.lineJoin="round";var aD=aB.lines.lineWidth,ay=aB.shadowSize;if(aD>0&&ay>0){D.lineWidth=ay;D.strokeStyle="rgba(0,0,0,0.1)";var aE=Math.PI/18;aA(aB.datapoints,Math.sin(aE)*(aD/2+ay/2),Math.cos(aE)*(aD/2+ay/2),aB.xaxis,aB.yaxis);D.lineWidth=ay/2;aA(aB.datapoints,Math.sin(aE)*(aD/2+ay/4),Math.cos(aE)*(aD/2+ay/4),aB.xaxis,aB.yaxis)}D.lineWidth=aD;D.strokeStyle=aB.color;var az=z(aB.lines,aB.color,0,ad);if(az){D.fillStyle=az;aC(aB.datapoints,aB.xaxis,aB.yaxis)}if(aD>0){aA(aB.datapoints,0,0,aB.xaxis,aB.yaxis)}D.restore()}function U(aB){function aE(aK,aJ,aR,aH,aP,aQ,aN,aG){var aO=aK.points,aF=aK.pointsize;for(var aI=0;aI<aO.length;aI+=aF){var aM=aO[aI],aL=aO[aI+1];if(aM==null||aM<aQ.min||aM>aQ.max||aL<aN.min||aL>aN.max){continue}D.beginPath();aM=aQ.p2c(aM);aL=aN.p2c(aL)+aH;if(aG=="circle"){D.arc(aM,aL,aJ,0,aP?Math.PI:Math.PI*2,false)}else{aG(D,aM,aL,aJ,aP)}D.closePath();if(aR){D.fillStyle=aR;D.fill()}D.stroke()}}D.save();D.translate(J.left,J.top);var aD=aB.points.lineWidth,az=aB.shadowSize,ay=aB.points.radius,aC=aB.points.symbol;if(aD==0){aD=0.0001}if(aD>0&&az>0){var aA=az/2;D.lineWidth=aA;D.strokeStyle="rgba(0,0,0,0.1)";aE(aB.datapoints,ay,null,aA+aA/2,true,aB.xaxis,aB.yaxis,aC);D.strokeStyle="rgba(0,0,0,0.2)";aE(aB.datapoints,ay,null,aA/2,true,aB.xaxis,aB.yaxis,aC)}D.lineWidth=aD;D.strokeStyle=aB.color;aE(aB.datapoints,ay,z(aB.points,aB.color),0,false,aB.xaxis,aB.yaxis,aC);D.restore()}function ak(aK,aJ,aS,aF,aN,aC,aA,aI,aH,aR,aO,az){var aB,aQ,aG,aM,aD,ay,aL,aE,aP;if(aO){aE=ay=aL=true;aD=false;aB=aS;aQ=aK;aM=aJ+aF;aG=aJ+aN;if(aQ<aB){aP=aQ;aQ=aB;aB=aP;aD=true;ay=false}}else{aD=ay=aL=true;aE=false;aB=aK+aF;aQ=aK+aN;aG=aS;aM=aJ;if(aM<aG){aP=aM;aM=aG;aG=aP;aE=true;aL=false}}if(aQ<aI.min||aB>aI.max||aM<aH.min||aG>aH.max){return}if(aB<aI.min){aB=aI.min;aD=false}if(aQ>aI.max){aQ=aI.max;ay=false}if(aG<aH.min){aG=aH.min;aE=false}if(aM>aH.max){aM=aH.max;aL=false}aB=aI.p2c(aB);aG=aH.p2c(aG);aQ=aI.p2c(aQ);aM=aH.p2c(aM);if(aA){aR.beginPath();aR.moveTo(aB,aG);aR.lineTo(aB,aM);aR.lineTo(aQ,aM);aR.lineTo(aQ,aG);aR.fillStyle=aA(aG,aM);aR.fill()}if(az>0&&(aD||ay||aL||aE)){aR.beginPath();aR.moveTo(aB,aG+aC);if(aD){aR.lineTo(aB,aM+aC)}else{aR.moveTo(aB,aM+aC)}if(aL){aR.lineTo(aQ,aM+aC)}else{aR.moveTo(aQ,aM+aC)}if(ay){aR.lineTo(aQ,aG+aC)}else{aR.moveTo(aQ,aG+aC)}if(aE){aR.lineTo(aB,aG+aC)}else{aR.moveTo(aB,aG+aC)}aR.stroke()}}function T(aA){function az(aG,aF,aI,aD,aH,aK,aJ){var aL=aG.points,aC=aG.pointsize;for(var aE=0;aE<aL.length;aE+=aC){if(aL[aE]==null){continue}ak(aL[aE],aL[aE+1],aL[aE+2],aF,aI,aD,aH,aK,aJ,D,aA.bars.horizontal,aA.bars.lineWidth)}}D.save();D.translate(J.left,J.top);D.lineWidth=aA.bars.lineWidth;D.strokeStyle=aA.color;var ay;switch(aA.bars.align){case"left":ay=0;break;case"right":ay=-aA.bars.barWidth;break;case"center":ay=-aA.bars.barWidth/2;break;default:throw new Error("Invalid bar alignment: "+aA.bars.align)}var aB=aA.bars.fill?function(aC,aD){return z(aA.bars,aA.color,aC,aD)}:null;az(aA.datapoints,ay,ay+aA.bars.barWidth,0,aB,aA.xaxis,aA.yaxis);D.restore()}function z(aA,ay,az,aC){var aB=aA.fill;if(!aB){return null}if(aA.fillColor){return v(aA.fillColor,az,aC,ay)}var aD=e.color.parse(ay);aD.a=typeof aB=="number"?aB:0.4;aD.normalize();return aD.toString()}function av(){Q.find(".legend").remove();if(!L.legend.show){return}var aG=[],aD=[],aE=false,aN=L.legend.labelFormatter,aM,aI;for(var aC=0;aC<t.length;++aC){aM=t[aC];if(aM.label){aI=aN?aN(aM.label,aM):aM.label;if(aI){aD.push({label:aI,color:aM.color})}}}if(L.legend.sorted){if(e.isFunction(L.legend.sorted)){aD.sort(L.legend.sorted)}else{if(L.legend.sorted=="reverse"){aD.reverse()}else{var aB=L.legend.sorted!="descending";aD.sort(function(aP,aO){return aP.label==aO.label?0:((aP.label<aO.label)!=aB?1:-1)})}}}for(var aC=0;aC<aD.length;++aC){var aK=aD[aC];if(aC%L.legend.noColumns==0){if(aE){aG.push("</tr>")}aG.push("<tr>");aE=true}aG.push('<td class="legendColorBox"><div style="border:1px solid '+L.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+aK.color+';overflow:hidden"></div></div></td><td class="legendLabel">'+aK.label+"</td>")}if(aE){aG.push("</tr>")}if(aG.length==0){return}var aL='<table style="font-size:smaller;color:'+L.grid.color+'">'+aG.join("")+"</table>";if(L.legend.container!=null){e(L.legend.container).html(aL)}else{var aH="",az=L.legend.position,aA=L.legend.margin;if(aA[0]==null){aA=[aA,aA]}if(az.charAt(0)=="n"){aH+="top:"+(aA[1]+J.top)+"px;"}else{if(az.charAt(0)=="s"){aH+="bottom:"+(aA[1]+J.bottom)+"px;"}}if(az.charAt(1)=="e"){aH+="right:"+(aA[0]+J.right)+"px;"}else{if(az.charAt(1)=="w"){aH+="left:"+(aA[0]+J.left)+"px;"}}var aJ=e('<div class="legend">'+aL.replace('style="','style="position:absolute;'+aH+";")+"</div>").appendTo(Q);if(L.legend.backgroundOpacity!=0){var aF=L.legend.backgroundColor;if(aF==null){aF=L.grid.backgroundColor;if(aF&&typeof aF=="string"){aF=e.color.parse(aF)}else{aF=e.color.extract(aJ,"background-color")}aF.a=1;aF=aF.toString()}var ay=aJ.children();e('<div style="position:absolute;width:'+ay.width()+"px;height:"+ay.height()+"px;"+aH+"background-color:"+aF+';"> </div>').prependTo(aJ).css("opacity",L.legend.backgroundOpacity)}}}var ag=[],l=null;function ap(aF,aD,aA){var aL=L.grid.mouseActiveRadius,aX=aL*aL+1,aV=null,aO=false,aT,aR,aQ;for(aT=t.length-1;aT>=0;--aT){if(!aA(t[aT])){continue}var aM=t[aT],aE=aM.xaxis,aC=aM.yaxis,aS=aM.datapoints.points,aN=aE.c2p(aF),aK=aC.c2p(aD),az=aL/aE.scale,ay=aL/aC.scale;aQ=aM.datapoints.pointsize;if(aE.options.inverseTransform){az=Number.MAX_VALUE}if(aC.options.inverseTransform){ay=Number.MAX_VALUE}if(aM.lines.show||aM.points.show){for(aR=0;aR<aS.length;aR+=aQ){var aH=aS[aR],aG=aS[aR+1];if(aH==null){continue}if(aH-aN>az||aH-aN<-az||aG-aK>ay||aG-aK<-ay){continue}var aJ=Math.abs(aE.p2c(aH)-aF),aI=Math.abs(aC.p2c(aG)-aD),aP=aJ*aJ+aI*aI;if(aP<aX){aX=aP;aV=[aT,aR/aQ]}}}if(aM.bars.show&&!aV){var aB=aM.bars.align=="left"?0:-aM.bars.barWidth/2,aU=aB+aM.bars.barWidth;for(aR=0;aR<aS.length;aR+=aQ){var aH=aS[aR],aG=aS[aR+1],aW=aS[aR+2];if(aH==null){continue}if(t[aT].bars.horizontal?(aN<=Math.max(aW,aH)&&aN>=Math.min(aW,aH)&&aK>=aG+aB&&aK<=aG+aU):(aN>=aH+aB&&aN<=aH+aU&&aK>=Math.min(aW,aG)&&aK<=Math.max(aW,aG))){aV=[aT,aR/aQ]}}}}if(aV){aT=aV[0];aR=aV[1];aQ=t[aT].datapoints.pointsize;return{datapoint:t[aT].datapoints.points.slice(aR*aQ,(aR+1)*aQ),dataIndex:aR,series:t[aT],seriesIndex:aT}}return null}function f(ay){if(L.grid.hoverable){i("plothover",ay,function(az){return az.hoverable!=false})}}function P(ay){if(L.grid.hoverable){i("plothover",ay,function(az){return false})}}function I(ay){i("plotclick",ay,function(az){return az.clickable!=false})}function i(az,ay,aA){var aB=am.offset(),aE=ay.pageX-aB.left-J.left,aC=ay.pageY-aB.top-J.top,aG=Y({left:aE,top:aC});aG.pageX=ay.pageX;aG.pageY=ay.pageY;var aH=ap(aE,aC,aA);if(aH){aH.pageX=parseInt(aH.series.xaxis.p2c(aH.datapoint[0])+aB.left+J.left,10);aH.pageY=parseInt(aH.series.yaxis.p2c(aH.datapoint[1])+aB.top+J.top,10)}if(L.grid.autoHighlight){for(var aD=0;aD<ag.length;++aD){var aF=ag[aD];if(aF.auto==az&&!(aH&&aF.series==aH.series&&aF.point[0]==aH.datapoint[0]&&aF.point[1]==aH.datapoint[1])){ah(aF.series,aF.point)}}if(aH){an(aH.series,aH.datapoint,az)}}Q.trigger(az,[aG,aH])}function X(){var ay=L.interaction.redrawOverlayInterval;if(ay==-1){af();return}if(!l){l=setTimeout(af,ay)}}function af(){l=null;aw.save();al.clear();aw.translate(J.left,J.top);var az,ay;for(az=0;az<ag.length;++az){ay=ag[az];if(ay.series.bars.show){ai(ay.series,ay.point)}else{ae(ay.series,ay.point)}}aw.restore();F(p.drawOverlay,[aw])}function an(aA,ay,aC){if(typeof aA=="number"){aA=t[aA]}if(typeof ay=="number"){var aB=aA.datapoints.pointsize;ay=aA.datapoints.points.slice(aB*ay,aB*(ay+1))}var az=N(aA,ay);if(az==-1){ag.push({series:aA,point:ay,auto:aC});X()}else{if(!aC){ag[az].auto=false}}}function ah(aA,ay){if(aA==null&&ay==null){ag=[];X();return}if(typeof aA=="number"){aA=t[aA]}if(typeof ay=="number"){var aB=aA.datapoints.pointsize;ay=aA.datapoints.points.slice(aB*ay,aB*(ay+1))}var az=N(aA,ay);if(az!=-1){ag.splice(az,1);X()}}function N(aA,aB){for(var ay=0;ay<ag.length;++ay){var az=ag[ay];if(az.series==aA&&az.point[0]==aB[0]&&az.point[1]==aB[1]){return ay}}return -1}function ae(ay,aE){var aC=aE[0],aA=aE[1],aF=ay.xaxis,aD=ay.yaxis,aG=(typeof ay.highlightColor==="string")?ay.highlightColor:e.color.parse(ay.color).scale("a",0.5).toString();if(aC<aF.min||aC>aF.max||aA<aD.min||aA>aD.max){return}var aB=ay.points.radius+ay.points.lineWidth/2;aw.lineWidth=aB;aw.strokeStyle=aG;var az=1.5*aB;aC=aF.p2c(aC);aA=aD.p2c(aA);aw.beginPath();if(ay.points.symbol=="circle"){aw.arc(aC,aA,az,0,2*Math.PI,false)}else{ay.points.symbol(aw,aC,aA,az,false)}aw.closePath();aw.stroke()}function ai(aB,ay){var aC=(typeof aB.highlightColor==="string")?aB.highlightColor:e.color.parse(aB.color).scale("a",0.5).toString(),aA=aC,az=aB.bars.align=="left"?0:-aB.bars.barWidth/2;aw.lineWidth=aB.bars.lineWidth;aw.strokeStyle=aC;ak(ay[0],ay[1],ay[2]||0,az,az+aB.bars.barWidth,0,function(){return aA},aB.xaxis,aB.yaxis,aw,aB.bars.horizontal,aB.bars.lineWidth)}function v(aG,ay,aE,az){if(typeof aG=="string"){return aG}else{var aF=D.createLinearGradient(0,aE,0,ay);for(var aB=0,aA=aG.colors.length;aB<aA;++aB){var aC=aG.colors[aB];if(typeof aC!="string"){var aD=e.color.parse(az);if(aC.brightness!=null){aD=aD.scale("rgb",aC.brightness)}if(aC.opacity!=null){aD.a*=aC.opacity}aC=aD.toString()}aF.addColorStop(aB/(aA-1),aC)}return aF}}}e.plot=function(i,g,f){var h=new c(e(i),g,f,e.plot.plugins);return h};e.plot.version="0.8.1";e.plot.plugins=[];e.fn.plot=function(g,f){return this.each(function(){e.plot(this,g,f)})};function b(g,f){return f*Math.floor(g/f)}})(jQuery);