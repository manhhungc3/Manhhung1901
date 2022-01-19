<script>
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("slider-control___item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2500); 
}
</script>
<!-- Slide content -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js" integrity="sha512-HGOnQO9+SP1V92SrtZfjqxxtLmVzqZpjFFekvzZVWoiASSQgSr4cw9Kqd2+l8Llp4Gm0G8GIFJ4ddwZilcdb8A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.js" integrity="sha512-eP8DK17a+MOcKHXC5Yrqzd8WI5WKh6F1TIk5QZ/8Lbv+8ssblcz7oGC8ZmQ/ZSAPa7ZmsCU4e/hcovqR8jfJqA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script type="text/javascript">
$('.filtering').slick({
    slidesToShow: 5,
    slidesToScroll: 1
  });

  var filtered = false;

  $('.js-filter').on('click', function(){
    if (filtered === false) {
      $('.filtering').slick('slickFilter',':even');
      $(this).text('Unfilter Slides');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      $(this).text('Filter Slides');
      filtered = false;
    }
});
</script>
<!-- Slide Suggest -->
<script type="text/javascript">
$('.filtering-suggest').slick({
    slidesToShow: 4,
    slidesToScroll: 1
  });

  var filtered = false;

  $('.js-filter').on('click', function(){
    if (filtered === false) {
      $('.filtering').slick('slickFilter',':even');
      $(this).text('Unfilter Slides');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      $(this).text('Filter Slides');
      filtered = false;
    }
});
</script>
<!-- Slide khám phá -->
<script type="text/javascript">
$('.filtering-discovery').slick({
    slidesToShow: 3,
    slidesToScroll: 1
  });

  var filtered = false;

  $('.js-filter').on('click', function(){
    if (filtered === false) {
      $('.filtering').slick('slickFilter',':even');
      $(this).text('Unfilter Slides');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      $(this).text('Filter Slides');
      filtered = false;
    }
});
</script>

<!-- Hiển thị dropdown VND -->
<script>
const dropTable = document.querySelector('.js-down')
const dropDown = document.querySelector('.js-modal')
const dropDownContainer = document.querySelector('.js-modal-container')
// Chữa cháy 
const dropclose = document.querySelector('.container')
const dropclose2 = document.querySelector('.footer')
const dropclose3 = document.querySelector('.slider')
const dropclose4 = document.querySelector('.header-right')

function showDropDown () {
dropDown.classList.toggle('open');
}

function hideDropDown () {
dropDown.classList.remove('open');
}

dropTable.addEventListener('click', showDropDown)


//Click ra bên ngoài =>đóng
dropclose.addEventListener('click', hideDropDown)
dropclose2.addEventListener('click', hideDropDown)
dropclose3.addEventListener('click', hideDropDown)
dropclose4.addEventListener('click', hideDropDown)

// // Ngăn cản click vào trong mà vẫn đóng
dropDown.addEventListener('click', function (event) {
  event.stopPropagation()
})

// ESC => đóng
document.addEventListener('keydown', function(event) {
const key = event.key; 
if (key === "Escape") {
  hideDropDown();
}
});
</script>

<!-- Hiển thị dropdown Số Khách -->
<script>
const dropClientNumberTable = document.querySelector('.numbers_client')
const dropClientNumber = document.querySelector('.client-number')

const ClientNumberTableClose = document.querySelector('.container')
const ClientNumberTableClose2 = document.querySelector('.footer')
const ClientNumberTableClose3 = document.querySelector('.slider')
const ClientNumberTableClose4 = document.querySelector('.header-left')

function showClientNumberTable () {
dropClientNumber.classList.toggle('open');
}

function hideClientNumberTable () {
dropClientNumber.classList.remove('open');
}

dropClientNumberTable.addEventListener('click', showClientNumberTable);


// Ngăn cản click vào trong mà vẫn đóng
dropClientNumber.addEventListener('click', function (event) {
  event.stopPropagation()
})

ClientNumberTableClose.addEventListener('click', hideClientNumberTable)
ClientNumberTableClose2.addEventListener('click', hideClientNumberTable)
ClientNumberTableClose3.addEventListener('click', hideClientNumberTable)
ClientNumberTableClose4.addEventListener('click', hideClientNumberTable)

// ESC => đóng
document.addEventListener('keydown', function(event) {
const key = event.key; 
if (key === "Escape") {
hideClientNumberTable();
}
});

</script>
<!-- Hiển thị menu Mobile -->
<script>
const openMenuMobile = document.querySelector('.js-mobile-menu');
const mobileMenu = document.querySelector('.header__mobile-bars-menu')
const closeMobileMenu = document.querySelector('.header__mobile-bars-close')

const mobileOV = document.querySelector('.header__mobile-overlay');


function showMenuMobile () {
mobileMenu.classList.toggle('open');
}

function hideMenuMobile () {
mobileMenu.classList.remove('open');
}

function startOverlay() {
mobileOV.style.display ="block";
}
function closeOverlay() {
mobileOV.style.display ="none";
}

openMenuMobile.addEventListener('click', showMenuMobile);

openMenuMobile.addEventListener('click', startOverlay);
closeMobileMenu.addEventListener('click',hideMenuMobile);
closeMobileMenu.addEventListener('click',closeOverlay);


// Click ra ngoài => đóng
window.onclick = function(event) {
if (event.target == mobileOV) {
hideMenuMobile ();
mobileOV.style.display = "none";

}
}

// ESC => đóng
document.addEventListener('keydown', function(event) {
const key = event.key; 
if (key === "Escape") {
hideMenuMobile();
}
});
</script>