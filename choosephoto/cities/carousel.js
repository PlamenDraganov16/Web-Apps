let currentIndex = 0;
const photos = document.querySelectorAll('.carousel-image');
const wrapper = document.getElementById('carouselWrapper');

function updateCarousel() {
  const offset = -currentIndex * 100; 
  wrapper.style.transform = `translateX(${offset}%)`;
}

function nextPhoto() {
  if (currentIndex < photos.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; 
  }
  updateCarousel();
}

function prevPhoto() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = photos.length - 1; 
  }
  updateCarousel();
}
