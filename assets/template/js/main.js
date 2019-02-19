$(document).ready(function() {
    
    function getCard(itemID) {
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
    }
    
    $('.popup-btn').magnificPopup({
        type: 'inline',
        preloader: false,
        removalDelay: 350,
    
        callbacks: {
            beforeOpen: function() {
                var itemID = $(this.st.el).data('id');
                getCard(itemID);
    
            },
            open: function() {
                $('html').css('overflow', 'auto');
            },
            close: function() {
    
            }
        }
    });


});