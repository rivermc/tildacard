class PopupCard {

    constructor() {
        this.item = $('.popup-btn');
    }

    getPopup() {
        var self_this = this.item;
        self_this.magnificPopup({
            type: 'inline',
            preloader: false,

            callbacks:  {
                beforeOpen: function() {
                    var itemID = $(this.st.el).data('id');

                    $('.card_popup').load("/assets/template/php/getCard.php",
                        {
                            id: itemID,
                            snippet: 'msProducts',
                            action: 'getCard',
                            tpl: 'Item'
                        },
                        function(response) {
                            //console.log('getCard response: ' + response);
                        });

                },
                open: function() {
                    $('html').css('overflow', 'hidden');
                    setTimeout(function(){
                        $('.card_popup').css('opacity', 1);
                        miniShop2.Gallery.initialize();
                        stickyInit();
                    },1000);
                },
                close: function() {
                    $('.card_popup').css('opacity', 0);
                    $('html').css('overflow', 'auto');
                }
            }
        });
    }
}