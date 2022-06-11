const inputPergunta = document.querySelector('#pergunta')
const resposta = document.querySelector('#resposta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  'Com toda certeza!',
  'Acho que não estou em um bom momento, não consigo te responder isso agora',
  'Se depender dos astros, é sim para todo o sempre',
  'Pra ser sincero, os astros não estão do seu lado',
  'Vai depender da sua determinação',
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.',
  'Cuidado, essa pergunta é muito perigosa...'
]

// Clicar em fazer pergunta
function gerarRespostas() {
  if (inputPergunta.value == '') {
    alert('Digite sua pergunta')
    return
  }

  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = '<p>' + inputPergunta.value + '</p>'

  //Gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  resposta.innerHTML = pergunta + respostas[numeroAleatorio]

  resposta.style.opacity = 1

  // Tirar a resposta em tela depois de 3 segundos
  setTimeout(() => {
    resposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
}
