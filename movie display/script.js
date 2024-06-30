
document.addEventListener("DOMContentLoaded", () => {
    const images = [
        'https://plus.unsplash.com/premium_photo-1664392104299-cb8ace591863?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1531956759688-e71cc2586e34?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1563192504-36ac622196dd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];

    let currentIndex = 0;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(images);

    const slideshowElement = document.getElementById('slideshow');

    function showNextImage() {
        slideshowElement.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

  
    showNextImage();

   
    setInterval(showNextImage, 2000);
});
