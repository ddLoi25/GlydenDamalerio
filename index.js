var typed = new Typed(".multilple-text",{
    strings: ["a Virtual Assistant","an Executive Assistant", "an Ecommerce VA","a Social Media Manager"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})

var sidemenu = document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}