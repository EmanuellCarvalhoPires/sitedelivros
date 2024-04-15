const senhaform = document.getElementById('senhaform')
const checkbox = document.getElementById('checkbox')
var checkedbox = document.getElementById('checkedbox')

function click(){
    window.alert("aaaaaaaaaaaa")
}


  checkbox.addEventListener('change', function() {
    // Verifica se a checkbox está marcada
    if (checkbox.checked) {
      // Se estiver marcada, mostra a div
      senhaform.setAttribute('type', 'text');
    } else {
      // Se não estiver marcada, oculta a div
      senhaform.setAttribute('type', 'password');
    }
  });
//submit button
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
  

    if(senha.value.length >= 8){
        avisos.innerHTML = ""   
        avisos.style.color = "green"
        avisos.style.fontSize = "15px"
    }else{
        avisos.innerHTML = "A senha deve conter no mínimo 8 caracteres."
        avisos.style.color = "red"
        avisos.style.fontSize = "15px"
    }
  }