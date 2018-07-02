//define a circle object
var circle = { 
    diameter: 80, //Value gives the shape of the object
    xCoor: 0,
    yCoor: 0,
    color:[255, 0, 0], //RGB values give circle a red color 
    xSpeed: 15,
    ySpeed: 15
}

function setup() { 
  createCanvas(640, 480); //Creates the screen for the object to appear
    background(20,255,46); //Create the screen background color
    frameRate(50); //Determines how fast the object moves
}

function draw() { //Draws a circle
    fill(circle.color); //Fills the circle with a certain color
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
    
    //if we hit the right edge of canvas
    if(circle.xCoor > 640){
        circle.diameter = random(20,120);//random size
        circle.color = [random(240),random(10),random(255)];//random color
        circle.xSpeed = -circle.xSpeed;//reverse direction
        circle.xCoor += circle.xSpeed;
    }else if (circle.xCoor < 0){
        circle.diameter = random(20,120);//random size
        circle.color = [random(200),random(100),random(255)];//random color   
        circle.xSpeed = -circle.xSpeed;//reverse direction
        circle.xCoor += circle.xSpeed;
    }else if(circle.yCoor >480){
        circle.diameter = random(20,120);//random size
        circle.color = [random(110),random(180),random(25)];//random color
        circle.ySpeed = -circle.ySpeed;//reverse direction
        circle.yCoor += circle.ySpeed
    }else if (circle.yCoor <0){
        circle.diameter = random(20,120);//random size
        circle.color = [random(240),random(170),random(90)]; //random color
        circle.ySpeed = -circle.ySpeed;//reverse direction
        circle.yCoor += circle.ySpeed;
    }else {
    
    circle.xCoor += circle.xSpeed; //circle keeps moving forward in a certain direction 
    circle.yCoor += circle.ySpeed;
}
}