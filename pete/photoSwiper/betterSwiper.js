var openPhotoSwipe = function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];
    // build items array
    var items = [
        {
            src:
                "/uploads/galerie/images/r2.jpg",

            w: 964,
            h: 824
        },
        {
            src:
                "/uploads/galerie/images/r1.jpg",

            w: 964,
            h: 824
        },
        {
            src:
                "/uploads/galerie/images/interior.jpg",

            w: 964,
            h: 824
        }
    ];

    // define options (if needed)
    var options = {
        // history & focus options are disabled on CodePen        
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0,
        getDoubleTapZoom: function (isMouseClick, item) {
            if (isMouseClick) {
                return 3; //<---- This 4
            } else {
                return item.initialZoomLevel < 0.7 ? 4 : 1.33; //<---- 4 here
            }
        },
        maxSpreadZoom: 3

    };

    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
    // sets a flag that slides should be updated
    gallery.invalidateCurrItems();
    // updates the content of slides
    gallery.updateSize(true);
};
document.getElementById("openGalery1").onclick = openPhotoSwipe;
document.getElementById("openGalery2").onclick = openPhotoSwipe;

var elem = document.getElementsByClassName("full-screen-btn")
for (const item of elem) {
    let innerWidth = window.innerWidth;
    item.addEventListener('click', () => {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            document.getElementsByClassName("container-360")[0].style.paddingLeft = "0px";
            document.getElementsByClassName("sidebar")[0].style.zIndex = "auto";
            document.getElementsByClassName("sidebar")[0].style.position = "absolute";
            document.getElementsByClassName("sidebar")[0].style.borderRight = "none";
            for (let item of document.getElementsByClassName('removeAndAddEl')) {
                item.style.display = "none";
            }
            document.getElementsByClassName('scroll-menu')[0].style.position = 'fixed';
            document.getElementsByClassName('scroll-menu')[0].style.left = '2%';
            document.getElementsByClassName('scroll-menu')[0].style.display = 'block';
            document.getElementsByClassName('scroll-menu')[0].style.zIndex = '100';
            document.getElementsByClassName('removeOnFullScr')[0].style.borderBottom = "none"
            for (let item of document.getElementsByClassName('d-flexOnFullScreen')) {
                item.style.display = "flex";
                item.style.flexDirection = "column"
            }
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if(innerWidth <= 1001){
                document.getElementsByClassName("container-360")[0].style.paddingLeft = "0";
            }
            document.getElementsByClassName("container-360")[0].style.paddingLeft = "300px";
            document.getElementsByClassName("sidebar")[0].style.zIndex = "9";
            document.getElementsByClassName("sidebar")[0].style.position = "fixed";
            document.getElementsByClassName("sidebar")[0].style.borderRight = "1px solid #ccc";
            for (let item of document.getElementsByClassName('removeAndAddEl')) {
                item.style.display = "block";
            }
            document.getElementsByClassName('scroll-menu')[0].style.position = 'relative';
            document.getElementsByClassName('scroll-menu')[0].style.left = 'auto';
            document.getElementsByClassName('scroll-menu')[0].style.display = 'block';
            document.getElementsByClassName('scroll-menu')[0].style.zIndex = '100';
            document.getElementsByClassName('removeOnFullScr')[0].style.borderBottom = "1px solid #ccc"
            for (let item of document.getElementsByClassName('d-flexOnFullScreen')) {
                item.style.display = "block";
            }

            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    })
}


