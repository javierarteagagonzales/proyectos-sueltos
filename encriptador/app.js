function encryptText() {
    var textInput = document.getElementById('textAreaInput').value;
    var encryptedText = encrypt(textInput);
    document.getElementById('result').innerText = encryptedText;
    //copyOriginalTextOnEncrypt();

    limpiarCaja();


    document.getElementById('mensajes').style.display = 'block';
    document.getElementById('copyButton').style.display = 'block';
    
}

function decryptText() {
    var textInput = document.getElementById('textAreaInput').value;
    var decryptedText = decrypt(textInput);
    document.getElementById('result').innerText = decryptedText;
    //copyOriginalTextOnEncrypt();

    limpiarCaja();

    document.getElementById('mensajes').style.display = 'block';
    document.getElementById('copyButton').style.display = 'block';
}

function limpiarCaja(){
    document.getElementById('caja-muestra-mensajes').style.display='none';

}

function limpiarTextoInicial(){
    // Limpiar el textarea
    document.getElementById('textAreaInput').value = '';
}

function copyToClipboard() {
    var resultText = document.getElementById('result');
    var textArea = document.createElement('textarea');
    textArea.value = resultText.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Mostrar mensaje después del botón
    document.getElementById('copyMessage').innerText = 'Texto copiado al portapapeles: ' + result.innerText;

}

function copyOriginalTextOnEncrypt() {
    var originalText = document.getElementById('textAreaInput').value;


    
    // Copiar el texto original al portapapeles (opcional)
    var textArea = document.createElement('textarea');
    textArea.value = originalText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

        // Mostrar el texto original al encriptar
        document.getElementById('originalTextOnEncrypt').innerText = 'Texto Original:\n ' + originalText;
}


//Funciones para encriptar y desencriptar
function encrypt(text) {
    var encryptedText = text.replace(/e/g, 'enter')
                           .replace(/i/g, 'imes')
                           .replace(/a/g, 'ai')
                           .replace(/o/g, 'ober')
                           .replace(/u/g, 'ufat');

    return encryptedText;
}

function decrypt(text) {
    var decryptedText = text.replace(/enter/g, 'e')
                           .replace(/imes/g, 'i')
                           .replace(/ai/g, 'a')
                           .replace(/ober/g, 'o')
                           .replace(/ufat/g, 'u');

    return decryptedText;
}
