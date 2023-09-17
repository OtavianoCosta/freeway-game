let imagemEstrada;
let imagemCarro1;
let imagemVaca;

let somDaTrilha;
let somDaColisao
let somDosPontos;

function preload(){
  imagemEstrada = loadImage("Imagens/estrada.png")
  imagemCarro1 = loadImage("Imagens/carro-1.png")
  imagemCarro2 = loadImage("Imagens/carro-2.png")
  imagemCarro3 = loadImage("Imagens/carro-3.png")
  imagemVaca = loadImage("Imagens/ator-1.png")
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]
  somDaTrilha = loadSound("sons/trilha.mp3")
  somDaColisao = loadSound("sons/colidiu.mp3")
  somDoPonto = loadSound("sons/pontos.wav")
}