$(document).ready(function(){
    $('.todays-deals__slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="carousel-arrows left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="carousel-arrows right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
        dots: false,
        infinite: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    var body = document.querySelector('body');
    var mobMenu = document.querySelector('.js-mob-menu');
    var mobMenuBtn = document.querySelector('.mob-menu__burger');

    function mobMenuToggle (event) {
        if (!mobMenuBtn.contains(event.target) && !mobMenu.contains(event.target) && mobMenu.classList.contains('activated')){
            mobMenu.classList.remove('activated');
            mobMenuBtn.classList.remove('menu-close');
        }
    }

    body.addEventListener('click', mobMenuToggle);


});