function verificarNumero() {
    const numero = parseFloat(document.getElementById('inputNumero').value);
    if (numero > 100) {
        alert("O número é maior que 100!");
    } else {
        alert("O número não é maior que 100.");
    }
}
