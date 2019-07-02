(function () {
  var i = 0;
  var animates = document.querySelectorAll(".animate");
  var interval = 200
  function animation () {
    animates[i].classList.add('animated');
    animates[i].classList.remove('animate');
    i += 1;
    if (animates[i]) {
      setTimeout(animation, interval);
    }
  }
  if (animates.length) {
    setTimeout(animation, interval);
  }
})();
