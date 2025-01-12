const menuIcon = document.getElementById('menu_icon');
const menuLinks = document.querySelector('.menu_nav_links');
let hide = true;

menuLinks.style.display = 'none';
menuIcon.onclick = function display(){
    if (hide){
        menuLinks.style.display = 'flex';
        hide = false;
    } else{
        menuLinks.style.display = 'none';
        hide = true;
    }
}