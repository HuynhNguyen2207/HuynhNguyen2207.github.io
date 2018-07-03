$(document).ready(function() {

    if ($(window).width() < 430) {

        $(".nav-header").hide();
        $(".btn-menu").click(function() {
            $(".nav-header").slideToggle();
        });
    }
})
