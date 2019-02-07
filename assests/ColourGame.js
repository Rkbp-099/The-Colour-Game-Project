var colours = ["rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colours[3];

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

function pickedColor(color){
    var randomNum = Math.floor(Math.random()*6);
    
}