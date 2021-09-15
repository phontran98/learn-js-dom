const boxEl = document.querySelector('.box');
window.addEventListener('scroll', function (e) {
  if (window.scrollY + window.innerHeight >= boxEl.offsetTop) {
    console.log(scrollY);
    if (window.scrollY <= boxEl.offsetTop + boxEl.offsetHeight) {
      console.log(scrollY);
    }
  }
});
