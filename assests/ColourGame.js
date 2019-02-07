var colours = generateColorPallete(6);

var squares = document.querySelectorAll(".square");
var pickedColor = colours[pickColor(colours.length)];

document.getElementById("colorDisplay").textContent = pickedColor;
var message = document.getElementById("message");

for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor = colours[i];
    
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            message.textContent = "Congratulations"
            changeColor(clickedColor);
        }
        else{
            this.style.backgroundColor ="#232323";
            message.textContent = "Try Again!!"

        }
    });
    
}

function changeColor(color){
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(n){
    var randomNum = Math.floor(Math.random()*n);
    return randomNum;
}

function generateColorPallete(m){
    var arr = [];
    for(var i=0;i<m;i++)
    {
        var r = randomColor();
        arr.push(r);
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return "rgb(" + r +", " + g +", "+b+")" ;
}