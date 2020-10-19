$('#dropdownLogin').on('show.bs.dropdown', function () {
  $('.overlay').addClass('show');
});

$('#dropdownLogin').on('hide.bs.dropdown', function () {
  $('.overlay').removeClass('show');
});
