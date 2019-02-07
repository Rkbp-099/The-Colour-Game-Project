var colours = [rgb(255, 0 ,0),
    rgb(0, 255 ,255),
    rgb(0, 255 ,0),
    rgb(255, 255 ,0),
    rgb(0, 0 ,255),
    rgb(255, 0 ,255)
];

var squares = document.querySelectorAll(".squares");

for(var i=0;i<colours.length;i++)
{
    squares[i].style.background = colours[i];
}
