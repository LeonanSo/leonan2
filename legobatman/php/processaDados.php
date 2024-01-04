<?php
    include('db.php');

    $nome = $_POST['nome'];
    $senha = $_POST['senha'];

    try{
        $pdo->beginTransaction();

        $stmt = $pdo->prepare("INSERT INTO usuarios (nome,senha) VALUES (?,?)");
        $stmt->execute([$nome,$senha]);

        $pdo->commit();

        echo "Dados cadastrados com sucesso!";
    }catch(Exception $e){
        $pdo->rollBack();
        echo "Falha na transação". $e->getMessage();
    }
?>