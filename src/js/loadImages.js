(function () {
  var j = 0;
  var lazyClass = 'lazy-img';
  function loadImg () {
    var image, downloadingImage;

    if (document.images[j].classList.contains(lazyClass)) {
      image = document.images[j];
      downloadingImage = new Image();
      downloadingImage.src = image.dataset.src;
      downloadingImage.onload = function () {
        image.src = this.src;
        image.classList.remove(lazyClass);
        nextImg();
      };
    } else nextImg();

    function nextImg () {
      if (document.images[j+1]) {
        ++j;
        loadImg();
      }
    }
  }
  if (document.images.length) {
    loadImg();
  }
})();
