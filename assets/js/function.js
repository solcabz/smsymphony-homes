// Scroll effect
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });


  // Show/hide button based on scroll position
window.onscroll = function() {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Smooth scroll to top
document.getElementById("backToTop").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
      });
    }

    document.getElementById('next').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    });

    document.getElementById('prev').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentIndex);
    });

    // Optional: autoplay
    // setInterval(() => {
    //   currentIndex = (currentIndex + 1) % totalSlides;
    //   showSlide(currentIndex);
    // }, 5000);