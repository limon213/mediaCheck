/*
  mediaCheck
  http://github.com/sparkbox/mediaCheck

  Version: 0.4.1, 06-05-2014
  Author: Rob Tarr (http://twitter.com/robtarr)
*/!function(){window.mediaCheck=function(a){var b,c,d,e,f,g,h,i,j;if(i=void 0,j=void 0,d=void 0,c=void 0,e=void 0,f=void 0!==window.matchMedia&&!!window.matchMedia("").addListener)return j=function(a,b){return a.matches?"function"==typeof b.entry&&b.entry():"function"==typeof b.exit&&b.exit(),"function"==typeof b.both?b.both():void 0},d=function(){return i=window.matchMedia(a.media),i.addListener(function(){return j(i,a)}),window.addEventListener("orientationchange",function(){return i=window.matchMedia(a.media),j(i,a)},!1),j(i,a)},d();b={},j=function(a,c){return a.matches?"function"!=typeof c.entry||b[c.media]!==!1&&null!=b[c.media]||c.entry():"function"!=typeof c.exit||b[c.media]!==!0&&null!=b[c.media]||c.exit(),"function"==typeof c.both&&c.both(),b[c.media]=a.matches},c=function(a){var b,c;return b=void 0,b=document.createElement("div"),b.style.width="1em",b.style.position="absolute",document.body.appendChild(b),c=a*b.offsetWidth,document.body.removeChild(b),c},e=function(a,b){var d;switch(d=void 0,b){case"em":d=c(a);break;default:d=a}return d};for(g in a)b[a.media]=null;return h=function(){var b,c,d,f,g;return d=a.media.match(/\((.*)-.*:\s*([\d\.]*)(.*)\)/),b=d[1],f=e(parseInt(d[2],10),d[3]),c={},g=window.outerWidth||document.documentElement.clientWidth,c.matches="max"===b&&f>g||"min"===b&&g>f,j(c,a)},window.addEventListener?window.addEventListener("resize",h):window.attachEvent&&window.attachEvent("onresize",h),h()}}.call(this);