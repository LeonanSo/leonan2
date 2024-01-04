$(document).ready(function(){
    // Create a client instance
 var client = new Paho.MQTT.Client('test.mosquitto.org', 8080,"clientId" + new Date().getTime());

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect});


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("Conectado ao MQTT Broker");
  client.subscribe("Robot/web");
  message = new Paho.MQTT.Message("Hello");
  message.destinationName = "Robot/web";
  client.send(message);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("Conexão perdida:"+ responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("Mensagem recebida:"+ message.payloadString);
 }

  function publishMessage(topic, message){
    var message = new Paho.MQTT.Message(message);
    message.destinationName= topic;
    client.send(message);
  }

  $('#pf').click(function(){

    var tempo = $('#tempo').val();

    if(tempo === '100'){
      var topico = "Robot/pf";
      var mensagem = "FRENTE100";

    }else if(tempo === '200'){
      var topico = "Robot/pf";
      var mensagem = "FRENTE200";

    }else if(tempo === '300'){
      var topico = "Robot/pf";
      var mensagem = "FRENTE300";

    }else if(tempo === '500'){
      var topico = "Robot/pf";
      var mensagem = "FRENTE500";

    }else if(tempo === '1000'){
      var topico = "Robot/pf";
      var mensagem = "FRENTE1000";
    }
   publishMessage(topico,mensagem);
});


$('#pt').click(function(){

  var tempo = $('#tempo').val();

  if(tempo === '100'){
    var topico = "Robot/pt";
    var mensagem = "TRAS100";

  }else if(tempo === '200'){
    var topico = "Robot/pt";
    var mensagem = "TRAS200";

  }else if(tempo === '300'){
    var topico = "Robot/pt";
    var mensagem = "TRAS300";

  }else if(tempo === '500'){
    var topico = "Robot/pt";
    var mensagem = "TRAS500";

  }else if(tempo === '1000'){
    var topico = "Robot/pt";
    var mensagem = "TRAS1000";
  }
 publishMessage(topico,mensagem);
});


$('#pd').click(function(){

  var tempo = $('#tempo').val();

  if(tempo === '100'){
    var topico = "Robot/pd";
    var mensagem = "DIREITA100";

  }else if(tempo === '200'){
    var topico = "Robot/pd";
    var mensagem = "DIREITA200";

  }else if(tempo === '300'){
    var topico = "Robot/pd";
    var mensagem = "DIREITA300";

  }else if(tempo === '500'){
    var topico = "Robot/pd";
    var mensagem = "DIREITA500";

  }else if(tempo === '1000'){
    var topico = "Robot/pd";
    var mensagem = "DIREITA1000";
  }
 publishMessage(topico,mensagem);
});


$('#pe').click(function(){

  var tempo = $('#tempo').val();

  if(tempo === '100'){
    var topico = "Robot/pe";
    var mensagem = "ESQUERDA100";

  }else if(tempo === '200'){
    var topico = "Robot/pe";
    var mensagem = "ESQUERDA200";

  }else if(tempo === '300'){
    var topico = "Robot/pe";
    var mensagem = "ESQUERDA300";

  }else if(tempo === '500'){
    var topico = "Robot/pe";
    var mensagem = "ESQUERDA500";

  }else if(tempo === '1000'){
    var topico = "Robot/pe";
    var mensagem = "ESQUERDA1000";
  }
 publishMessage(topico,mensagem);
});

});



