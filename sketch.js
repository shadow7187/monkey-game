var invisibleGround,monkey,ground,stonesGroup,BananaGroup,BananaImage,stonesImage,monkey_run,backround,backgroundImage,groundImage,stone,banana;
var score=0;

function preload(){
monkey_run=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
groundImage=loadImage("ground.jpg")
  stonesImage=loadImage("stone.png")
  BananaImage=loadImage("Banana.png")
}


function setup() {
  createCanvas(600,300);
  backround =createSprite(300,300,1200,20)
  backround.addImage(groundImage)
  backround.velocityX=-10
  ground = createSprite(300,300,1200,20);
  ground.visible=false
  monkey = createSprite(100,300,20,50);
  monkey.addAnimation("run",monkey_run);
  monkey.scale=0.15
  BananaGroup=new Group()
  stonesGroup=new Group()
}
function draw(){

  
 if (backround.x<-1250) {
 backround.x=1750
 }    
 
 
monkey.velocityY = monkey.velocityY + 0.8;
monkey.collide(ground)
  if(keyDown("space")){
      monkey.velocityY = -12 ;
   }
  if(score<0){
  monkey.scale=0.13
  }
  if (monkey.isTouching(BananaGroup)){
    score=score+2
    BananaGroup.destroyEach()
  }
    switch(score){
    case 0: monkey.scale=0.15;
              break;
    case 10: monkey.scale=0.16;
              break;
      case 20:  monkey.scale=0.17;
              break;
      case 30:  monkey.scale=0.18
              break;
      case 40:  monkey.scale=0.19
              break;
      case 50:  monkey.scale=0.2
              break;
      case 60:  monkey.scale=0.3
              break;      
      default : break
    }    
      if (monkey.isTouching(stonesGroup)){
    score=score-10
    stonesGroup.destroyEach()
      }
  

  spawnStones();
  spawnBanana();
 drawSprites() 
  fill("black")
  stroke("black")
  text.depth=999
  text("score: "+score,500,50);
}
function spawnStones(){
if (frameCount % 300 === 0) {
    stone = createSprite(600,265,10,40);
    stone.addImage(stonesImage)
    stone.scale = 0.25;
    stone.velocityX=-10
    stone.lifetime = 600;
    stonesGroup.add(stone);
  }
}
function spawnBanana() {
  if(World.frameCount % 80 === 0) {
   Banana =createSprite(600,75,10,10);
    Banana.addImage(BananaImage);
    Banana.velocityX = -7;
    Banana.scale = 0.05;
    Banana.lifetime = 300;
    BananaGroup.add(Banana);
  }
}