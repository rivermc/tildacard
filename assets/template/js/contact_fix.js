// Price Scroll

    function stickyInit() {
        var price_elem = $('.sticky_block');
        var product_cont = $('.product__item_content');
        var offset = $('.product__item_top').height();
        offset += 490; // gallery & margin-top popup

        $('.mfp-wrap').scroll(function(){
            priceFixed(price_elem, product_cont, offset, this);
        });
    }
    
    function  priceFixed(price_elem, product_cont, price_elem_offset, item) {
        console.log(price_elem_offset);
        var scroll = $(item).scrollTop();
        console.log(scroll);
        if (scroll >= price_elem_offset) {
            price_elem.addClass('fixed');
        }
        else if ( scroll <=  price_elem_offset) {
            price_elem.removeClass('fixed');
        }
        else {
            price_elem.removeClass('fixed');
        }
    }
    


