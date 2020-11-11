const iframe = document.querySelector('.vod_area > iframe')
let video;

function keyEvents (e) {
  // console.log(e);
  if (e.key === 'a') {
    pressOnVideo('ArrowLeft');
  }
  if (e.key === 'd') {
    pressOnVideo('ArrowRight')
  }
}

function pressOnVideo (key) {
  video.dispatchEvent(new KeyboardEvent('keydown', {
    bubbles: true,
    key
  }))
}

iframe.onload = function () {
  video = iframe.contentDocument.querySelector('video');
  // console.log(video);
  iframe.contentWindow.addEventListener('keydown', keyEvents)
}

document.addEventListener('keydown', keyEvents);