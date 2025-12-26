
let categoryNavList =document.querySelector(".category-nav-list");
    function openMenu() {
        
        categoryNavList.classList.toggle("active");
    }


  

   





var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  



   breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    }
  }
});
