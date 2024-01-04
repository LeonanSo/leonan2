<?php
@session_start();

include('db.php');

$nome = $_POST['nome'];
$senha = $_POST['senha'];

$stmt = $pdo->prepare("SELECT * FROM usuarios WHERE nome = ?");
$stmt->execute([$nome]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if(!$user){
    echo 'ERRO_USUARIO';
    exit;
}

if($senha == $user['senha']){  // Assumindo que as senhas foram armazenadas de maneira segura usando password_hash
    echo 'OK';
    $_SESSION['usuarios'] = $user['nome'];
} else {
    echo 'ERRO_SENHA';
    exit;
}
?>
