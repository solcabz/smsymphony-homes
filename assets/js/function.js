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

// Make text list clickable
amenityItems.forEach(item => {
  item.addEventListener('click', () => {
    const clickedAmenity = item.dataset.amenity;

    const targetIndex = [...slides].findIndex(
      slide => slide.dataset.amenity === clickedAmenity
    );

    if (targetIndex !== -1) {
      showSlide(targetIndex);
    }
  });
});

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

document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.animated-title, .animated-paragraph');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => {
    observer.observe(el);
  });
});