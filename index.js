function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

// Events
let body;
let height;
let heightOnScrollAndResize = () => {
  body = document.body,
    html = document.documentElement;

  height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);

}
window.addEventListener('scroll', heightOnScrollAndResize)
window.addEventListener('resize', heightOnScrollAndResize)
window.addEventListener('click', heightOnScrollAndResize)

let navbarAttrChanging = document.querySelectorAll(".colorChange");

window.addEventListener("scroll", mainFunct);
function mainFunct() {
  let scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 0 && scrollTop < (height / 2)) {

    document.getElementById("aboutChanger").src = "img/image1.png";
    navbarAttrChanging[0].classList.add("homeScrolling");
    navbarAttrChanging[1].classList.remove("aboutScrolling");

    navbarAttrChanging.forEach(function (e) {
      e.addEventListener("mouseover", function (event) {
        event.target.style.color = "#16406e";
        e.addEventListener("mouseout", function (event) {
          event.target.style.color = "";
        });
      });
    });

    document.getElementsByClassName("openbtn")[0].style.backgroundColor =
      "#16406e";
    navbarAttrChanging[0].classList.remove('allATagsWhite')
    var j = window.matchMedia("(max-width: 996px)");
    if (j.matches) {
      document.getElementById("mySidebar").style.backgroundColor =
        "#16406e";
      navbarAttrChanging[1].classList.remove('aboutScrolling')
      navbarAttrChanging[0].classList.remove('homeScrolling')
      navbarAttrChanging[0].classList.add('allATagsWhite')

      navbarAttrChanging.forEach(function (e) {
        e.addEventListener("mouseover", function (event) {
          event.target.style.color = "#eee";
          e.addEventListener("mouseout", function (event) {
            event.target.style.color = "";
          });
        });
      });
    }
  } else if (scrollTop >= (height / 2) && scrollTop <= height) {
    
    document.getElementById("aboutChanger").src = "img/image1.1.png";
    navbarAttrChanging[0].classList.remove("homeScrolling");
    navbarAttrChanging[1].classList.add("aboutScrolling");

    navbarAttrChanging.forEach(function (e) {
      e.addEventListener("mouseover", function (event) {
        event.target.style.color = "#ac3b61";
        e.addEventListener("mouseout", function (event) {
          event.target.style.color = "";
        });
      });
    });

    document.getElementsByClassName("openbtn")[0].style.backgroundColor =
      "#ac3b61";
    navbarAttrChanging[1].classList.remove("allATagsWhite");
    var g = window.matchMedia("(max-width: 996px)");
    if (g.matches) {
      document.getElementById("mySidebar").style.backgroundColor =
        "#ac3b61";
      navbarAttrChanging[0].classList.remove("homeScrolling");
      navbarAttrChanging[1].classList.remove("aboutScrolling");
      navbarAttrChanging[1].classList.add("allATagsWhite");
      navbarAttrChanging.forEach(function (e) {
        e.addEventListener("mouseover", function (event) {
          event.target.style.color = "#eee";
          e.addEventListener("mouseout", function (event) {
            event.target.style.color = "";
          });
        });
      });
    }

  }
  setTimeout(mainFunct, 1000);
}

window.addEventListener('resize', () => {
  var j = window.matchMedia("(max-width: 996px)");
  if (j.matches) {
    document.getElementById("mySidebar").style.backgroundColor =
      "#16406e";
    navbarAttrChanging[0].classList.remove('homeScrolling')
    navbarAttrChanging[0].classList.add('allATagsWhite')

    navbarAttrChanging.forEach(function (e) {
      e.addEventListener("mouseover", function (event) {
        event.target.style.color = "#eee";
        e.addEventListener("mouseout", function (event) {
          event.target.style.color = "";
        });
      });
    });
  }
  else {
    navbarAttrChanging.forEach(function (e) {
      e.addEventListener("mouseover", function (event) {
        event.target.style.color = "#16406e";
        e.addEventListener("mouseout", function (event) {
          event.target.style.color = "";
        });
      });
    });
    navbarAttrChanging[0].classList.add('homeScrolling')
    navbarAttrChanging[0].classList.remove('allATagsWhite')
    navbarAttrChanging[1].classList.remove('allATagsWhite')
    navbarAttrChanging[2].classList.remove('allATagsWhite')
    navbarAttrChanging[3].classList.remove('allATagsWhite')
    navbarAttrChanging[4].classList.remove('allATagsWhite')
    navbarAttrChanging[5].classList.remove('allATagsWhite')
    navbarAttrChanging[6].classList.remove('allATagsWhite')
  }
})