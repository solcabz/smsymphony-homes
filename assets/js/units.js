function initCarousel(id) {
    const carousel = document.getElementById(id);
    const imagesContainer = carousel.querySelector('.units-carousel-images');
    const indicatorsContainer = carousel.querySelector('.indicators');
    const images = imagesContainer.querySelectorAll('img');
    let currentIndex = 0;

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

    function updateCarousel() {
        const offset = -currentIndex * 100;
        imagesContainer.style.transform = `translateX(${offset}%)`;
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

    updateCarousel();
}

initCarousel('units-carousel-left');
initCarousel('units-carousel-right');