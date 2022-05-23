
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1,
})

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