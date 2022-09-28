let show =document.getElementById('about-section')
let showMenu =document.getElementById('ul');
let menu = document.getElementsByClassName('menu-icon')[0];





function modeToggle(){
    var element = document.body;
  element.classList.toggle("dark-mode") 
}

// var brandName =document.getElementById("brandName");

// if (element.classList !='dark-mode') {

//     brandName.style.color='#25282B';
// }
//     else{
//         brandName.style.color='white';
//     }
    





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