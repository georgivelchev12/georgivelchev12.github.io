let maquette;
let controller = {
    initController: () => {
        controller.maquetteFunct();
        // controller.sideNavToggler();
    },
    maquetteFunct: () => {
        let pic = $(".image_size")[0];
        let pic_real_width = pic.naturalWidth;
        let pic_real_height = pic.naturalHeight;
        
        let w = $(".container-360").width();
        let h = (w * pic_real_height) / pic_real_width;
        if ($(".container-360").height() < h) {
            h = $(".container-360").height();
            w = (h * pic_real_width) / pic_real_height;
        }
        maquette = $(".maquette").ThreeSixty({
            totalFrames: 61,
            endFrame: 61,
            currentFrame: 1,
            imgList: ".threesixty_images",
            progress: ".bluredImg",
            imagePath: `uploads/WALK/`,
            filePrefix: "",
            ext: ".jpg",
            height: h,
            width: w,
            navigation: false,
            responsive: false,
            disableSpin: true,
            onReady: function () {
                controller.dropdownMenu();
                controller.phostoSwipeFunct();
                controller.fullScreenFunct();
                controller.hammerFunct($(".threesixty")[0]);
                controller.removeHoverOnMobile();
            },
        });
        $('.maq-change').click((e) => {
            w = $(".container-360").width();
            h = (w * pic_real_height) / pic_real_width;
            if ($(".container-360").height() < h) {
                h = $(window).height();
                w = (h * pic_real_width) / pic_real_height;
            }
            $(".maquette,.maquette img").height(h);
            $(".maquette,.maquette img").width(w);

            let itemAttr = $(e.target).attr('data-maquette');
            $(".loader")[0].style.display = "block";

            maquette = $(".maquette").ThreeSixty({
                totalFrames: 61,
                endFrame: 61,
                currentFrame: 1,
                imgList: ".threesixty_images",
                progress: ".loader",
                imagePath: `uploads/${itemAttr}/`,
                filePrefix: "",
                ext: ".jpg",
                height: h,
                width: w,
                navigation: false,
                responsive: false,
                disableSpin: true,
            });
            $('.maq-change').removeClass('active');
            $('a[data-maquette =' + itemAttr + "]").addClass('active');
        });


        $(".custom_play").bind("click", () => {
            maquette.play();
        });
        $(".custom_stop").bind("click", () => {
            maquette.stop();
        });

        if ($(".container-360").height() < h) {
            h = $(".container-360").height();
            w = (h * pic_real_width) / pic_real_height;
        }
        let hbase = h;
        let wbase = w;

        $(window).resize(() => {
            w = $(".container-360").width();
            h = (w * pic_real_height) / pic_real_width;
            if ($(".container-360").height() < h) {
                h = $(window).height();
                w = (h * pic_real_width) / pic_real_height;
            }

            $(".maquette,.maquette img").height(h);
            $(".maquette,.maquette img").width(w);
        });

        // Zoom 360 avec boutons
        $(".custom_zoomp").on("click", () => {
            h = $(".maquette img").height() * 1.2;
            w = $(".maquette img").width() * 1.2;
            if (h > hbase * 3) {
                h = hbase * 3;
                w = wbase * 3;
            }
            $(".maquette,.maquette img").height(h);
            $(".maquette,.maquette img").width(w);
        });

        $(".custom_zoomm").on("click", () => {
            h = $(".maquette img").height() / 1.2;
            w = $(".maquette img").width() / 1.2;
            if (h < hbase) {
                h = hbase;
                w = wbase;
            }
            $(".maquette,.maquette img").height(h);
            $(".maquette,.maquette img").width(w);
        });

        // Center zoom 360
        $(".custom_zoomp,.custom_zoomm").on("click", () => {
            let sTop =
                ($(".maquette img").height() - $(".container-360").height()) / 2 +
                60;
            let sLeft =
                ($(".maquette img").width() - $(".container-360").width()) / 2;
            $("html,body").animate({ scrollTop: sTop, scrollLeft: sLeft }, 0);
        });

        let oneWheel = () => {
            setTimeout(() => {
                $(".container-360").one("mousewheel", oneWheel);
            }, 1000); // one scroll per second ONLY.
        }

        // Zomm avec molette + centrer
        $(".threesixty").on("wheel", (event) => {
            event.preventDefault();
            if (event.originalEvent.deltaY < 0) {
                h = $(".maquette img").height() * 1.2;
                w = $(".maquette img").width() * 1.2;
                if (h > hbase * 3) {
                    h = hbase * 3;
                    w = wbase * 3;
                }
                $(".maquette,.maquette img").height(h);
                $(".maquette,.maquette img").width(w);

                let sTop =
                    ($(".maquette img").height() - $(".container-360").height()) / 2 +
                    60;
                let sLeft =
                    ($(".maquette img").width() - $(".container-360").width()) / 2;
                $("html,body").animate({ scrollTop: sTop, scrollLeft: sLeft }, 0);
            } else {
                h = $(".maquette img").height() / 1.2;
                w = $(".maquette img").width() / 1.2;
                if (h < hbase) {
                    h = hbase;
                    w = wbase;
                }
                $(".maquette,.maquette img").height(h);
                $(".maquette,.maquette img").width(w);

                let sTop =
                    ($(".maquette img").height() - $(".container-360").height()) / 2 +
                    60;
                let sLeft =
                    ($(".maquette img").width() - $(".container-360").width()) / 2;
                $("html,body").animate({ scrollTop: sTop, scrollLeft: sLeft }, 0);
            }
        });
    },
    phostoSwipeFunct: () => {
        let openPhotoSwipe = () => {
            let pswpElement = document.querySelectorAll('.pswp')[0];
            // build items array
            let items = [
                {
                    src: "/uploads/galerie/images/r2.jpg",
                    w: 1800,
                    h: 1200
                },
                {
                    src: "/uploads/galerie/images/r1.jpg",
                    w: 1800,
                    h: 1200
                },
                {
                    src: "/uploads/galerie/images/interior.jpg",
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
            let gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
            // sets a flag that slides should be updated
            gallery.invalidateCurrItems();
            // updates the content of slides
            gallery.updateSize(true);
        };
        document.getElementById("openGalery1").addEventListener("click", openPhotoSwipe);
    },
    fullScreenFunct: () => {
        document.querySelector(".full-screen-btn").addEventListener('click', () => {
            let isOnFullScr =
                (document.fullScreenElement &&
                    document.fullScreenElement !== null) ||
                (!document.mozFullScreen &&
                    !document.webkitIsFullScreen)

            if (isOnFullScr) {
                if (document.documentElement.requestFullScreen) {
                    document.documentElement.requestFullScreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullScreen) {
                    document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
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
        })
    },
    hammerFunct: (elm) => {
        let hammertime = new Hammer(elm, {});

        hammertime.get("pinch").set({
            enable: true
        });
        let posX = 0,
            posY = 0,
            scale = 1,
            last_scale = 1,
            last_posX = 0,
            last_posY = 0,
            max_pos_x = 0,
            max_pos_y = 0,
            transform = "",
            el = elm;

        hammertime.on("doubletap pinch pinchend pinchstart", (ev) => {
            let evType = {
                pinch: () => {
                    scale = Math.max(0.999, Math.min(last_scale * ev.scale, 4))
                },
                pinchstart: () => {
                    // maquette.getConfig().ticker = 1;
                    // maquette.getConfig().drag = false;
                },
                pinchend: () => {
                    // setTimeout(() => {
                    //     maquette.getConfig().ticker = 0;
                    //     maquette.getConfig().drag = true;
                    // }, 1000);
                    last_scale = scale;
                },
                doubletap: () => {
                    transform = "translate3d(0, 0, 0) " + "scale3d(2, 2, 1) ";
                    scale = 2;
                    last_scale = 2;
                    try {
                        if (
                            window
                                .getComputedStyle(el, null)
                                .getPropertyValue("-webkit-transform")
                                .toString() != "matrix(1, 0, 0, 1, 0, 0)"
                        ) {
                            transform = "translate3d(0, 0, 0) " + "scale3d(1, 1, 1) ";
                            scale = 1;
                            last_scale = 1;
                        }
                    } catch (err) { }
                    el.style.webkitTransform = transform;
                    transform = "";
                },
                panend: () => {
                    last_posX = posX < max_pos_x ? posX : max_pos_x;
                    last_posY = posY < max_pos_y ? posY : max_pos_y;
                }
            }
            document.querySelectorAll(".maq-change").forEach(e => {
                e.addEventListener("click", () => {
                    el.style.webkitTransform = "translate3d(0, 0, 0) " + "scale3d(1, 1, 1) ";
                    transform = "";
                })
            })
            evType[ev.type]();
            if (scale != 1) {
                posX = last_posX + ev.deltaX;
                posY = last_posY + ev.deltaY;
                max_pos_x = Math.ceil(((scale - 1) * el.clientWidth) / 2);
                max_pos_y = Math.ceil(((scale - 1) * el.clientHeight) / 2);
                if (posX > max_pos_x) {
                    posX = max_pos_x;
                }
                if (posX < -max_pos_x) {
                    posX = -max_pos_x;
                }
                if (posY > max_pos_y) {
                    posY = max_pos_y;
                }
                if (posY < -max_pos_y) {
                    posY = -max_pos_y;
                }
                transform =
                    "translate3d(" +
                    posX +
                    "px," +
                    posY +
                    "px, 0) " +
                    "scale3d(" +
                    scale +
                    ", " +
                    scale +
                    ", 1)";
            }

            if (transform) {
                el.style.webkitTransform = transform;
            }
        });
    },
    // sideNavToggler: () => {
    //     document.querySelectorAll(".side-nav-cl").forEach(e => {
    //         e.addEventListener('click', () => {
    //             document.getElementById("sidebar-toggler").classList.contains("sidebar-visible") ? 
    //             document.getElementById("sidebar-toggler").classList.remove('sidebar-visible'):
    //             document.getElementById("sidebar-toggler").classList.add('sidebar-visible')
    //         });
    //     })
    // }
    dropdownMenu: () => {
        document.querySelector('.btn-showMore').addEventListener('click', e => {
            let dropdown = e.currentTarget.parentElement;
            if (dropdown.classList.contains('active-dropdown')) {
                dropdown.classList.remove('active-dropdown')
            }
            else {
                dropdown.classList.add('active-dropdown')
            }

        })
    },
    removeHoverOnMobile: () =>{
        function hasTouch() {
            return 'ontouchstart' in document.documentElement
                   || navigator.maxTouchPoints > 0
                   || navigator.msMaxTouchPoints > 0;
        }
        
        if (hasTouch()) { // remove all the :hover stylesheets
            try { // prevent exception on browsers not supporting DOM styleSheets properly
                for (var si in document.styleSheets) {
                    var styleSheet = document.styleSheets[si];
                    if (!styleSheet.rules) continue;
        
                    for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                        if (!styleSheet.rules[ri].selectorText) continue;
        
                        if (styleSheet.rules[ri].selectorText.match(':hover')) {
                            styleSheet.deleteRule(ri);
                        }
                    }
                }
            } catch (ex) {}
        }
    }
}
// dont change it to window.ONLOAD!!!!!!!! 
document.addEventListener('DOMContentLoaded', () => controller.initController());