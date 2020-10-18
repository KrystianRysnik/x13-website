import '../scss/app.scss';

// Your JS Code goes here
import 'bootstrap';
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

$('#myTab a').on('click', (e) => {
  e.preventDefault();
  $(this).tab('show');
});
