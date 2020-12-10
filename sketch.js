var movingRect, fixedRect 
function setup() { 
  createCanvas(800,400); 
  fixedRect=createSprite(300,200,70,50);
   fixedRect.shapeColor="green"
    fixedRect.debug=true;
     movingRect=createSprite(600, 200, 50, 70);
      movingRect.shapeColor="green";
       movingRect.debug=true; 
       movingRect.velocityX=-5
       fixedRect.velocityX=+5
      }
      function draw() { 
        background(0);
        // movingRect.x=mouseX;
        // movingRect.y=mouseY
         if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 && 
          fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 ){
          
            movingRect.velocityX=movingRect.velocityX*(-1)
             fixedRect.velocityX=fixedRect.velocityX*(-1)
             }
             
            drawSprites(); }