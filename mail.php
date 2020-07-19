<html>
<head><title>PHP Mail Sender</title></head>
<body>
<?php

/*** 
$email = $HTTP_POST_VARS['email'];
$subject = $HTTP_POST_VARS['subject'];
$message = $HTTP_POST_VARS['message'].'from: '.$email;
$Header = 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$Header .= 'From: info <info@eaglesalestires.com >' . "\r\n";

if(mail('seanwayland@gmail.com', $subject, $message, $Header))

echo "email sent";

else 

echo "email sending fail";

**/
//$email = $HTTP_POST_VARS['email'];
//$subject = $HTTP_POST_VARS['subject'];
//$message = $HTTP_POST_VARS['message'].' : message from: '.$email;



$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];
$message = ' email from: '.$visitor_email.' name: '.$name.' message: '.$message;





$subject = "contact form";
//$message   = "Validation info, hi there";
$Header = 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$Header .= 'From: info <info@eaglesalestires.com >' . "\r\n";

if(mail('questions@eaglesalestires.com', $subject, $message, $Header))

echo 'email sent '.' message: '.$message;
//echo $email.$subject.$message;
//echo $subject;
//echo $message;


//else 

//echo "email sending fail";

/***
 * https://stackoverflow.com/questions/10095456/phps-mail-function-doesnt-work-on-godaddy-dedicated-server
 */


?>


</body>
</html>
