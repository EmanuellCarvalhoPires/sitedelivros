// Obtém referências para a checkbox e a div
const minhaCaixaDeSelecao = document.getElementById('exampleCheck1');
const minhaDiv = document.getElementById('SouEstudanteHIDE');

// Adiciona um evento de alteração à checkbox
minhaCaixaDeSelecao.addEventListener('change', function() {
  // Verifica se a checkbox está marcada
  if (minhaCaixaDeSelecao.checked) {
    // Se estiver marcada, mostra a div
    minhaDiv.style.display = 'block';
  } else {
    // Se não estiver marcada, oculta a div
    minhaDiv.style.display = 'none';
  }
});
