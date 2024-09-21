// criando uma constante array para definir os valores que são os emojis
const emojis = ["🐱", "🐱", "🦝", "🦝", "🦊", "🦊", "🐶", "🐶", "🐵", "🐵", "🦁", "🦁", "🐯", "🐯", "🐮", "🐮",]
// variavel para guardar os elementos que forem abrindo
let openCards = []

// essa variavel vai embaralhar os emojis dentro das cartas sort(cria ordenação de acordo com a regra da funcao) no caso math.random
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1))

// laço de repetição for para desenhar os elementos dentro da tela, declara uma variavel I com valor inicial de 0 e vai fazer esse loop ate o tamanho da contante emojis e vai incrementando de um em um
for (let i = 0; i < emojis.length; i++) {
  // cria a variavel let box e cria um elemento dentro do DOM com nome de DIV
  let box = document.createElement("div")
  // adicionando o nome da classe dentro do box com o nome item
  box.className = "item"
  // o elemento que vai estar dentro do HTML no box vai ser a variavel de embaralhamento para trazer todos embaralhados
  box.innerHTML = shuffleEmojis[i]
  // adiciona um evento de clique na caixa (box) chamando a função handleClick
  box.onclick = handleClick
  // adiciona o box dentro do elemento com nome de game no HTML, que é a div que contém as cartas e os emojis
  document.querySelector(".game").appendChild(box)
}


// verifica se a caixa clicada tem a classe boxOpen se não tiver adiciona a classe boxOpen e adiciona a caixa à variavel openCards
function handleClick() {
  // verifica se a caixa clicada já possui a classe boxMatch ou a classe boxOpen, se não tiver retorna
  if (openCards.length < 2) {
    // adiciona a classe boxOpen na caixa clicada para fazer ela parecer aberta e adiciona a caixa à variavel openCards
    this.classList.add("boxOpen")
    // adiciona a o valor à variavel openCards
    openCards.push(this);
  }

  // verifica se as caixas clicadas tem o mesmo conteudo, se não tiver remove a classe boxOpen e retira as caixas da variavel openCards
  if (openCards.length == 2) {
    // aguarda 500 milisegundos para verificar se as cartas clicadas são iguais, se não executa a função checkMatch
    setTimeout(checkMatch, 500)
  }
  // exibe as cartas abertas
  console.log(openCards);
}

// função para verificar se as cartas clicadas são iguais, se não adiciona a classe boxMatch e remove a classe boxOpen, se sim remove as caixas da variavel openCards e verifica se todas as cartas foram descobertas
function checkMatch() {
  // verifica se as caixas clicadas tem o mesmo conteudo, se sim adiciona a classe boxMatch e remove a classe boxOpen, se não remove a classe boxOpen e retira as caixas da variavel openCards e verifica se todas as cartas foram descobertas
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    // adiciona a classe boxMatch nas caixas clicadas para fazer elas parecerem descobertas e verifica se todas as cartas foram descobertas
    openCards[0].classList.add("boxMatch")
    openCards[1].classList.add("boxMatch")
  } else {
    // remove a classe boxOpen das caixas clicadas para fazer elas parecerem sem descobrir e verifica se todas as cartas foram descobertas
    openCards[0].classList.remove("boxOpen")
    openCards[1].classList.remove("boxOpen")
  }

  openCards = [];
  // exibe uma mensagem de vitória se todas as cartas forem descobertas e encerra o jogo
  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("Você venceu !");
  }
}
