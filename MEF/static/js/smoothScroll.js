$(document).ready(function () {
    $(".scroll-down").on('click', function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#il-team").offset().top
        }, 300);
    });
});