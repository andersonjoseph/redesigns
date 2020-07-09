'use strict';

document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',
    perPage: 4,
    autoplay: true,
    drag: true,
    focus: 'center'
  }).mount();

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }


});

function isVisible(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document. documentElement.clientWidth)
    );
}

document.addEventListener('scroll', function () {

    const articles = document.querySelectorAll('.article');

    for(const article of articles) {
        if(isVisible(article)) {
            article.classList.add('animate__slideInUp');
            article.classList.remove('is-invisible');
        }
    }

});
