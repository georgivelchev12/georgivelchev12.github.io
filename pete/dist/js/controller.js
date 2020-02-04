"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var controller={initController:function(){controller.removeHoverOnMobile(),controller.maquetteFunct()},maquetteFunct:function maquetteFunct(){var pic=$(".image_size")[0],pic_real_width=pic.naturalWidth,pic_real_height=pic.naturalHeight,w,h;initWithAndHight();var toggleDoubletap=!0,maquette=$(".maquette").ThreeSixty({totalFrames:61,endFrame:61,currentFrame:1,imgList:".threesixty_images",progress:".bluredImg",imagePath:"uploads/WALK/",filePrefix:"",ext:".jpg",height:h,width:w,navigation:!1,responsive:!1,disableSpin:!1,onReady:function(){setTimeout(function(){return hammerFunct($(".threesixty")[0])},1400),maquetteControls(),controller.dropdownMenu(),controller.phostoSwipeFunct(),controller.fullScreenFunct()}});$(".maq-change").click(function(e){toggleDoubletap=!0,initWithAndHight();var t=$(e.target).attr("data-maquette");$(".loader")[0].style.display="block";var n=document.querySelector(".legend");n.style.display="WALK"==t||"AERIAL"==t?"none":"block",maquette=$(".maquette").ThreeSixty({totalFrames:61,endFrame:61,currentFrame:1,imgList:".threesixty_images",progress:".loader",imagePath:"uploads/".concat(t,"/"),filePrefix:"",ext:".jpg",height:h,width:w,navigation:!1,responsive:!1,disableSpin:!0}),$(".maq-change").removeClass("active"),$("a[data-maquette ="+t+"]").addClass("active")});var hbase=h,wbase=w;function maquetteControls(){$(".custom_play").bind("click",function(){return maquette.play()}),$(".custom_stop").bind("click",function(){return maquette.stop()}),$(".custom_zoomp").on("click",function(){return zoomIn(1.2)}),$(".custom_zoomm").on("click",function(){return zoomOut(1.2)}),$(".custom_zoomp,.custom_zoomm").on("click",function(){return zoomCentering()}),$(".threesixty").on("wheel",function(e){e.preventDefault(),e.originalEvent.deltaY<0?zoomIn(1.2):zoomOut(1.2),zoomCentering()})}function hammerFunct(elm){var hammertime=new Hammer(elm,{});hammertime.get("pinch").set({enable:!0}),hammertime.on("doubletap pinchend pinchin pinchout",function(ev){var zoomCentAndDisableDrag=function zoomCentAndDisableDrag(inOrOut){eval("zoom"+inOrOut)(1.2),zoomCentering(),maquette.getConfig().ticker=1,maquette.getConfig().drag=!1},evType={pinchin:function(){return zoomCentAndDisableDrag("Out")},pinchout:function(){return zoomCentAndDisableDrag("In")},pinchend:function(){setTimeout(function(){maquette.getConfig().ticker=0,maquette.getConfig().drag=!0},1500)},doubletap:function(){toggleDoubletap=toggleDoubletap?(zoomIn(3),!1):(zoomOut(3),!0),zoomCentering()}};evType[ev.type]()})}function initWithAndHight(){w=$(".container-360").width(),h=w*pic_real_height/pic_real_width,$(".container-360").height()<h&&(h=$(".container-360").height(),w=h*pic_real_width/pic_real_height),$(".maquette,.maquette img").height(h),$(".maquette,.maquette img").width(w)}function zoomCentering(){var e=($(".maquette img").height()-$(".container-360").height())/2+60,t=($(".maquette img").width()-$(".container-360").width())/2;$("html,body").animate({scrollTop:e,scrollLeft:t},0)}function zoomIn(e){h=$(".maquette img").height()*e,w=$(".maquette img").width()*e,4.5*hbase<h&&(h=4.5*hbase,w=4.5*wbase),$(".maquette,.maquette img").height(h),$(".maquette,.maquette img").width(w)}function zoomOut(e){h=$(".maquette img").height()/e,w=$(".maquette img").width()/e,h<hbase&&(h=hbase,w=wbase),$(".maquette,.maquette img").height(h),$(".maquette,.maquette img").width(w)}$(window).resize(function(){return initWithAndHight()})},phostoSwipeFunct:function(){document.getElementById("openGalery1").addEventListener("click",function(){var e=document.querySelectorAll(".pswp")[0],t=new PhotoSwipe(e,PhotoSwipeUI_Default,[{src:"/uploads/galerie/images/r2.jpg",w:1800,h:1200},{src:"/uploads/galerie/images/r1.jpg",w:1800,h:1200},{src:"/uploads/galerie/images/interior.jpg",w:1800,h:1200}],{history:!1,focus:!1,showAnimationDuration:0,hideAnimationDuration:0,getDoubleTapZoom:function(e,t){return e?3:t.initialZoomLevel<.7?4:1.33},maxSpreadZoom:3});t.init(),t.invalidateCurrItems(),t.updateSize(!0)})},fullScreenFunct:function(){document.querySelector(".full-screen-btn").addEventListener("click",function(){document.fullScreenElement&&null!==document.fullScreenElement||!document.mozFullScreen&&!document.webkitIsFullScreen?document.documentElement.requestFullScreen?document.documentElement.requestFullScreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen&&document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()})},dropdownMenu:function(){function n(){var e=_toConsumableArray(document.querySelector(".dropdown-inner").children).find(function(e){return e.classList.contains("active")}),t=document.querySelector(".legend");"WALK"==e.getAttribute("data-maquette")||"AERIAL"==e.getAttribute("data-maquette")?t.style.display="none":t.style.display="block",o.innerHTML=e.textContent+' <i class="fas fa-chevron-down"></i>'}var o=document.querySelector(".btn-showMore");n(),document.querySelector(".dropdown-menu").addEventListener("click",function(e){var t=e.currentTarget;e.target.classList.contains("btn-showMore")?t.classList.contains("active-dropdown")?t.classList.remove("active-dropdown"):t.classList.add("active-dropdown"):(n(),t.classList.remove("active-dropdown"))}),window.addEventListener("resize",n)},removeHoverOnMobile:function(){if(window.innerWidth<=1001){if("ontouchstart"in document.documentElement||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints)try{for(var e in document.styleSheets){var t=document.styleSheets[e];if(t.rules)for(var n=t.rules.length-1;0<=n;n--)t.rules[n].selectorText&&t.rules[n].selectorText.match(":hover")&&t.deleteRule(n)}}catch(e){}}}};window.addEventListener("load",function(){return controller.initController()});