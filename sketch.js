var tom,jerry,bg;
function preload() {
    tomimg1=loadAnimation("images/cat1.png");
    tomimg2=loadAnimation("images/cat2.png","images/cat3.png");
   // tomimg3=loadAnimation("images/cat3.png");
    tomimg4=loadAnimation("images/cat4.png");
    jerryimg1=loadAnimation("images/mouse1.png");
    jerryimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
  //  jerryimg3=loadAnimation("images/mouse3.png");
    jerryimg4=loadAnimation("images/mouse4.png");

    bg=loadImage("images/garden.png");
    //load the images here
}

function setup(){
 createCanvas(1000,800);
 tom=createSprite(870,600);
 tom.addAnimation("tomsitting",tomimg1);
 tom.scale=0.2;
 jerry=createSprite(200,600);
 jerry.addAnimation("jerrysitting",jerryimg1);
 jerry.scale=0.1;
    //create tom and jerry sprites here

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

   if(tom.x - jerry.x < (tom.width - jerry.width)/2){
    tom.addAnimation("tomover",tomimg4);
    tom.changeAnimation("tomover");
    tom.velocityX = 0;
 jerry.addAnimation("jerryover",jerryimg4);
 jerry.changeAnimation("jerryover");
}
    drawSprites();
}


function keyPressed(){

 if(keyCode === LEFT_ARROW){
 tom.addAnimation("tomrunning",tomimg2);
 tom.changeAnimation("tomrunning");
 tom.velocityX = -5;
 jerry.addAnimation("jerryteasing",jerryimg2);
 jerry.changeAnimation("jerryteasing");
 }

  //For moving and changing animation write code here
 
}
