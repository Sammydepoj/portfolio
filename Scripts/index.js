let show = document.getElementById("about-section");
let showMenu = document.getElementById("ul");
let menu = document.getElementsByClassName("menu-icon")[0];
let projectSection = document.getElementById("project-section");
let contactSection = document.getElementById("getInTouch");

// Auto type

let type = new Typed(".autotype", {
  strings: ["Sammy", "A Software Developer"],
  typeSpeed: 150,
  backSpeed: 50,
  loop: true,
});

// light mode toggle
function modeToggle() {
  var element = document.body;
  element.classList.toggle("light-mode");

  var sunIcon = document.getElementById("sun-icon");
  var moonIcon = document.getElementById("moon-icon");

  if (element.classList.contains("light-mode")) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    localStorage.setItem("light-mode", "enabled");
  } else {
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
    localStorage.setItem("light-mode", "disabled");
  }
}
// saving lightmode settings according to previous users system settings
if (localStorage.getItem("light-mode") == "enabled") {
  document.body.classList.toggle("light-mode");
}

// Sticky Navbar
const header = document.querySelector(".header");
const nav = document.querySelector(".brand-nav");
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  //   console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Page Navigation
scrollButton = document.querySelector(".scroll-button");

scrollButton.addEventListener("click", function (e) {
  e.preventDefault();
  show.scrollIntoView({
    behavior: "smooth",
  });
});

showMenu.addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (showMenu.style.display == "block") {
    showMenu.style.display = "none";
  }
  if (e.target.classList.contains("page-nav")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      // block: 'center',
    });
  }
});

function aboutshow() {
  if (show.style.display == "block") {
    show.style.display = "none";
  } else {
    show.style.display = "block";
    if (showMenu.style.display == "block") {
      showMenu.style.display = "none";
    }
  }
}

function showProjectSection() {
  if (projectSection.style.display == "block") {
    projectSection.style.display = "none";
  } else {
    projectSection.style.display = "block";
    if (showMenu.style.display == "block") {
      showMenu.style.display = "none";
    }
  }
}

// Project Card animation

function reveal() {
  var projectCard = document.querySelectorAll(".project-card");

  for (var i = 0; i < projectCard.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = projectCard[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      projectCard[i].classList.add("active");
    } else {
      projectCard[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();

function showContactSection() {
  if (contactSection.style.display == "block") {
    contactSection.style.display = "none";
  } else {
    contactSection.style.display = "block";
    if (showMenu.style.display == "block") {
      showMenu.style.display = "none";
    }
  }
}

// harmbuger
menu.onclick = function () {
  showMenu.style.display = "block";
};

function closeModal() {
  showMenu.style.display = "none";
}

const date = new Date();
let year = date.getFullYear();
const copyright = document.getElementById("copyright");
copyright.textContent = `© Sammydepoj ${year}`;

// CUSTOMIZED MOUSE/CURSOR

const bouncer = document.querySelector(".bouncer");

// document.addEventListener('mousemove', e =>{
//     bouncer.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
// });

document.addEventListener("scroll", (e) => {
  bouncer.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

// CUSTOMIZED MOUSE/CURSOR
