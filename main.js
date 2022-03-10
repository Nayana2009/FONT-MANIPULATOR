function setup(){
    video = createCapture(VIDEO);
    video.size(500,400);
    video.position(100,150);
    canvas = createCanvas(700,500);
    canvas.position(700,100);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("#5196e3");
}

function modelDone(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}