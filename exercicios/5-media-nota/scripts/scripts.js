function validarNota(input) {
    const valor = input.value;
    const valorNumerico = parseInt(valor);

    if (isNaN(valorNumerico) || valorNumerico < 0 || valorNumerico > 10) {
        input.value = ''; // Limpa o valor inserido se for inválido
    }
}

function calcularMedia() {
    const notas = [];
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach(input => {
        const nota = parseInt(input.value);
        if (!isNaN(nota) && nota >= 0 && nota <= 10) {
            notas.push(nota);
        } 
    });

    if (notas.length === inputs.length) {
        const media = notas.reduce((total, nota) => total + nota, 0) / notas.length;
        const resultadoElement = document.getElementById('resultado');
        const mediaElement = document.getElementById('media');

        if (media >= 6) {
            resultadoElement.textContent = '✔️'; // Sinal de positivo
            resultadoElement.className = 'resultado aprovado';
        } else {
            resultadoElement.textContent = '❌'; // Sinal de negativo
            resultadoElement.className = 'resultado reprovado';
        }

        mediaElement.textContent = `Média: ${media.toFixed(2)}`;
    }
}
