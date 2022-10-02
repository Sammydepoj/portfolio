let show = document.getElementById('about-section')
let showMenu = document.getElementById('ul');
let menu = document.getElementsByClassName('menu-icon')[0];
let projectSection = document.getElementById('project-section');
let contactSection = document.getElementById('getInTouch');

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

function aboutshow() {
    if (show.style.display == "block") {
        show.style.display = "none";
    } else {
        show.style.display = "block";
        if (showMenu.style.display == "block") {
            showMenu.style.display = "none";

            if (contactSection.style.display == "block") {
                contactSection.style.display = "none";
            }

            if (projectSection.style.display == "block") {
                projectSection.style.display = "none";
            }


        }
    }
}

function aboutClose() {
    show.style.display = "none"
}

function showProjectSection() {
    if (projectSection.style.display == "block") {
        projectSection.style.display = "none"
    } else {
        projectSection.style.display = "block";
        if (showMenu.style.display == "block") {
            showMenu.style.display = "none";
        }
        if (show.style.display == "block") {
            show.style.display = "none";
        }

        if (contactSection.style.display == "block") {
            contactSection.style.display = "none";
        }

    }
}

function projectSectionClose() {
    projectSection.style.display = "none"
}

function showContactSection() {
    if (contactSection.style.display == "block") {
        contactSection.style.display = "none"
    } else {
        contactSection.style.display = "block";
        if (showMenu.style.display == "block") {
            showMenu.style.display = "none";
        }
        if (projectSection.style.display == "block") {
            projectSection.style.display = "none";
        }

        if (show.style.display == "block") {
            show.style.display = "none";
        }
    }
}

function contactSectionClose() {
    contactSection.style.display = "none"
}
// harmbuger
menu.onclick = function () {
    document.getElementById('ul').style.display = "block";
}

//document.addEventListener("click",function(event) {
    // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
   // if (
     // event.target.matches(".close-nav") ||
    //  !event.target.closest("#ul")
  //  ) {
  //    closeModal()
 //   }
 // },
 // false
//)

function closeModal() {
    if (showMenu.style.display == "block") {
        showMenu.style.display = "none"
    } else {
        showMenu.style.display = "block";
    }
}

// Gsap animation starts here
// var tl= new TimeLineLite;
// var nmn =document.getElementById('title')
// tl.to(nmn, 1, { scaleX: 1.5, scaleY: 1.5, backgroundColor: "#454545", ease: Back.easeOut.config(1.7)});
