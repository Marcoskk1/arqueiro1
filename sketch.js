const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
  playerBase = Bodies.rectangle(600,580,1200,2,playerBase_options);
  World.add(world,plane);

  //criar corpo do jogador
  player= Bodies.rectangle(600,580,1200,2,player_options);
  World.add(world,plane);



}

function draw() {
  background(backgroundImg);
Engine.update(engine);
  //exibir a imagem do jogador usando a função image()
image(baseimage,playerBase.position.x,playerBase.position.y)
image(playerimage,player.pasition.x,player,position.y)
  //exibir a imagem da base do jogador usando a função image()


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
