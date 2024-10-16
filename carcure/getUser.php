<?php
	header("Access-Control-Allow-Origin:*");
	header("Access-Control-Allow-Methods:POST,GET,OPTIONS");
	header("Access-Control-Allow-Headers:Content-Type");
	header("Content-Type:application/json");

	$data=json_decode(file_get_contents("php://input"),true);
	$serverName="127.0.0.1";
	$username="root";
	$password="";
	$dbName="carcure";
	$con=new mysqli($serverName,$username,$password,$dbName);

	if($con->connect_error){
		die(json_encode(['status'=>false,'message'=>'Connection failed:' .$con->connect_error]));
	}
	$query="SELECT * FROM signup;";
	$result=$con->query($query);
	$users=[];
	while($row=$result->fetch_assoc()){
		$users[]=$row;
	}
	$con->close();
	echo json_encode(['status'=>true,'message'=>$users]);
?>