function startClassification()
{
    ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dv4ZbQrGs/')
}

function gotResults()
{
    if (error)
    console.error(error);
    else 
    Math.floor(Math.random()*255);
}
cat = "cat.png";
wolf = "download.png"
cow ="images.jpg"