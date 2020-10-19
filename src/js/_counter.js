function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function start_count() {
  $('.numbers__counter')
    .each(function () {
      $(this)
        .prop('Counter', 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    })
    .promise()
    .done(function () {
      $('.numbers__counter--plus').each(function () {
        $(this).text($(this).text() + '+');
      });
    });
}

$(function () {
  let done = false;
  let counterPosition = $('.numbers').offset().top - window.innerHeight / 2;
  $(window).on(
    'scroll',
    debounce(function () {
      let userPosition = $(window).scrollTop();
      if (userPosition > counterPosition && !done) {
        done = true;
        start_count();
      }
    }, 100)
  );
});
