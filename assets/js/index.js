$(document).ready(function () {
    $('li.active').removeClass('active');
    $('a[href="' + location.pathname + '"]').closest('li').addClass('active');
});





var owl = $(".owl-carousel");
if (owl.length > 0) {
    owl.owlCarousel({
        items: 1,
        navigation: true,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        dots: false,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        navText: [
            "<i class='fa fa-chevron-left nav'></i>",
            "<i class='fa fa-chevron-right nav'></i>"
        ]
    });
    $(".play").on("click", function () {
        owl.trigger("play.owl.autoplay", [5000]);
    });
    $(".stop").on("click", function () {
        owl.trigger("stop.owl.autoplay");

    });
}

const nav = document.querySelector('.Navbar');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('navbar-active');
    } else {
        nav.classList.remove('navbar-active');
    }
}