$(document).ready(function(){
    $('.owl-slideshow').owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        items: 1,
    })
});

$(document).ready(function(){
    $('.owl-productSlide').owlCarousel({
        loop:true,
        margin:20,
        dots:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
    $('.prev-productSlide').click(function() {
        $('.owl-productSlide').trigger('prev.owl.carousel');
    });
    $('.next-productSlide').click(function() {
        $('.owl-productSlide').trigger('next.owl.carousel');
    });
});

$(document).ready(function(){
    $('.owl-projectSlide').owlCarousel({
        loop:true,
        margin:20,
        dots:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
    $('.prev-projectSlide').click(function() {
        $('.owl-productSlide').trigger('prev.owl.carousel');
    });
    $('.next-projectSlide').click(function() {
        $('.owl-projectSlide').trigger('next.owl.carousel');
    });
});

$(document).ready(function(){
    $('.owl-customerSlide').owlCarousel({
        loop:true,
        margin:20,
        dots:true,
        responsive:{
            0:{
                items:5
            },
            600:{
                items:5
            },
            1000:{
                items:5
            }
        }
    })
    $('.prev-customerSlide').click(function() {
        $('.owl-customerSlide').trigger('prev.owl.carousel');
    });
    $('.next-customerSlide').click(function() {
        $('.owl-customerSlide').trigger('next.owl.carousel');
    });
});