$(document).ready(function() {
  $('.banner').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

  $('.nav-bar').sticky();
});

$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $(".nav-bar").addClass("bg");
        $(".logo-header-desktop").hide();
        $(".logo-header-mobile").show();
    } else {
        $(".nav-bar").removeClass("bg");
        $(".logo-header-desktop").show();
        $(".logo-header-mobile").hide();
    }
});



// Civil Engineer Modal
// Get the modal
var civilModal = document.getElementById('modal-civil');

// Get the button that opens the modal
var civilBtn = document.getElementById("btn-civil");

// Get the <span> element that closes the modal
var civilSpan = document.getElementsByClassName("close-civil")[0];

// When the user clicks on the button, open the modal
civilBtn.onclick = function() {
  event.preventDefault();
  civilModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
civilSpan.onclick = function() {
  civilModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == civilModal) {
    civilModal.style.display = "none";
  }
}

// Bridge Engineer Modal
// Get the modal
var bridgeModal = document.getElementById('modal-bridge');

// Get the button that opens the modal
var bridgeBtn = document.getElementById("btn-bridge");

// Get the <span> element that closes the modal
var bridgeSpan = document.getElementsByClassName("close-bridge")[0];

// When the user clicks on the button, open the modal
bridgeBtn.onclick = function() {
  event.preventDefault();
  bridgeModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
bridgeSpan.onclick = function() {
  bridgeModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == bridgeModal) {
    bridgeModal.style.display = "none";
  }
}

// Junior Engineer Modal
// Get the modal
var juniorModal = document.getElementById('modal-junior');

// Get the button that opens the modal
var juniorBtn = document.getElementById("btn-junior");

// Get the <span> element that closes the modal
var juniorSpan = document.getElementsByClassName("close-junior")[0];

// When the user clicks on the button, open the modal
juniorBtn.onclick = function() {
  event.preventDefault();
  juniorModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
juniorSpan.onclick = function() {
  juniorModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == juniorModal) {
    juniorModal.style.display = "none";
  }
}
