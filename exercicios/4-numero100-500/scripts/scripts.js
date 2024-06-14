function verificarNumero() {
    const numero = parseFloat(document.getElementById('inputNumero').value);
    
    if (numero >= 100 && numero <= 500) {
        alert("O número está entre 100 e 500.");
    } else {
        alert("O número não está entre 100 e 500.");
    }
}
