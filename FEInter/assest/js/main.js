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
                items:1
            },
            600:{
                items:1
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
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
    $('.prev-projectSlide').click(function() {
        $('.owl-projectSlide').trigger('prev.owl.carousel');
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
                items:1
            },
            600:{
                items:3
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

$(document).ready(function(){
    $('.owl-reviewSlide').owlCarousel({
        loop:true,
        margin:20,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});

$(document).ready(function(){
    $('.review-slickComment').slick({
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3,
        arrows:false,
    })

    $('.prev-slideReview').on('click', function() {
        $('.review-slickComment').slick('slickPrev');
    });
    $('.next-slideReview').on('click', function() {
        $('.review-slickComment').slick('slickNext');
    });
});


$(document).ready(function(){
    // menu click event
    $('.menuBtn').click(function() {
      $(this).toggleClass('act');
        if($(this).hasClass('act')) {
          $('.navbar').addClass('act');
        }
        else {
          $('.navbar').removeClass('act');
        }
    });
  });