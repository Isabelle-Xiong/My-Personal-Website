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
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);
};
