(function () {
  var i = 0;
  var animates = document.querySelectorAll(".animate");
  var interval = 200
  function animation () {
    animates[i].classList.add('animated');
    i += 1;
    if (animates[i]) {
      setTimeout(animation, interval);
    }
  }
  if (animates.length) {
    setTimeout(animation, interval);
  }
})();
