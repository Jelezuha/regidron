(function() {

  var target = document.querySelector(".header__target");
  var links = document.querySelectorAll(".header__link");

  function mouseenterFunc() {
    if (!this.classList.contains("active")) {
      for (var i = 0; i < links.length; i++) {
        if (links[i].classList.contains("active")) {
          links[i].classList.remove("active");
        }
      }
      this.classList.add("active");
      var menuLeft = document.querySelectorAll(".header__menu")[0].getBoundingClientRect().left;
      var width = this.getBoundingClientRect().width;
      var left = this.getBoundingClientRect().left - menuLeft;
      target.style.width = width + 'px';
      target.style.left = left + 'px';
    }
  }

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", mouseenterFunc);
  }

  document.addEventListener("DOMContentLoaded", mouseenterFunc.bind(document.querySelectorAll(".header__link")[0]));
})();
