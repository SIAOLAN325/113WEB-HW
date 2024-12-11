const track = document.getElementById('carousel-track');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let currentIndex = 0;
const totalImages = 5; // Total number of images
const imagesToShow = 3; // Number of images visible at once
const imageWidth = 320; // Image width + margin (100px + 10px)

const updateCarousel = () => {
  const offset = currentIndex * -imageWidth;
  track.style.transform = `translateX(${offset}px)`;
};

leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

rightArrow.addEventListener('click', () => {
  if (currentIndex < totalImages - imagesToShow) {
    currentIndex++;
    updateCarousel();
  }
});
