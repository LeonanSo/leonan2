let textBox = document.getElementById('textBox');
let powerOn = false;

function addToTextBox(value) {
    if (powerOn) {
        textBox.value += value + ' ';
    } else {
        alert('Ligue o dispositivo antes de usar!');
    }
}

function togglePower() {
    powerOn = !powerOn;
    textBox.value = '';
}

function exit() {
    if (confirm('Deseja realmente sair?')) {
        window.close();
        window.location.href = 'inicio.html'
    }
}

function clearTextBox() {
    textBox.value = '';
}
