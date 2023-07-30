//noseX=0;
//noseY=0;

leftWristX=0;
rightWristX=0;

difference=0;

function setup() {
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550, 550);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Initialized ^w^");
}

function gotPoses(results) {
    if(results.length>0){
        console.log(results);
        //noseX=results[0].pose.nose.x;
        //noseY=results[0].pose.nose.y;
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log(" leftWristX = "+leftWristX+" rightWristX = "+rightWristX+ " difference = "+difference); //"noseX = "+noseX+" noseY = "+noseY+
    }
}

function draw() {
    background("#BEB4D6");
    document.getElementById('font_size').innerHTML = "Font Size Of Text Will Be "+difference+"px";
    textSize(difference);
    text('Shrijaar ^w^', 50, 400);
    fill('26457A');
}