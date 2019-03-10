$(document).ready(function() {
    
    // popupcard js init
    var popupcard =  new PopupCard();
    popupcard.getPopup();
    
    // popupcard click close
    $(document).on('click', '.close_button_popup', function(){
        $.magnificPopup.close();
    });


    $(document).on('mse2_load', function(e, data) {
        console.log(e, data);
        popupcard =  new PopupCard();
        popupcard.getPopup();
        miniShop2.Gallery.initialize();
        $('#pdopage .rows').css({'opacity': 1});
        $(window).scrollTop(0);
    });
});