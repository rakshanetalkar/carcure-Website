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

		$query="UPDATE signup SET Fullname='$Fullname',Username='$Username',Password=$Password,Address='$Address',City='$City',State='$State' WHERE Mobile=$Mobile";
		$con->query($query);
		$con->close();
		echo json_encode(['status'=>true,'message'=>'User Updated Successfully!']);
	}
?>