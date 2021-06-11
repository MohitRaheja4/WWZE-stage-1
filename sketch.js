var gameState = 0;
var player,playerImg;
var bgImg;
var start,startImg;
var coinsScore,zombieScore;

function preload()
{
  playerImg=loadImage("images/player.png");
  bgImg=loadImage("images/city.png");
  startImg=load("images/start.png")
}

function setup()
{
  createCanvas(800,600);

  player = createSprite(90,490,60,60);
  player.addImage(playerImg);
  player.scale=0.4;

  start = createButton("START");
  start.position(300,350);
  start.style('background-color',color(17,255,0))
  start.style('font-size','50px')
  start.style('font-family', 'Architects Daughter');
  start.style('border-width','10px');
  start.style('border-color','white');
  start.style('border-style','outset double outset double');
  start.style('border-radius','40px');

  zombieScore=0;
  coinsScore=0;
}

function draw()
{
  background(0);

  if(gameState===0)
  {
    background("black");
    start.show();
    player.visible=false;

    //displaying the game name
    strokeWeight(5);
    stroke("blue");
    textSize(60);
    textFont("Architects Daughter");
    fill("yellow");
    text("World War-Zombie Edition",55,110);

    //displaying instructions
    noStroke();
    textSize(30);
    text('1.Press space to jump and collect coins.',190,200);
    text('2.Click on the zombies to kill them.',190,250);
    
    start.mousePressed(()=>{
      gameState=1;
    })
  }
  if(gameState===1)
  {
    background(bgImg);
    start.hide();
    player.visible=true;

    textSize(20);
    fill(0);
    text("Coins: "+coinsScore,10,30);
    text("Zombies killed: "+zombieScore,630,30)
  }
  drawSprites();
}