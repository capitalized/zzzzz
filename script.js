$(document).ready(function() {
  var modal = $('#imageModal');

  $('.gallery-image').click(function() {
    var src = $(this).attr('src');
    $('#modalImage').attr('src', src);
    modal.css('display', 'block');
  });

  var span = $('.close');

  span.click(function() {
    modal.css('display', 'none');
  });

  $(window).click(function(event) {
    if (event.target == modal[0]) {
      modal.css('display', 'none');
    }

document.querySelector('.home-link').addEventListener('click', function(event) {
  event.preventDefault();
  window.location.reload();
});
document.getElementById('movingImage').addEventListener('click', function() {
  if (this.style.animationPlayState !== 'paused') {
    this.style.animationPlayState = 'paused';
  } else {
    this.style.animationPlayState = 'running';
  }
});
  });
});
function showCollection(collectionName) {
  var galleryImages = document.querySelectorAll('.gallery .image-box');

  galleryImages.forEach(function(imageBox) {
    if (imageBox.classList.contains(collectionName) || collectionName === 'collection3') {
      imageBox.style.display = 'block';
    } else {
      imageBox.style.display = 'none';
    }
  });
}
