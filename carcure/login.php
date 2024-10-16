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
	if(empty($data)){
		echo json_encode(['status'=>false,'message'=>'invalid parameters']);
	}
	else{
		$Username=$con->real_escape_string($data['uname']);
		$Password=$con->real_escape_string($data['pwd']);
		$query="SELECT COUNT(*) AS count FROM login WHERE Username='$Username' AND Password=$Password;";
		$result=$con->query($query);
		if($result){
			$row = $result->fetch_assoc();
			$found=$row['count'];
			$con->close();
			echo json_encode(['status'=>true,'message'=>$found]);
		}else{			
		echo json_encode(['status'=>true,'message'=>'Query Failed:'.$con->error]);
		}
	}
?>