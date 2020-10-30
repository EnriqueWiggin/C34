var ball;
var database;
var ballPosition

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ballPosition=database.ref('ball/position')
    ballPosition.on("value", readPosition)
}
function readPosition(data)
{
var myBallPosition=data.val();
ball.x=myBallPosition.x;
ball.y=myBallPosition.y;
}
function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){

    database.ref('ball/position').set({
       x: ball.x + x,
       y: ball.y + y

    })
    
}
