var backImage,backgr;
var player, player_running;
var ground,ground_img;
var obstacle;
var obstacleGroup
var obstacleImg;
var score = 0;
var END =0;
var PLAY =1;


var gameState = PLAY;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  obstacleImg = loadImage("stone.png");
}

function setup() {
  createCanvas(800,400);
  obstacleGroup = createGroup();

  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=true;
  
}

function draw() { 
  background(0);

  stroke(20);
  fill("orange");
  text("Score:",370,320);

 
  if(gameState===PLAY){
  obstacles ();
  score = score + Math.round(getFrameRate()/60);

  

  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
 // if (monkey.isTouching(obstacle))


    if(keyDown("space")&&player.y >= 300 ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

  }

  drawSprites();
}

function obstacles(){
  if (frameCount%200 === 0){
    
    obstacle = createSprite(620,330,50,50);
    obstacle.addImage(obstacleImg);
    obstacle.setCollider("circle", 0, 0, 180);
    obstacle.scale = 0.13 ;
    obstacle.velocityX = -(4+score*1.5/100);
    obstacle.lifetime = 220;
    obstacleGroup.add(obstacle);
    
  } 
}