function changecontainer(){
    var nav=document.getElementById('nav');
    var scrollvalue =window.scrollY;
    if(scrollvalue < 150){
        nav.classList.add('containercolor');
    }else{
        nav.classList.add('containercolor')
    }
}

window.addEventListener('scroll',changecontainer());