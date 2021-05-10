(this["webpackJsonpreact-d3-finalproject"]=this["webpackJsonpreact-d3-finalproject"]||[]).push([[0],{155:function(t,e,n){},157:function(t,e,n){},171:function(t,e,n){},174:function(t,e,n){},175:function(t,e,n){},181:function(t,e,n){},182:function(t,e,n){"use strict";n.r(e);var i,r,a,o,c,s=n(0),l=n.n(s),d=n(15),u=n.n(d),p=n(6),m=(n(50),n(18)),y=n(27),b=n(4),h=n.n(b),f=n(10),g=n(7),j=n(60),x=n(12),v=n(2),O=n(59),w=n.n(O),k="cuts verse",A={"-1":{max:32,min:1},2001:{max:1,min:1},2002:{max:4,min:1},2003:{max:3,min:1},2004:{max:3,min:1},2005:{max:2,min:1},2006:{max:6,min:1},2007:{max:8,min:1},2008:{max:8,min:1},2009:{max:9,min:1},2010:{max:8,min:1},2011:{max:5,min:1},2012:{max:9,min:1},2013:{max:11,min:1},2014:{max:6,min:1},2015:{max:13,min:1},2016:{max:10,min:1},2017:{max:11,min:1},2018:{max:15,min:1},2019:{max:32,min:1}},N={"alcohol & drugs":v.h(v.d("#88d4af","#00875A")).domain([1,10]),identity:v.h(v.d("#99efff","#008ba5")).domain([1,10]),sexual:v.h(v.d("#ffbbfe","#C054BE")).domain([1,10]),profanity:v.h(v.d("#ffe5b0","#FFAB00")).domain([1,10]),other:v.h(v.d("#c2cfd8","#596066")).domain([1,10]),violence:v.h(v.d("#ffbeb0","#FF5630")).domain([1,10])},L=function(t){return w.a.purify(t)[0]},S=function(){var t=Object(f.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a("https://raw.githubusercontent.com/the-pudding/data/master/kidz-bop/KB_censored-lyrics.csv");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),B=function(){var t=Object(f.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:return e=t.sent,n=Array.from(v.b(e,(function(t){return t.ogArtist}))).map((function(t){var e=Array.from(v.b(t[1],(function(t){return t.badword}))).map((function(t){var e=Array.from(v.b(t[1],(function(t){return t.songName}))).map((function(t){var e=Array.from(v.b(t[1],(function(t){return t.ogLyric}))).map((function(t){var e=t[1][0],n=e.ogLyric,i=e.kbLyric,r=e.badword,a=E(r,n,i),o=a.kbLyricHTML,c=a.ogLyricHTML,s=a.ogLyricHTMLCensored;return Object(g.a)(Object(g.a)({},e),{},{kbLyricHTML:o,ogLyricHTML:c,ogLyricHTMLCensored:s})}));return{name:t[0],children:e}}));return{name:t[0],children:e}}));return{name:t[0],children:e}})),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=function(){var t=Object(f.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:return e=t.sent,n=Array.from(v.b(e,(function(t){return t.year}))).map((function(t){var e=Array.from(v.b(t[1],(function(t){return t.category}))).map((function(t){var e=Array.from(v.b(t[1],(function(t){return t.badword}))).map((function(e){return{name:e[0],count:e[1].length,leaves:e[1],category:t[0]}}));return{name:t[0],children:e}}));return{name:"allCategories",year:parseInt(t[0]),children:e}})),t.abrupt("return",{name:"allYears",children:n});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(f.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:return e=t.sent,n=Array.from(v.b(e,(function(t){return t.ogArtist}))).map((function(t){return{label:t[0],value:t[0],type:"artist"}})).sort((function(t,e){return t.label.localeCompare(e.label)})),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=function(t,e,n){var i=e.split(" "),r=H(i),a=M(i,t,!1),o=M(i,t,!0),c=n.split(" ");return{kbLyricHTML:"<span>"+("cuts verse"===n?"<i>cuts verse</i>":F(r,c))+"</span>",ogLyricHTML:"<span>"+a+"</span>",ogLyricHTMLCensored:"<span>"+o+"</span>"}},T=function(t){return t.replace(/[^A-Za-z0-9]/g,"").toLowerCase()},H=function(t){return Object.assign.apply(Object,Object(y.a)(t.map((function(t){return Object(x.a)({},T(t),0)}))))},M=function(t,e,n){return t.map((function(t){var i=n?L(t):t;return"<span class='ogLyric-"+(t.toLowerCase().includes(e)?"bad":"good")+"'>"+i+"</span>"})).join(" ")},F=function(t,e){var n=!0;return e.map((function(i,r){if(void 0!==t[T(i)]){var a=n?"<span class='kblyric-same'>":"</span><span class='kblyric-same start'>";return n=!0,a+i+"</span> "}var o=n||e.length-1!==r?"":"</span>",c=n?"<span class='kblyric-different'>":"";return n=!1,c+i+o})).join(" ")},K=500,W=(n(155),n(1)),I=v.h(v.d("#00875A","#ABF5D1")).domain([0,30]),R=v.h(v.d("#00B8D9","#B3F5FF")).domain([2,8]),D=v.h(v.d("#C054BE","#E1C7E0")).domain([0,8]),P=[null,I,R,D,D],Y=function(t){var e=t.songOrArtist,n=t.setSongOrArtist,l=t.shouldFocus,d=Object(s.useState)(null),u=Object(p.a)(d,2),m=u[0],y=u[1],b=Object(s.useState)(!0),g=Object(p.a)(b,2),j=g[0],x=g[1],O=Object(s.useRef)(null),w=function(t,e){var i,r,a;0===t.depth?e&&n(st):1===t.depth?(e&&n({value:t.data.name,label:t.data.name,type:"artist"}),i="Artist: "+t.data.name,r="Words altered in Kidz Bop songs by ".concat(j?L(t.data.name):t.data.name)):2===t.depth?(i="Artist: "+t.parent.data.name,r="Word: "+(j?L(t.data.name):t.data.name),a="Songs that ".concat(t.parent.data.name," say(s) '").concat(j?L(t.data.name):t.data.name,"'")):3===t.depth&&(i="Artist: "+t.parent.parent.data.name,r="Word: "+(j?L(t.parent.data.name):t.parent.data.name),a="Song: "+t.data.name),v.i("#selectedAllArtist").style("font-weight",0===t.depth?400:200).style("border-left",0===t.depth?"var(--light-green) solid 2px":"none").text(i||"All Artists"),v.i("#selectedArtistName").style("font-weight",1===t.depth?400:200).style("border-left",1===t.depth?"var(--light-green) solid 2px":"none").text(r||"Words"),v.i("#selectedBadWord").style("font-weight",2===t.depth?400:200).style("border-left",2===t.depth?"var(--light-green) solid 2px":"none").text(a||"Songs"),v.i("#selectedSong").style("font-weight",3===t.depth?400:200).style("border-left",3===t.depth?"var(--light-green) solid 2px":"none").text(3===t.depth?"Lyrics in '".concat(t.data.name,"' where the word '").concat(j?L(t.parent.data.name):t.parent.data.name,"' is altered"):"Lyrics")},k=function(t){return t.parent===m&&t.r>2*t.data.name.length||t.depth>1},A=function(t){var e=K/t[2];r=t,a.attr("transform",(function(n){return"translate(".concat((n.x-t[0])*e,",").concat((n.y-t[1])*e,")")})),o.attr("transform",(function(n){return"translate(".concat((n.x-t[0])*e,",").concat((n.y-t[1])*e,")")})),o.attr("r",(function(t){return t.r*e}))},N=function(t,e){c=e;var n=i.transition().duration(t.altKey?7500:750).tween("zoom",(function(t){var e=v.e(r,[c.x,c.y,2*c.r]);return function(t){return A(e(t))}}));o.filter((function(t){return t.parent===c||"inline"===this.style.display})).transition(n).style("fill-opacity",(function(t){return t.parent===c?1:0})).on("start",(function(t){t.parent===c&&(this.style.display="inline")})).on("end",(function(t){t.parent!==c&&(this.style.display="none")})),a.filter((function(t){return t.parent===c||"inline"===this.style.display})).transition(n).style("fill-opacity",(function(t){return t.parent===c?1:0})).on("start",(function(t){k(t)&&(this.style.display="inline")})).on("end",(function(t){t.parent!==c&&(this.style.display="none")}))};Object(s.useEffect)((function(){(function(){var t=Object(f.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B();case 2:e=t.sent,y((n={name:"artists",children:e},v.f().size([K,500]).padding(3)(v.c(n).sum((function(t){return t.count})).sort((function(t,e){return e.count-t.count})))));case 5:case"end":return t.stop()}var n}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(s.useEffect)((function(){!l&&c&&2===c.depth&&S()}),[l]),Object(s.useEffect)((function(){if(v.j("#bubbles > *").remove(),m&&O.current){c=m;var t=(i=v.i(O.current).attr("viewBox","-".concat(250," -").concat(250," ").concat(K," ").concat(500)).style("display","block").style("height","80vh").style("margin","0 -14px").attr("text-anchor","middle").style("cursor","pointer").on("click",(function(t){c!==m&&(v.i("#lyrics").style("z-index")>0?S():(w(c.parent,!0),N(t,c.parent)))}))).append("defs").append("filter").attr("id","glow");t.append("feGaussianBlur").attr("stdDeviation","2").attr("result","coloredBlur");var e=t.append("feMerge");return e.append("feMergeNode").attr("in","coloredBlur"),e.append("feMergeNode").attr("in","SourceGraphic"),o=i.append("g").selectAll("circle").data(m.descendants().slice(1)).join("circle").attr("stroke",(function(t){if("function"===typeof P[t.depth])return P[t.depth](t.r)})).attr("fill","transparent").style("display",(function(t){return t.parent===m?"inline":"none"})).on("mouseover",(function(t,e){v.i(t.target).attr("stroke-width",4).style("filter","url(#glow)"),k(e)||v.i("#tooltip").transition().duration(200).style("opacity",1).text(e.data.name)})).on("mousemove",(function(t){v.i("#tooltip").style("left",t.pageX+10+"px").style("top",t.pageY-10+"px")})).on("mouseout",(function(t){v.i(t.target).attr("stroke-width",1).style("filter",null),v.i("#tooltip").transition().duration(200).style("opacity",0)})).on("click",(function(t,e){c!==e&&(w(e,!0),e.depth<3?N(t,e):3===e.depth&&C(e.data),t.stopPropagation())})),a=i.append("g").attr("pointer-events","none").attr("text-anchor","middle").selectAll("text").data(m.descendants()).join("text").attr("class",(function(t){return"label-text-node-depth-"+t.depth})).style("font",(function(t){return 1===t.depth?"8px Lato":"12px Lato"})).style("fill","white").style("fill-opacity",(function(t){return t.parent===m?1:0})).style("display",(function(t){return k(t)?"inline":"none"})).text((function(t){var e=t.children?t.data.name:t.data.songName;return j?L(e):e})),v.i("#scrollApp").append("div").attr("id","tooltip").attr("style","position: absolute; opacity: 0;").style("color","white").style("background-color","#334e68bb").style("padding","8px").style("border-radius","4px"),v.i("#selectedAllArtist").style("font-weight","400").style("border-left","var(--light-green) solid 2px"),v.i("#svg-container").append("div").attr("id","lyrics").style("z-index","-10").style("position","fixed").style("opacity","0").style("pointer-events","none").style("width","40vw").style("height","60vh").style("left","50%").style("top","50%").style("overflow","auto").style("color","var(--light-text)").style("font","16px Lato").style("background-color","var(--dark-secondary)").style("padding","24px").style("border-radius","12px").style("transform","translate(-50%, -50%)"),v.i("#lyrics").append("button").style("position","absolute").style("right","12px").style("top","12px").text("\xd7").on("click",(function(){S()})),v.i("#lyrics").append("h2").style("margin-top",0).style("text-align","center").attr("id","lyrics-title"),v.i("#scrollApp").append("div").attr("id","lyric-popup-bg").style("background-color","black").style("max-height","100vh").style("max-width","100vw").style("min-height","100vh").style("min-width","100vw").style("position","fixed").style("top","0px").style("left","0px").style("opacity","0").style("z-index","-11").on("click",(function(){S()})),v.i("#lyrics").append("p").style("text-align","center").attr("id","lyrics-year"),v.i("#lyrics").append("div").attr("id","lyrics-content"),A([m.x,m.y,2*m.r]),document.addEventListener("keydown",z),function(){document.removeEventListener("keydown",z)}}}),[m]);var S=function(){v.i("html").style("overflow","auto").style("height","auto"),v.i("#lyric-popup-bg").style("opacity","0").style("z-index","-11"),v.i("#lyrics").transition().duration(200).style("opacity",0).style("z-index",-10).style("pointer-events","none"),w(c,!1)},z=function(t){"Escape"===t.key&&(v.i("#lyrics").style("z-index")>0?S():c!==m&&(w(c.parent,!0),N(t,c.parent)))},C=function(t){v.i("html").style("overflow","hidden").style("height","100%"),v.i("#lyric-popup-bg").style("z-index","8").style("opacity","0.6");var e=t.children.map((function(t){return'<div class="Bubbles-lyricRow">'+function(t){return"<div style='width:45%'>"+"<b>".concat(t.ogArtist,"</b><br />")+('<div class="Bubbles-ogLyric '.concat(t.category,'">')+(j?t.ogLyricHTMLCensored:t.ogLyricHTM))+"</div></div><div class='Bubbles-arrow'>\u2192</div><div style='width:45%'><b style='float:right'>Kidz Bop</b><br /><div class=\"Bubbles-kbLyric\">"+t.kbLyricHTML+"</div></div>"}(t)+"</div>"})).join(""),n=t.children[0],i=n.songName+" by "+n.ogArtist,r="Released in "+n.year+".";v.i("#lyrics-title").style("font-weight","bold").style("margin-bottom",0).text(i),v.i("#lyrics-year").style("margin-top",0).style("margin-bottom",0).text(r),v.i("#lyrics-content").html(e),v.i("#lyrics").transition().duration(200).style("z-index",10).style("opacity",1).style("pointer-events","all")};Object(s.useEffect)((function(){if(e&&m){var t=m.descendants().filter((function(t){return t.data.name===e.value}))[0];t&&(N({},t),w(t,!1))}}),[e,m,N]),Object(s.useEffect)((function(){v.j(".label-text-node-depth-2").text((function(t){var e=t.children?t.data.name:t.data.songName;return j?L(e):e}))}),[j]);return Object(W.jsxs)("div",{className:"Bubbles-container",children:[Object(W.jsxs)("div",{className:"Bubbles-checkbox",children:[Object(W.jsx)("input",{type:"checkbox",id:"bubbleProfanity",checked:j,onChange:function(){x(!j)}}),Object(W.jsx)("label",{for:"bubbleProfanity",children:"Hide Profanity"})]}),Object(W.jsxs)("div",{className:"Bubbles-content",children:[Object(W.jsxs)("div",{children:[Object(W.jsx)("h3",{className:"Bubbles-layer",id:"selectedAllArtist",children:"All Artists"}),Object(W.jsx)("h3",{className:"Bubbles-layer",id:"selectedArtistName",children:"Words"}),Object(W.jsx)("h3",{className:"Bubbles-layer",id:"selectedBadWord",children:"Songs"}),Object(W.jsx)("h3",{className:"Bubbles-layer",id:"selectedSong",children:"Lyrics"})]}),Object(W.jsx)("div",{id:"svg-container",style:{width:"100%"},children:Object(W.jsx)("svg",{className:"d3-component",width:"100%",height:"100%",ref:O,id:"bubbles"})})]})]})},J=(n(157),{control:function(t){return Object(g.a)(Object(g.a)({},t),{},{backgroundColor:"var(--dark)",color:"var(--light-text)",border:"none",borderRadius:"0",borderBottom:"2px solid var(--light-green)",boxShadow:"none","&:hover":{borderBottom:"2px solid var(--blue)"}})},placeholder:function(t){return Object(g.a)(Object(g.a)({},t),{},{backgroundColor:"var(--dark)",color:"var(--dark-text)"})},singleValue:function(t){return Object(g.a)(Object(g.a)({},t),{},{color:"var(--light-text)"})},indicatorSeparator:function(){return{display:"none"}},dropdownIndicator:function(t){return Object(g.a)(Object(g.a)({},t),{},{color:"var(--light-green)","&:hover":{color:"var(--blue)"}})},input:function(t){return Object(g.a)(Object(g.a)({},t),{},{color:"var(--light-text)"})},menu:function(t){return Object(g.a)(Object(g.a)({},t),{},{backgroundColor:"var(--dark)",color:"var(--light-text)"})},option:function(t,e){return Object(g.a)(Object(g.a)({},t),{},{fontSize:"16px",color:"var(--light-text)",backgroundColor:e.isSelected?"var(--blue)":e.isFocused?"var(--dark-green)":"var(--dark)"})}}),V=function(t){var e=t.shouldFocus,n=Object(s.useState)(null),i=Object(p.a)(n,2),r=i[0],a=i[1],o=Object(s.useState)([]),c=Object(p.a)(o,2),l=c[0],d=c[1];return Object(s.useEffect)((function(){(function(){var t=Object(f.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C();case 2:e=t.sent,d(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(W.jsxs)("div",{className:"Bubbles-all",children:[Object(W.jsx)("div",{className:"App-escape",children:"press ESC to zoom out"}),Object(W.jsxs)("div",{className:"App-header",children:["What's",Object(W.jsx)(j.a,{className:"App-select",autoFocus:e,placeholder:"your favorite artist",options:Object(y.a)(l),value:r,onChange:a,styles:J}),"spitting?"]}),Object(W.jsx)("div",{className:"App-header",style:{margin:0},children:Object(W.jsx)(Y,{shouldFocus:e,songOrArtist:r,setSongOrArtist:a})}),Object(W.jsx)("div",{className:"App-data",children:"data from The Pudding (https://github.com/the-pudding/data/tree/master/kidz-bop)"})]})},G=(n(171),n.p+"static/media/demo0.b37bdfc9.gif"),U=n.p+"static/media/demo1.cf4fdfdd.gif",X=n.p+"static/media/demo2.c3f91497.gif",_=n.p+"static/media/demo3.d3482ee8.gif",Z=n(17),q=function(){return Object(W.jsxs)("div",{className:"IntroStep",children:[Object(W.jsx)("div",{className:"header",children:"Adultz Bopz"}),Object(W.jsx)("div",{className:"desc",children:"An interactive data visualization tool to understand how Kidz Bop alters or censors pop music for kids."}),Object(W.jsx)("div",{className:"notice",children:"Note: The following visualizations include curse words and are censored by default, but you can explore the content and language."}),Object(W.jsx)(Z.b,{className:"launch-button",to:"/",children:"View our project page here."})]})},Q=function(){return Object(W.jsxs)("div",{className:"Step2",children:[Object(W.jsx)("h2",{className:"Step2-p",children:"All the songs by a certain artist are grouped together in a bubble with a label of their name. For smaller artists, you can hover over their bubble to see which artist it is."}),Object(W.jsx)("img",{className:"center-image",src:G})]})},$=function(){return Object(W.jsxs)("div",{className:"Step2",children:[Object(W.jsx)("h2",{className:"Step2-p",children:"Clicking on an artists bubble takes you inside to show all the songs by a certain artist grouped by their altered or censored word."}),Object(W.jsx)("img",{className:"center-image",src:U})]})},tt=function(){return Object(W.jsxs)("div",{className:"Step2",children:[Object(W.jsx)("h2",{className:"Step2-p",children:"Clicking on an word bubble shows all the songs from that artist with the censored word you clicked."}),Object(W.jsx)("img",{className:"center-image",src:X})]})},et=function(){return Object(W.jsxs)("div",{className:"Step2",children:[Object(W.jsx)("h2",{className:"Step2-p",children:"You can click on each song to reveal the original and Kids Bop lyrics."}),Object(W.jsx)("img",{className:"center-image",src:_})]})},nt=(n(174),n(25)),it=n.n(nt),rt=(n(175),function(t){var e,n,i=t.year,r=t.onChange;return Object(W.jsxs)("div",{className:"year-scroller",children:[Object(W.jsx)("div",{id:"yearscroller-id-all",className:it()("single-year",{selected:-1===i}),onClick:function(){return r(-1)},children:"All years"}),(e=2001,n=2019,Array(n-e+1).fill().map((function(t,n){return e+n}))).map((function(t,e){return Object(W.jsx)("div",{id:"yearscroller-id-"+e,className:it()("single-year",{selected:i===t}),onClick:function(){return r(t)},children:t})}))]})}),at=function(){var t=Object(s.useState)(2019),e=Object(p.a)(t,2),n=e[0],i=e[1],r=Object(s.useState)(null),a=Object(p.a)(r,2),o=a[0],c=a[1],l=Object(s.useState)(null),d=Object(p.a)(l,2),u=d[0],m=d[1],y=Object(s.useState)(!0),b=Object(p.a)(y,2),g=b[0],j=b[1],x=Object(s.useRef)(null);Object(s.useEffect)((function(){(function(){var t=Object(f.a)(h.a.mark((function t(){var e,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z();case 2:e=t.sent,c(e),i=S(n,e),m(B(i));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(s.useEffect)((function(){if(null!==o){var t=S(n,o);m(B(t))}}),[n,o]);var O=function(t){var e=A[n].max,i=A[n].min;return v.g().domain([i,e]).range([12,28])(t)},w=function(t){return g?L(t):t},S=function(t,e){return e.children.filter((function(e){var n=e.year;return-1===t||n===t}))[0]},B=function(t){return v.k().tile(v.l).size([800,500]).paddingInner(3).round(!0)(v.c(t).sum((function(t){return t.count})).sort((function(t,e){return e.data.count-t.data.count})))},C=function(){if(u)return Object(W.jsx)("div",{className:"Timeline-legend",children:Object.entries(N).map((function(t,e){var n=Object(p.a)(t,2),i=n[0];n[1];return function(t){var e=u.children.filter((function(e){return e.data.name===t}))[0],n=e?e.children.reduce((function(t,e){return t+e.data.count}),0):0;return{text:t,opacity:e?1:.6,count:n,category:t}}(i)})).sort((function(t,e){return e.count-t.count})).map((function(t){return Object(W.jsxs)("div",{className:"Timeline-legend-item",children:[Object(W.jsx)("div",{className:"circle",style:{backgroundColor:N[t.category](10)}}),Object(W.jsxs)("div",{style:{opacity:t.opacity||1,whiteSpace:"nowrap"},children:[t.text||t.category,Object(W.jsxs)("span",{style:{fontWeight:"200"},children:[" (",t.count,")"]})]})]})}))})};Object(s.useEffect)((function(){v.j("#timeline > *").remove(),v.j("#legend > *").remove();var t=u;if(t){C(),v.i("#scrollApp").append("div").attr("id","tooltip").attr("style","position: absolute; opacity: 0;").style("color","white").style("background-color","#334e68bb").style("padding","8px").style("border-radius","4px");var e=v.i(x.current).attr("viewBox",[0,0,800,500]).style("font","10px sans-serif"),i=e.selectAll("g").data(t.leaves()).join("g").attr("transform",(function(t){return"translate(".concat(t.x0,",").concat(t.y0,")")}));i.append("rect").attr("class","timeline-rect").attr("fill",(function(t){return N[t.parent.data.name](10)})).attr("width",(function(t){return t.x1-t.x0})).attr("height",(function(t){return t.y1-t.y0})).on("mouseover",(function(t,e){v.i(t.target).attr("stroke-width",3).attr("stroke","var(--light-text)"),v.i("#tooltip").transition().duration(200).style("opacity",1).text("'".concat(w(e.data.name),"' was altered in ").concat(e.data.count," Kids Bop lyrics"))})).on("mousemove",(function(t){v.i("#tooltip").style("left",t.pageX+10+"px").style("top",t.pageY-10+"px")})).on("mouseout",(function(t){v.i(t.target).attr("stroke-width",0).style("filter",null),v.i("#tooltip").transition().duration(200).style("opacity",0)})).on("click",(function(t,e){a(),c(e)})),i.append("text").text((function(t){return T(t)?w(t.data.name):""})).attr("id",(function(t){return"word-label-"+t.data.name+"-"+t.data.count+"-"+n})).attr("fill",(function(t){return"var(--light-text)"})).attr("x",3).attr("y","1em").style("font-family","Lato").style("font-size",(function(t){return O(t.data.count).toString()+"pt"||!1})),v.i("#scrollApp").append("div").attr("id","timeline-popup-bg").style("z-index","-10").style("position","fixed").style("opacity","0").style("max-height","100vh").style("max-width","100vw").style("min-height","100vh").style("min-width","100vw").style("background-color","rgb(0,0,0,.8)").style("left",0).style("top",0);var r=function(t,e){v.j(".timeline-popup-right-song-section").remove(),Array.from(v.b(t,(function(t){return t.songName}))).sort((function(t,e){return t[0]<e[0]})).map((function(t,n){var i=t[0],r=v.i(".timeline-popup-right").append("div").attr("class","timeline-popup-right-song-section").attr("id","timeline-popup-right-song-section-"+n);r.append("div").attr("class","timeline-popup-right-song-title").style("background-color",N[e](10)).attr("id","timeline-popup-right-song-title-"+n).text(i),r.append("div").attr("class","timeline-popup-right-lyric-section").attr("id","timeline-popup-right-lyric-section-"+n);var a=v.i("#timeline-popup-right-lyric-section-"+n);t[1].map((function(t,e){var i=a.append("div").attr("class","timeline-popup-right-lyric-item").attr("id","timeline-popup-right-lyric-item-"+n+"-"+e),r=t.kbLyric===k?k:"Kidz Bop Lyric: "+t.kbLyric,o=function(t){var e=t.badword,n=t.ogLyric,i=t.kbLyric;return E(e,n,i)}(t);i.append("div").style("width","45%").append("i").text(t.ogArtist).append("div").attr("class","Bubbles-ogLyric").style("font-style","normal").html(g?o.ogLyricHTMLCensored:o.ogLyricHTML),i.append("b").attr("class","Bubbles-arrow").style("padding-top","4px").text("\u2192"),i.append("div").style("display","flex").style("width","45%").append("i").style("text-align","right").style("width","100%").text("Kidz Bop").append("div").attr("class","Bubbles-kbLyric").style("font-style",r===k?"italic":"normal").style("opacity",r===k?"0.75":"1").html(o.kbLyricHTML)}))}))},a=function(){v.i("html").style("overflow","hidden").style("height","100%"),v.i("#timeline-popup-bg").on("click",(function(){return o()})).transition().duration(200).style("opacity",.6).style("z-index","10"),v.i("#scrollApp").append("div").attr("id","timeline-popup-content").attr("class","timeline-popup-box").style("z-index","-10").style("position","fixed").style("left","10vw").style("top","10vh").style("height","calc(80vh - 64px)").style("width","calc(80vw - 64px)").style("opacity","0"),v.i("#timeline-popup-content").append("div").attr("id","timeline-popup-button").attr("class","timeline-popup-button").style("position","absolute").style("right","12px").style("top","4px").style("text-align","center").style("border-radius","50%").text("\xd7").on("click",(function(t){t.preventDefault(),o()})),v.i("#timeline-popup-content").transition().duration(200).style("opacity",1).style("z-index","11").style("background-color","var(--dark-secondary)").style("color","var(--light-text)"),v.i("#timeline-popup-content").append("div").attr("class","timeline-popup-header").style("padding-top","12px").style("border-radius","12px"),v.i(".timeline-popup-header").append("h2").attr("id","timeline-popup-title").attr("class","timeline-popup-title"),v.i(".timeline-popup-header").append("h3").attr("id","timeline-popup-category").attr("class","timeline-popup-category"),v.i("#timeline-popup-content").append("div").attr("id","timeline-popup-body").attr("class","timeline-popup-flex").style("color","black"),v.i("#timeline-popup-body").append("div").attr("class","timeline-popup-left"),v.i("#timeline-popup-body").append("div").attr("class","timeline-popup-right")},o=function(){v.i("html").style("overflow","auto").style("height","auto"),v.i("#timeline-popup-bg").transition().duration(200).style("opacity","0").style("z-index",-10),v.i("#timeline-popup-content").transition().duration(200).style("opacity","0").style("z-index",-10),v.i(".timeline-popup-left").remove(),v.i(".timeline-popup-right").remove(),v.i(".timeline-popup-title").remove(),v.i(".timeline-popup-category").remove()},c=function(t){v.i(".timeline-popup-header"),v.i("#timeline-popup-title").text("Altered lyrics with '"+(g?L(t.data.name):t.data.name)+"' from "+n),v.i("#timeline-popup-category").text("Category: "+t.data.category).style("color",N[t.data.category](7)),function(t,e){v.j(".timeline-popup-left-item").remove(),v.j(".timeline-popup-subtitle").remove(),v.j(".timeline-popup-right > *").remove(),v.i(".timeline-popup-left").append("h4").attr("class","timeline-popup-subtitle").text("Artists"),v.i(".timeline-popup-right").append("h4").attr("class","timeline-popup-subtitle").text("Songs");var n=Array.from(v.b(t,(function(t){return t.ogArtist}))).sort((function(t,e){return e[1].length-t[1].length}));n.map((function(t,n){v.i(".timeline-popup-left").append("div").attr("class","timeline-popup-left-item").attr("id","timeline-popup-left-"+n).text(t[0]+" ("+t[1].length+")").style("background-color",N[e](t[1].length)).style("border",(function(){return 0===n?"4px solid var(--light-text)":"none"})).on("click",(function(n){n.preventDefault(),v.j(".timeline-popup-right-song-title").remove(),v.j(".timeline-popup-right-lyric-section").remove(),v.j(".timeline-popup-left-item").style("border","none").style("color","var(--dark)"),v.i(n.target).style("border","4px solid var(--light-text)"),r(t[1],e)})).on("mouseover",(function(t){v.i(t.target).style("background-color","var(--light-text)")})).on("mouseout",(function(n){v.i(n.target).style("background-color",N[e](t[1].length))}))}));var i=n[0][1];r(i,e)}(t.data.leaves,t.data.category)};return document.addEventListener("keydown",(function(t){var e=v.i("#timeline-popup-content");"Escape"===t.key&&null!==e.node()&&(e.style("z-index")>=0&&o())})),e.node()}}),[u,g]),Object(s.useEffect)((function(){v.j("*[id^='word-label']").text((function(t){return w(t.data.name)})),v.j(".timeline-rect").on("mouseover",(function(t,e){v.i("#tooltip").transition().duration(200).style("opacity",1).text("'".concat(w(e.data.name),"' was altered in ").concat(e.data.count," Kids Bop lyrics"))}))}),[g]);var T=function(t){var e=O(t.data.count).toString()+"pt",n=v.i("#Test").style("font-size",e).style("font-family","Lato").text(t.data.name).node().getBoundingClientRect(),i=n.width+1,r=n.height,a=t.y1-t.y0;return i<=t.x1-t.x0&&r<=a};return Object(W.jsxs)("div",{className:"page-container",children:[Object(W.jsx)("h1",{className:"title",children:"What's being altered in pop songs over time?"}),Object(W.jsx)("div",{className:"title",children:"Click on each year to see which lyrics by category were altered the most that year."}),Object(W.jsxs)("div",{id:"timeline-wrapper",className:"timeline-container",children:[Object(W.jsx)("div",{className:"timeline-svg-wrapper",children:Object(W.jsx)("svg",{className:"d3-component",width:"800px",height:"500px",x:"10%",ref:x,id:"timeline"})}),Object(W.jsxs)("div",{className:"timeline-middle-column",children:[C(),Object(W.jsxs)("div",{className:"profanity-container",children:[Object(W.jsx)("input",{type:"checkbox",checked:g,onChange:function(){j(!g)},id:"profanity-toggle"}),Object(W.jsx)("label",{for:"profanity-toggle",children:"Hide Curse Words"}),Object(W.jsxs)("div",{className:"timeline-profanity-ack",children:["Profanity Filter provided by ",Object(W.jsx)("a",{class:"timeline-profanity-ack-link",href:"https://github.com/KanoComputing/nodejs-profanity-util",target:"_blank",rel:"noreferrer",children:"Kano Computing's NodeJS Profanity Filter"})]})]})]}),Object(W.jsx)(rt,{year:n,onChange:function(t){return i(t)}})]})]})},ot=n(26),ct=(n(180),function(){return Object(W.jsx)("div",{children:Object(W.jsxs)(ot.Carousel,{dynamicHeight:!1,showStatus:!1,showThumbs:!1,children:[Object(W.jsx)(Q,{}),Object(W.jsx)($,{}),Object(W.jsx)(tt,{}),Object(W.jsx)(et,{})]})})}),st={label:"your favorite artist",value:"all",type:"all"},lt=function(){var t=Object(s.useState)(null),e=Object(p.a)(t,2),n=e[0],i=e[1];return Object(W.jsx)("div",{className:"App",id:"scrollApp",children:Object(W.jsxs)(m.a,{onStepEnter:function(t){var e=t.data;i(e)},children:[Object(W.jsx)(m.b,{data:0,style:{opacity:0===n?1:.2},children:Object(W.jsx)("div",{className:"App-step",style:{height:"100vh",display:"flex",flexDirection:"row"},children:Object(W.jsx)(q,{})})},0),Object(W.jsx)(m.b,{data:1,children:Object(W.jsx)("div",{className:"App-step",style:{padding:0,opacity:1===n?1:.2},children:Object(W.jsx)(at,{})})},1),Object(W.jsx)(m.b,{data:3,children:Object(W.jsx)("div",{className:"App-step",style:{opacity:3===n?1:.2},children:Object(W.jsx)(ct,{})})},3),Object(W.jsx)(m.b,{data:4,children:Object(W.jsx)("div",{className:"App-step",style:{padding:0,opacity:4===n?1:.2},children:Object(W.jsx)(V,{shouldFocus:4===n})})},4)]})})},dt=n.p+"static/media/img1.94870f0e.png",ut=n.p+"static/media/img2.e43fa85e.png",pt=n.p+"static/media/img3.75a7d550.png",mt=n.p+"static/media/img4.000874dd.png",yt=(n(181),function(){return Object(W.jsxs)("div",{className:"About-container",children:[Object(W.jsxs)("div",{className:"About-img-container",children:[Object(W.jsx)("img",{className:"About-img-container-item",src:dt}),Object(W.jsx)("img",{className:"About-img-container-item",src:ut}),Object(W.jsx)("img",{className:"About-img-container-item",src:pt}),Object(W.jsx)("img",{className:"About-img-container-item",src:mt})]}),Object(W.jsx)("div",{className:"About-carousel",children:Object(W.jsxs)(ot.Carousel,{dynamicHeight:!1,showStatus:!1,showThumbs:!1,children:[Object(W.jsxs)("section",{id:"carousel1",className:"About-section",children:[Object(W.jsxs)("div",{children:[Object(W.jsx)("p",{className:"About-title About-white-background",children:"Understanding Kidz Bopz"}),Object(W.jsxs)("p",{className:"About-team About-white-background",children:["Nico Salinas, Shannen Wu ","&"," Jessica Yin"]})]}),Object(W.jsx)(Z.b,{to:"/app",className:"About-launch-button",children:"Launch Visualization App"})]}),Object(W.jsx)("section",{id:"carousel2",className:"About-section About-section-white-background",children:Object(W.jsx)("h2",{children:"ABSTRACT GOES HERE"})}),Object(W.jsx)("section",{id:"carousel3",className:"About-section About-section-white-background",children:Object(W.jsx)("h2",{children:"VIDEO DEMO HERE"})}),Object(W.jsx)("section",{id:"carousel4",className:"About-section About-section-white-background",children:Object(W.jsx)("h2",{children:"INSTALLATION DEMO INSTRUCTIONS"})})]})})]})}),bt=n(5),ht=function(){return Object(W.jsx)(Z.a,{children:Object(W.jsxs)(bt.c,{children:[Object(W.jsx)(bt.a,{path:"/app",children:Object(W.jsx)(lt,{})}),Object(W.jsx)(bt.a,{path:"/",children:Object(W.jsx)(yt,{})})]})})};u.a.render(Object(W.jsx)(l.a.StrictMode,{children:Object(W.jsx)(ht,{})}),document.getElementById("root"))},50:function(t,e,n){}},[[182,1,2]]]);
//# sourceMappingURL=main.68ea850b.chunk.js.map