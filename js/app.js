$(document).ready(function(){

  $('.banner').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(function() {
    $.scrollify({
      section: ".content-block",
      interstitialSection : "header, footer",
      standardScrollElements: ".service"
    });
  });

  if($(window).width() <= 768) {
    $.scrollify.setOptions({
      standardScrollElements: ".service-block",
    })
  };

  // Civil Engineer Modal Box
  $("#open-civil-engineer-mobile").click(function() {
    event.preventDefault();
    $("#modal-civil-engineer-mobile").css("display","block");
    $.scrollify.disable();
  });

  $("#close-civil-engineer-mobile").click(function() {
    $("#modal-civil-engineer-mobile").css("display","none");
    $.scrollify.enable();
  });


  // Bridge Engineer Modal Box
  $("#open-bridge-engineer-mobile").click(function() {
    event.preventDefault();
    $("#modal-bridge-engineer-mobile").css("display","block");
    $.scrollify.disable();
  });

  $("#close-bridge-engineer-mobile").click(function() {
    $("#modal-bridge-engineer-mobile").css("display","none");
    $.scrollify.enable();
  });

  // Junior Engineer Modal Box
  $("#open-junior-engineer-mobile").click(function() {
    event.preventDefault();
    $("#modal-junior-engineer-mobile").css("display","block");
    $.scrollify.disable();
  });

  $("#close-junior-engineer-mobile").click(function() {
    $("#modal-junior-engineer-mobile").css("display","none");
    $.scrollify.enable();
  });

  ////////////////////////////////////////////

  // Civil Engineer Modal Box
  $("#open-civil-engineer-desktop").click(function() {
    event.preventDefault();
    $("#modal-civil-engineer-desktop").css("display","block");
    $.scrollify.disable();
  });

  $("#close-civil-engineer-desktop").click(function() {
    $("#modal-civil-engineer-desktop").css("display","none");
    $.scrollify.enable();
  });


  // Bridge Engineer Modal Box
  $("#open-bridge-engineer-desktop").click(function() {
    event.preventDefault();
    $("#modal-bridge-engineer-desktop").css("display","block");
    $.scrollify.disable();
  });

  $("#close-bridge-engineer-desktop").click(function() {
    $("#modal-bridge-engineer-desktop").css("display","none");
    $.scrollify.enable();
  });

  // Junior Engineer Modal Box
  $("#open-junior-engineer-desktop").click(function() {
    event.preventDefault();
    $("#modal-junior-engineer-desktop").css("display","block");
    $.scrollify.disable();
  });

  $("#close-junior-engineer-desktop").click(function() {
    $("#modal-junior-engineer-desktop").css("display","none");
    $.scrollify.enable();
  });

  // Change .nav-bar style when scrolled
  $(window).scroll(function () {
        var sc = $(window).scrollTop()
        if (sc > 100) {
            $(".nav-bar").css("padding", "15px 0");
            $(".nav-bar").css("border-bottom", "4px solid #3CC5C8");
        } else {
            $(".nav-bar").css("padding", "30px 0");
            $(".nav-bar").css("border-bottom", "none");
        }
    });

    if ($(window).width() > 768) {
      $("#overlay").removeClass("overlay");
      $("#overlay").addClass("nav");

      $(window).scroll(function () {
            var sc = $(window).scrollTop()
            if (sc > 100) {
                $(".nav-bar").addClass("scrolled-nav");
            } else {
                $(".nav-bar").removeClass("scrolled-nav");
            }
        });

      $("main.content-mobile").remove();

      $(".btn-banner-career").attr("href", "#career-desktop");
    }

    if($(window).width() <= 768) {
      $("main.content-desktop").remove();
    }
});

//refresh page on browser resize
$(window).bind('resize', function(e) {
  this.location.reload(false); /* false to get page from cache */
  /* true to fetch page from server */
});
