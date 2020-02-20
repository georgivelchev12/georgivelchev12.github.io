"use strict";var viewer;function viewer1(e,t,o,n){viewer=new FWDViewer({divHolderId:"threesixty",skinPath:"uploads/WALK",playListId:"viewerPlaylist",displayType:"responsive",preloaderText:"Loading 3D object:",startDraggingMode:"rotate",showLargeImageVersionOnZoom:"no",useEntireScreenFor3dObject:"no",stopRotationHorizontalAtEnds:"no",stopRotationVerticalAtEnds:"no",addCorrectionForWebKit:"yes",addDragAndSpinSupport:"yes",disableMouseWheelZoom:"no",autoScale:"yes",startAtImage:0,startAtSet:0,viewerWidth:e,viewerHeight:t,imageWidth:o,imageHeight:n,zoomFactor:3,zoomSpeed:.1,dragRotationSpeed:.7,dragAndSpinSpeed:.6,buttonsRotationSpeed:300,slideShowDelay:300,backgroundColor:"#FFFFFF",preloaderFontColor:"#585858",preloaderBackgroundColor:"#FFFFFF",lightBoxWidth:1e3,lightBoxHeight:1e3,lightBoxBackgroundOpacity:.8,lightBoxBackgroundColor:"#000000",buttons:"rotate, pan, roteteleft, rotateright, scrollbar, play, info, link, fullscreen",buttonsToolTips:"Rotate, Move/Pan, Rotate left, Rotate right, Zoom level: , Play/Pause, Info, Custom link, Full screen/Normal screen",controllerHorizontalPosition:"center",controllerVerticalPosition:"bottom",inverseNextAndPrevRotation:"yes",addKeyboardSupport:"yes",slideShowAutoPlay:"no",startSpaceBetweenButtons:10,spaceBetweenButtons:10,startSpaceForScrollBarButtons:20,startSpaceForScrollBar:6,hideControllerDelay:3,controllerMaxWidth:900,controllerBackgroundOpacity:1,controllerOffsetY:0,scrollBarOffsetX:0,scrollBarHandlerToolTipOffsetY:4,zoomInAndOutToolTipOffsetY:-4,buttonsToolTipOffsetY:0,link:"http://www.google.com",buttonToolTipFontColor:"#585858",showNavigator:"no",navigatorPosition:"topright",navigatorWidth:120,navigatorOffsetX:6,navigatorOffsetY:6,navigatorHandlerColor:"#FF0000",navigatorBorderColor:"#AAAAAA",infoWindowBackgroundOpacity:.6,infoWindowBackgroundColor:"#FFFFFF",infoWindowScrollBarColor:"#585858",showMarkersInfo:"yes",markerToolTipOffsetY:2,toolTipWindowMaxWidth:500,showScriptDeveloper:"no",contextMenuLabels:"Rotate, Move/Pan, Rotate left, Rotate right, Zoom in/Zoom out, Play/Pause, Info, Custom link, Full screen/Normal screen",contextMenuBackgroundColor:"#d1cfcf",contextMenuBorderColor:"#8f8d8d",contextMenuSpacerColor:"#acacac",contextMenuItemNormalColor:"#585858",contextMenuItemSelectedColor:"#FFFFFF",contextMenuItemDisabledColor:"#b7b4b4"})}FWDUtils.onReady(function(){var e,t,o,n;$(".image_size")[0];e=$(".container-360").width(),t=$(".container-360").height(),n=1440*(o=$(".container-360").width())/2560,$(".container-360").height()<n&&(o=2560*(n=$(".container-360").height())/1440),viewer1(e,t,o,n)});var controller={initController:function(e){controller.dropdownMenu(),controller.removeHoverOnMobile(),controller.maquetteFunct(e)},maquetteFunct:function maquetteFunct(currentMaquette){var pic=$(".image_size")[0],pic_real_width=2560,pic_real_height=1440,w,h;initWithAndHight(),console.log(w,h),console.log(viewer);var legend=document.querySelector(".legend");legend.style.display="WALK"==currentMaquette||"AERIAL"==currentMaquette?"none":"block";var toggleDoubletap=!0,maquette=$(".maquette").ThreeSixty({totalFrames:61,endFrame:61,currentFrame:1,imgList:".threesixty_images",progress:".bluredImg",imagePath:"uploads/".concat(currentMaquette,"/small_images/"),filePrefix:"",ext:".jpg",height:h,width:w,navigation:!1,responsive:!1,disableSpin:!1,onReady:function(){maquetteControls(),controller.phostoSwipeFunct(),controller.fullScreenFunct()}}),hbase=h,wbase=w;function maquetteControls(){$(".custom_play").bind("click",function(){return maquette.play()}),$(".custom_stop").bind("click",function(){return maquette.stop()}),$(".custom_zoomp").on("click",function(){return zoomIn(1.2)}),$(".custom_zoomm").on("click",function(){return zoomOut(1.2)}),$(".custom_zoomp,.custom_zoomm").on("click",function(){return zoomCentering()}),$(".threesixty").on("wheel",function(e){e.preventDefault(),console.log("smth"),console.log(),console.log(viewer)})}function hammerFunct(elm){var hammertime=new Hammer(elm,{});hammertime.get("pinch").set({enable:!0}),hammertime.on("doubletap pinchend pinchin pinchout",function(ev){var zoomCentAndDisableDrag=function zoomCentAndDisableDrag(inOrOut){eval("zoom"+inOrOut)(1.2),zoomCentering(),maquette.getConfig().ticker=1,maquette.getConfig().drag=!1},evType={pinchin:function(){return zoomCentAndDisableDrag("Out")},pinchout:function(){return zoomCentAndDisableDrag("In")},pinchend:function(){setTimeout(function(){maquette.getConfig().ticker=0,maquette.getConfig().drag=!0},1500)},doubletap:function(){toggleDoubletap=toggleDoubletap?(zoomIn(3),!1):(zoomOut(3),!0),zoomCentering()}};evType[ev.type]()})}function initWithAndHight(){w=$(".container-360").width(),h=w*pic_real_height/pic_real_width,$(".container-360").height()<h&&(h=$(".container-360").height(),w=h*pic_real_width/pic_real_height),$(".maquette,.maquette img").height(h),$(".maquette,.maquette img").width(w)}function zoomCentering(){var e=($(".maquette img").height()-$(".container-360").height())/2+60,t=($(".maquette img").width()-$(".container-360").width())/2;$("html,body").animate({scrollTop:e,scrollLeft:t},0)}function zoomIn(e){h=$(".maquette img").height()*e,w=$(".maquette img").width()*e,4.5*hbase<h&&(h=4.5*hbase,w=4.5*wbase),$(".maquette,.maquette img").height(h),$(".maquette,.maquette img").width(w)}function zoomOut(e){h=$(".maquette img").height()/e,w=$(".maquette img").width()/e,h<hbase&&(h=hbase,w=wbase),$(".maquette,.maquette img").height(h),$(".maquette,.maquette img").width(w)}maquetteControls(),$(window).resize(function(){var e,t,o,n;e=$(".container-360").width(),t=$(".container-360").height(),n=(o=$(".container-360").width())*pic_real_height/pic_real_width,$(".container-360").height()<o&&(o=(n=$(".container-360").height())*pic_real_width/pic_real_height),viewer.stageContainer.style.width=e+"px",viewer.stageContainer.lastChild.style.width=e+"px",viewer.stageContainer.lastChild.firstChild.style.width=e+"px",viewer.stageContainer.style.height=t+"px",viewer.stageContainer.lastChild.style.height=t+"px",viewer.stageContainer.lastChild.firstChild.style.height=t+"px",viewer.originalWidth=e,viewer.originalHeight=t,viewer.stageWidth=e,viewer.stageHeight=t,viewer.props_obj.imageWidth=o,viewer.props_obj.imageHeight=n,console.log(viewer)})},phostoSwipeFunct:function(){document.getElementById("openGalery1").addEventListener("click",function(){var e=document.querySelectorAll(".pswp")[0],t=new PhotoSwipe(e,PhotoSwipeUI_Default,[{src:"http://maquette.planastudio.com/paralleles/uploads/galerie/images/R1.jpg",w:1800,h:1200},{src:"http://maquette.planastudio.com/paralleles/uploads/galerie/images/R2.jpg",w:1800,h:1200},{src:"http://maquette.planastudio.com/paralleles/uploads/galerie/images/R3.jpg",w:1800,h:1200}],{history:!1,focus:!1,showAnimationDuration:0,hideAnimationDuration:0,getDoubleTapZoom:function(e,t){return e?3:t.initialZoomLevel<.7?4:1.33},maxSpreadZoom:3});t.init(),t.invalidateCurrItems(),t.updateSize(!0)})},fullScreenFunct:function(){document.querySelector(".full-screen-btn").addEventListener("click",function(){document.fullScreenElement&&null!==document.fullScreenElement||!document.mozFullScreen&&!document.webkitIsFullScreen?document.documentElement.requestFullScreen?document.documentElement.requestFullScreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen&&document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()})},dropdownMenu:function(){document.querySelector(".dropdown-menu").addEventListener("click",function(e){var t=e.currentTarget;e.target.classList.contains("btn-showMore")?t.classList.contains("active-dropdown")?t.classList.remove("active-dropdown"):t.classList.add("active-dropdown"):t.classList.remove("active-dropdown")})},removeHoverOnMobile:function(){if(window.innerWidth<=1001){if("ontouchstart"in document.documentElement||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints)try{for(var e in document.styleSheets){var t=document.styleSheets[e];if(t.rules)for(var o=t.rules.length-1;0<=o;o--)t.rules[o].selectorText&&t.rules[o].selectorText.match(":hover")&&t.deleteRule(o)}}catch(e){}}}};