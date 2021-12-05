
let hidden = 0;
let val = document.getElementById("shouldbecoloured");
console.log(val);
for(var i=0;i<val.length;i++){
    console.log(
        val[i].innerHTML
    );
    if(val[i].innerHTML==1){
        item.style.backgroundColor = "red"
        item.style.color = "#fff"
    }
    else{
        item.style.backgroundColor = "green"
        item.style.color = "#fff"
    }
    
}
document.getElementById("icon-toggle").style.transition = "all 1.5s";
document.getElementById("sidebar").style.transition = "all 1.5s";
document.getElementById("profile").style.transition = "all 1.5s";
document.getElementById("new").style.transition = "all 1.5s";
document.getElementById("dash").style.transition = "all 1.5s";
document.getElementById("profile").style.transitionDuration = "all 1.5s";
document.getElementById("collapse").addEventListener("click", function(){ 
    if(hidden===0){
        document.getElementById("sidebar").style.marginLeft="-150%";
        document.getElementById("icon-toggle").style.color="black";
        document.getElementById("profile").style.width = "90%";
        document.getElementById("new").style.width = "90%";
        document.getElementById("dash").style.width = "90%";
        hidden = 1;
    }
    else{
        document.getElementById("sidebar").style.marginLeft="0";
        document.getElementById("icon-toggle").style.color="#fff";
        document.getElementById("profile").style.width = "72%";
        document.getElementById("new").style.width = "72%";
        document.getElementById("dash").style.width = "72%";
        hidden = 0;
    }
 });
 document.getElementById("profile").style.display = "none";
 document.getElementById("new").style.display = "block";
 document.getElementById("dash").style.display = "none";
 document.getElementById("dis_new").classList.add("selected");

 document.getElementById("dis_new").addEventListener("click",function(){
     document.getElementById("dis_new").classList.add("selected");
     document.getElementById("dis_prof").classList.remove("selected");
     document.getElementById("dis_dash").classList.remove("selected");

     document.getElementById("profile").style.display = "none";
     document.getElementById("new").style.display = "block";
     document.getElementById("dash").style.display = "none";
 })

 document.getElementById("dis_prof").addEventListener("click",function(){
    document.getElementById("dis_new").classList.remove("selected");
     document.getElementById("dis_prof").classList.add("selected");
     document.getElementById("dis_dash").classList.remove("selected");

    document.getElementById("profile").style.display = "block";
     document.getElementById("new").style.display = "none";
     document.getElementById("dash").style.display = "none";
})

document.getElementById("dis_dash").addEventListener("click",function(){
    document.getElementById("dis_new").classList.remove("selected");
     document.getElementById("dis_prof").classList.remove("selected");
     document.getElementById("dis_dash").classList.add("selected");

    document.getElementById("profile").style.display = "none";
     document.getElementById("new").style.display = "none";
     document.getElementById("dash").style.display = "block";
})