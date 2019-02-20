$(document).ready(function() {
    
    class PopupCard {

        constructor() {
            this.item = $('.popup-btn');
        }
        
        getPopup() {
            var self_this = this.item;
            self_this.magnificPopup({
                type: 'inline',
                preloader: false,
                removalDelay: 350,

                callbacks:  {
                    beforeOpen: function() {
                        var itemID = $(this.st.el).data('id');

                        $('.expertise-text').load("/assets/template/php/getCard.php",
                            {
                                id: itemID,
                                snippet: 'GetMyChunk',
                                action: 'getCard',
                                tpl: 'Item'
                            },
                            function(response) {
                                //console.log('getCard response: ' + response);
                            });

                    },
                    open: function() {
                        $('html').css('overflow', 'auto');
                    },
                    close: function() {

                    }
                }
            });
        }
    }

    var popupcard =  new PopupCard();
    popupcard.getPopup();

    pdoPage.callbacks['before'] = function() {
        console.log('Конфиг перед загрузкой!');
    };
    pdoPage.callbacks['after'] = function() {
        console.log('Конфиг после загрузки!');
        popupcard =  new PopupCard();
        popupcard.getPopup();
        miniShop2.Gallery.initialize();
    }
    
//miniShop2.Gallery.initialize();

});