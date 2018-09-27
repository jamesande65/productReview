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

    // mobile menu

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


    // hide table arrow

    var table = document.querySelector(".content-block__table");
    var arrow = document.querySelector(".content-block__table-arrow");

    if(table && arrow) {
        table.addEventListener("scroll", function () {
            var newScrollLeft=$(table).scrollLeft();
            var divWidth = $(table).outerWidth();
            var scrollwidth =$(table).get(0).scrollWidth;

            if(newScrollLeft === scrollwidth - divWidth){
                arrow.style.display = 'none';
            } else {
                arrow.style.display = 'flex';
            }
        });
    }




    // table sticky header

    function UpdateTableHeaders() {
        $(".content-block__table table").each(function() {
            var el             = $(this),
                offset         = el.offset(),
                scrollTop      = $(window).scrollTop(),
                floatingHeader = $(".floatingHeader", this)


            if (screen.width < 991) {
                if ((scrollTop - 50 > offset.top) && (scrollTop - 50 < offset.top + el.height())) {
                    floatingHeader.css({
                        "visibility": "visible",
                        "top": scrollTop - offset.top + 53
                    });
                } else {
                    floatingHeader.css({
                        "visibility": "hidden"
                    });
                }
            } else {
                if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) {
                    floatingHeader.css({
                        "visibility": "visible",
                        "top": scrollTop - offset.top - 3
                    });
                } else {
                    floatingHeader.css({
                        "visibility": "hidden"
                    });
                }
            }
        });
    }

    // DOM Ready
    $(function() {
        $(window)
            .scroll(UpdateTableHeaders)
            .trigger("scroll");

    });

});