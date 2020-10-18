import '../scss/app.scss';

// Your JS Code goes here
import 'bootstrap';
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

$('#myTab a').on('click', (e) => {
  e.preventDefault();
  $(this).tab('show');
});

function start_count() {
  $('.numbers__counter').each(function() {
    $(this)
      .prop('Counter', 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 3000,
          easing: 'swing',
          step: function(now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
}

$(function() {
  let done = false;
  let counterPosition = $('.numbers').offset().top - (window.innerHeight / 2);
  $(window).on('scroll', function () {
    let userPosition = $(window).scrollTop();
    if (userPosition > counterPosition && !done) {
      done = true;
      start_count();
    }
  });
});