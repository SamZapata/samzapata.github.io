// Navbar collapse on link click
$('#mainNav .nav-link').on('click', function () {
  $('#navbarNav').collapse('hide');
});

// Rotating text in hero section
class RotatingText {
  constructor(selector, phrases, options = {}){
    this.element = document.querySelector(selector);
    if (!this.element || !phrases.length) return;
    this.phrases = phrases;
    this.index = 0;
    this.interval = options.interval || 3000;
    this.transition = options.transition || 350;
    this.start();
  }

  rotate() {
    this.element.classList.add('is-changing');

    setTimeout(() => {
      this.index = (this.index + 1) % this.phrases.length;
      this.element.textContent = this.phrases[this.index];
      this.element.classList.remove('is-changing');
    }, this.transition);
  }

  start() {
    this.timer = setInterval(() => {
      this.rotate();
    }, this.interval);
  }

  stop(){
    clearInterval(this.timer);
  }
}

new RotatingText('.hero-rotating-text', [
  'API Integrations',
  'Web Development',
  'Software Engineering',
  'Consulting',
  'Implementation'
]);

// Back to top
(() => {
  const button = document.getElementById('backToTop');

  if (!button) return;

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', () => {
    button.classList.toggle(
      'visible',
      window.scrollY > 300
    );
  });
})();