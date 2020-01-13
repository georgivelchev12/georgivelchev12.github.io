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
        let toggleDoubletap = true;
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
                controller.removeHoverOnMobile();
                controller.hammerFunct($(".threesixty")[0], w, h, wbase, hbase, toggleDoubletap);
            },
        });
        $('.maq-change').click((e) => {
            toggleDoubletap = true;
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
    hammerFunct: (elm, w, h, wbase, hbase, toggleDoubletap) => {
        let hammertime = new Hammer(elm, {});

        hammertime.get('pinch').set({ enable: true });

        hammertime.on("doubletap pinch pinchend pinchstart pinchin pinchout", (ev) => {
            let evType = {
                pinchin: () => {

                    h = $(".maquette img").height() * 1.2;
                    w = $(".maquette img").width() * 1.2;
                    if (h > hbase * 3) {
                        h = hbase * 3;
                        w = wbase * 3;
                    }
                    $(".maquette,.maquette img").height(h);
                    $(".maquette,.maquette img").width(w);
                },
                pinchout: () => {
                    h = $(".maquette img").height() / 1.2;
                    w = $(".maquette img").width() / 1.2;
                    if (h < hbase) {
                        h = hbase;
                        w = wbase;
                    }
                    $(".maquette,.maquette img").height(h);
                    $(".maquette,.maquette img").width(w);
                },
                pinchstart: () => {
                    maquette.getConfig().ticker = 1;
                    maquette.getConfig().drag = false;
                },
                pinchend: () => {
                    setTimeout(() => {
                        maquette.getConfig().ticker = 0;
                        maquette.getConfig().drag = true;
                    }, 1000);
                },
                doubletap: () => {

                    if (toggleDoubletap) {
                        h = $(".maquette img").height() * 3;
                        w = $(".maquette img").width() * 3;
                        if (h > hbase * 3) {
                            h = hbase * 3;
                            w = wbase * 3;
                        }
                        $(".maquette,.maquette img").height(h);
                        $(".maquette,.maquette img").width(w);
                        toggleDoubletap = false;
                    }
                    else {
                        h = $(".maquette img").height() / 3;
                        w = $(".maquette img").width() / 3;
                        if (h > hbase) {
                            h = hbase;
                            w = wbase;
                        }
                        $(".maquette,.maquette img").height(h);
                        $(".maquette,.maquette img").width(w);
                        toggleDoubletap = true;
                    }

                    let sTop = ($(".maquette img").height() - $(".container-360").height()) / 2 + 60;
                    let sLeft = ($(".maquette img").width() - $(".container-360").width()) / 2;
                    $("html,body").animate({ scrollTop: sTop, scrollLeft: sLeft }, 0);
                },
            }

            evType[ev.type]();
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
    // hammerFunct: (elm) => {

    // },
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
    removeHoverOnMobile: () => {

        if (window.innerWidth <= 1001) {
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
                } catch (ex) { }
            }
        }
    }
}
// dont change it to window.ONLOAD!!!!!!!! 
document.addEventListener('DOMContentLoaded', () => controller.initController());