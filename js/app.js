$(document).ready(function(){
  $('.slide-header').slick({
    autoplay: true,
    arrows: false,
  });
});

$("#modal-civil-structure").iziModal({
  title: 'Civil Structural Design Engineer',
  headerColor: '#00B9BD',
  closeButton: true,
});

$("#modal-bridge-design").iziModal({
  title: 'Bridge Design engineer',
  headerColor: '#00B9BD',
  closeButton: true,
});

$("#modal-junior-design").iziModal({
  title: 'Junior Design engineer',
  headerColor: '#00B9BD',
  closeButton: true,
});


$(document).on('click', '.civil-structure',function (event) {
  event.preventDefault();
  $('#modal-civil-structure').iziModal('open');
});

$(document).on('click', '.bridge-design',function (event) {
  event.preventDefault();
  $('#modal-bridge-design').iziModal('open');
});

$(document).on('click', '.junior-design',function (event) {
  event.preventDefault();
  $('#modal-junior-design').iziModal('open');
});
