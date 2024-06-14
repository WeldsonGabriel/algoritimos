function inverterPalavra() {
    const inputPalavra = document.getElementById('inputPalavra').value;
    const arrayPalavra = inputPalavra.split('');
    
    let esquerda = 0;
    let direita = arrayPalavra.length - 1;
    
    while (esquerda < direita) {
        let temp = arrayPalavra[esquerda];
        arrayPalavra[esquerda] = arrayPalavra[direita];
        arrayPalavra[direita] = temp;
        
        esquerda++;
        direita--;
    }
    
    const palavraInvertida = arrayPalavra.join('');
    document.getElementById('resultadoInversao').innerText = `Palavra invertida: ${palavraInvertida}`;
}
