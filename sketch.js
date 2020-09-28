var dog,dog2,dogimg,dogimg2,doghappy;
var database;
var foodS;
var foodStock;

function preload(){
  dogimg = loadImage("images/dogImg.png");
  dogimg2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  var foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  dog = createSprite(300,300,40,20);
  dog.scale = 0.1;
  dog.addImage("dogSad",dogimg);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog2 = createSprite(240,300,40,20);
    dog2.addImage("dog2",dogimg2);
    dog2.scale = 0.1;
  }

  drawSprites();
  //add styles here
 
  textSize(13);
  fill("white");
  stroke(4);
  text("Note:PRESS 'UP_ARROW' KEY TO FEED DRAGO MILK!",100,30);
  textSize(20)
  text("Food Remaining :",160,230);
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }

  else{
    x=x-1;
  }

  //  database.ref('/').update({
  //    Food : x
  //  })
}



