const burgerOpen = document.querySelector('.nav-burgermenu');
const burgerClose = document.querySelector('.mobile-close-icon');
const modalMobile = document.querySelector('.mobile-modal');
const body = document.body;

// Open mobile menu
burgerOpen.addEventListener('click', () => {
  modalMobile.classList.add('is-active');
  body.style.overflow = 'hidden';
});

// Close mobile menu
function closeMenu() {
  modalMobile.classList.remove('is-active');
  body.style.overflow = '';
}

burgerClose.addEventListener('click', closeMenu);

// Close menu with Escape key
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modalMobile.classList.contains('is-active')) {
    closeMenu();
  }
});

// Smooth scroll + close mobile menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (!target) return;

    e.preventDefault();

    // Close menu if open
    if (modalMobile.classList.contains('is-active')) {
      closeMenu();
    }

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
