function preload() {
}

function setup(){
 canvas = createCanvas(640,400);
 canvas.position(150,150)
 video = createCapture(VIDEO);
 video.hide();
}


function  draw() {
    Image(video, 230,150 , 220,220);
    fill(255,0,0);
    stroke(255,0,0);
    rect(40, 40, 550, 400);
    fill(252, 244, 3);
    stroke(252, 244, 3);
    ellipse(56, 46, 70, 70);
    ellipse(580, 46, 70, 70);
    ellipse(56, 430, 70, 70);
    ellipse(580, 430, 70, 70);
}


function take_snapshot() {
    save('Project_113_Melaina.png');
}

