var c=0;
var imagenes=["Imagen/javier.jpg","Imagen/yo1.jpg","Imagen/yo2.JPG","Imagen/yo3.jpg"];
var tiempo=setInterval("imgb()",2500);
function imgb(){
document.getElementById("imgb").src=imagenes[c];
c++;
if(c==4)
    {c=0;
    }
}