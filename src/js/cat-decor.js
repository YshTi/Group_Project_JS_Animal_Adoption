const cat = document.querySelector('.footer__cat-decor');

function showCatRandomly() {
  if (!cat) return;

  const randomDelay = Math.floor(Math.random() * 8000) + 40;
  const randomLeft = Math.floor(Math.random() * 81) + 5; // 20% to 50%

  setTimeout(() => {
    cat.style.left = `${randomLeft}%`;
    cat.classList.add('is-visible');

    setTimeout(() => {
      cat.classList.remove('is-visible');
      showCatRandomly();
    }, 4000);
  }, randomDelay);
}

showCatRandomly();