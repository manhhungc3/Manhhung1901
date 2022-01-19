

// AOS Library js 

    AOS.init({
        offset: 400,
        duration: 3000,
        once:false
    });
// Header

const searchGuest = document.querySelector(".search__guest");
const searchGuestBox = document.querySelector(".guest__box");

function showGuestBox () {
    searchGuestBox.classList.add('open');
}

function hideGuestBox () {
    searchGuestBox.classList.remove('open');
}

searchGuest.addEventListener('click', () => {
    
    // if(searchGuestBox.classList.contains("open")){
    //     hideGuestBox();
    // } else {
    //     showGuestBox();
    // }
    showGuestBox();
});


searchGuestBox.addEventListener('click',function(eventSearchGuestBoxClick) {
    // console.log(eventSearchGuestBoxClick.className);
    document.addEventListener('click',function(eventDocumentClick) {
        let el = eventDocumentClick.target;
        let r3 = el.closest("#search__guest > #guest__box");
        if(r3 == null) {
            hideGuestBox();
        } else {
            eventDocumentClick.stopPropagation();
            document.addEventListener('click',function(event){
               let el2 = event.target;
               let r4 = el2.closest("#search__guest > #guest__btn");
               if(r4 != null) {
                   showGuestBox();
               } else {
                   event.stopPropagation();
                   
               }
            })
        }
       
    })
        
        
})


// Slider
$(document).ready(function(){
    $('.owl-slideshow').owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        autoplay:true,
        smartSpeed: 250,
        autoplaySpeed:1000,
        autoplayTimeout:5000,
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

    // $('.prev-slideshow').click(function() {
    //     $('.owl-slideshow').trigger('prev.owl.carousel');
    // });
    // $('.next-slideshow').click(function() {
    //     $('.owl-slideshow').trigger('prev.owl.carousel');
    // });
  });


// addressHot SliderShow 
$(document).ready(function(){
    $('.owl-addressSlideShow').owlCarousel({
        loop:true,
        margin:20,
        dots:false,
        autoplay:false,
        smartSpeed: 250,
        autoplaySpeed:1000,
        autoplayTimeout:5000,
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

    $('.prev-addressShow').click(function() {
        $('.owl-addressSlideShow').trigger('prev.owl.carousel');
    });
    $('.next-addressShow').click(function() {
        $('.owl-addressSlideShow').trigger('next.owl.carousel');
    });
  });

// endow show
  $(document).ready(function(){
    $('.owl-endowshow').owlCarousel({
        loop:false,
        margin:20,
        dots:false,
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

    // $('.prev-slideshow').click(function() {
    //     $('.owl-slideshow').trigger('prev.owl.carousel');
    // });
    // $('.next-slideshow').click(function() {
    //     $('.owl-slideshow').trigger('prev.owl.carousel');
    // });
  });


  $(document).ready(function(){
    $('.owl-aparmentShow').owlCarousel({
        loop:true,
        margin:20,
        dots:false,
        autoplay:false,
        smartSpeed: 250,
        autoplaySpeed:1000,
        autoplayTimeout:5000,
        responsive:{
            0:{
                items:4
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
    })

    $('.prev-aparmentShow').click(function() {
        $('.owl-aparmentShow').trigger('prev.owl.carousel');
    });
    $('.next-aparmentShow').click(function() {
        $('.owl-aparmentShow').trigger('next.owl.carousel');
    });
  });

  $(document).ready(function(){
    $('.owl-postSlideShow').owlCarousel({
        loop:true,
        margin:20,
        dots:false,
        autoplay:false,
        smartSpeed: 250,
        autoplaySpeed:1000,
        autoplayTimeout:5000,
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

    $('.prev-postSlideShow').click(function() {
        $('.owl-postSlideShow').trigger('prev.owl.carousel');
    });
    $('.next-postSlideShow').click(function() {
        $('.owl-postSlideShow').trigger('next.owl.carousel');
    });
  });


  $(document).ready(function(){
    $('.owl-cardShow').owlCarousel({
        loop:false,
        margin:15,
        dots:false,
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

    // $('.prev-slideshow').click(function() {
    //     $('.owl-slideshow').trigger('prev.owl.carousel');
    // });
    // $('.next-slideshow').click(function() {
    //     $('.owl-slideshow').trigger('prev.owl.carousel');
    // });
  });


// modal Đăng ký
const modals = document.querySelectorAll('.modal')
const modalContainers = document.querySelectorAll('.js-modal-container');
const modalCloses = document.querySelectorAll('.js-modal-close');



function hideModal() {
    for(const modal of modals){
        modal.classList.remove("open");
    }
}

// modal đăng ký
const modalRegistration = document.querySelector('.js-modalRegistration');
const btnRegistration = document.querySelector('.js-btn--registration');

function showFormRegistration() {
    modalRegistration.classList.add("open");
}
btnRegistration.addEventListener('click',showFormRegistration);





// modal đăng nhập
const modalLogin = document.querySelector('.js-modalLogin');
const btnLogin = document.querySelector('.js-btn--login');


function showFormLogin() {
    modalLogin.classList.add("open");
}
btnLogin.addEventListener('click',showFormLogin);


for(const modalContainer of modalContainers) {
    modalContainer.addEventListener('click',(eventModalContainerClick)=>{
        eventModalContainerClick.stopPropagation();
    })
}


for(const modalClose of modalCloses) {
    modalClose.addEventListener('click',()=>{
        hideModal();
    })
}

modals.addEventListener('click',hideModal);




