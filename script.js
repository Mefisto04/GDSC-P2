
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});
ScrollReveal().reveal('.nav_links, .nav_buttons', { origin : 'top'});
ScrollReveal().reveal('.landing_title_buttons, .services-container,contact form,p,h6,.imgfot', { origin : 'bottom'});
ScrollReveal().reveal('.landing_title_main, .landing_gdsc,.content-div2', { origin : 'left'});
ScrollReveal().reveal('.landing_title_sub,.content-div1, .about-content', { origin : 'right'});