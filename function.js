function openModal(imageSrc) {
  document.getElementById("image-modal").style.display = "block";
  document.getElementById("modal-image").src = imageSrc;
}

function closeModal() {
  document.getElementById("image-modal").style.display = "none";
}