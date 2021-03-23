var a1,a2,a3,a4;
var log;
function preload() {
    a1 = loadImage("sprites/base.png");
    a2 = loadImage("sprites/bg.png");
    a3 = loadImage("sprites/bg1.png");
    a4 = loadImage("sprites/bg2.jpg");   
}

function setup(){
    var canvas = createCanvas(1200,400);
    var ran1 = [a1,a2,a3,a4];
    var ran2 = [a2,a3,a4,a1];
    var ran3 = [a3,a1,a2,a4];
    var r = Math.round(random(1,2));
    if(r==1)
        log = new Log(ran1);
     else if(r==2)
        log = new Log(ran2);
    else
        log = new Log(ran3);
}

function draw(){
    background("pink");
    log.display();
}

