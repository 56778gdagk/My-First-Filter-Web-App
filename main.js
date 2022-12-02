function preload()
{

}

function setup()
{
    cnavas = createCanvas(200,200);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(200,200);
    video.hide();

    poseNet = ml5.poseNet(video,modeLoaded);
    poseNet.on('pose',gotPoses);
}

function  draw()
{

}

function modeLoaded()
{
    console.log('model Loaded')
}

function gotPoses(results)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
}