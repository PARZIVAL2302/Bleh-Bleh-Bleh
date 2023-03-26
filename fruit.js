function back(){
    window.location = "index.html";
}

function preload(){
    img = loadImage('fruit.jpg');
}

function setup(){
    canvas = createCanvas(650, 400);
    canvas.position(300, 250);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotReslut);
}

function gotReslut(error, results){
    if(error){
        console.error();
    }

    console.log(results);
    fruits = results;
}

function draw(){
    image(img, 0, 0, 650, 430);
}
