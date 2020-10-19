import '../scss/app.scss';

// Your JS Code goes here
import 'bootstrap';
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

$('#dropdownLogin').on('show.bs.dropdown', function () {
  $('.overlay').addClass('show');
});

$('#dropdownLogin').on('hide.bs.dropdown', function () {
  $('.overlay').removeClass('show');
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