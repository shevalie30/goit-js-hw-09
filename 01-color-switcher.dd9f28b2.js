const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");let l=null;function n(){o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,l=setInterval(n,1e3),n(),console.log("start")})),t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,clearInterval(l),console.log("stop")}));
//# sourceMappingURL=01-color-switcher.dd9f28b2.js.map
