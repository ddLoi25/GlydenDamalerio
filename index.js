var typed = new Typed(".multiple-text", {
    strings: ["a Virtual Assistant", "an Executive Assistant", "an Ecommerce VA", "a Social Media Manager"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
})


// TOGGLE ICON BAR
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
// SCROLL SECTION ACTIVE LINK
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

function sendMail(){
    var params = {
        name: document.getElementById('fname').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };


        const serviceID = "service_8op2hkl";
        const templateID = "template_v8dwu6i";

        emailjs.send(serviceID, templateID, params)
        .then(
            res =>{
                document.getElementById("fname").value = "";
                document.getElementById("email").value = "";
                document.getElementById("mobile").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Your message sent successfully!");
            })
            .catch((err) => console.log(err));

};
