import hero1x from './img/hero/hero@1x.webp';
import hero2x from './img/hero/hero@2x.webp';

function preloadHeroImages() {
  const preload = document.createElement('link');
  preload.rel = 'preload';
  preload.as = 'image';
  preload.href = hero1x;
  preload.setAttribute('imagesrcset', `${hero1x} 1x, ${hero2x} 2x`);
  preload.fetchPriority = 'high';

  document.head.appendChild(preload);
}

preloadHeroImages();
