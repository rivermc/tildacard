$(document).ready(function() {
    
    // popupcard js init
    var popupcard =  new PopupCard();
    popupcard.getPopup();
    
    // popupcard click close
    $(document).on('click', '.close_button_popup', function(){
        $.magnificPopup.close();
    });

    // filter load 
    $(document).on('mse2_load', function(e, data) {
        popupcard =  new PopupCard();
        popupcard.getPopup();
        miniShop2.Gallery.initialize();
        $('#pdopage .rows').css({'opacity': 1});
        $(window).scrollTop(0);
    });


    // filter autocomplete code input 
    var complete_option = $('.autocomplete_options').text().trim();
    var res = complete_option.split(",");
   $('.autocomplete').autocomplete({
        source: res
    });
    /* $('select[name=category], select[name=city]').selectmenu({
        change: function( event, ui ) {
            mSearch2.submit();
        }
    }); */

    $('.filter_reset').click(function(){
        $('.autocomplete').val('');
    });


});