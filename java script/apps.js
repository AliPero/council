let list1=document.querySelector(".list1");
let menuOpen=document.querySelector(".open");
let menuClose=document.querySelector(".close");
menuOpen.onclick=function() {
      list1.style.cssText=`
     display: block;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
     `
     menuClose.style.cssText=`
     display: block;`
     menuOpen.style.cssText=`
     display:none;`
     
   }
   menuClose.onclick=function() {
    list1.style.cssText=`
   display: none;`
   menuClose.style.cssText=`
   display: none;`
   menuOpen.style.cssText=`
   display:block;`
 }





/* start slider section 1*/
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
      delay: 2500,
       disableOnInteraction: false,
     },
  pagination: {
    el: ".swiper-pagination",
    
  },
});
/* end slider section 1*/

/*start partener section2*/
  var swiper = new Swiper(".partener", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
/*end partener section2*/

/*start news section3*/
var newsSlider = new Swiper(".newsSlider", {
  cssMode: true,
  navigation: {
    nextEl: ".newsSlider .swiper-button-next",
    prevEl: ".newsSlider .swiper-button-prev",
  },
  slidesPerView:2,
      spaceBetween: 20,
      loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  mousewheel: true,
  keyboard: true,
});
/*end news section3*/
