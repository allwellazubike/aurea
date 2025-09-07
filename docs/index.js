let btn = document.getElementById("menu-btn")
let nav = document.getElementById("menu")

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    nav.classList.toggle('flex')
})

const items = document.querySelectorAll('.item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  items.forEach(item => {
    observer.observe(item);
  });


//   advced animation 

 const advItems = document.querySelectorAll('.item-adv');

  const observerAdv = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  advItems.forEach(item => observerAdv.observe(item));

  // Advanced animation for .item-adv-hero
const heroItems = document.querySelectorAll('.item-adv-hero');

const observerHero = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

heroItems.forEach(item => observerHero.observe(item));


// left and right swiope
    const swipeItems = document.querySelectorAll('.item-left, .item-right');

  const observerSwipe = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  swipeItems.forEach(item => observerSwipe.observe(item));


let initialWidth = window.innerWidth;
let initialHeight = window.innerHeight;
console.log(`Initial screen size: ${initialWidth}x${initialHeight}`);