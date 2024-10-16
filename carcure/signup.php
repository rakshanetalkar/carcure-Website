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

	if(empty($data)){
		echo json_encode(['status'=>false,'message'=>'invalid parameters']);
	}
	else{
		$Fullname=$data['Fullname'];
		$Username=$data['Username'];
		$Password=$data['Password'];
		$Address=$data['Address'];
		$City=$data['City'];
		$State=$data['State'];
		$Mobile=$data['Mobile'];

		$query="INSERT INTO signup VALUES('$Fullname','$Username',$Password,'$Address','$City','$State','$Mobile');";
		$con->query($query);
		$query="INSERT INTO login VALUES('$Username',$Password);";
		$con->query($query);
		$con->close();
		echo json_encode(['status'=>true,'message'=>'User Registred Successfully!']);
	}
?>