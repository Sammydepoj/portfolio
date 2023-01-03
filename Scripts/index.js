let show = document.getElementById('about-section')
let showMenu = document.getElementById('ul');
let menu = document.getElementsByClassName('menu-icon')[0];
let projectSection = document.getElementById('project-section');
let contactSection = document.getElementById('getInTouch');


// Auto type

let type = new Typed(".autotype", {
    strings: ["Sammy", "A Software Developer", "A UI Designer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

// dark mode toggle
function modeToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var sunIcon = document.getElementById('sun-icon');
    var moonIcon = document.getElementById('moon-icon');

    if (element.classList.contains("dark-mode")) {
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        moonIcon.style.display = "block";
        sunIcon.style.display = "none";
        localStorage.setItem('dark-mode', 'disabled');
    }
}
// saving darkmode settings according to users system settings
if (localStorage.getItem('dark-mode') == 'enabled') {
    document.body.classList.toggle('dark-mode');
}

// Page Navigation
seeMore = document.querySelector('.seeMore');

seeMore.addEventListener('click', function (e) {
    e.preventDefault();
    show.scrollIntoView({
        behavior: 'smooth'
    });
});


showMenu.addEventListener('click', function (e) {
    e.preventDefault();
   
    // Matching strategy
    if (showMenu.style.display == "block") {
        showMenu.style.display = "none";
    }
    if (e.target.classList.contains('page-nav')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
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
        projectSection.style.display = "none"
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
        contactSection.style.display = "none"
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
}


function closeModal() {
    showMenu.style.display = "none"
}

const date = new Date();
let year = date.getFullYear();
const copyright = document.getElementById('copyright');
copyright.textContent = `© Sammydepoj ${year}`