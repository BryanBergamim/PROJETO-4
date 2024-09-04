let Imagem;
let Musica;
function setup() {
  createCanvas(400, 400);
  palavra = esfirra();
  musica.loop();
}
function preload(){
  imagem=loadImage("imagem.jfif");
  musica=loadSound("musica.mp3");
}

function draw() {
  background("rgb(141,4,216)");
  image(imagem,0,0,400,400);
  batatinha();
  pizza();
  esfirra();
}

function batatinha(){
  let minimo = 0;
  let maximo = width;
  let seguir = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0,seguir);
  text(inicio,200,200)
}

function pizza(){
  fill("lightblue");
  textSize(50);
  textAlign(CENTER,CENTER);
}
function esfirra(){
  let palavras = ["vô náádâ", "pizza", "fauéli", "sora gabi no shopping"];
   return random(palavras);
}
