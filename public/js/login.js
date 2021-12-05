
let hidden = 0;
document.getElementById("icon-toggle").style.transition = "all 1.5s";
document.getElementById("header").style.transition = "all 1.5s";
var ele = document.getElementById("header");
document.getElementById("collapse").addEventListener("click", function(){ 
    if(hidden===0){
        ele.style.display = "none";
        document.getElementById("icon-toggle").style.color="black";
        hidden = 1;
    }
    else{
        ele.style.display = "block";
        document.getElementById("icon-toggle").style.color="#fff";
        hidden = 0;
    }
 });
