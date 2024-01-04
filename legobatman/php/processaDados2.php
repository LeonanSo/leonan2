<?php
    include('db.php');

    $tipo = $_POST['tipo'];
    $numero = $_POST['numero'];

    try{
        $pdo->beginTransaction();

        $stmt = $pdo->prepare("INSERT INTO robos (tipo,numero) VALUES (?,?)");
        $stmt->execute([$tipo,$numero]);

        $pdo->commit();

        echo "Dados cadastrados com sucesso!";
    }catch(Exception $e){
        $pdo->rollBack();
        echo "Falha na transação". $e->getMessage();
    }
?>