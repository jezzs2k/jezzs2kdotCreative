const menu = document.getElementById('menu');

window.addEventListener('scroll', function() {
  let x = pageYOffset;

  if (x > 100) {
    menu.classList.add('h-fixed');
    menu.classList.remove('h-bg-dark');
  } else {
    menu.classList.remove('h-fixed');
    menu.classList.add('h-bg-dark');
  }
});
