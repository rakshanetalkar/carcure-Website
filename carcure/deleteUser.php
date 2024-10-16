<?php
	header("Access-Control-Allow-Origin:*");
	header("Access-Control-Allow-Methods:POST,GET,DELETE ,OPTIONS");
	header("Access-Control-Allow-Headers:Content-Type");
	header("Content-Type:application/json");

	$serverName="127.0.0.1";
	$username="root";
	$password="";
	$dbName="carcure";
	$con=new mysqli($serverName,$username,$password,$dbName);

		$Mobile=$_GET['Mobile'];

		$query="DELETE FROM signup WHERE Mobile=$Mobile";
		$con->query($query);
		$con->close();
		echo json_encode(['status'=>true,'message'=>'User Deleted Successfully!']);
?>