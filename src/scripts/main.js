let navbarAttrChanging = document.querySelectorAll(".colorChange");

let height;

let controller = {
  init() {
    this.heightOnScrollAndResize();
    this.changeNavOnScroll();
    this.animationWithShowClass();
    this.videoPlayAndPause();
    this.testimonialSlider();
  },
  heightOnScrollAndResize() {
    height = window.innerHeight * 6;

    window.addEventListener('scroll', this.heightOnScrollAndResize)
    window.addEventListener('resize', this.heightOnScrollAndResize)
    window.addEventListener('click', this.heightOnScrollAndResize)
  },
  changeNavOnScroll() {
    let toggleNav = (percantage) => {
      document.getElementById("mySidebar").style.width = percantage;
    }
    document.getElementsByClassName('openbtn')[0].addEventListener('click', () => toggleNav("100%"))
    document.getElementsByClassName('closebtn')[0].addEventListener('click', () => toggleNav("0"))
    navbarAttrChanging.forEach(e => {
      e.addEventListener('click', () => toggleNav("0"));
    })

    let removeScrollClasses = (nav) => {
      nav.forEach(e => e.classList.remove('homeScrolling',
        'aboutScrolling',
        'workScrolling',
        'processScrolling',
        'servicesScrolling',
        'contactScrolling'))
    };
    let openBtnColorChange = (color) => {
      document.getElementsByClassName("openbtn")[0].style.backgroundColor = color;
    };
    let sideBarColorChange = (color) => {
      document.getElementById("mySidebar").style.backgroundColor = color;
    }
    let changeLogoImg = (img) => {
      document.getElementById("aboutChanger").src = img;
    }

    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if ((scrollTop >= 0 && scrollTop < (height / 6))) {
      changeLogoImg("img/image1.png");
      openBtnColorChange("#16406e");
      if (window.innerWidth <= 996) {
        sideBarColorChange("#16406e")
        removeScrollClasses(navbarAttrChanging);
        navbarAttrChanging.forEach(e => {
          e.classList.remove('homeScrollingOnHover')
          e.classList.add('allATagsWhite');
        })
      }
      else {
        navbarAttrChanging.forEach(e => {
          e.classList.add('homeScrollingOnHover');
          e.classList.remove("aboutScrolling",
            "aboutScrollingOnHover",
            "workScrolling",
            "workScrollingOnHover",
            "processScrolling",
            "processScrollingOnHover",
            "servicesScrolling",
            "servicesScrollingOnHover",
            "contactScrolling",
            "contactScrollingOnHover",
            "allATagsWhite")
        });
        navbarAttrChanging[0].classList.add("homeScrolling"); //btn-active
      }
    } else if (scrollTop >= (height / 6) && scrollTop < (height / 3)) {
      changeLogoImg("img/image1.1.png");
      openBtnColorChange("#ac3b61");
      if (window.innerWidth <= 996) {
        sideBarColorChange("#ac3b61")
        removeScrollClasses(navbarAttrChanging);
        navbarAttrChanging.forEach(e => {
          e.classList.remove('aboutScrollingOnHover')
          e.classList.add('allATagsWhite');
        })
      }
      else {
        navbarAttrChanging.forEach(e => {
          e.classList.add('aboutScrollingOnHover');
          e.classList.remove("homeScrolling",
            "homeScrollingOnHover",
            "workScrolling",
            "workScrollingOnHover",
            "processScrolling",
            "processScrollingOnHover",
            "servicesScrolling",
            "servicesScrollingOnHover",
            "contactScrolling",
            "contactScrollingOnHover",
            "allATagsWhite");
        });
        navbarAttrChanging[1].classList.add("aboutScrolling");  //btn-active
      }
    }
    else if (scrollTop >= (height / 3) && scrollTop < (height / 2)) {
      changeLogoImg("img/image1.2.png")
      openBtnColorChange("#f79e02")
      if (window.innerWidth <= 996) {
        sideBarColorChange("#f79e02")
        removeScrollClasses(navbarAttrChanging);
        navbarAttrChanging.forEach(e => {
          e.classList.remove('workScrolling', 'workScrollingOnHover')
          e.classList.add('allATagsWhite');
        })
      }
      else {
        navbarAttrChanging.forEach(e => {
          e.classList.add("workScrolling", "workScrollingOnHover");
          e.classList.remove("homeScrolling",
            "homeScrollingOnHover",
            "aboutScrolling",
            "aboutScrollingOnHover",
            "processScrollingOnHover",
            "processScrolling",
            "servicesScrollingOnHover",
            "servicesScrolling",
            "contactScrolling",
            "contactScrollingOnHover",
            "allATagsWhite");
        });
        navbarAttrChanging[2].classList.add('allATagsWhite'); //btn-active
      }
    }
    else if (scrollTop >= (height / 2) && scrollTop < (height / 1.5)) {
      changeLogoImg("img/image1.2.png");
      openBtnColorChange("#f79e02");
      if (window.innerWidth <= 996) {
        sideBarColorChange("#f79e02")
        removeScrollClasses(navbarAttrChanging);
        navbarAttrChanging.forEach(e => {
          e.classList.remove("processScrollingOnHover", "processScrolling")
          e.classList.add('allATagsWhite');
        })
      }
      else {
        navbarAttrChanging.forEach(e => {
          e.classList.add("processScrollingOnHover");
          e.classList.remove("homeScrolling",
            "homeScrollingOnHover",
            "aboutScrolling",
            "aboutScrollingOnHover",
            "workScrolling",
            "workScrollingOnHover",
            "servicesScrolling",
            "servicesScrollingOnHover",
            "contactScrolling",
            "contactScrollingOnHover",
            "allATagsWhite");
        });
        navbarAttrChanging[3].classList.add('processScrolling') //btn-active
      }
    }
    else if (scrollTop >= (height / 1.5) && scrollTop < (height / 1.2)) {
      changeLogoImg("img/image1.3.png")
      openBtnColorChange("#14a76c");
      if (window.innerWidth <= 996) {
        sideBarColorChange("#14a76c")
        removeScrollClasses(navbarAttrChanging);
        navbarAttrChanging.forEach(e => {
          e.classList.remove('servicesScrolling', 'servicesScrollingOnHover')
          e.classList.add('allATagsWhite');
        })
      }
      else {
        navbarAttrChanging.forEach(e => {
          e.classList.add("servicesScrollingOnHover")
          e.classList.remove("workScrolling",
            "workScrollingOnHover",
            "homeScrolling",
            "homeScrollingOnHover",
            "aboutScrolling",
            "aboutScrollingOnHover",
            "processScrolling",
            "processScrollingOnHover",
            "contactScrolling",
            "contactScrollingOnHover",
            "allATagsWhite");
        });
        navbarAttrChanging[4].classList.add("servicesScrolling"); //btn-active
      }
    }
    else if (scrollTop >= (height / 1.2) && scrollTop <= height) {
      changeLogoImg("img/image1.4.png")
      openBtnColorChange("#970909");
      if (window.innerWidth <= 996) {
        sideBarColorChange("#970909");
        removeScrollClasses(navbarAttrChanging);
        navbarAttrChanging.forEach(e => {
          e.classList.remove("contactScrollingOnHover")
          e.classList.add("allATagsWhite");
        })
      }
      else {
        navbarAttrChanging.forEach(e => {
          e.classList.add("contactScrollingOnHover")
          e.classList.remove(
            "homeScrolling",
            "homeScrollingOnHover",
            "aboutScrolling",
            "aboutScrollingOnHover",
            "workScrolling",
            "workScrollingOnHover",
            "processScrolling",
            "processScrollingOnHover",
            "servicesScrolling",
            "servicesScrollingOnHover",
            "allATagsWhite")
        });

        navbarAttrChanging[5].classList.add("contactScrolling"); //btn-active
      }
    }

    window.addEventListener("resize", this.changeNavOnScroll);
    window.addEventListener("scroll", this.changeNavOnScroll);
    window.addEventListener("load", this.changeNavOnScroll);
  },
  animationWithShowClass() {
    let aboutItems = document.querySelectorAll('.about ul li');
    let skillsItems = document.querySelectorAll('.skills .opacity-image-skills span')

    let isInViewport = (e) => {
      let rect = e.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    let run = () => {
      let addAndRemoveShowClass = (items) => {
        items.forEach(item => {
          if (isInViewport(item)) {
            item.classList.add('show');
          }
          else {
            item.classList.remove('show');
          }
        });
      }
      addAndRemoveShowClass(aboutItems);
      addAndRemoveShowClass(skillsItems);
    }

    window.addEventListener('load', run);
    window.addEventListener('resize', run);
    window.addEventListener('scroll', run);

  },
  videoPlayAndPause() {
    let videoPlay = document.getElementsByClassName('videoPlay')[0];
    let videoPause = document.getElementsByClassName('videoPause')[0];
    let btnShowing = (number) => videoPlay.style.opacity = `${number}`;
    let marginTopOfVideo = (margin) => {
      videoPause.style.marginTop = margin;
    }
    let positionOfButton = (num) => {
      videoPlay.style.top = videoPause.getBoundingClientRect().height - num + 'px';
    }
    videoPlay.addEventListener('click', () => {
      videoPause.play();
      btnShowing(0);
    })

    videoPause.addEventListener('click', () => {
      videoPause.pause();
      btnShowing(1);
    })

    videoPlay.style.top = '40%';
    marginTopOfVideo('-1rem')

    if (window.innerWidth <= 996 && window.innerWidth > 700) {
      positionOfButton(260)
    }
    else if (window.innerWidth <= 700 && window.innerWidth > 550) {
      positionOfButton(150)
      marginTopOfVideo('3rem')
    }
    else if (window.innerWidth <= 550 && window.innerWidth > 400) {
      positionOfButton(100)
      marginTopOfVideo('3.6rem')
    }
    else if (window.innerWidth <= 400) {
      positionOfButton(25)
      marginTopOfVideo('5rem')
    }
    window.addEventListener("resize", this.videoPlayAndPause);
    window.addEventListener("load", this.videoPlayAndPause);
    window.addEventListener("scroll", this.videoPlayAndPause);
  },
  testimonialSlider() {
    let carouselSlide = document.querySelector('.slider');
    let sliderItems = document.querySelectorAll('.testimonial-item');

    let prevBtn = document.querySelector('#prevBtn')
    let nextBtn = document.querySelector('#nextBtn')

    let counter = 1;
    let size;
    sizeOfCarousel();

    function transformCarousel() {
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    transformCarousel();
    nextBtn.addEventListener('click', () => {
      if (counter >= sliderItems.length - 1) {
        return;
      }
      carouselSlide.style.transition = 'transform 0.4s ease-in-out';
      counter++;
      transformCarousel();
    })

    prevBtn.addEventListener('click', () => {
      if (counter <= 0) {
        return;
      }
      carouselSlide.style.transition = 'transform 0.4s ease-in-out';
      counter--;
      transformCarousel()
    })
    carouselSlide.addEventListener('transitionend', () => {
      if (sliderItems[counter].id == 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = sliderItems.length - 2;
        transformCarousel()
      }
      if (sliderItems[counter].id == 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = sliderItems.length - counter;
        transformCarousel()
      }
    })

    function sizeOfCarousel() {
      size = carouselSlide.clientWidth;
      transformCarousel()
    }
    window.addEventListener("resize", sizeOfCarousel);
    window.addEventListener("load", sizeOfCarousel);

  }
}

window.onload = () => {
  controller.init();
}


