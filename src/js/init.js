$(document).ready(function(){
    $('.todays-deals__slick').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 600,
                settings: unslick
            }
        ]
    });
});
