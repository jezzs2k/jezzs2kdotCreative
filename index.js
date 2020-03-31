const scrollTop = document.getElementById('scroll-top');

window.addEventListener('scroll', function() {
  let x = pageYOffset;

  if (x > 100) {
    scrollTop.classList.add('active');
  } else {
    scrollTop.classList.remove('active');
  }
});
