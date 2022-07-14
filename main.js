song1 = "";
song2 = "";

function preload() {
   song1 = loadSong("music1.mp3");
    song2 = loadSong("music2.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    console.log('Canvas loaded!');
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}