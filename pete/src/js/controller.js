let controller = {
  initController: (currentMaquette) => {
    controller.dropdownMenu();
    controller.removeHoverOnMobile();
    controller.maquetteFunct(currentMaquette);
  },
  maquetteFunct: (currentMaquette) => {
    let pic = $(".image_size")[0];
    let pic_real_width = pic.naturalWidth;
    let pic_real_height = pic.naturalHeight;
    let w, h;

    initWithAndHight();

    let legend = document.querySelector(".legend");
    if (currentMaquette == "WALK" || currentMaquette == "AERIAL") {
        legend.style.display = "none";
    } else {
        legend.style.display = "block";
    }

    document.querySelector('.bluredImg').style.backgroundImage = `url(http://maquette.planastudio.com/paralleles/uploads/${currentMaquette}/1.1.jpg)`;
    let toggleDoubletap = true;

    let maquette = $(".maquette").ThreeSixty({
      totalFrames: 61,
      endFrame: 61,
      currentFrame: 1,
      imgList: ".threesixty_images",
      progress: ".bluredImg",
      imagePath: `uploads/${currentMaquette}/`,
      filePrefix: "",
      ext: ".jpg",
      height: h,
      width: w,
      navigation: false,
      responsive: false,
      disableSpin: false,
      onReady: function() {
        //the set time out is for prevent pinch bug on init maquette
        setTimeout(() => hammerFunct($(".threesixty")[0]), 1400);
        maquetteControls();
        // controller.dropdownMenu();
        controller.phostoSwipeFunct();
        controller.fullScreenFunct();
      }
    });

    // $(".maq-change").click(e => {
    //   toggleDoubletap = true;
    //   initWithAndHight();

    //   let itemAttr = $(e.target).attr("data-maquette");
    //   // $(".loader")[0].style.display = "block";

    //   let legend = document.querySelector(".legend");
    //   if (itemAttr == "WALK" || itemAttr == "AERIAL") {
    //     legend.style.display = "none";
    //   } else {
    //     legend.style.display = "block";
    //   }
    //   document.querySelector('.bluredImg').style.backgroundImage = `url(/uploads/${itemAttr}/1.1.jpg)`;
    //   maquette = $(".maquette").ThreeSixty({
    //     totalFrames: 61,
    //     endFrame: 61,
    //     currentFrame: 1,
    //     imgList: ".threesixty_images",
    //     progress: ".bluredImg",
    //     imagePath: `uploads/${itemAttr}/`,
    //     filePrefix: "",
    //     ext: ".jpg",
    //     height: h,
    //     width: w,
    //     navigation: false,
    //     responsive: false,
    //     disableSpin: false
    //   });

    //   $(".maq-change").removeClass("active");
    //   $("a[data-maquette =" + itemAttr + "]").addClass("active");
    // });

    let hbase = h;
    let wbase = w;

    $(window).resize(() => initWithAndHight());

    function maquetteControls() {
      $(".custom_play").bind("click", () => maquette.play());
      $(".custom_stop").bind("click", () => maquette.stop());

      // Zoom In/Out
      $(".custom_zoomp").on("click", () => zoomIn(1.2));
      $(".custom_zoomm").on("click", () => zoomOut(1.2));

      // Center zoom
      $(".custom_zoomp,.custom_zoomm").on("click", () => zoomCentering());

      // Zoom In/Out + Centering on scroll
      $(".threesixty").on("wheel", event => {
        event.preventDefault();
        event.originalEvent.deltaY < 0 ? zoomIn(1.2) : zoomOut(1.2);
        zoomCentering();
      });
    }
    function hammerFunct(elm) {
      let hammertime = new Hammer(elm, {});

      hammertime.get("pinch").set({ enable: true });

      hammertime.on("doubletap pinchend pinchin pinchout", ev => {
        let zoomCentAndDisableDrag = inOrOut => {
          // its equal to zoomOut(1.2) and zoomIn(1.2)
          eval("zoom" + inOrOut)(1.2);
          zoomCentering();
          maquette.getConfig().ticker = 1;
          maquette.getConfig().drag = false;
        };
        let evType = {
          pinchin: () => zoomCentAndDisableDrag("Out"),
          pinchout: () => zoomCentAndDisableDrag("In"),
          pinchend: () => {
            // it's for prevent maq rotation after the pinch event.
            setTimeout(() => {
              maquette.getConfig().ticker = 0;
              maquette.getConfig().drag = true;
            }, 1500);
          },
          doubletap: () => {
            if (toggleDoubletap) {
              zoomIn(3);
              toggleDoubletap = false;
            } else {
              zoomOut(3);
              toggleDoubletap = true;
            }

            zoomCentering();
          }
        };
        evType[ev.type]();
      });
    }
    function initWithAndHight() {
      w = $(".container-360").width();
      h = (w * pic_real_height) / pic_real_width;
      if ($(".container-360").height() < h) {
        h = $(".container-360").height();
        w = (h * pic_real_width) / pic_real_height;
      }
      $(".maquette,.maquette img").height(h);
      $(".maquette,.maquette img").width(w);
    }
    function zoomCentering() {
      let sTop =
        ($(".maquette img").height() - $(".container-360").height()) / 2 + 60;
      let sLeft =
        ($(".maquette img").width() - $(".container-360").width()) / 2;
      $("html,body").animate({ scrollTop: sTop, scrollLeft: sLeft }, 0);
    }
    function zoomIn(zoomLevel) {
      h = $(".maquette img").height() * zoomLevel;
      w = $(".maquette img").width() * zoomLevel;
      //4.5 is the zoom encrease number
      if (h > hbase * 4.5) {
        h = hbase * 4.5;
        w = wbase * 4.5;
      }
      $(".maquette,.maquette img").height(h);
      $(".maquette,.maquette img").width(w);
    }
    function zoomOut(zoomLevel) {
      h = $(".maquette img").height() / zoomLevel;
      w = $(".maquette img").width() / zoomLevel;
      if (h < hbase) {
        h = hbase;
        w = wbase;
      }
      $(".maquette,.maquette img").height(h);
      $(".maquette,.maquette img").width(w);
    }
  },
  phostoSwipeFunct: () => {
    let openPhotoSwipe = () => {
      let pswpElement = document.querySelectorAll(".pswp")[0];
      // build items array
      let items = [
        {
          src: "http://maquette.planastudio.com/paralleles/uploads/galerie/images/R1.jpg",
          w: 1800,
          h: 1200
        },
        {
          src: "http://maquette.planastudio.com/paralleles/uploads/galerie/images/R2.jpg",
          w: 1800,
          h: 1200
        },
        {
          src: "http://maquette.planastudio.com/paralleles/uploads/galerie/images/R3.jpg",
          w: 1800,
          h: 1200
        }
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
  fullScreenFunct: () => {
    document.querySelector(".full-screen-btn").addEventListener("click", () => {
      let isOnFullScr =
        (document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen);

      if (isOnFullScr) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    });
  },
  dropdownMenu: () => {
    // let showMoreBtn = document.querySelector(".btn-showMore");
    // let activeMaqText = () => {
    //   let currentBtn = [...document.querySelector(".dropdown-inner").children].find(e => e.classList.contains("active"));

    //   let legend = document.querySelector(".legend");
    //   if (
    //     currentBtn.getAttribute("data-maquette") == "WALK" ||
    //     currentBtn.getAttribute("data-maquette") == "AERIAL"
    //   ) {
    //     legend.style.display = "none";
    //   } else {
    //     legend.style.display = "block";
    //   }
    //   showMoreBtn.innerHTML = currentBtn.textContent + ' <i class="fas fa-chevron-down"></i>';
    // };

    // activeMaqText();

    document.querySelector(".dropdown-menu").addEventListener("click", e => {
      let dropdown = e.currentTarget;
      if (e.target.classList.contains("btn-showMore")) {
        if (dropdown.classList.contains("active-dropdown")) {
          dropdown.classList.remove("active-dropdown");
        } else {
          dropdown.classList.add("active-dropdown");
        }
      } else {
        // activeMaqText();
        dropdown.classList.remove("active-dropdown");
      }
    });

    // window.addEventListener("resize", activeMaqText);
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
        } catch (ex) {}
      }
    }
  }
};
// window.addEventListener("load", () => controller.initController("WALK"));
// dont change it to window.ONLOAD!!!!!!!!
// document.addEventListener('DOMContentLoaded', () => controller.initController());

