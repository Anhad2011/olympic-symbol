
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


ctx.beginpath();
ctx.strokestyle ="black";
ctx.lineWidth=1;
ctx.rect(150,143,430,200);
ctx.strokestyle();


ctx.beginpath();
ctx.strokestyle ="blue";
ctx.lineWidth=5;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.strokestyle();

ctx.beginpath();
ctx.strokestyle ="black";
ctx.lineWidth=5;
ctx.arc(260,210,40,0,2*Math.PI);
ctx.strokestyle();

ctx.beginpath();
ctx.strokestyle ="red";
ctx.lineWidth=5;
ctx.arc(270,210,40,0,2*Math.PI);
ctx.strokestyle();

ctx.beginpath();
ctx.strokestyle ="yellow";
ctx.lineWidth=5;
ctx.arc(255,215,40,0,2*Math.PI);
ctx.strokestyle();

ctx.beginpath();
ctx.strokestyle ="green";
ctx.lineWidth=5;
ctx.arc(265,215,40,0,2*Math.PI);
ctx.strokestyle();
