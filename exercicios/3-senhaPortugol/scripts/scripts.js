function validarSenha() {
    const senhaCorreta = "PORTUGOL";
    const inputSenha = document.getElementById('inputSenha').value;
    
    // Converte ambas as senhas para letras minúsculas para ignorar a distinção entre maiúsculas e minúsculas
    if (inputSenha.toLowerCase() === senhaCorreta.toLowerCase()) {
        document.getElementById('resultadoValidacao').innerText = "Senha válida!";
    } else {
        document.getElementById('resultadoValidacao').innerText = "Senha inválida.";
    }
}
