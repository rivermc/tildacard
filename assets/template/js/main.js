$(document).ready(function() {

    /*$(document).on('click','.main__item_title', function(e){
        e.preventDefault();
    
        // Вставляем полученный контент в HTML блок с id="content"
        $('.expertise-text').css('opacity', '0').delay(400).queue(function(next){
            $('.expertise-text').load("/assets/template/php/getCard.php",
                {
                    id: 6,
                    snippet: 'msProducts',
                    action: 'getCard',
                    tpl: 'Item'
                },
                function(response) {
                    $('.expertise-text').css('opacity', '1');
                    next();
                });
    
        })
    });*/
    
    function getCard() {
        // Вставляем полученный контент в HTML блок с id="content"
        $('.expertise-text').css('opacity', '0').delay(400).queue(function(next){
            $('.expertise-text').load("/assets/template/php/getCard.php",
                {
                    id: 6,
                    snippet: 'GetMyChunk',
                    action: 'getCard',
                    tpl: 'Item'
                },
                function(response) {
                    $('.expertise-text').css('opacity', '1');
                    next();
                });

        })
    }
    
    $('.popup-btn').magnificPopup({
        type: 'inline',
        preloader: false,
        removalDelay: 350,
    
        callbacks: {
            beforeOpen: function() {
                console.log('BeforeOpen');
                getCard();
    
            },
            open: function() {
                $('html').css('overflow', 'auto');
            },
            close: function() {
    
            }
        }
    });


});