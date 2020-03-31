const gallery_Filter = document.querySelector('.gallery-filter');
let gallery_Filter_active;

gallery_Filter.addEventListener('click', e => {
  if (gallery_Filter_active) {
    gallery_Filter_active.classList.remove('active');
  }
  console.log(e.target.getAttribute('data-filter'));
  e.target.classList.add('active');
  gallery_Filter_active = e.target;
});

$('.slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});
