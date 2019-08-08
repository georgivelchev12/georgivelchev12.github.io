let height;
let navbarAttrChanging = document.querySelectorAll(".colorChange");

let controller = {
  init() {
    this.heightOnScrollAndResize();
    this.changeMainContent();
    this.animationWithShowClass();
    this.videoPlayAndPause();
  },
  heightOnScrollAndResize() {
    height = window.innerHeight * 4;

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
    if ((scrollTop >= 0 && scrollTop < (height / 4))) {

      document.getElementById("aboutChanger").src = "img/image1.png";
      document.getElementsByClassName("openbtn")[0].style.backgroundColor = "#16406e";


      if (window.innerWidth <= 996) {
        document.getElementById("mySidebar").style.backgroundColor = "#16406e";
        navbarAttrChanging[0].classList.remove('homeScrolling')
        navbarAttrChanging[1].classList.remove('aboutScrolling');
        navbarAttrChanging[2].classList.remove('workScrolling')
        navbarAttrChanging.forEach(e => {
          e.classList.remove('homeScrollingOnHover')
          e.classList.add('allATagsWhite');
        })
      }
      else {
        navbarAttrChanging[0].classList.add("homeScrolling");
        navbarAttrChanging[1].classList.remove("aboutScrolling");
        navbarAttrChanging[2].classList.remove("workScrolling");
        navbarAttrChanging.forEach(e => {
          e.classList.add('homeScrollingOnHover');
          e.classList.remove("aboutScrollingOnHover")
          e.classList.remove("workScrolling");
          e.classList.remove("workScrollingOnHover")
          e.classList.remove('allATagsWhite');
        });
      }
    } else if (scrollTop >= (height / 4) && scrollTop < height / 2) {

      document.getElementById("aboutChanger").src = "img/image1.1.png";
      document.getElementsByClassName("openbtn")[0].style.backgroundColor = "#ac3b61";

      if (window.innerWidth <= 996) {
        document.getElementById("mySidebar").style.backgroundColor = "#ac3b61";
        navbarAttrChanging[1].classList.remove('aboutScrolling')
        navbarAttrChanging[2].classList.remove('workScrolling')

        navbarAttrChanging.forEach(e => {
          e.classList.remove('aboutScrollingOnHover')
          e.classList.add('allATagsWhite');
        })
      }
      else {
        navbarAttrChanging[0].classList.remove("homeScrolling");
        navbarAttrChanging[1].classList.add("aboutScrolling");
        navbarAttrChanging[2].classList.remove("workScrolling");

        navbarAttrChanging.forEach(e => {
          e.classList.add('aboutScrollingOnHover');
          e.classList.remove("homeScrollingOnHover");
          e.classList.remove("workScrolling");
          e.classList.remove("workScrollingOnHover");
          e.classList.remove('allATagsWhite');
        });
      }
    }
    else if (scrollTop >= height / 2 && scrollTop < height) {

      document.getElementById("aboutChanger").src = "img/image1.2.png";
      document.getElementsByClassName("openbtn")[0].style.backgroundColor = "#f79e02";

      if (window.innerWidth <= 996) {
        document.getElementById("mySidebar").style.backgroundColor = "#f79e02";

        navbarAttrChanging[0].classList.remove('homeScrolling')
        navbarAttrChanging[1].classList.remove('aboutScrolling')
        navbarAttrChanging[2].classList.remove('workScrolling')
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

        navbarAttrChanging.forEach(e => {
          e.classList.add("workScrolling");
          e.classList.add('workScrollingOnHover');
          e.classList.remove("homeScrollingOnHover");
          e.classList.remove("aboutScrollingOnHover");
          e.classList.remove('allATagsWhite');
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
    let processText = document.querySelectorAll('.process-text span')
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
      aboutItems.forEach(item => {
        if (isInViewport(item)) {
          item.classList.add('show');
        }
        else {
          item.classList.remove('show');
        }
      });
      skillsItems.forEach(e => {
        if (isInViewport(e)) {
          e.classList.add('show');
        }
        else {
          e.classList.remove('show');

        }
      })
      processText.forEach(x => {
        if (isInViewport(x)) {
          x.classList.add('show');
        }
        else {
          x.classList.remove('show');

        }
      })
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
  }
}


window.onload = () => {
  controller.init();
}


