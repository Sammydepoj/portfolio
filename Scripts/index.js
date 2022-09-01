let show =document.getElementById('about-section')

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
let menu = document.getElementsByClassName('menu-icon')[0];
menu.onclick=function(){
            document.getElementById('ul').style.display="block";
}

let showMenu =document.getElementById('ul');


function closeModal(){
    if (showMenu.style.display="block") {
        showMenu.style.display="none"
    }
    else{
        showMenu.style.display="block";
    }

}