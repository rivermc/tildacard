$(document).ready(function() {
    
    // popupcard js init
    var popupcard =  new PopupCard();
    popupcard.getPopup();

    // ajax page reload plugin js init
    pdoPage.callbacks['before'] = function() {
        console.log('Конфиг перед загрузкой!');
        $('#pdopage .rows').css({'opacity': 0});
    };
    pdoPage.callbacks['after'] = function() {
        console.log('Конфиг после загрузки!');
        popupcard =  new PopupCard();
        popupcard.getPopup();
        miniShop2.Gallery.initialize();
        $('#pdopage .rows').css({'opacity': 1});
    }

});