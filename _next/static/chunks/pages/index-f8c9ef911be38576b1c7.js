(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8977:function(e,t,n){var r=n(3645)((function(e){return e[1]}));r.push([e.id,".black_overlay {\n  display: none;\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  z-index: 1001;\n  -moz-opacity: 0.8;\n  opacity: 0.8;\n  filter: alpha(opacity=80);\n}\n.white_content {\n  display: none;\n  position: absolute;\n  top: 1%;\n  left: 5%;\n  padding: 5px;\n  border: 1px solid black;\n  background-color: black;\n  z-index: 1002;\n  overflow: auto;\n}\n.beardScroll {\n  overflow: auto;\n  position: absolute;\n  top: 30px;\n  left: 0%;\n  width: 400px;\n  height: 450px;\n  z-index: 100;\n  border: 1px black solid;\n}\n.notQuiteBeardScroll {\n  overflow: auto;\n  position: absolute;\n  top: 530px;\n  left: 0%;\n  width: 400px;\n  height: 250px;\n  z-index: 100;\n  border: 1px black solid;\n}\n.siteInfo {\n  position: absolute;\n  top: 0%;\n  left: 50%;\n  width: 400px;\n  padding-top: 30px;\n}\n.beardTop {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  font-size: 14pt;\n  padding: 3px 15px;\n}\n.beardNotTop {\n  position: absolute;\n  top: 500px;\n  left: 0%;\n  font-size: 14pt;\n  padding: 3px 15px;\n}\n",""]),e.exports=r},3645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"===typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},6977:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return b},default:function(){return j}});var r=n(6265),i=n(7294),o=n(5893),a=n(4593),s=n(4565),l=n.n(s),c=n(4155),d="Bearded Developers",u="The Developers You Love To Never See",p=d+" - "+u,h="/images/bearded.jpg",f=function(){var e=new Date;return e.setMinutes(e.getMinutes()+30),e.setMinutes(0,0,0),e.toISOString()}(),m=function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.q,{children:[(0,o.jsx)("title",{children:p}),(0,o.jsx)("meta",{charSet:"utf-8"}),(0,o.jsx)("meta",{name:"description",content:u}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:title",content:p}),(0,o.jsx)("meta",{property:"og:site_name",content:d}),(0,o.jsx)("meta",{property:"og:description",content:u}),(0,o.jsx)("meta",{property:"og:url",content:c.env.appUrl}),(0,o.jsx)("meta",{property:"og:image",content:h}),(0,o.jsx)("meta",{property:"og:locale",content:"default"}),(0,o.jsx)("meta",{property:"og:updated_time",content:f}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:title",content:p}),(0,o.jsx)("meta",{name:"twitter:description",content:u}),(0,o.jsx)("meta",{name:"twitter:image",content:h}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png?v=2.0"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png?v=2.0"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png?v=2.0"}),(0,o.jsx)("link",{rel:"manifest",href:"/site.webmanifest?v=2.0"}),(0,o.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg?v=2.0",color:"#5bbad5"}),(0,o.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico?v=2.0"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,o.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,o.jsx)("style",{children:l()}),(0,o.jsx)("script",{children:"\n    document.addEventListener('DOMContentLoaded', function() {\n      var links = document.getElementsByClassName('beard');\n      for (var i=0; i<links.length; i++) {\n        var link = links[i];\n        link.addEventListener('click', function(e) {\n          document.getElementById('lightA').innerHTML='<img border=0 src=\"' + e.currentTarget.dataset.beard + '\" />';\n          document.getElementById('light').style.display='block';\n          document.getElementById('fade').style.display='block';\n        })\n      };\n    });\n\n    document.addEventListener('DOMContentLoaded', function() {\n      var link = document.getElementById('lightA');\n      link.addEventListener('click', function() {\n        document.getElementById('light').style.display = \"none\";\n        document.getElementById('lightA').innerHTML = \"\";\n        document.getElementById('fade').style.display = \"none\";\n      })\n    });"}),(0,o.jsx)("body",{style:{width:"900px",margin:"auto 0"}})]}),e.children,(0,o.jsx)("div",{id:"light",className:"white_content",children:(0,o.jsx)("a",{id:"lightA",title:"Click here to revert to the original state.",href:"#",onClick:"hideBeard()"})}),(0,o.jsx)("div",{id:"fade",className:"black_overlay",title:"Click on the image to revert to the original state."}),(0,o.jsxs)("div",{className:"siteInfo",children:[">>>>>>>>>>>>>>>>>>>>>>>>>>>>>",(0,o.jsx)("br",{}),(0,o.jsx)("small",{children:"The > were intentional just to pay homage to all the low budget websites out there."}),(0,o.jsxs)("p",{children:["Qualifications: (Thanks david!)",(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"White Shirt"}),(0,o.jsx)("li",{children:"Fucked up hair"}),(0,o.jsx)("li",{children:"Listless expression"}),(0,o.jsx)("li",{children:"A beard (of course)"})]})]}),(0,o.jsxs)("p",{children:["Submit your photo entry to"," ",(0,o.jsx)("script",{children:"s='%3C%73%63%72%69%70%74%3E%76%61%72%20%74%2C%73%3D%27%27%3B%74%3D%22%36%34%36%46%36%33%37%35%36%44%36%35%36%45%37%34%32%45%37%37%37%32%36%39%37%34%36%35%32%38%32%32%33%43%36%31%32%30%32%30%36%38%37%32%36%35%36%36%33%44%35%43%32%32%36%44%36%31%36%39%36%43%37%34%36%46%33%41%36%32%36%35%36%31%37%32%36%34%36%35%36%34%36%34%36%35%37%36%36%35%36%43%36%46%37%30%36%35%37%32%37%33%34%30%36%37%36%44%36%31%36%39%36%43%32%45%36%33%36%46%36%44%35%43%32%32%32%30%32%30%33%45%36%32%36%35%36%31%37%32%36%34%36%35%36%34%36%34%36%35%37%36%36%35%36%43%36%46%37%30%36%35%37%32%37%33%34%30%36%37%36%44%36%31%36%39%36%43%32%45%36%33%36%46%36%44%33%43%32%46%36%31%33%45%32%32%32%39%33%42%22%3B%66%6F%72%28%69%3D%30%3B%69%3C%74%2E%6C%65%6E%67%74%68%3B%69%2B%3D%32%29%7B%73%20%2B%3D%20%75%6E%65%73%63%61%70%65%28%27%25%27%2B%74%2E%73%75%62%73%74%72%28%69%2C%32%29%29%7D%3B%65%76%61%6C%28%73%29%3B%3C%2F%73%63%72%69%70%74%3E';document.write(unescape(s));"}),(0,o.jsx)("noscript",{children:(0,o.jsxs)("a",{href:"&#109&#97&#105&#108&#116&#111&#58&#98&#101&#97&#114&#100&#101&#100&#100&#101&#118&#101&#108&#111&#112&#101&#114&#115&#64&#103&#109&#97&#105&#108&#46&#99&#111&#109",children:[(0,o.jsx)("b",{style:{color:"black",backgroundColor:"#ffff66 "},children:"&#98&#101&#97&#114&#100&#101&#100&#100&#101&#118&#101&#108&#111&#112&#101&#114&#115"}),"&#64&#103&#109&#97&#105&#108&#46&#99&#111&#109"]})})]}),(0,o.jsx)("small",{children:(0,o.jsx)("a",{href:"https://github.com/beardeddevelopers",children:"See source code"})})]}),(0,o.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-1488198-3"}),(0,o.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', 'UA-1488198-3', { page_path: window.location.pathname });\n            "}})]})};function g(e){var t=e.id,n=e.name,r=e.avatar,i=e.image,a=e.isBeardedDev;return(0,o.jsxs)(o.Fragment,{children:[a?(0,o.jsxs)("div",{children:[(0,o.jsx)("a",{className:"beard","data-beard":i,href:"#",children:(0,o.jsx)("img",{border:"0",alt:"",src:r})}),"Yup, it's bearded developer #"+t+". ("+n+")"]}):(0,o.jsxs)("div",{children:[(0,o.jsx)("a",{className:"beard","data-beard":i,href:"#",children:(0,o.jsx)("img",{border:"0",alt:"",src:r})}),"It's close-bearded developer #"+t+". ("+n+")"]}),(0,o.jsx)("br",{})]})}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=!0;function j(e){var t=e.beards,n=t.filter((function(e){return 1==e.isBeardedDev})),r=t.filter((function(e){return 0==e.isBeardedDev}));return(0,o.jsxs)(m,{children:[(0,o.jsx)("div",{className:"beardTop",children:(0,o.jsxs)("div",{title:"These bearded developers completely fulfill all four requirements!",children:[n.length," Pure Beards!"]})}),(0,o.jsx)("div",{className:"beardScroll",children:n.map((function(e){return(0,i.createElement)(g,v(v({},e),{},{key:e.id}))}))}),(0,o.jsx)("div",{className:"beardNotTop",children:(0,o.jsxs)("div",{title:"These bearded developers don't quite fulfill all four requirements, but they are here nonetheless!",children:[r.length," Close Beards! ",(0,o.jsx)("small",{children:"(missing one of the big 4)"})]})}),(0,o.jsx)("div",{className:"notQuiteBeardScroll",children:r.map((function(e){return(0,i.createElement)(g,v(v({},e),{},{key:e.id}))}))})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6977)}])},4155:function(e){var t,n,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var s,l=[],c=!1,d=-1;function u(){c&&s&&(c=!1,s.length?l=s.concat(l):d=-1,l.length&&p())}function p(){if(!c){var e=a(u);c=!0;for(var t=l.length;t;){for(s=l,l=[];++d<t;)s&&s[d].run();d=-1,t=l.length}s=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function f(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||c||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},4565:function(e,t,n){var r=n(8977);e.exports="string"===typeof r?r:r.toString()}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);