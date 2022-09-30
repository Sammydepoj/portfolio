let show =document.getElementById('about-section')
let showMenu =document.getElementById('ul');
let menu = document.getElementsByClassName('menu-icon')[0];
let projectSection = document.getElementById('project-section');
let contactSection = document.getElementById('getInTouch');





function modeToggle(){
    var element = document.body;
  element.classList.toggle("dark-mode");
  
 var sunIcon=document.getElementById('sun-icon');
 var moonIcon=document.getElementById('moon-icon');

  if (element.classList.contains("dark-mode")){
    sunIcon.style.display="block";
    moonIcon.style.display="none";
  }
  else{
    moonIcon.style.display="block";
    sunIcon.style.display="none";
  }
}

function aboutshow() {
    if (show.style.display=="block") {
        show.style.display="none"
    }
    else{
        show.style.display="block";
    }
}
function aboutClose(){
    show.style.display="none"
}

function showProjectSection(){
    if (projectSection.style.display=="block") {
        projectSection.style.display="none"
    }
    else{
        projectSection.style.display="block"
    }
}

function projectSectionClose(){
    projectSection.style.display="none"
}

function showContactSection(){
    if (contactSection.style.display=="block") {
        contactSection.style.display="none"
    }
    else{
        contactSection.style.display="block"
    }
}

function contactSectionClose(){
    contactSection.style.display="none"
}


// harmbuger
    menu.onclick=function(){
    document.getElementById('ul').style.display="block";
}
function closeModal(){
    if (showMenu.style.display=="block") {
        showMenu.style.display="none"
    }
    else{
        showMenu.style.display="block";
    }
}