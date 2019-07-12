(function() {

  var target = document.querySelector(".header__target"),
      links = document.querySelectorAll(".header__link"),
      menu = document.querySelector(".header__menu");

  function mouseenterFunc () {
      target.style.width = this.getBoundingClientRect().width + 'px';
      target.style.left = this.getBoundingClientRect().left + 'px';
      target.style.opacity = 1;
  }

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", mouseenterFunc);
  }

  menu.addEventListener("mouseout", function () {
    target.style.opacity = 0;
  });

})();
