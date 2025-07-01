// Scroll effect
window.addEventListener('scroll', function () {
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
const menuItems = document.querySelectorAll('#nav-links .menu-item a');

menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});

// Close menu on link click
menuItems.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.classList.remove('active');
  });
});

// Show/hide button based on scroll position
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Smooth scroll to top
document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const slides = document.querySelectorAll('.slide');
  const indicatorsContainer = document.getElementById('carousel-indicators');
  const amenityItems = document.querySelectorAll('.amenities-info li');
  let currentIndex = 0;

  // Create indicator dots
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => {
      showSlide(index);
    });
    indicatorsContainer.appendChild(dot);
  });

  const indicators = indicatorsContainer.querySelectorAll('button');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      indicators[i].classList.toggle('active', i === index);
    });

    // Highlight matching amenity
    const activeAmenity = slides[index].dataset.amenity;

    amenityItems.forEach(item => {
      const match = item.dataset.amenity === activeAmenity;
      item.classList.toggle('active', match);
    });

    currentIndex = index;
  }

  // Initial setup
  showSlide(currentIndex);


// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;
// let currentIndex = 0;

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.remove('active');
//     if (i === index) slide.classList.add('active');
//   });
// }

// document.getElementById('next').addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % totalSlides;
//   showSlide(currentIndex);
// });

// document.getElementById('prev').addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//   showSlide(currentIndex);
// });

// Optional: Autoplay
// setInterval(() => {
//   currentIndex = (currentIndex + 1) % totalSlides;
//   showSlide(currentIndex);
// }, 5000); // 5 seconds