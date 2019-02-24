$(document).ready(function(){

/* ----------------------------------------------------------------------- */
/* SendForm */
/* ----------------------------------------------------------------------- */

  function sendForm(idForm) {
    var msg=$('#' + idForm).serialize();
    $.ajax({
      type:'POST',
      url:"/assets/template/php/sendForm.php",
      data:msg,
      cache:false,
      beforeSend: function() {
        $('#' + idForm + ' button').prop('disabled', true);
      },
      success:function(data) {
        callback(data);
        $('#' + idForm + ' button').prop('disabled', false);
      }
    });
  }


  function callback(check) {
  
    if (check == 'true') {
      $('.form__callback_error').html('<p>Спасибо! Ваша заявка отправлена!</p><p>Наш менеджер свяжется с Вами в ближайшее время</p>');
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

/* ----------------------------------------------------------------------- */
/* Events */
/* ----------------------------------------------------------------------- */

  $(document).on('click', '.callback button', function(e){
    e.preventDefault();
    var FormId = $(this).parent().attr('id');
    var inputs = $(this).parent().find('input');
    var test = false;
    
    $(inputs).each(function(index, item) {
      if ($(item).attr('name') == 'email') {
        var value = $(item).val();
        test = isEmail(value);
      }
      
      if (test == false) {
        $('.callback__form' + ' .callback__form_input_' + $(item).attr('name')).addClass('shake').delay(800).queue(function(next){ $('.callback__form .callback__form_input_' + $(item).attr('name')).removeClass('shake');  next(); });
      }
    });
    
    if (test == true) {
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
    if ( (inputValue == "")) {
      $(this).removeClass('filled');
      $(this).parents('.form__callback_form-group').removeClass('focused');
    } else {
      $(this).addClass('filled');
    }
  });


});