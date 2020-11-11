const moreBtn = document.querySelector('.info .titleAndMoreBtn .moreBtn');
const title = document.querySelector('.info .titleAndMoreBtn .title');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});
