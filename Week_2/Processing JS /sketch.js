//define a circle object
var circle = {
    diameter: 80,
    xCoor: 0,
    yCoor: 0,
    color:[255, 0, 0], //RGB values give circle a red color 
    xSpeed: 15,
    ySpeed: 15
}

function setup() {
  createCanvas(640, 480);
    background(20,255,46);
    frameRate(50);
}

function draw() {
    fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);

    console.log("The x coordinat is " + circle.xCoor);
    
    //if we hit the right edge of canvas
    if(circle.xCoor > 640){
        circle.diameter = random(20,120);
        circle.color = [random(240),random(10),random(255)];
        circle.xSpeed = -circle.xSpeed;//reverse direction
        circle.xCoor += circle.xSpeed;
    }else if (circle.xCoor < 0){
        circle.diameter = random(20,120);
        circle.color = [random(200),random(100),random(255)];   
        circle.xSpeed = -circle.xSpeed;
        circle.xCoor += circle.xSpeed;
    }else if(circle.yCoor >480){
        circle.diameter = random(20,120);
        circle.color = [random(110),random(180),random(25)];
        circle.ySpeed = -circle.ySpeed;//reverse direction
        circle.yCoor += circle.ySpeed
    }else if (circle.yCoor <0){
        circle.diameter = random(20,120);
        circle.color = [random(240),random(170),random(90)]; 
        circle.ySpeed = -circle.ySpeed;
        circle.yCoor += circle.ySpeed;
    }else {
    
    circle.xCoor += circle.xSpeed;
    circle.yCoor += circle.ySpeed;
}
}