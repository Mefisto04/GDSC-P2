let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.bg_container header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

 
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});
ScrollReveal().reveal('.nav_links, .nav_buttons', { origin : 'top'});
ScrollReveal().reveal('.landing_title_buttons, .services-container,contact form,footer', { origin : 'bottom'});
ScrollReveal().reveal('.landing_title_main, .landing_gdsc,.content-div2', { origin : 'left'});
ScrollReveal().reveal('.landing_title_sub,.content-div1, .about-content', { origin : 'right'});