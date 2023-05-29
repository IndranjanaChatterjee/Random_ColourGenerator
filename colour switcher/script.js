var b=0;
const a=["red","yellow","pink","blue","green","cyan","white","aquamarine","blueviolet","darkgreen","crimson","cornflowerblue"];
let c=function(e){
    
    
    //console.log(a[b]);
    
    
    b=Math.floor(Math.random()*12);
    document.body.style.background=a[b];
    document.getElementById("head").style.background=a[(a.length-1)-b];
}
btn.addEventListener("click",c);