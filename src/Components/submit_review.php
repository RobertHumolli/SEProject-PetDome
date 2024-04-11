<?php
$response = array("success!");

header('Access-control-allow-origin: *');

$conn = new mysqli("localhost","react_api","1181","react_api");

if(mysqli_connect_errror()){
    echo mysqli_connect_errror();
    exit();

}
else{
    $currentvalue =$_POST['currentvalue'];
    $myPet = $_POST['myPet'];
    $feedback = $_POST['feedback'];

$sql = "INSERT INTO review(rating,petType,feedback) VALUES('$currentvalue','$myPet','$feedback');";
$res = mysqli_query($conn, $sql);

if($res){
    echo "success!";

}
else{
    echo "Error!";
}
$conn->close();
}


?>