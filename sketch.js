
var trex ,trex_running;
var ground,imageofground;
var ing 
var cloud, imageofcloud;
var r
var j
var cacti
var o
var score
var PLAY = 1
var END = 0
var gamestate = PLAY
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  imageofground = loadImage("ground2.png");
  imageofcloud = loadImage("cloud.png");
  obs1 = loadImage("obstacle1.png");
  obs2 = loadImage("obstacle2.png");
  obs3 = loadImage("obstacle3.png");
  obs4 = loadImage("obstacle4.png");
  obs5 = loadImage("obstacle5.png");
  obs6 = loadImage("obstacle6.png");
}

function setup(){
  createCanvas(600,200)
  score = 0;
  //create a trex sprite
 trex = createSprite(50,155,20,50);
 trex.addAnimation("running",trex_running);
trex.scale = 0.6

ing = createSprite(200,170,400,20);
ing.visible = false;

ground = createSprite(200,155,400,20);
ground.addImage("ground",imageofground);
}




function draw(){
  background("white")
text("score = "+score,500,20);
score = score+Math.round(frameCount/80);
if(keyDown("space")||keyDown("UP_ARROW") && trex.y>=100){
  trex.velocityY = -7;
}

trex.velocityY = trex.velocityY + 0.8;
trex.collide(ing);
if (ground.x<0){
  ground.x= ground.width/2;
}
ground.velocityX = -7;
spawninginthecloud();
spawninginthecactus();
drawSprites();
}
function spawninginthecloud(){
r = Math.round(random(150,200));
if(frameCount%r===0){
cloud = createSprite(600,100,40,10);
cloud.addImage("cloud", imageofcloud);
cloud.velocityX = -1;
cloud.scale = 0.7;
cloud.y = Math.round(random(10,100));
cloud.depth = trex.depth;
trex.depth = trex.depth + 1;
cloud.lifetime = 625;
}
}
function spawninginthecactus(){
j = 80;
if(frameCount%j===0){
cacti = createSprite(600,135,10,40);
cacti.velocityX = -7;
cacti.scale = 0.6;
cacti.lifetime = 625;
o = Math.round(random(1,6));
switch(o){
case 1: cacti.addImage(obs1);
break;
case 2: cacti.addImage(obs2);
break;
case 3: cacti.addImage(obs3);
break;
case 4: cacti.addImage(obs4);
break;
case 5: cacti.addImage(obs5);
break;
case 6: cacti.addImage(obs6);
break;
}
}
}