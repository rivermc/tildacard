$(document).ready(function(){

/* ----------------------------------------------------------------------- */
/* SendForm */
/* ----------------------------------------------------------------------- */

  function sendForm(IDForm) {
    var msg=$('#' + IDForm).serialize();
    $.ajax({
      type:'POST',
      url:"/assets/template/php/sendForm.php",
      data:msg,
      cache:false,
      beforeSend: function() {
        $('#' + IDForm + ' button').prop('disabled', true);
      },
      success:function(data) {
        callback(data);
        $('#' + IDForm + ' button').prop('disabled', false);
      },
      error: function(response) {
        console.log('error send mail');
        console.log(response);
      }
    });
  }


  function callback(check) {
  
    if (check === 'true') {
      $('.form__callback_error').html('<p>Спасибо! Мы подготовим для вас подборку домов и позвоним в течение дня!</p>');
      $('.callback__form').hide().delay(8000).queue(function(next) {
        $('.callback__form').show(500);
        $('.form__callback_error').empty();
        next();
      });
    }
  }


  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  function isPhone(phone) {
    var regex = /^\+?([\d]{1})\)?[- ]*[( ]*?([\d]{3})?[) ]*[- ]?([\d]{3})[- ]?([\d]{2})[- ]?([\d]{2})$/;
    return regex.test(phone);
  }

/* ----------------------------------------------------------------------- */
/* Events */
/* ----------------------------------------------------------------------- */

  $(document).on('click', '.callback button', function(e){
    e.preventDefault();
    var FormId = $(this).parent().attr('id');
    var inputs = $(this).parent().find('input');
    var test = false;
    
    $(inputs).each(function(index, item) {
      var value;
      if ($(item).attr('name') === 'email') {
        value = $(item).val();
        test = isEmail(value);
      }
      if ($(item).attr('name') === 'phone') {
        value = $(item).val();
        test = isPhone(value);
      }
      console.log(test);
      if (test === false) {
        $('.callback__form' + ' .callback__form_input_' + $(item).attr('name')).addClass('shake').delay(800).queue(function(next){ $('.callback__form .callback__form_input_' + $(item).attr('name')).removeClass('shake');  next(); });
      }
    });
    
    if (test === true) {
      sendForm(FormId);      
    }
  });

  $(document).on('focus', '.callback__form_input', function(){
    $(this).parents('.form__callback_form-group').addClass('focused');
  });

  $(document).on('click', '.form__group_label', function(){
    $(this).parents('.form__callback_form-group').addClass('focused');
  });
  
  $(document).on('blur', '.callback__form_input', function(){
    var inputValue = $(this).val();
    if ( (inputValue === "")) {
      $(this).removeClass('filled');
      $(this).parents('.form__callback_form-group').removeClass('focused');
    } else {
      $(this).addClass('filled');
    }
  });



    $('.popup_btn').magnificPopup({
        type: 'inline',
        preloader: false,

        callbacks:  {
          beforeOpen: function() {

          },
          open: function() {
            $('html, body').css({'overflow': 'hidden'});
            $('header').css({'padding-right': '15px'});
          },
          close: function() {
            $('html, body').css({'overflow': 'auto'});
            $('header').css({'padding-right': '0'});
          }
        }
      });

});