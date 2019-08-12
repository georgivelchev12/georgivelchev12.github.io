"use strict";

var height;
var navbarAttrChanging = document.querySelectorAll(".colorChange");
var controller = {
  init: function init() {
    this.heightOnScrollAndResize();
    this.changeMainContent();
    this.animationWithShowClass();
    this.videoPlayAndPause();
    this.testimonialSlider();
  },
  heightOnScrollAndResize: function heightOnScrollAndResize() {
    height = window.innerHeight * 6;
    window.addEventListener('scroll', this.heightOnScrollAndResize);
    window.addEventListener('resize', this.heightOnScrollAndResize);
    window.addEventListener('click', this.heightOnScrollAndResize);
  },
  changeMainContent: function changeMainContent() {
    function toggleNav(percantage) {
      document.getElementById("mySidebar").style.width = percantage;
    }

    document.getElementsByClassName('openbtn')[0].addEventListener('click', function () {
      return toggleNav("100%");
    });
    document.getElementsByClassName('closebtn')[0].addEventListener('click', function () {
      return toggleNav("0");
    });
    console.log(height);
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop >= 0 && scrollTop < height / 6) {
      console.log(scrollTop, 1);
      document.getElementById("aboutChanger").src = "img/image1.png";
      document.getElementsByClassName("openbtn")[0].style.backgroundColor = "#16406e";

      if (window.innerWidth <= 996) {
        document.getElementById("mySidebar").style.backgroundColor = "#16406e";
        navbarAttrChanging[0].classList.remove('homeScrolling');
        navbarAttrChanging[1].classList.remove('aboutScrolling');
        navbarAttrChanging[2].classList.remove('workScrolling');
        navbarAttrChanging[3].classList.remove('servicesScrolling');
        navbarAttrChanging.forEach(function (e) {
          e.classList.remove('homeScrollingOnHover');
          e.classList.add('allATagsWhite');
        });
      } else {
        navbarAttrChanging[0].classList.add("homeScrolling");
        navbarAttrChanging[1].classList.remove("aboutScrolling");
        navbarAttrChanging[2].classList.remove("workScrolling");
        navbarAttrChanging[3].classList.remove("servicesScrolling");
        navbarAttrChanging.forEach(function (e) {
          e.classList.add('homeScrollingOnHover');
          e.classList.remove("aboutScrollingOnHover");
          e.classList.remove("workScrolling");
          e.classList.remove("workScrollingOnHover");
          e.classList.remove("servicesScrolling");
          e.classList.remove("servicesScrollingOnHover");
          e.classList.remove('allATagsWhite');
        });
      }
    } else if (scrollTop >= height / 6 && scrollTop < height / 3) {
      console.log(scrollTop, 2);
      document.getElementById("aboutChanger").src = "img/image1.1.png";
      document.getElementsByClassName("openbtn")[0].style.backgroundColor = "#ac3b61";

      if (window.innerWidth <= 996) {
        document.getElementById("mySidebar").style.backgroundColor = "#ac3b61";
        navbarAttrChanging[1].classList.remove('aboutScrolling');
        navbarAttrChanging[2].classList.remove('workScrolling');
        navbarAttrChanging[3].classList.remove('servicesScrolling');
        navbarAttrChanging.forEach(function (e) {
          e.classList.remove('aboutScrollingOnHover');
          e.classList.add('allATagsWhite');
        });
      } else {
        navbarAttrChanging[0].classList.remove("homeScrolling");
        navbarAttrChanging[1].classList.add("aboutScrolling");
        navbarAttrChanging[2].classList.remove("workScrolling");
        navbarAttrChanging[3].classList.remove("servicesScrolling");
        navbarAttrChanging.forEach(function (e) {
          e.classList.add('aboutScrollingOnHover');
          e.classList.remove("homeScrollingOnHover");
          e.classList.remove("workScrolling");
          e.classList.remove("workScrollingOnHover");
          e.classList.remove("servicesScrolling");
          e.classList.remove("servicesScrollingOnHover");
          e.classList.remove('allATagsWhite');
        });
      }
    } else if (scrollTop >= height / 3 && scrollTop < height / 1.5) {
      console.log(scrollTop, 3);
      document.getElementById("aboutChanger").src = "img/image1.2.png";
      document.getElementsByClassName("openbtn")[0].style.backgroundColor = "#f79e02";

      if (window.innerWidth <= 996) {
        document.getElementById("mySidebar").style.backgroundColor = "#f79e02";
        navbarAttrChanging[0].classList.remove('homeScrolling');
        navbarAttrChanging[1].classList.remove('aboutScrolling');
        navbarAttrChanging[2].classList.remove('workScrolling');
        navbarAttrChanging[3].classList.remove('servicesScrolling');
        navbarAttrChanging.forEach(function (e) {
          e.classList.remove('workScrollingOnHover');
          e.classList.remove('workScrolling');
          e.classList.add('allATagsWhite');
        });
      } else {
        navbarAttrChanging[0].classList.remove("homeScrolling");
        navbarAttrChanging[1].classList.remove("aboutScrolling");
        navbarAttrChanging[2].classList.add("workScrolling");
        navbarAttrChanging[3].classList.remove("servicesScrolling");
        navbarAttrChanging.forEach(function (e) {
          e.classList.add("workScrolling");
          e.classList.add('workScrollingOnHover');
          e.classList.remove("homeScrollingOnHover");
          e.classList.remove("aboutScrollingOnHover");
          e.classList.remove("servicesScrollingOnHover");
          e.classList.remove("servicesScrolling");
          e.classList.remove('allATagsWhite');
        });
      }
    } else if (scrollTop >= height / 1.5 && scrollTop < height / 1.2) {
      console.log(scrollTop, 4);
      document.getElementById("aboutChanger").src = "img/image1.3.png";
      document.getElementsByClassName("openbtn")[0].style.backgroundColor = "#14a76c";

      if (window.innerWidth <= 996) {
        document.getElementById("mySidebar").style.backgroundColor = "#14a76c";
        navbarAttrChanging[0].classList.remove('homeScrolling');
        navbarAttrChanging[1].classList.remove('aboutScrolling');
        navbarAttrChanging[2].classList.remove('workScrolling');
        navbarAttrChanging[3].classList.remove('servicesScrolling');
        navbarAttrChanging.forEach(function (e) {
          e.classList.remove('servicesScrolling');
          e.classList.remove('servicesScrollingOnHover');
          e.classList.add('allATagsWhite');
        });
      } else {
        navbarAttrChanging[0].classList.remove("homeScrolling");
        navbarAttrChanging[1].classList.remove("aboutScrolling");
        navbarAttrChanging[2].classList.remove("workScrolling");
        navbarAttrChanging[3].classList.add("servicesScrolling");
        navbarAttrChanging.forEach(function (e) {
          e.classList.add("servicesScrolling");
          e.classList.add("servicesScrollingOnScrolling");
          e.classList.remove("workScrolling");
          e.classList.remove('workScrollingOnHover');
          e.classList.remove("homeScrollingOnHover");
          e.classList.remove("aboutScrollingOnHover");
          e.classList.remove('allATagsWhite');
        });
      }
    } else if (scrollTop >= height / 1.2 && scrollTop <= height) {
      console.log(scrollTop, 5);
    }

    window.addEventListener("resize", this.changeMainContent);
    window.addEventListener("scroll", this.changeMainContent);
    window.addEventListener("load", this.changeMainContent);
  },
  animationWithShowClass: function animationWithShowClass() {
    var aboutItems = document.querySelectorAll('.about ul li');
    var skillsItems = document.querySelectorAll('.skills .opacity-image-skills span');
    var processText = document.querySelectorAll('.process-text span');

    function isInViewport(e) {
      var rect = e.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }

    ;

    var run = function run() {
      aboutItems.forEach(function (item) {
        if (isInViewport(item)) {
          item.classList.add('show');
        } else {
          item.classList.remove('show');
        }
      });
      skillsItems.forEach(function (e) {
        if (isInViewport(e)) {
          e.classList.add('show');
        } else {
          e.classList.remove('show');
        }
      });
      processText.forEach(function (x) {
        if (isInViewport(x)) {
          x.classList.add('show');
        } else {
          x.classList.remove('show');
        }
      });
    };

    window.addEventListener('load', run);
    window.addEventListener('resize', run);
    window.addEventListener('scroll', run);
  },
  videoPlayAndPause: function videoPlayAndPause() {
    var videoPlay = document.getElementsByClassName('videoPlay')[0];
    var videoPause = document.getElementsByClassName('videoPause')[0];

    var btnShowing = function btnShowing(number) {
      return videoPlay.style.opacity = "".concat(number);
    };

    videoPlay.addEventListener('click', function () {
      videoPause.play();
      btnShowing(0);
    });
    videoPause.addEventListener('click', function () {
      videoPause.pause();
      btnShowing(1);
    });
    videoPlay.style.top = '40%';
    marginTopOfVideo('-1rem');

    if (window.innerWidth <= 996 && window.innerWidth > 700) {
      positionOfButton(260);
    } else if (window.innerWidth <= 700 && window.innerWidth > 550) {
      positionOfButton(150);
      marginTopOfVideo('3rem');
    } else if (window.innerWidth <= 550 && window.innerWidth > 400) {
      positionOfButton(100);
      marginTopOfVideo('3.6rem');
    } else if (window.innerWidth <= 400) {
      positionOfButton(25);
      marginTopOfVideo('5rem');
    }

    function marginTopOfVideo(margin) {
      videoPause.style.marginTop = margin;
    }

    function positionOfButton(num) {
      videoPlay.style.top = videoPause.getBoundingClientRect().height - num + 'px'; // TRY WITH PROCENT NUM
    }

    window.addEventListener("resize", this.videoPlayAndPause);
    window.addEventListener("load", this.videoPlayAndPause);
    window.addEventListener("scroll", this.videoPlayAndPause);
  },
  testimonialSlider: function testimonialSlider() {
    var carouselSlide = document.querySelector('.slider');
    var sliderItems = document.querySelectorAll('.testimonial-item');
    var prevBtn = document.querySelector('#prevBtn');
    var nextBtn = document.querySelector('#nextBtn');
    var counter = 1;
    var size;
    sizeOfCarousel();

    function transformCarousel() {
      carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
    }

    transformCarousel();
    nextBtn.addEventListener('click', function () {
      if (counter >= sliderItems.length - 1) {
        return;
      }

      carouselSlide.style.transition = 'transform 0.4s ease-in-out';
      counter++;
      transformCarousel();
    });
    prevBtn.addEventListener('click', function () {
      if (counter <= 0) {
        return;
      }

      carouselSlide.style.transition = 'transform 0.4s ease-in-out';
      counter--;
      transformCarousel();
    });
    carouselSlide.addEventListener('transitionend', function () {
      if (sliderItems[counter].id == 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = sliderItems.length - 2;
        transformCarousel();
      }

      if (sliderItems[counter].id == 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = sliderItems.length - counter;
        transformCarousel();
      }
    });

    function sizeOfCarousel() {
      size = carouselSlide.clientWidth;
      transformCarousel();
    }

    window.addEventListener("resize", sizeOfCarousel);
    window.addEventListener("load", sizeOfCarousel);
  }
};

window.onload = function () {
  controller.init();
};