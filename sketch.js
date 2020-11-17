var ball;
var database,position;


function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(10,10,10,10);
    var ball_loc=database.ref('Ball/Position');
    ball_loc.on("value",readData)

    ball.shapeColor = "red";
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
    database.ref('Ball/Position').set({
     x:ball.x+x,y:ball.y+y
    })
}
function readData(data){
    position=data.val()
    ball.x=position.x;
    ball.y=position.y;
    
    
}
