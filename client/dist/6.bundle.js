(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{205:function(e,n,t){"use strict";t.r(n);var i,a,o,c,r,l,d,s,u=t(3),m=t.n(u),p=t(1),f=t.n(p),h=t(0),x=t.n(h),b=t(2),y=b.a.div(i||(i=f()(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 125px;\n  height: 695px;\n  top: 2rem;\n  position: absolute;\n"]))),g=b.a.div(a||(a=f()(["\n  box-sizing: border-box;\n  display: inline-block;\n  overflow: hidden;\n  width: 100px;\n  height:652px;\n  margin: 2px auto 2px;\n"]))),v=b.a.div(o||(o=f()(["\n  display: flex;\n  justify-content: center;\n  width: 80px;\n  height: 80px;\n  border-radius: 4px;\n  border: 1px solid black;\n  overflow: hidden;\n  margin: 7px auto;\n  box-shadow: 0px 0px 3px black;\n"]))),w=b.a.img(c||(c=f()(["\n  object-fit: cover;\n  width: 90px;\n  cursor: pointer;\n"]))),E=t(53),I=function(){var e=x.a.useContext(E.a),n=m()(e.currStyle,1)[0],t=m()(e.imgIndex,2),i=t[0],a=t[1],o=m()(e.expanded,1)[0],c=Object(h.useState)(0),r=m()(c,2),l=r[0],d=r[1],s=Object(h.useState)(6),u=m()(s,2),p=u[0],f=u[1],b=Object(h.useState)(0),I=m()(b,2),j=I[0],B=I[1],N=n.photos.length-7;Object(h.useEffect)((function(){S(0),k()}),[]),Object(h.useEffect)((function(){C(),S(i),k()}),[j,o]),Object(h.useEffect)((function(){var e=document.getElementById("vThumb-container");e.style.display=o?"none":"flex"}),[o]);var k=function(){var e=document.getElementById("vThumb-arrow-up"),t=document.getElementById("vThumb-arrow-down");n.photos.length<=7?(e.style.visibility="hidden",t.style.visibility="hidden"):0===l?e.style.visibility="hidden":l===N?t.style.visibility="hidden":(e.style.visibility="visible",t.style.visibility="visible")},C=function(){var e=document.getElementsByClassName("imgFrame");Array.from(e).forEach((function(e){e.style.transform="translateY(".concat(j,"px)"),e.style.transitionTimingFunction="ease-in",e.style.transition=".3s"}))},O=function(e){"up"===e?(B(j+90),d(l-1),f(p-1),N!==p&&i!==p||a(i-1)):"down"===e&&(B(j-90),d(l+1),f(p+1),N!==l&&i!==l||a(i+1))},S=function(e){var n=document.getElementsByClassName("thumbImg");Array.from(n).forEach((function(e){e.parentNode.style.boxShadow="0px 0px 3px #000",e.parentNode.style.border="1px solid #000"})),document.getElementById("vThumb".concat(e)).parentNode.style.boxShadow="0px 0px 8px #fff",document.getElementById("vThumb".concat(e)).parentNode.style.border="1px solid #fff",a(e)};return x.a.createElement(y,{id:"vThumb-container"},x.a.createElement("svg",{id:"vThumb-arrow-up",alt:"arrow up",onClick:function(){return O("up")},width:"30",height:"30","aria-hidden":"true",focusable:"false","data-icon":"chevron-up",viewBox:"0 0 448 512"},x.a.createElement("path",{fill:"currentColor",d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"})),x.a.createElement(g,null,n.photos.map((function(e,n){return x.a.createElement(v,{key:n,className:"imgFrame"},x.a.createElement(w,{src:e.thumbnail_url,id:"vThumb".concat(n),alt:"thumbnail number ".concat(n),className:"thumbImg",onClick:function(){return S(n)}}))}))),x.a.createElement("svg",{id:"vThumb-arrow-down",alt:"arrow down",onClick:function(){return O("down")},width:"30",height:"30","aria-hidden":"true",focusable:"false","data-icon":"chevron-down",viewBox:"0 0 448 512"},x.a.createElement("path",{fill:"currentColor",d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"})))},j=b.a.div(r||(r=f()(["\n  height: auto;\n  width: 60px;\n\n  display: none;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  position: absolute;\n  top: 4rem;\n  left: 20px;\n"]))),B=b.a.div(l||(l=f()(["\n  width: 45px;\n  height: 45px;\n  margin: 4px;\n  overflow: hidden;\n  border-radius: 2px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),N=b.a.img(d||(d=f()(["\n  width: 70px;\n  object-fit: cover;\n  filter: grayscale(100%);\n  cursor: pointer;\n"]))),k=function(){var e=x.a.useContext(E.a),n=m()(e.currStyle,1)[0],t=m()(e.imgIndex,2),i=t[0],a=t[1],o=m()(e.expanded,1)[0];Object(h.useEffect)((function(){var e=document.getElementById("icon-container");e.style.display=o?"flex":"none"}),[o]),Object(h.useEffect)((function(){c()}),[i]);var c=function(){var e=document.getElementsByClassName("icon-img");Array.from(e).forEach((function(e){e.parentNode.style.boxShadow="0px 0px 3px #000",e.parentNode.style.border="1px solid #000",e.style.filter="grayscale(100%)"})),document.getElementById("vIcon".concat(i)).parentNode.style.boxShadow="0px 0px 8px #fff",document.getElementById("vIcon".concat(i)).parentNode.style.border="1px solid #fff",document.getElementById("vIcon".concat(i)).style.filter="grayscale(0%)"};return x.a.createElement(j,{id:"icon-container"},n.photos.map((function(e,n){return x.a.createElement(B,{key:n,className:"icon-frame"},x.a.createElement(N,{src:e.thumbnail_url,id:"vIcon".concat(n),alt:"icon number ".concat(n),className:"icon-img",onClick:function(){a(n)}}))})))},C=Object(h.lazy)((function(){return t.e(5).then(t.bind(null,204))})),O=b.a.main(s||(s=f()(["\n  width: 880px;\n  position: relative;\n  transition-timing-function: 'ease-in';\n  transition: '.3s';\n"])));n.default=function(){var e=x.a.useContext(E.a),n=m()(e.expanded,1)[0];return Object(h.useEffect)((function(){var e=document.getElementById("image-gal-container");n?(e.style.width="1280px",e.style.height="800px"):(e.style.width="880px",e.style.height="")}),[n]),x.a.createElement(O,{id:"image-gal-container"},x.a.createElement(h.Suspense,{fallback:x.a.createElement("div",null,"Loading...")},x.a.createElement(C,null)),x.a.createElement(I,null),x.a.createElement(k,null))}}}]);