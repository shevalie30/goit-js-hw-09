!function(){var t={bodyEl:document.querySelector("body"),btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};t.btnStart.addEventListener("click",(function(){t.btnStart.disabled=!0,t.btnStop.disabled=!1,n=setInterval((function(){colorRandom="#".concat(Math.floor(16777215*Math.random()).toString(16)),t.bodyEl.style.background=colorRandom}),1e3)})),t.btnStop.addEventListener("click",(function(){t.btnStart.disabled=!1,t.btnStop.disabled=!0,clearInterval(n)}));var n=null}();
//# sourceMappingURL=01-color-switcher.63dc789e.js.map
