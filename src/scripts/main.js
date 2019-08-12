let height;
let navbarAttrChanging = document.querySelectorAll(".colorChange");

let controller = {
  init() {
    this.heightOnScrollAndResize();
    this.changeMainContent();
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
  changeMainContent() {
    function toggleNav(percantage) {
      document.getElementById("mySidebar").style.width = percantage;
    }
    document.getElementsByClassName('openbtn')[0].addEventListener('click', () => toggleNav("100%"))
    document.getElementsByClassName('closebtn')[0].addEventListener('click', () => toggleNav("0"))
    

    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if ((scrollTop >= 0 && scrollTop < (height / 6))) {
      
      document.getElementById("aboutChanger").src = "img/image1.png";
      document.getElementsByClassName("openbtn")[0].style.backgroundColor = "#16406e";


      if (window.innerWidth <= 996) {
        document.getElementById("mySidebar").style.backgroundColor = "#16406e";
        navbarAttrChanging[0].classList.remove('homeScrolling')
        navbarAttrChanging[1].classList.remove('aboutScrolling');
        navbarAttrChanging[2].classList.remove('workScrolling')
        navbarAttrChanging[3].classList.remove('servicesScrolling');
        navbarAttrChanging[4].classList.remove('contactScrolling');

        navbarAttrChanging.forEach(e => {
          e.classList.remove('homeScrollingOnHover')
          e.classList.add('allATagsWhite');
        })
      }
      else {
        navbarAttrChanging[0].classList.add("homeScrolling");
        navbarAttrChanging[1].classList.remove("aboutScrolling");
        navbarAttrChanging[2].classList.remove("workScrolling");
        navbarAttrChanging[3].classList.remove("servicesScrolling");
        navbarAttrChanging[4].classList.remove("contactScrolling");
        navbarAttrChanging.forEach(e => {
          e.classList.add('homeScrollingOnHover');
          e.classList.remove("aboutScrollingOnHover")
          e.classList.remove("workScrolling");
          e.classList.remove("workScrollingOnHover")
          e.classList.remove("servicesScrolling")
          e.classList.remove("servicesScrollingOnHover")
          e.classList.remove("contactScrolling")
          e.classList.remove("contactScrollingOnHover")
          
          e.classList.remove('allATagsWhite');
        });
      }
    } else if (scrollTop >= (height / 6) && scrollTop < (height / 3)) {
      
      document.getElementById("aboutChanger").src = "img/image1.1.png";
      document.getElementsByClassName("openbtn")[0].style.backgroundColor = "#ac3b61";

      if (window.innerWidth <= 996) {
        document.getElementById("mySidebar").style.backgroundColor = "#ac3b61";
        navbarAttrChanging[0].classList.remove('homeScrolling')
        navbarAttrChanging[1].classList.remove('aboutScrolling')
        navbarAttrChanging[2].classList.remove('workScrolling')
        navbarAttrChanging[3].classList.remove('servicesScrolling')
        navbarAttrChanging[4].classList.remove('contactScrolling')

        navbarAttrChanging.forEach(e => {
          e.classList.remove('aboutScrollingOnHover')
          e.classList.add('allATagsWhite');
        })
      }
      else {
        navbarAttrChanging[0].classList.remove("homeScrolling");
        navbarAttrChanging[1].classList.add("aboutScrolling");
        navbarAttrChanging[2].classList.remove("workScrolling");
        navbarAttrChanging[3].classList.remove("servicesScrolling");
        navbarAttrChanging[4].classList.remove("contactScrolling");

        navbarAttrChanging.forEach(e => {
          e.classList.add('aboutScrollingOnHover');
          e.classList.remove("homeScrollingOnHover");
          e.classList.remove("workScrolling");
          e.classList.remove("workScrollingOnHover");
          e.classList.remove("servicesScrolling");
          e.classList.remove("servicesScrollingOnHover");
          e.classList.remove("contactScrolling");
          e.classList.remove("contactScrollingOnHover");

          e.classList.remove('allATagsWhite');
        });
      }
    }
    else if (scrollTop >= (height / 3) && scrollTop < (height/1.5)) {
      
      document.getElementById("aboutChanger").src = "img/image1.2.png";
      document.getElementsByClassName("openbtn")[0].style.backgroundColor = "#f79e02";

      if (window.innerWidth <= 996) {
        document.getElementById("mySidebar").style.backgroundColor = "#f79e02";

        navbarAttrChanging[0].classList.remove('homeScrolling')
        navbarAttrChanging[1].classList.remove('aboutScrolling')
        navbarAttrChanging[2].classList.remove('workScrolling')
        navbarAttrChanging[3].classList.remove('servicesScrolling')
        navbarAttrChanging[4].classList.remove('contactScrolling')
        navbarAttrChanging.forEach(e => {
          e.classList.remove('workScrollingOnHover')
          e.classList.remove('workScrolling')
          e.classList.add('allATagsWhite');
        })
      }
      else {
        navbarAttrChanging[0].classList.remove("homeScrolling");
        navbarAttrChanging[1].classList.remove("aboutScrolling");
        navbarAttrChanging[2].classList.add("workScrolling");
        navbarAttrChanging[3].classList.remove("servicesScrolling");
        navbarAttrChanging[4].classList.remove('contactScrolling');
        navbarAttrChanging.forEach(e => {
          e.classList.add("workScrolling");
          e.classList.add('workScrollingOnHover');
          e.classList.remove("homeScrollingOnHover");
          e.classList.remove("aboutScrollingOnHover");
          e.classList.remove("servicesScrollingOnHover");
          e.classList.remove("servicesScrolling");
          e.classList.remove("contactScrolling");
          e.classList.remove("contactScrollingOnHover");


          e.classList.remove('allATagsWhite');
        });
      }
    }
    else if(scrollTop >= (height/1.5) && scrollTop < (height/1.2)){
      
      document.getElementById("aboutChanger").src = "img/image1.3.png";
      document.getElementsByClassName("openbtn")[0].style.backgroundColor = "#14a76c";

      if (window.innerWidth <= 996) {
        document.getElementById("mySidebar").style.backgroundColor = "#14a76c";

        navbarAttrChanging[0].classList.remove('homeScrolling')
        navbarAttrChanging[1].classList.remove('aboutScrolling')
        navbarAttrChanging[2].classList.remove('workScrolling')
        navbarAttrChanging[3].classList.remove('servicesScrolling');
        navbarAttrChanging[4].classList.remove('contactScrolling');
        navbarAttrChanging.forEach(e => {
          e.classList.remove('servicesScrolling')
          e.classList.remove('servicesScrollingOnHover')
          e.classList.add('allATagsWhite');
        })
      }
      else {
        navbarAttrChanging[0].classList.remove("homeScrolling");
        navbarAttrChanging[1].classList.remove("aboutScrolling");
        navbarAttrChanging[2].classList.remove("workScrolling");
        navbarAttrChanging[3].classList.add("servicesScrolling");
        navbarAttrChanging[4].classList.remove("contactScrolling");

        navbarAttrChanging.forEach(e => {
          e.classList.add("servicesScrolling")
          e.classList.add("servicesScrollingOnHover")
          e.classList.remove("workScrolling");
          e.classList.remove('workScrollingOnHover');
          e.classList.remove("homeScrollingOnHover");
          e.classList.remove("aboutScrollingOnHover");
          e.classList.remove("contactScrolling");
          e.classList.remove("contactScrollingOnHover");
          e.classList.remove('allATagsWhite');
        });
      }
    }
    else if(scrollTop >= (height/1.2) && scrollTop <= height){

      document.getElementById("aboutChanger").src = "img/image1.4.png";
      document.getElementsByClassName("openbtn")[0].style.backgroundColor = "#c30707";

      if (window.innerWidth <= 996) {
        document.getElementById("mySidebar").style.backgroundColor = "#c30707";

        navbarAttrChanging[0].classList.remove('homeScrolling')
        navbarAttrChanging[1].classList.remove('aboutScrolling')
        navbarAttrChanging[2].classList.remove('workScrolling')
        navbarAttrChanging[3].classList.remove('servicesScrolling');
        navbarAttrChanging[4].classList.remove('contactScrolling');
        navbarAttrChanging.forEach(e => {
          e.classList.remove('contactScrolling')
          e.classList.remove('contactScrollingOnHover')
          e.classList.add('allATagsWhite');
        })
      }
      else {
        navbarAttrChanging[0].classList.remove("homeScrolling");
        navbarAttrChanging[1].classList.remove("aboutScrolling");
        navbarAttrChanging[2].classList.remove("workScrolling");
        navbarAttrChanging[3].classList.remove("servicesScrolling");
        navbarAttrChanging[4].classList.add("contactScrolling");

        navbarAttrChanging.forEach(e => {

          e.classList.remove("servicesScrolling")
          e.classList.remove("servicesScrollingOnScrolling")
          e.classList.remove("workScrolling");
          e.classList.remove('workScrollingOnHover');
          e.classList.remove("homeScrollingOnHover");
          e.classList.remove("aboutScrollingOnHover");
          e.classList.remove('allATagsWhite');
          e.classList.add("contactScrolling")
          e.classList.add("contactScrollingOnHover")
        });
      }
    }

    window.addEventListener("resize", this.changeMainContent);
    window.addEventListener("scroll", this.changeMainContent);
    window.addEventListener("load", this.changeMainContent);
  },
  animationWithShowClass() {
    let aboutItems = document.querySelectorAll('.about ul li');
    let skillsItems = document.querySelectorAll('.skills .opacity-image-skills span')

    function isInViewport(e) {
      let rect = e.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    let run = () => {

      addAndRemoveShowClass(aboutItems);
      addAndRemoveShowClass(skillsItems);

      function addAndRemoveShowClass(items){
        items.forEach(item => {
          if (isInViewport(item)) {
            item.classList.add('show');
          }
          else {
            item.classList.remove('show');
          }
        });
      }
    }

    window.addEventListener('load', run);
    window.addEventListener('resize', run);
    window.addEventListener('scroll', run);

  }
  , videoPlayAndPause() {
    let videoPlay = document.getElementsByClassName('videoPlay')[0];
    let videoPause = document.getElementsByClassName('videoPause')[0];
    let btnShowing = (number) => videoPlay.style.opacity = `${number}`;

    videoPlay.addEventListener('click', function () {
      videoPause.play();
      btnShowing(0);
    })

    videoPause.addEventListener('click', function () {
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
    function marginTopOfVideo(margin) {
      videoPause.style.marginTop = margin;
    }
    function positionOfButton(num) {
      videoPlay.style.top = videoPause.getBoundingClientRect().height - num + 'px';  // TRY WITH PROCENT NUM
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


