 //creating variables for leaves,garden, rabbit grass,apple
 var garden,rabbit;
  var gardenImg,rabbitImg;
  var appleImg,leafImg
  var redImageImg,orangeLeafImg

  function preload(){
    //loading images to the variables 
    gardenImg = loadImage("garden.png");
    rabbitImg = loadImage("rabbit.png");
    appleImg = loadImage("apple.png");
    leafImg = loadImage("leaf.png");
    grassImg = loadImage("grass.png");
    redImageImg = loadImage("redImage.png");

}

function setup(){
  // creating canvas 
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit sprite 
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  // creating background
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  //adding moving properties of mouse to rabbit 
  rabbit.x = World.mouseX;

  var select_sprites = Math.round(random(1,3));
  if (frameCount % 80 == 0) {
  if (select_sprites  == 1) 
  { createApples(); }
  else if  (select_sprites == 2) {         createApples(); }
  else {  createApples(); } }
  
  var select_sprites = Math.round(random(1,3));
  if (frameCount % 100 == 0) {
  if (select_sprites  == 1) 
  { createLeaves(); }
  else if  (select_sprites == 5) {
    createLeaves(); }
else {  createLeaves(); } }
  drawSprites();
}
// adding fiunction to create apples 
  function createApples() {
    //creating apple sprite 
  apple=createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg);
  apple.scale=0.1;
  apple.velocityY=5;
  apple.lifetime=150;
  }
  // creating function to add leaves 
  function createLeaves() {
    // creating leaf sprite 
  leaf=createSprite(random(50,350),40,10,10)
  leaf.addImage(leafImg);
  leaf.scale=0.1;
  leaf.velocityY=5;
  leaf.lifetime=150;
  //creating redLeaf sprite
  redLeaf = createSprite(random(50,350),40,10,10);
  redLeaf.addImage(redImageImg);
  redLeaf.scale=0.1;
  redLeaf.velocityY=5;
  redLeaf.lifetime=150;











  drawSprites();
}