<html>
<head></head>
<body>
<?php
echo "Verificando extensoes<br/>";
if (!extension_loaded('sockets')) {
    die('The sockets extension is not loaded.');
}
error_reporting(E_ALL);
echo "Criando o socket<br/>";
$sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
echo "Socket criado<br/>";
echo "Requisitando conexao<br/>";
flush();
socket_connect($sock,"201.80.136.226", 8081);
echo "Connectado<br/>";
flush();
if(isset($_POST['submit'])) {
    $msg = $_POST['submit'];
    socket_write($sock,$msg,strlen($msg));
}

echo "<form method =\"post\" action=\"socket.php\">";
echo "<button style=\"width:90;font: bold 14px Arial\" type = \"Submit\" Name = \"submit\" value='value?1'>ON</button></br></br>";
echo "<button style=\"width:90;font: bold 14px Arial\" type = \"Submit\" Name = \"submit\" value='value?0'>OFF</button></br></br>";
echo "</form>";
socket_close($sock);
?>
</body>
</html>