function setup() 
{createCanvas(600,400);
background("black");} 

function draw(){
  stroke("blue");
  fill("magenta");
  
  if(mouseIsPressed) { rect(mouseX, mouseY, 15,25);}
}
             