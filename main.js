noseX=0;
noseY=0;

function preload(){
    clown_nose = loadImage('https://tr.rbxcdn.com/180DAY-23f8fef799529b246e3d976dccd6c751/420/420/Hat/Webp/noFilter')

}
function setup(){
    canvas = createCanvas(300, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}


function modelLoded(){
    console.log('PoseNet Is Initiated');
}

function gotPoses(results){
    if(result.length > 0){
        console.log(results);
        noseX =  results[0].pose.nose.x-15;
        noseY =  results[0].pose.nose.y-15;
    }
} 

function draw(){
    Image(video , 0, 0, 300, 300);
    //fill(255, 0, 0);
    //stroke(255, 0, 0);
    //circle(noseX+75, noseY+95, 20);
    Image(clown_nose, noseX, noseY, 30, 30);
    image(clown_nose, noseX+15, noseY+40, 120, 60);
}

function take_snapshot(){
    save('pink_cute_backgrounnd.jpg');
}

