<?php
$user="root";
$password="";
$server="127.0.0.1";
$databasedb="portfolio";

$connect=mysql_connect($server,$user,$password);
$dbserver=mysql_select_db($databasedb,$connect);

$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];

if(isset($_POST['send'])){
	$ins="insert into messages (name,email,message) 
	value('$name','$email','$message')";
	$myquery=mysql_query($ins);
	
	if($myquery){
		echo"<script> alert('Message sent successfully');
        window.location='../index.html'
        </script>";
	}
	else{
		echo"<script> alert('Message not sent');</script>";
	}
}


?>