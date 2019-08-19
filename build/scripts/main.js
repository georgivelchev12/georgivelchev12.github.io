"use strict";

var navbarAttrChanging = document.querySelectorAll(".colorChange");
var height;
var controller = {
  init: function init() {
    controller.heightOnScrollAndResize();
    controller.changeNavOnScroll();
    controller.animationWithShowClass();
    controller.videoPlayAndPause();
    controller.testimonialSlider();
  },
  heightOnScrollAndResize: function heightOnScrollAndResize() {
    height = window.innerHeight * 6;
    window.addEventListener('scroll', controller.heightOnScrollAndResize);
    window.addEventListener('resize', controller.heightOnScrollAndResize);
    window.addEventListener('click', controller.heightOnScrollAndResize);
  },
  changeNavOnScroll: function changeNavOnScroll() {
    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1; //&& ua.indexOf("mobile");

    if (isAndroid) {
      document.write('<meta name="viewport" content="width=device-width,height=' + window.innerHeight + ', initial-scale=1.0">');
    }

    var toggleNav = function toggleNav(percantage) {
      document.getElementById("mySidebar").style.width = percantage;
    };

    document.getElementsByClassName('openbtn')[0].addEventListener('click', function () {
      document.body.style.overflowY = "hidden";
      toggleNav("100%");
    });
    document.getElementsByClassName('closebtn')[0].addEventListener('click', function () {
      document.body.style.overflowY = "visible";
      toggleNav("0");
    });
    navbarAttrChanging.forEach(function (e) {
      e.addEventListener('click', function () {
        document.body.style.overflowY = "visible";
        toggleNav("0");
      });
    });

    var removeNavClasses = function removeNavClasses(nav) {
      nav.forEach(function (e) {
        return e.classList.remove('homeNav', 'aboutNav', 'workNav', 'processNav', 'servicesNav', 'contactNav');
      });
    };

    var removeActiveClass = function removeActiveClass(nav) {
      nav.forEach(function (e) {
        e.classList.remove('active');
      });
    };

    var addNavClass = function addNavClass(nav, classNav) {
      nav.forEach(function (e) {
        e.classList.remove('allATagsWhite');
        e.classList.add(classNav);
      });
    };

    var openBtnColorChange = function openBtnColorChange(color) {
      document.getElementsByClassName("openbtn")[0].style.backgroundColor = color;
    };

    var changeLogoImg = function changeLogoImg(img) {
      document.getElementById("aboutChanger").src = img;
    };

    var runAllFunctionsOnSmallScreen = function runAllFunctionsOnSmallScreen(num) {
      removeNavClasses(navbarAttrChanging);
      navbarAttrChanging.forEach(function (e) {
        e.classList.add('allATagsWhite');
      });
      removeActiveClass(navbarAttrChanging);
      navbarAttrChanging[num].classList.add("active");
    };

    var runAllFunctions = function runAllFunctions(navClass, num) {
      removeNavClasses(navbarAttrChanging);
      addNavClass(navbarAttrChanging, navClass);
      removeActiveClass(navbarAttrChanging);
      navbarAttrChanging[num].classList.add("active");
    };

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop >= 0 && scrollTop < height / 6) {
      //Home Section
      changeLogoImg("img/image1.png");
      openBtnColorChange("#16406e");
      window.innerWidth <= 996 ? runAllFunctionsOnSmallScreen(0) : runAllFunctions('homeNav', 0);
    } else if (scrollTop >= height / 6 && scrollTop < height / 3) {
      //About Section
      changeLogoImg("img/image1.1.png");
      openBtnColorChange("#ac3b61");
      window.innerWidth <= 996 ? runAllFunctionsOnSmallScreen(1) : runAllFunctions('aboutNav', 1);
    } else if (scrollTop >= height / 3 && scrollTop < height / 2) {
      //Work Section
      changeLogoImg("img/image1.2.png");
      openBtnColorChange("#f79e02");
      window.innerWidth <= 996 ? runAllFunctionsOnSmallScreen(2) : runAllFunctions('workNav', 2);
    } else if (scrollTop >= height / 2 && scrollTop < height / 1.5) {
      //Process Section
      changeLogoImg("img/image1.2.png");
      openBtnColorChange("#f79e02");
      window.innerWidth <= 996 ? runAllFunctionsOnSmallScreen(3) : runAllFunctions('processNav', 3);
    } else if (scrollTop >= height / 1.5 && scrollTop < height / 1.2) {
      //Services Section
      changeLogoImg("img/image1.3.png");
      openBtnColorChange("#14a76c");
      window.innerWidth <= 996 ? runAllFunctionsOnSmallScreen(4) : runAllFunctions('servicesNav', 4);
    } else if (scrollTop >= height / 1.2 && scrollTop <= height) {
      //Contact Section
      changeLogoImg("img/image1.4.png");
      openBtnColorChange("#970909");
      window.innerWidth <= 996 ? runAllFunctionsOnSmallScreen(5) : runAllFunctions('contactNav', 5);
    }

    window.addEventListener("resize", controller.changeNavOnScroll);
    window.addEventListener("scroll", controller.changeNavOnScroll);
    window.addEventListener("load", controller.changeNavOnScroll);
  },
  animationWithShowClass: function animationWithShowClass() {
    var aboutItems = document.querySelectorAll('.about ul li');
    var skillsItems = document.querySelectorAll('.skills .opacity-image-skills span');

    var isInViewport = function isInViewport(e) {
      var rect = e.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    };

    var run = function run() {
      var addAndRemoveShowClass = function addAndRemoveShowClass(items) {
        items.forEach(function (item) {
          if (isInViewport(item)) {
            item.classList.add('show');
          } else {
            item.classList.remove('show');
          }
        });
      };

      addAndRemoveShowClass(aboutItems);
      addAndRemoveShowClass(skillsItems);
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

    var marginTopOfVideo = function marginTopOfVideo(margin) {
      videoPause.style.marginTop = margin;
    };

    var positionOfButton = function positionOfButton(num) {
      videoPlay.style.top = videoPause.getBoundingClientRect().height - num + 'px';
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

    window.addEventListener("resize", controller.videoPlayAndPause);
    window.addEventListener("load", controller.videoPlayAndPause);
    window.addEventListener("scroll", controller.videoPlayAndPause);
  },
  testimonialSlider: function testimonialSlider() {
    var carouselSlide = document.querySelector('.slider');
    var sliderItems = document.querySelectorAll('.testimonial-item');
    var prevBtn = document.querySelector('#prevBtn');
    var nextBtn = document.querySelector('#nextBtn');
    var counter = 1;
    var size;

    var transformCarousel = function transformCarousel() {
      carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
    };

    var sizeOfCarousel = function sizeOfCarousel() {
      size = carouselSlide.clientWidth;
      transformCarousel();
    };

    sizeOfCarousel();
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
    window.addEventListener("resize", sizeOfCarousel);
    window.addEventListener("load", sizeOfCarousel);
  }
};

window.onload = function () {
  controller.init();
};