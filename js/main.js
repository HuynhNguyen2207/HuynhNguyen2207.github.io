$(document).ready(function() {

    if ($(window).width() < 426) {

        $(".nav-header").hide();
        $(".btn-menu").click(function() {
            $(".nav-header").slideToggle();
        });
    }
})
