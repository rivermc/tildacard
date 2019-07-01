
/* ----------------------------------------------------------------------- */
/* Preloader Disable Hook */
/* ----------------------------------------------------------------------- */

setTimeout(function() {
    if ($('.preloader').hasClass('active')) {
        $('.preloader').css('display', 'none');
    }
} , 2000);

/* ----------------------------------------------------------------------- */
/* Preloader */
/* ----------------------------------------------------------------------- */

$(document).ready(function() {
    console.log('preloader');

    setTimeout(function () {

        $('.preloader').css('opacity', '0').delay(500).queue(function (next) {
            $('.preloader').css('display', 'none').removeClass('active');
            next();
        });

    }, 200);


    $('.preloader').click(function () {
        $(this).css('display', 'none').removeClass('active');
    });


    $('a').click(function () {

        if (!$(this).hasClass('nopreload')) {
            $('.preloader').css('display', 'block').delay(100).queue(function (next) {
                $('.preloader').css('opacity', '1');
                next();
            });
        }
    });
});
    

