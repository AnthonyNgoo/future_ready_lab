//define a circle object
/*var circle = { 
    diameter: 80, //Value gives the shape of the object
    xCoor: 0,
    yCoor: 0,
    color:[255, 0, 0], //RGB values give circle a red color 
    xSpeed: 15,
    ySpeed: 15
}
*/

function Circle(x, y, size, color, xSpeed, ySpeed){
    this.xCoor = x
    this.yCoor = y;
    this.diameter = size;
    this.color = color; //makes the default color black
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
}
//
//var circle = new Circle(0,0, 80, [255,0,0], 5,18);
//var circle2 = new Circle(0,30,50, 2,10);
//


function setup() { 
    createCanvas(parseInt(prompt("Insert a number for the Width")),parseInt(prompt("Insert a number for the Height"))); //Creates the screen for the object to appear
    background(20,255,46); //Create the screen background color
    frameRate(50); //Determines how fast the object moves
    makeCircles();
}
var circleList = [];

function makeCircles(){
    var balls = random([2, 5, 9, 16]);
    for (var b = 0; b <balls; b++){
        circleList.push(new Circle(random(width),random(height), 90, [0,0,0], random(10,20), random(10,20)));
    }
}
    
function draw() { //Draws a circle
    background(20,255,46);
    for(var i = 0; i <circleList.length; i++){
        fill(circleList[i].color); //Fills the circle with a certain color
        ellipse(circleList[i].xCoor, circleList[i].yCoor, circleList[i].diameter);
        for(var x = 0; x <circleList.length; x++){
            var dy = circleList[i].yCoor - circleList[x].yCoor;
            var dx = circleList[i].xCoor - circleList[x].xCoor;
            var distance = Math.sqrt(dy*dy + dx*dx);
            if (distance < (circleList[i].diameter + circleList[x].diameter)/2){
                if (circleList[i].xCoor < circleList[x].xCoor || circleList[i].xCoor > circleList[x].xCoor){
                    circleList[i].ySpeed = -circleList[i].ySpeed;
                }if (circleList[i].yCoor < circleList[x].yCoor || circleList[i].yCoor > circleList[x].yCoor){
                    circleList[i].xSpeed = -circleList[i].xSpeed;
                }
            }
        }
        
        //if we hit the right edge of canvas
        if(circleList[i].xCoor > width || circleList[i].xCoor < 0){
            circleList[i].diameter = random(20,120);//random size
            circleList[i].color = [random(240),random(10),random(255)];//random color
            circleList[i].xSpeed = -circleList[i].xSpeed;//reverse direction
        }if(circleList[i].yCoor > height || circleList[i].yCoor <0){
            circleList[i].diameter = random(20,120);//random size
            circleList[i].color = [random(110),random(180),random(25)];//random color
            circleList[i].ySpeed = -circleList[i].ySpeed;//reverse direction
        }
        circleList[i].xCoor += circleList[i].xSpeed; //circle keeps moving forward in a certain direction 
        circleList[i].yCoor += circleList[i].ySpeed;
    }
}