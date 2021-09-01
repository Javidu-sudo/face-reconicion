Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_qualty:90,
});
camera = document.getElementById("camera");
Webcam.attach(camera)
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'">'
    })
}
console.log("ml5"+ml5.version)
classafyer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yfUv2hogT/",modleLoded)
function modleLoded(){
    console.log("loded status loded")
}