"use strict";

var height;
var navbarAttrChanging = document.querySelectorAll(".colorChange");
var controller = {
  init: function init() {
    this.heightOnScrollAndResize();
    this.changeMainContent();
    this.animationWithShowClass();
  },
  heightOnScrollAndResize: function heightOnScrollAndResize() {
    height = window.innerHeight * 2;
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
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop >= 0 && scrollTop < height / 2) {
      document.getElementById("aboutChanger").src = "img/image1.png";
      document.getElementsByClassName("openbtn")[0].style.backgroundColor = "#16406e";

      if (window.innerWidth <= 996) {
        document.getElementById("mySidebar").style.backgroundColor = "#16406e";
        navbarAttrChanging[0].classList.remove('homeScrolling');
        navbarAttrChanging.forEach(function (e) {
          e.classList.remove('homeScrollingOnHover');
          e.classList.add('allATagsWhite');
        });
      } else {
        navbarAttrChanging[0].classList.add("homeScrolling");
        navbarAttrChanging[1].classList.remove("aboutScrolling");
        navbarAttrChanging.forEach(function (e) {
          e.classList.add('homeScrollingOnHover');
          e.classList.remove("aboutScrollingOnHover");
          e.classList.remove('allATagsWhite');
        });
      }
    } else if (scrollTop >= height / 2 && scrollTop <= height) {
      document.getElementById("aboutChanger").src = "img/image1.1.png";
      document.getElementsByClassName("openbtn")[0].style.backgroundColor = "#ac3b61";
      navbarAttrChanging[0].classList.remove("homeScrolling");
      navbarAttrChanging[1].classList.add("aboutScrolling");

      if (window.innerWidth <= 996) {
        document.getElementById("mySidebar").style.backgroundColor = "#ac3b61";
        navbarAttrChanging[1].classList.remove('aboutScrolling');
        navbarAttrChanging.forEach(function (e) {
          e.classList.remove('aboutScrollingOnHover');
          e.classList.add('allATagsWhite');
        });
      } else {
        navbarAttrChanging[0].classList.remove("homeScrolling");
        navbarAttrChanging[1].classList.add("aboutScrolling");
        navbarAttrChanging.forEach(function (e) {
          e.classList.add('aboutScrollingOnHover');
          e.classList.remove("homeScrollingOnHover");
          e.classList.remove('allATagsWhite');
        });
      }
    }

    window.addEventListener("resize", this.changeMainContent);
    window.addEventListener("scroll", this.changeMainContent);
    window.addEventListener("load", this.changeMainContent);
  },
  animationWithShowClass: function animationWithShowClass() {
    var aboutItems = document.querySelectorAll('.about ul li');
    var skillsItems = document.querySelectorAll('.skills .opacity-image-skills span');

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
    };

    window.addEventListener('load', run);
    window.addEventListener('resize', run);
    window.addEventListener('scroll', run);
  }
};

window.onload = function () {
  controller.init();
};