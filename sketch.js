var bimg,bimg1,bimg2,bimg3;
var screen=0;


function preload(){
bimg=loadImage("b.png");
bimg1=loadImage ("b2.png");
bimg2=loadImage("b311.png");
bimg3=loadImage("Gameon.png");

}



function setup(){
createCanvas(windowWidth,windowHeight);

}

function draw(){
background(bimg);
if(screen == 0){
    startScreen();
} else if(screen == 1){
    gameOn();
} else if(screen == 2){
    gameEnd();
}
}


function startScreen(){
background(bimg1)
fill("black")
textAlign(CENTER);
textSize(50);
text("Catch Me If You Can!!!", width/2,height/3);
textSize(60);
text("click to start", width/2,height/3+50);
reset();
}

function gameOn(){

background(bimg3);

}

function mousePressed(){
    if(screen==0){
        screen=1;
    }
   else if(screen=2){
    screen=0;
   }
}