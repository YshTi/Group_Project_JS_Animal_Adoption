const burgerOpen = document.querySelector('.nav-burgermenu');
const burgerClose = document.querySelector('.mobile-close-icon');
const modalMobile = document.querySelector('.mobile-modal');  
burgerOpen.addEventListener('click', () => {
modalMobile.classList.add("is-active");
})
burgerClose.addEventListener('click', () => {
modalMobile.classList.remove("is-active");
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); 
    if(modalMobile.classList.contains('is-active')){
    modalMobile.classList.remove('is-active');
    }
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
