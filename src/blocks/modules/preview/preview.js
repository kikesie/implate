// video playing

const videoPlay = document.querySelector('.video-contoller--play');
const videoPause = document.querySelector('.video-contoller--pause');
const video = document.querySelector('.video');
const barLine = document.querySelector('.bar__line');

videoPlay.addEventListener('click', () => {
    video.play();
    videoPlay.style.display = 'none';
    videoPause.style.display = 'block';
});

videoPause.addEventListener('click', () => {
    video.pause();
    videoPause.style.display = 'none';
    videoPlay.style.display = 'block';
});

video.ontimeupdate = function() {
    let percentage = (video.currentTime / video.duration) * 100;
    console.log(percentage);

    barLine.style.width = percentage + '%';
};