"use strict";var maquetteFunct=function maquetteFunct(currentMaquette){var pic=$(".image_size")[0],pic_real_width=pic.naturalWidth,pic_real_height=pic.naturalHeight,w,h;initWithAndHight();var legend=document.querySelector(".legend");legend.style.display="WALK"==currentMaquette||"AERIAL"==currentMaquette?"none":"block",document.querySelector(".bluredImg").style.backgroundImage="url(/uploads/".concat(currentMaquette,"/1.1.jpg)");var toggleDoubletap=!0,maquette=$(".maquette").ThreeSixty({totalFrames:61,endFrame:61,currentFrame:1,imgList:".threesixty_images",progress:".bluredImg",imagePath:"uploads/".concat(currentMaquette,"/"),filePrefix:"",ext:".jpg",height:h,width:w,navigation:!1,responsive:!1,disableSpin:!1,onReady:function(){setTimeout(function(){return hammerFunct($(".threesixty")[0])},1400),maquetteControls(),controller.phostoSwipeFunct(),controller.fullScreenFunct()}}),hbase=h,wbase=w;function maquetteControls(){$(".custom_play").bind("click",function(){return maquette.play()}),$(".custom_stop").bind("click",function(){return maquette.stop()}),$(".custom_zoomp").on("click",function(){return zoomIn(1.2)}),$(".custom_zoomm").on("click",function(){return zoomOut(1.2)}),$(".custom_zoomp,.custom_zoomm").on("click",function(){return zoomCentering()}),$(".threesixty").on("wheel",function(t){t.preventDefault(),t.originalEvent.deltaY<0?zoomIn(1.2):zoomOut(1.2),zoomCentering()})}function hammerFunct(elm){var hammertime=new Hammer(elm,{});hammertime.get("pinch").set({enable:!0}),hammertime.on("doubletap pinchend pinchin pinchout",function(ev){var zoomCentAndDisableDrag=function zoomCentAndDisableDrag(inOrOut){eval("zoom"+inOrOut)(1.2),zoomCentering(),maquette.getConfig().ticker=1,maquette.getConfig().drag=!1},evType={pinchin:function(){return zoomCentAndDisableDrag("Out")},pinchout:function(){return zoomCentAndDisableDrag("In")},pinchend:function(){setTimeout(function(){maquette.getConfig().ticker=0,maquette.getConfig().drag=!0},1500)},doubletap:function(){toggleDoubletap=toggleDoubletap?(zoomIn(3),!1):(zoomOut(3),!0),zoomCentering()}};evType[ev.type]()})}function initWithAndHight(){w=$(".container-360").width(),h=w*pic_real_height/pic_real_width,$(".container-360").height()<h&&(h=$(".container-360").height(),w=h*pic_real_width/pic_real_height),$(".maquette,.maquette img").height(h),$(".maquette,.maquette img").width(w)}function zoomCentering(){var t=($(".maquette img").height()-$(".container-360").height())/2+60,e=($(".maquette img").width()-$(".container-360").width())/2;$("html,body").animate({scrollTop:t,scrollLeft:e},0)}function zoomIn(t){h=$(".maquette img").height()*t,w=$(".maquette img").width()*t,4.5*hbase<h&&(h=4.5*hbase,w=4.5*wbase),$(".maquette,.maquette img").height(h),$(".maquette,.maquette img").width(w)}function zoomOut(t){h=$(".maquette img").height()/t,w=$(".maquette img").width()/t,h<hbase&&(h=hbase,w=wbase),$(".maquette,.maquette img").height(h),$(".maquette,.maquette img").width(w)}$(window).resize(function(){return initWithAndHight()})};