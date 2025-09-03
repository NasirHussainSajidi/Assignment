function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for(var i=0; i<6; i++){
        color = color + letters[Math.floor(Math.random() * 16)];
    }
    return color ;

}

function changeBox(box) {
   var color = randomColor()
   console.log("color", color)
   box.style.backgroundColor = color ;
   var messages = ["Wow!", "Cool!", "Fantastic!", "Amazing!", "Brilliant!", "Keep clicking!", "Shabana", "Hello World"];
   
   box.textContent = messages[Math.floor(Math.random() * messages.length)];
   var maxX = window.innerWidth - box.offsetWidth;
   var maxY = window.innerHeight - box.offsetHeight;
   var randomX = Math.floor(Math.random() * maxX);
   var randomY = Math.floor(Math.random() * maxY);
//    console.log("randomX", randomX)
//    console.log("randomY", randomY)
   box.style.left = randomX + "px";
   box.style.top = randomY + "px";
}

function rotateBox(box){
    const rotate = Math.floor( Math.random() * 360) ;
    console.log("rotate", rotate)
    box.style.transform = "translate(-50%, -50%) rotate(" + rotate + "deg)";
}

