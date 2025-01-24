function openModal(imageSrc) {
  document.getElementById("image-modal").style.display = "block";
  document.getElementById("modal-image").src = imageSrc;
}

function closeModal() {
  document.getElementById("image-modal").style.display = "none";
}
function toggleFullscreen() {
  const video = document.querySelector('.video-player');
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) { /* Firefox */
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) { /* Chrome, Safari */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { /* IE/Edge */
    video.msRequestFullscreen();
  }
}