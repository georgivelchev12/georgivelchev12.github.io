var openPhotoSwipe = function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    
    // build items array
    var items = [
        {
            src:
                "http://www.le-ve.planastudio.com/uploads/galerie/images/r2.jpg",

                w: 964,
                h: 824
        },
        {
            src:
                "http://www.le-ve.planastudio.com/uploads/galerie/images/r1.jpg",

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
        getDoubleTapZoom: function(isMouseClick, item) {
            if(isMouseClick) {
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
Array.from(document.querySelectorAll('.pinch-zoom')).forEach(function(el) {
    new PinchZoom.default(el, {});
  });


document.getElementById("openGalery1").onclick = openPhotoSwipe;
document.getElementById("openGalery2").onclick = openPhotoSwipe;
