    window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    setTimeout(() => {
      preloader.remove();
    }, 300);
  });



/* scroll*/

AOS.init({
  duration: 2000,
  easing: 'ease-in-out',
  once: true,
  offset: 0,
});

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});
