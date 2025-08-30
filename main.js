//menu 
let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
};
//close menu on page scrool 
window.onscroll = () => {
        menu.classList.remove("move");
    navbar.classList.remove("open-menu");
};
//input form date
window.onload =() =>{
    let today = new Date().toISOString().split('T')[0];
    document.getElementById('start-date').value = today;
    document.getElementById('return-date').value = new Date(
        Date.now() + 7 * 86400000
    )
    .toISOString()
    .split('T')[0];
};
// scroll reveal animation
const animate = ScrollReveal ({
    origin:'top',
    distance:'60px',
    duration:'2000',
    delay:'200',
})

animate.reveal(".nav");
animate.reveal(".home-img img", {origin:"right"});
animate.reveal(".input-form", {origin:"bottom"});
animate.reveal(".trending-box, .rental-box,.team-box,.t-box,.newsletter", {interval:100});