const historyImg= [
    "assets/images/historyimg1.png",
    "assets/images/historyimg2.png",
    "assets/images/historyimg3.png"
];

const achievementImg = [
    "assets/images/champ1img.png",
    "assets/images/champ2img.png",
    "assets/images/champ3img.png"
];

function startSlideshow(slideshowcontainer, imageArray) {
    let index = 0;
    const imageElement = slideshowcontainer.querySelector('.slideshow-image');

    function changeImage() {
        imageElement.src = imageArray[index];
        index = (index + 1) % imageArray.length;
    }

    changeImage();
    setInterval(changeImage, 2000);
}

document.addEventListener("DOMContentLoaded", function() {
    const historySlideshow = document.querySelector('.history-animation');
    if (historySlideshow) {
        startSlideshow(historySlideshow.closest('.slideshow-container'), historyImg);
    }

    const achievementSlideshow = document.querySelector('.achievement-animation');
    if (achievementSlideshow) {
        startSlideshow(achievementSlideshow.closest('.slideshow-container'), achievementImg);
    }
});

