<?php

$phone=trim($_POST["phone"]);
$phone=strip_tags($phone);
$thanks = "Спасибо! Ваша заявка отправлена!";
$theme = 'Пришла заявка по дому';

//-------------------------------------------------------------------------//
    // Send To Email //
//-------------------------------------------------------------------------//

if ( $phone != '' ) {
          
  $emailTo = "ychiginceva@ya.ru";
  $emailFrom ="ychiginceva@ya.ru";

  $emailTitle = $theme;
  $emailTitle = iconv("utf-8","windows-1251",$emailTitle);
  $emailTitle = convert_cyr_string($emailTitle, "w", "k");

  $emailText="<html><head></head><body>";
  $emailText.="<b>Телефон:</b> {$phone}";
  $emailText.="</body></html>";
  $emailText=iconv("utf-8","windows-1251",$emailText);
  $emailText=convert_cyr_string($emailText, "w", "k");

  $emailHeaders="MIME-Version: 1.0\r\n";
  $emailHeaders.="Content-Type: text/html; charset=koi8-r\r\n";
  $emailHeaders.="From: $emailFrom\r\n";

  mail($emailTo, $emailTitle, $emailText, $emailHeaders);

  $token = "669980375:AAG-buFLWX0F5c0TU65rjIwCUguD9fQv2HI";
	$chat_id = "-395271545";

	$arr = array(
	  "Тема: " => $theme,
	  "Телефон: " => $phone
	);
	$txt = '';
	foreach($arr as $key => $value) {
	  $txt .= "<b>".$key."</b> ".$value."%0A";
	};


	$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


  echo 'true';
}

?>
