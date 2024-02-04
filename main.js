/*==========toggle icon navbar===========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    // when you click, icon will become an x
    menuIcon.classList.toggle('bx-x');
    // Toggles presence of class active in navbar. If the active class is not present, it will be added; if it is already present, it will be removed.
    navbar.classList.toggle('active');
};

/*==========scroll sections active link===========*/
// Select all <section> elements on the page
let sections = document.querySelectorAll('section');
// Select all <a> elements inside <nav> elements within the <header> element
let navLinks = document.querySelectorAll('header nav a');

// Define an event handler for the window's scroll event
window.onscroll = () => {
    // Loop through each <section> element
    sections.forEach(sec => {
        // Get the vertical scroll position of the window
        let top = window.scrollY;
        // Get the vertical offset position (distance between the top edge of an element and the top edge of its containing element) of the current <section> element
        let offset = sec.offsetTop - 150;
        // Get the height of the current <section> element
        let height = sec.offsetHeight;
        // Get the value of the 'id' attribute of the current <section> element
        let id = sec.getAttribute('id');
        // Check if the current scroll position is within the bounds of the current <section> element
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                // Remove the 'active' class from all <a> elements in the navigation
                links.classList.remove('active');
                // Add the 'active' class to the <a> element corresponding to the current <section> element. This allows the script to select the appropriate <a> element based on the value of id.
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==========sticky navbar===========*/
    // Select the <header> element in the document
    let header = document.querySelector('header')
    // Accesses the classes of the <header> element,toggles the presence of the class 'sticky' on the <header> element based on the condition window.scrollY > 100
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==========remove toggle icon and navbar when click navbar link (scroll)===========*/

    // when you scroll it closes menu
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active');
};

/*==========scroll reveal===========*/

/* distance: '80px': This option sets the distance from the viewport edge at which the elements start to reveal. In this case, elements will start to reveal when they are within 80 pixels from the edge of the viewport.

duration: 2000: This option sets the duration of the reveal animation in milliseconds. In this case, the animation duration is set to 2000 milliseconds (or 2 seconds).

delay: 200: This option sets the delay before the reveal animation starts in milliseconds. In this case, there is a delay of 200 milliseconds before the reveal animation begins.

reset: true (commented out): This option, when enabled, resets the reveal configuration for elements each time they become visible. This means that if an element becomes hidden and then visible again (for example, when scrolling back up the page), the reveal animation will happen again. By default, reset is set to false.*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// when you first go to page, animation effects for stuff on page, can get this line in scroll reveal page, just copy paste
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==========typed js===========*/
const typed = new Typed('.multiple-text', {
    strings: ['Fullstack Developer', 'iOS Developer', 'Canadian National Team Athlete', 'Entrepreneur', 'Problem Solver', 'Avid Learner'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});