const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Replace with your image URLs
let currentImageIndex = 0;

function showImage() {
    const imageElement = document.getElementById("image");
    imageElement.src = images[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage();
}

// Initial image display
showImage();