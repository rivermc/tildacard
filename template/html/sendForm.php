<?php

$phone=trim($_POST["phone"]);
$phone=strip_tags($phone);
$IDForm=trim($_POST["IDForm"]);
$IDForm=strip_tags($IDForm);
$product=trim($_POST["product"]);
$product=strip_tags($product);
$check=trim($_POST["check"]);
$check=strip_tags($check);
$theme=trim($_POST["theme"]);
$theme=strip_tags($theme);
$thanks = "Спасибо! Ваша заявка отправлена!";





if ( ($_POST['check'] == 'on')  AND ($phone != '') ) {


//-------------------------------------------------------------------------//
    // Send To Email //
//-------------------------------------------------------------------------//


          
          $emailTo = "info@tsyren.ru";
          $emailFrom ="info@tsyren.ru";
          $emailTitle = $theme;
          $emailTitle = iconv("utf-8","windows-1251",$emailTitle);
          $emailTitle = convert_cyr_string($emailTitle, "w", "k");

          $emailText="<html><head></head><body>";

          $emailText.="<b>Тема:</b> {$theme}<br>";
          $emailText.="<b>Продукт:</b> {$product}<br>";
          $emailText.="<b>Телефон:</b> {$phone}"; 
          


          $emailText.="</body></html>";
          $emailText=iconv("utf-8","windows-1251",$emailText);
          $emailText=convert_cyr_string($emailText, "w", "k");

          $emailheaders="MIME-Version: 1.0\r\n";
          $emailheaders.="Content-Type: text/html; charset=koi8-r\r\n";
          $emailheaders.="From: $emailFrom\r\n";

          mail($emailTo, $emailTitle, $emailText, $emailheaders);



//-------------------------------------------------------------------------//
    // Send To Telegram//
//-------------------------------------------------------------------------//

      /*
        http://smartlanding.biz/otpravka-dannyx-formy-v-telegram.html
        https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates
       */



          $token = "669717612:AAFj7WrO39W9HDIkOnlQ5PNdOH-PY0dNP44";
          $chat_id = "-263514402";
          $arr = array(
            "Тема: " => $theme,
            "Продукт: " => $product,
            "Телефон: " => $phone
          );
          foreach($arr as $key => $value) {
            $txt .= "<b>".$key."</b> ".$value."%0A";
          };

          $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


          ?>
          <script>
            $('.error.' + '<?php echo $IDForm; ?>').html('<p class="thanks"><?php echo $thanks;?></p>');
            $('#' + '<?php echo $IDForm; ?>').hide().delay(3000).queue(function(next) {
              $('#' + '<?php echo $IDForm; ?>').show(500);
              $('.error.' + '<?php echo $IDForm; ?>').empty();
              next();
            });
          </script>
          <?php


}


else {


         if ($_POST['check'] != "on") {

              ?>
               <script>
                  $('#' + '<?php echo $IDForm; ?>' + ' .policy-check').addClass('shake').delay(800).queue(function(next){ $('.policy-check').removeClass('shake');  next(); });
                </script>
              <?php

         }
         else {

              ?> 
               <script>
                  $('#' + '<?php echo $IDForm; ?>' + ' input.phone').addClass('shake').delay(800).queue(function(next){ $('#' + '<?php echo $IDForm; ?> input.phone').removeClass('shake');  next(); });
                </script>
              <?php

         }

}



//-------------------------------------------------------------------------//
    // Send To Sheets//
//-------------------------------------------------------------------------//

/*
      $phone = preg_replace('~\D~','',$phone);
      $sheet = '1ke-9Y5n8wqaIptJ2oCPc_x2IJsr_YzpzPYm5f6q13sU';
      $themeSheets = 'PromoCode';

      $sendToSheets = fopen("https://script.google.com/macros/s/AKfycbxeoJP5ImxIb73dJbMOPcYhj_lXNdk2kAgW5Qjw/exec?p1={$code}&p2={$phone}&p3={$sheet}&p4={$themeSheets}","r");
*/

//-------------------------------------------------------------------------//
    // Send To SMSAero//
//-------------------------------------------------------------------------//

  
  /*
      $loginSms = 'ychiginceva@ya.ru';
      $passwordSms = md5('Zse750zse750');
      $toSms = preg_replace('~\D~','',$phone);
      $textSms = 'Промо-код от Steam-Tailor.ru на скидку 10%: ' . $code . ', действует 3 месяца' ;
      $fromSms = 'SMS Aero';

      $sendToSms = fopen("https://gate.smsaero.ru/send/?user={$loginSms}&password={$passwordSms}&to={$toSms}&text={$textSms}&from={$fromSms}","r");

*/








?>
