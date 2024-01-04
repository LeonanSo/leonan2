$(document).ready(function(){
    
    $('#btnEnviar').click(function(){
        
        var nome = $('#nome').val();
        var senha = $('#senha').val();

        $.ajax({
            url:'php/processaDados.php',
            type: 'POST',
            data:{
                nome: nome,
                senha:senha
            },
            success: function(data){
                alert(data);
                console.log("OK");
            }
        });
    });     
});
