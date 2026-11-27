let felicidade = 0;

const textoContador = document.getElementById('contador');
const textoMensagem = document.getElementById('mensagem');
const botaoLanche = document.getElementById('btn-lanche');
const botaoBrincar = document.getElementById('btn-brincar');
const botaoRecomecar = document.getElementById('btn-recomecar');

function atualizarJogo() {
  textoContador.textContent = 'Felicidade: ' + felicidade;

  if (felicidade >= 5) {
    textoMensagem.textContent = '🎉 Seu bichinho está feliz!';
    botaoLanche.disabled = true;
    botaoBrincar.disabled = true;
  }
}

botaoLanche.addEventListener('click', function () {
  felicidade = felicidade + 1;
  atualizarJogo();
});

botaoBrincar.addEventListener('click', function () {
  felicidade = felicidade + 2;
  atualizarJogo();
});

botaoRecomecar.addEventListener('click', function () {
  felicidade = 0;
  textoContador.textContent = 'Felicidade: 0';
  textoMensagem.textContent = '';
  botaoLanche.disabled = false;
  botaoBrincar.disabled = false;
});
