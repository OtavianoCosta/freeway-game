//código do ator
let xAtor = 85;
let yAtor = 366;
let meusPontos = 0;
let pontosRival = 0;

colisao = false;

function mostraAtor(){
  image(imagemVaca, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (movimentaPraBaixo()){
    yAtor += 3;
    }
  }
}

function verificaColisao(){
  for (i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i] , yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao){
      colidiu();
      somDaColisao.play();
      pontosRival += 1;
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function colidiu(){
  yAtor = 366;
}

function mostraPontos(){
  textAlign(CENTER);
  text(meusPontos, width / 5, 27)
  textSize(25);
  fill(255,20,147)
}

function verificaPontos(){
  if (yAtor < 16){
    meusPontos += 1;
    colidiu();
    somDoPonto.play();
  }
}

function mostraPontosRival(){
  textAlign(CENTER);
  text(pontosRival, width / 1.25, 27 )
  textSize(25);
  fill(255,20,147)
}

function pontosMaiorQueZero(){
  return meusPontos
}

function movimentaPraBaixo(){
  return yAtor < 366;
}

