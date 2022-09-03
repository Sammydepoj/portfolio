let show =document.getElementById('about-section')
let showMenu =document.getElementById('ul');
let menu = document.getElementsByClassName('menu-icon')[0];


function aboutshow() {
    if (show.style.display="none") {
        show.style.display="block"
    }
    else{
        show.style.display="none";
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
    if (showMenu.style.display="block") {
        showMenu.style.display="none"
    }
    else{
        showMenu.style.display="block";
    }

}