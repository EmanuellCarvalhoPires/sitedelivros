// Obtém referências para a checkbox e a div
const minhaCaixaDeSelecao = document.getElementById('exampleCheck1');
const minhaDiv = document.getElementById('SouEstudanteHIDE');
const FieldsetCheck = document.getElementById('FieldsetCheck');
const documentoMatricula = document.getElementById('documentoMatricula');

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

// Adiciona um evento de alteração à checkbox
FieldsetCheck.addEventListener('change', function() {
  // Verifica se a checkbox está marcada
  if (FieldsetCheck.checked) {
    // Se estiver marcada, mostra a div
    documentoMatricula.style.display = 'block';
  } else {
    // Se não estiver marcada, oculta a div
    documentoMatricula.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Seleciona o elemento do botão da sidebar
  var sidebarToggle = document.querySelector('.sidebar-toggle');

  // Adiciona um ouvinte de evento de clique ao botão da sidebar
  sidebarToggle.addEventListener('click', function(event) {
      // Evita o comportamento padrão de redirecionamento do link
      event.preventDefault();
      
      // Chama a função para abrir/fechar a sidebar
      toggleSidebar();
  });
});

function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('show');
}

// Validação de formulário

function clicou() {

  const email = document.getElementById('emailform')
  const aviso = document.getElementById('avisos')
  const senha = document.getElementById('senhaform')
  const avisos = document.getElementById('aviso')
  if(email.value === "") {
    aviso.innerHTML = "Digite um email válido."
    aviso.style.color = "red"
    aviso.style.fontSize = "15px"
  }

  if(senha.value === "") {
    avisos.innerHTML = "Digite uma senha válida."
    avisos.style.color = "red"
    avisos.style.fontSize = "15px"
  }
}
