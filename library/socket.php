<html>
<head></head>
<body>

<?php
$sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
socket_connect($sock,"187.15.6.131", 8081);
if(isset($_POST['submit'])) {
    $msg = $_POST['submit'];
    socket_write($sock,$msg,strlen($msg));
}

echo "<form method =\"post\" action=\"socket.php\">";
echo "<button style=\"width:90;font: bold 14px Arial\" type = \"Submit\" Name = \"submit\" value='1'>ON</button></br></br>";
echo "<button style=\"width:90;font: bold 14px Arial\" type = \"Submit\" Name = \"submit\" value='0'>OFF</button></br></br>";
echo "</form>";
socket_close($sock);
?>

</body>
</html>