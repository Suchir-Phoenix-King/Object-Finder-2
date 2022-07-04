status = "";
object_name = ""; 

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function start() {
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

    status = "Status: Detecting Objects";

    document.getElementById("input").value = object_name;
}

function modelLoaded() {
    console.log("Model Loaded!!");
    status = true;
}

function draw() {
    webcam.attach('#camera');
}