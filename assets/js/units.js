function initCarousel(id) {
    const carousel = document.getElementById(id);
    const imagesContainer = carousel.querySelector('.units-carousel-images');
    const indicatorsContainer = carousel.querySelector('.indicators');
    const images = imagesContainer.querySelectorAll('img');
    let currentIndex = 0;

    // Create indicator dots
    images.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.classList.add('indicator');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = idx;
            updateCarousel();
            resetAutoSlide();
        });
        indicatorsContainer.appendChild(dot);
    });

    // Update carousel position and active indicator
    function updateCarousel() {
        const imageWidth = images[0].offsetWidth;
        const offset = -currentIndex * imageWidth;
        imagesContainer.style.transform = `translateX(${offset}px)`;
        indicatorsContainer.querySelectorAll('.indicator').forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    let slideInterval = setInterval(nextSlide, 5000);

    function resetAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    // ✅ Swipe Support
    let startX = 0;
    let endX = 0;

    imagesContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    imagesContainer.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    imagesContainer.addEventListener('touchend', () => {
        const diffX = endX - startX;
        if (Math.abs(diffX) > 50) { // threshold
            if (diffX < 0) {
                // Swipe left – next slide
                currentIndex = (currentIndex + 1) % images.length;
            } else {
                // Swipe right – previous slide
                currentIndex = (currentIndex - 1 + images.length) % images.length;
            }
            updateCarousel();
            resetAutoSlide();
        }
        startX = 0;
        endX = 0;
    });

    updateCarousel();
}

initCarousel('units-carousel-left');
initCarousel('units-carousel-right');