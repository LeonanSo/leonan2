$(document).ready(function(){

    $('#login').click(function(){
        var nome = $('#nome').val();
        var senha = $('#senha').val();

        $('#usernameError').hide();
        $('#passwordError').hide();

        $.ajax({
            url: 'php/login.php',
            type: 'POST',
            data:{
                nome: nome,
                senha: senha
            },
            success: function(data){
                console.log(data);
                if(data == 'ERRO_USUARIO'){
                     $('#usernameError').show();
                }
                if(data == 'ERRO_SENHA'){
                    $('#passwordError').show();
                }
                if(data == 'OK'){
                    window.location.replace("inicio.html");
                }
            }
        })
    });
});