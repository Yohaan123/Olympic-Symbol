canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


color="darkblue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(300,210,40,0,2*Math.PI);
ctx.stroke();

color=" black ";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(400,210,40,0,2*Math.PI);
ctx.stroke();

color=" red ";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(500,210,40,0,2*Math.PI);
ctx.stroke();

color=" yellow ";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(350,250,40,0,2*Math.PI);
ctx.stroke();

color=" green ";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(450,250,40,0,2*Math.PI);
ctx.stroke();

