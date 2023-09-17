function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraCarro();
  movimentaCarro();
  mostraAtor();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  mostraPontos();
  verificaPontos();
  //mostraPontosRival();
  movimentaPraBaixo();
}