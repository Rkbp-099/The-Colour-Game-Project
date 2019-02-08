
var numSquares = 6
var colours = generateColorPallete(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = colours[pickColor(colours.length)];
document.getElementById("colorDisplay").textContent = pickedColor;
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("button");
var easyButton  = document.querySelector("#Easy-btn");
var hardButton  = document.querySelector("#Hard-btn");

resetButton.addEventListener("click",function(){
    reset();
    // easyButton.classList.remove("selected");
    // hardButton.classList.add("selected");
});

easyButton.addEventListener("click",function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colours = generateColorPallete(numSquares);
    pickedColor = colours[pickColor(colours.length)];
    document.getElementById("colorDisplay").textContent = pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        if(colours[i]){
            squares[i].style.backgroundColor = colours[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor =  "steelblue";
    message.textContent = "";
    resetButton.textContent = "New Colours";
});
hardButton.addEventListener("click",function(){
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numSquares = 6;
    colours = generateColorPallete(numSquares);
    pickedColor = colours[pickColor(colours.length)];
    document.getElementById("colorDisplay").textContent = pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = colours[i];
        squares[i].style.display = "block";
    }
    h1.style.backgroundColor =  "steelblue";
    message.textContent = "";
    resetButton.textContent = "New Colours";
});


for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor = colours[i];
    
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            message.textContent = "Congratulations"
            changeColor(clickedColor);
            resetButton.textContent = "Play Again?"
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor ="#232323";
            message.textContent = "Try Again!!"
            
        }
    });
    
}

function reset(){
    colours = generateColorPallete(numSquares);
    pickedColor = colours[pickColor(colours.length)];
    document.getElementById("colorDisplay").textContent = pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = colours[i];
    }
    h1.style.backgroundColor =  "steelblue";
    message.textContent = "";
    resetButton.textContent = "New Colours";
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
