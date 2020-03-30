const menu = document.getElementById('menu');

window.addEventListener('scroll', function() {
  let x = pageYOffset;

  if (x > 100) {
    menu.classList.add('h-fixed');
  } else {
    menu.classList.remove('h-fixed');
  }
});
