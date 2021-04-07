console.log('ok 1');
$('.lazy-load').fadeOut(800);

$(document).ready(function(e) {
    $(window).on('load', function() {
        $('.svg').svgToInline();
    })

    $(window).resize(function() {
        var width = $(window).width();
        if (width <= 889) {
            // alert('Your screen is too small');
            $('.menubox,  .menubox-product ').hide();
        }
        if (width >= 992) {
            $('.menubox,  .menubox-product').show();
        }

        if (width <= 767) {
            $('header').hide();
        }
        if (width >= 768) {
            $('header').show();
        }
        // if (width >= 992) {
        //     $('.slider__item').css('height', '500px');
        //     // $('.slider__item-text .linee')
        // }
        if (width <= 1199) {
            $('.slider__item').css('height', '600px');
        }
        if (width >= 1200) {
            $('.slider__item').css('height', '100vh');
        }

    });
    // Project Dropdown
    $('.duantop__default, .duantop__dropdownlist').on('click', function() {
        $('.duantop__dropdownlist').slideToggle(300);
    })

    //popup-dathang
    let popup = $('.popup-dathang');
    $('.btn-black').click(function() {
        popup.css('display', "flex")
    })
    popup.find(".close").click(function() {
        popup.hide();
    })

    // Menu fixed
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('.menu-fixed').slideDown(300);
        } else {
            $('.menu-fixed').slideUp(200)
        }
    })

    // Back to top
    let toTopBtn = document.querySelector('.backtotop');
    toTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });



    let $carousel = $('.slider__item-wrap, .details .details__item-wrap ');
    $carousel.flickity({
        cellAlign: 'left',
        contain: true, // theo bộ khung
        wrapAround: true, // lặp lại
        prevNextButtons: false,
        pageDots: false,
        // autoPlay: true,
        friction: 0.4,
        autoPlay: 3000,
        fullscreen: true,
        lazyLoad: 2,
    });


    $('.slider__bottom-control .prev, .bottom-control .prev').on('click', function() {
        $carousel.flickity('previous');
    })
    $('.slider__bottom-control .next, .bottom-control .next').on('click', function() {
        $carousel.flickity('next');
    })

    $('.zoom').on('click', function() {
        $carousel.flickity('viewFullscreen');
    });


    // Menu fullscreen
    $('.menubox, .menubox-product').on('click', function() {

        $('.slider__item-wrap, .slider__bottom,.slider__bottom-mouse').css({ 'padding-left': '240px', 'transition': 'all 0.3s ease-in' });
        $('.menu__full').css({
            'width': '500px',
            'visibility': 'visible',
            'opacity': '1',
            'transition': 'all 0.3s ease-in'
        });
        $('.bg-gray').fadeIn(300);
        $('.menubox, .menu-aboutus, .menubox-product').hide();
        $('header').hide();
    });
    $('.menu__full .close').on('click', function() {
        $('.menu__full').css({
            'width': '0',
            'visibility': 'hidden',
            'opacity': '0',
            'transition': 'all 0.3s ease-in'
        });
        $('.slider__item-wrap, .slider__bottom,.slider__bottom-mouse').css('padding-left', '0');
        $('.bg-gray').fadeOut(200);
        $('.menubox,  .menubox-product').show();
        $('header').show();
    })
    $('.bg-gray').on('click', function() {
        $('.menu__full').css({
            'width': '0',
            'visibility': 'hidden',
            'opacity': '0',
            'transition': 'all 0.3s ease-in'
        });
        $('.slider__item-wrap, .slider__bottom,.slider__bottom-mouse').css({ 'padding-left': '0', 'transition': 'all 0.3s ease-in' });
        $('.bg-gray').fadeOut(200);
        $('.menubox,  .menubox-product').show();
        $('header').show();
    })
    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            $('.menu__full').css({
                'width': '0',
                'visibility': 'hidden',
                'opacity': '0',
                'transition': 'all 0.3s ease-in'
            });
            $('.slider__item-wrap, .slider__bottom-mouse').css('padding-left', '0');
            $('.bg-gray').fadeOut(200);
            $('.menubox').show();
        }
    });

    // Menu mobile 
    $('.hambuger-mobile').on('click', function() {
        $('.menumobile-full').css({
            'height': '100vh',
            'visibility': 'visible',
            'transition': 'all 0.3s ease-in',
            'opacity': '1',
        });
    })
    $('.menumobile-full .close').on('click', function() {
        $('.menumobile-full').css({
            'height': '0',
            'visibility': 'hidden',
            'transition': 'all 0.3s ease-in',
            'opacity': '0',
        });
    })

    // $('.menu__full .menu__full-bottom .wrap-bot-right ul').on('click', function(e) {
    //     e.stopPropagation();
    // })
    // $('.menubox').on('click', function() {
    //     $('.menu__full').addClass('active');

    //     $('.menubox').hide();

    // });
    // $('.close').on('click', function() {
    //     $('.menu__full').removeClass('active');
    //     $('.menubox').show();
    // })






})