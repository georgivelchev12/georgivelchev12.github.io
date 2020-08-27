
let controller = {
  initController: (currentMaquette) => {
    controller.dropdownMenu();
    controller.removeHoverOnMobile();
    controller.maquetteFunct(currentMaquette);
    controller.phostoSwipeFunct();
  },
  maquetteFunct: (currentMaquette) => {
    let widthImage = 2560;
    let heightImage = 1440;
    
    // initWithAndHight();

    let viewer = new FWDViewer({
      //----main----//
      divHolderId: "threesixty",
      skinPath: `uploads/${currentMaquette}`,
      playListId: "viewerPlaylist",
      displayType: "fullscreen",
      preloaderText: "Loading 3D object:",
      startDraggingMode: "rotate",
      showLargeImageVersionOnZoom: "yes",
      useEntireScreenFor3dObject: "no",
      stopRotationHorizontalAtEnds: "no",
      stopRotationVerticalAtEnds: "no",
      addCorrectionForWebKit: "yes",
      addDragAndSpinSupport: "yes",
      disableMouseWheelZoom: "no",
      autoScale: "no",
      startAtImage: 0,
      startAtSet: 0,
      viewerWidth: widthImage,
      viewerHeight: heightImage,
      imageWidth: widthImage,
      imageHeight: heightImage,
      zoomFactor: 3,
      zoomSpeed: 0.1,
      dragRotationSpeed: .7,
      dragAndSpinSpeed: .6,
      buttonsRotationSpeed: 300,
      slideShowDelay: 300,
      backgroundColor: "#FFFFFF",
      preloaderFontColor: "#585858",
      preloaderBackgroundColor: "#FFFFFF",
      //----lightbox-----//
      lightBoxWidth: 1000,
      lightBoxHeight: 1000,
      lightBoxBackgroundOpacity: .8,
      lightBoxBackgroundColor: "#000000",
      //----controller----//
      // buttons: "rotate, pan, roteteleft, rotateright, scrollbar, play, info, link, fullscreen",
      // buttonsToolTips: "Rotate, Move/Pan, Rotate left, Rotate right, Zoom level: , Play/Pause, Info, Custom link, Full screen/Normal screen",
      buttons: "rotate, pan, roteteleft, rotateright, scrollbar, play, fullscreen",
      buttonsToolTips: "Rotate, Move/Pan, Rotate left, Rotate right, Zoom level: , Play/Pause",
      controllerHorizontalPosition: "center",
      controllerVerticalPosition: "bottom",
      inverseNextAndPrevRotation: "yes",
      addKeyboardSupport: "yes",
      slideShowAutoPlay: "no",
      startSpaceBetweenButtons: 10,
      spaceBetweenButtons: 10,
      startSpaceForScrollBarButtons: 20,
      startSpaceForScrollBar: 6,
      hideControllerDelay: 0,
      controllerMaxWidth: 900,
      controllerBackgroundOpacity: 1,
      controllerOffsetY: -500,
      scrollBarOffsetX: 0,
      scrollBarHandlerToolTipOffsetY: 4,
      zoomInAndOutToolTipOffsetY: -4,
      buttonsToolTipOffsetY: 0,
      link: "http://www.google.com",
      buttonToolTipFontColor: "#585858",
      //----navigator----//
      showNavigator: "no",
      navigatorPosition: "topright",
      navigatorWidth: 120,
      navigatorOffsetX: 6,
      navigatorOffsetY: 6,
      navigatorHandlerColor: "#FF0000",
      navigatorBorderColor: "#AAAAAA",
      //----info window----//
      infoWindowBackgroundOpacity: .6,
      infoWindowBackgroundColor: "#FFFFFF",
      infoWindowScrollBarColor: "#585858",
      //----markers-----//
      showMarkersInfo: "no",
      markerToolTipOffsetY: 2,
      toolTipWindowMaxWidth: 500,
      //----context menu----//
      showScriptDeveloper: "no",
      // contextMenuLabels: "Rotate, Move/Pan, Rotate left, Rotate right, Zoom in/Zoom out, Play/Pause, Info, Custom link, Full screen/Normal screen",
      contextMenuLabels: "Rotate, Move/Pan, Rotate left, Rotate right, Zoom in/Zoom out, Play/Pause",
      contextMenuBackgroundColor: "#000",
      contextMenuBorderColor: "#000",
      contextMenuSpacerColor: "#000",
      contextMenuItemNormalColor: "#fff",
      contextMenuItemSelectedColor: "#f00",
      contextMenuItemDisabledColor: "#f00"
    });

    let legend = document.querySelector(".legend");
    if (currentMaquette == "WALK" || currentMaquette == "AERIAL") {
      legend.style.display = "none";
    } else {
      legend.style.display = "block";
    }

    addButtonsEvents();

    window.addEventListener("resize", () => {
      viewer.zoomOut()

      // initWithAndHight();

      //make parent and all inner dives with equal w/h;

      //comment down lines of code later!
      // if (viewer.stageContainer != null && viewer.stageContainer.lastChild) {
      //   viewer.stageContainer.style.width = w + "px"
      //   viewer.stageContainer.style.height = h + "px";
      //   viewer.stageContainer.lastChild.style.width = w + "px"
      //   viewer.stageContainer.lastChild.style.height = h + "px";
      //   viewer.stageContainer.lastChild.firstChild.style.width = w + "px"
      //   viewer.stageContainer.lastChild.firstChild.style.height = h + "px";
      //   $("#threesixty > div > div:nth-child(1) > div:nth-child(6)").width(w)
      //   $("#threesixty > div > div:nth-child(1) > div:nth-child(6)").height(h)
      // }

      // viewer.originalWidth = w;
      // viewer.originalHeight = h;

      // viewer.props_obj.imageWidth = widthImage;
      // viewer.props_obj.imageHeight = heightImage;

    })

    let viewerFunctionality = function (e) {
      if (e.preventDefault) e.preventDefault();
      return {
        pan: () => viewer.pan(),
        rotate: () => viewer.rotate(),
        rotateLeft: () => viewer.rotateLeft(),
        rotateRight: () => viewer.rotateRight(),
        zoomOut: () => viewer.zoomOut(),
        zoomIn: () => viewer.zoomIn(),
        play: () => viewer.play(),
        pause: () => viewer.pause(),
        info: () => viewer.info(),
        fullScreen: () => {
          viewer.controller_do.controllerOffsetY = 0;
          viewer.fullScreen()
        },
        normalScreen: () => {
          console.log(viewer.mainHolder_do);
          viewer.controller_do.controllerOffsetY = -500;
          viewer.normalScreen()}
      };
    }
    function addButtonsEvents() {
      $(".custom_play,.custom_stop").bind("mousedown touchstart", () => {
        $(".custom_play,.custom_stop").toggleClass("hide");
      })
      $(".customFullScreen,.customNormalScreen").bind("mousedown touchstart", () => {
        $(".customFullScreen,.customNormalScreen").toggleClass("hide")
      })
      $(".custom_pan,.custom_rotate").bind("mousedown touchstart", () => {
        $(".custom_pan,.custom_rotate").toggleClass("hide");
      })
      $(".custom_play").bind("mousedown touchstart", (e) => viewerFunctionality(e).play());
      $(".custom_stop").bind("mousedown touchstart", (e) => viewerFunctionality(e).pause());
      $(".custom_zoomp").bind("mousedown touchstart", (e) => viewerFunctionality(e).zoomIn());
      $(".custom_zoomm").bind("mousedown touchstart", (e) => viewerFunctionality(e).zoomOut());
      $(".customFullScreen").bind("mousedown touchstart", (e) => viewerFunctionality(e).fullScreen());
      $(".customNormalScreen").bind("mousedown touchstart", (e) => viewerFunctionality(e).normalScreen());
      $(".custom_pan").bind("mousedown touchstart", (e) => {
        $(".threesixty")[0].style.cursor = "grab";
        viewerFunctionality(e).pan()
      }
      );
      $(".custom_rotate").bind("mousedown touchstart", (e) => {
        $(".threesixty")[0].style.cursor = "ew-resize";
        viewerFunctionality(e).rotate()
      });
    }


    // function initWithAndHight() {
    //   w = $(".container-360").width();
    //   h = $(".container-360").height();
    //   //calculate size of image (fill in container)
    //   widthImage = $(".container-360").width();
    //   heightImage = (widthImage * pic_real_height) / pic_real_width;
    //   if ($(".container-360").height() < widthImage) {
    //     heightImage = $(".container-360").height();
    //     widthImage = (heightImage * pic_real_width) / pic_real_height;
    //   }
    // }
  },
  phostoSwipeFunct: () => {
    let openPhotoSwipe = () => {
      let pswpElement = document.querySelectorAll(".pswp")[0];
      // build items array
      let items = [
        {
          src: "http://maquette.planastudio.com/givors/uploads/galerie/images/NOAHO_GIVORS_VUE_AER_01.jpg",
          w: 1800,
          h: 1200
        },
        {
          src: "http://maquette.planastudio.com/givors/uploads/galerie/images/NOAHO_GIVORS_VUE_PIETONNE_02.jpg",
          w: 1800,
          h: 1200
        },
        // {
        //   src: "http://maquette.planastudio.com/givors/uploads/galerie/images/R3.jpg",
        //   w: 1800,
        //   h: 1200
        // }
      ];

      let options = {
        history: false,
        focus: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0,
        getDoubleTapZoom: (isMouseClick, item) => {
          if (isMouseClick) {
            return 3; //<---- This 4
          } else {
            return item.initialZoomLevel < 0.7 ? 4 : 1.33; //<---- 4 here
          }
        },
        maxSpreadZoom: 3
      };
      let gallery = new PhotoSwipe(
        pswpElement,
        PhotoSwipeUI_Default,
        items,
        options
      );

      gallery.init();
      // sets a flag that slides should be updated
      gallery.invalidateCurrItems();
      // updates the content of slides
      gallery.updateSize(true);
    };
    document
      .getElementById("openGalery1")
      .addEventListener("click", openPhotoSwipe);
  },
  dropdownMenu: () => {

    document.querySelector(".dropdown-menu").addEventListener("click", e => {
      let dropdown = e.currentTarget;
      if (e.target.classList.contains("btn-showMore")) {
        if (dropdown.classList.contains("active-dropdown")) {
          dropdown.classList.remove("active-dropdown");
        } else {
          dropdown.classList.add("active-dropdown");
        }
      } else {
        dropdown.classList.remove("active-dropdown");
      }
    });

  },
  removeHoverOnMobile: () => {
    if (window.innerWidth <= 1001) {
      function hasTouch() {
        return (
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0
        );
      }

      if (hasTouch()) {
        // remove all the :hover stylesheets
        try {
          // prevent exception on browsers not supporting DOM styleSheets properly
          for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
              if (!styleSheet.rules[ri].selectorText) continue;

              if (styleSheet.rules[ri].selectorText.match(":hover")) {
                styleSheet.deleteRule(ri);
              }
            }
          }
        } catch (ex) { }
      }
    }
  }
};