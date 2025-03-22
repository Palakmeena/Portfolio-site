// toggle navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


//scroll section active link //

let sections=document.querySelector('section');
let navLinks=document.querySelector('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>= offset && top< offset+height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            });
        };
    });


    // sticky navbar

    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.screenY >100);

    //remove toggle icon navbar

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

// scroll reveal

ScrollReveal({
    distance:'80px',
    duration:200,
    delay:200,
   
});

ScrollReveal().reveal('.home-content,headind',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ',{origin:'button'});
ScrollReveal().reveal('.home-contact h1, .about-img' ,{origin:'left'});
ScrollReveal().reveal('.home-contact p,.about-content',{origin:'right'});


// New ScrollReveal animations for the Skills section
ScrollReveal().reveal('.skills .heading', { origin: 'top', delay: 200 });
ScrollReveal().reveal('.skills-category', { origin: 'left', delay: 300 });
ScrollReveal().reveal('.skills-container .skill-bar', { origin: 'bottom', interval: 200 });


//typed js

const typed =new Typed('.multiple-text',{
    strings:['Full Stack Developer','Web Designer', 'UI/UX', 'Open Source Contributer','Problem Solver','Reader'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});



document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    let form = event.target;
    let formData = new FormData(form);
    let btn = form.querySelector(".btn");

    try {
        let response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            form.innerHTML = "<p style='color: green; font-size: 18px;'>✅ Thank you! Your message has been sent.</p>";
        } else {
            btn.insertAdjacentHTML("afterend", "<p style='color: red;'>❌ Error! Please try again.</p>");
        }
    } catch (error) {
        btn.insertAdjacentHTML("afterend", "<p style='color: red;'>❌ Something went wrong.</p>");
    }
});
