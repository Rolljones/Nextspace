const faders = document.querySelectorAll('.fade-in');

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        nav.classList.toggle("open");
        burger.classList.toggle("toggle");
    });
});


  const slider = document.querySelector('.testimonial-slider');
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.querySelector('.bx-left-arrow-alt');
  const nextBtn = document.querySelector('.bx-right-arrow-alt');

  let currentIndex = 0;

  function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateSliderPosition();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateSliderPosition();
  });

  updateSliderPosition();
