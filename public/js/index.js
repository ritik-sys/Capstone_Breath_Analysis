
let hidden = 0;
var canvas1 = document.getElementById("myChart00");
canvas1.style.display  = 'block';
var canvas2 = document.getElementById("myChart11");
canvas2.style.display  = 'none';
var canvas3 = document.getElementById("myChart22");
canvas3.style.display  = 'none';
var canvas4 = document.getElementById("myChart33");
canvas4.style.display  = 'none';
var canvas5 = document.getElementById("myChart44");
canvas5.style.display  = 'none';
var canvas6 = document.getElementById("myChart55");
canvas6.style.display  = 'none';
var canvas7 = document.getElementById("myChart66");
canvas7.style.display  = 'none';
var canvas8 = document.getElementById("myChart77");
canvas8.style.display  = 'none';
var canvas9 = document.getElementById("myChart88");
canvas9.style.display  = 'none';
document.getElementById('show1').classList.add('inline-btns-selected');
document.getElementById('show2').classList.add('inline-btns-unselected');
document.getElementById('show3').classList.add('inline-btns-unselected');
document.getElementById('show4').classList.add('inline-btns-unselected');
document.getElementById('show5').classList.add('inline-btns-unselected');
document.getElementById('show6').classList.add('inline-btns-unselected');
document.getElementById('show7').classList.add('inline-btns-unselected');
document.getElementById('show8').classList.add('inline-btns-unselected');
document.getElementById('show9').classList.add('inline-btns-unselected');

document.getElementById('show1').addEventListener("click",function(){
    document.getElementById('show1').classList.add('inline-btns-selected');
    document.getElementById('show2').classList.remove('inline-btns-selected');
    document.getElementById('show3').classList.remove('inline-btns-selected');
    document.getElementById('show4').classList.remove('inline-btns-selected');
    document.getElementById('show5').classList.remove('inline-btns-selected');
    document.getElementById('show6').classList.remove('inline-btns-selected');
    document.getElementById('show7').classList.remove('inline-btns-selected');
    document.getElementById('show8').classList.remove('inline-btns-selected');
    document.getElementById('show9').classList.remove('inline-btns-selected');
    document.getElementById('show2').classList.add('inline-btns-unselected');
    document.getElementById('show3').classList.add('inline-btns-unselected');
    document.getElementById('show4').classList.add('inline-btns-unselected');
    document.getElementById('show5').classList.add('inline-btns-unselected');
    document.getElementById('show6').classList.add('inline-btns-unselected');
    document.getElementById('show7').classList.add('inline-btns-unselected');
    document.getElementById('show8').classList.add('inline-btns-unselected');
    document.getElementById('show9').classList.add('inline-btns-unselected');

    canvas1.style.display  = 'block';
    canvas2.style.display  = 'none';
    canvas3.style.display  = 'none';
    canvas4.style.display  = 'none';
    canvas5.style.display  = 'none';
    canvas6.style.display  = 'none';
    canvas7.style.display  = 'none';
    canvas8.style.display  = 'none';
    canvas9.style.display  = 'none';
})
document.getElementById('show2').addEventListener("click",function(){
    document.getElementById('show1').classList.remove('inline-btns-selected');
    document.getElementById('show2').classList.add('inline-btns-selected');
    document.getElementById('show2').classList.remove('inline-btns-unselected');
    document.getElementById('show3').classList.remove('inline-btns-selected');
    document.getElementById('show4').classList.remove('inline-btns-selected');
    document.getElementById('show5').classList.remove('inline-btns-selected');
    document.getElementById('show6').classList.remove('inline-btns-selected');
    document.getElementById('show7').classList.remove('inline-btns-selected');
    document.getElementById('show8').classList.remove('inline-btns-selected');
    document.getElementById('show9').classList.remove('inline-btns-selected');

    document.getElementById('show1').classList.add('inline-btns-unselected');
    document.getElementById('show3').classList.add('inline-btns-unselected');
    document.getElementById('show4').classList.add('inline-btns-unselected');
    document.getElementById('show5').classList.add('inline-btns-unselected');
    document.getElementById('show6').classList.add('inline-btns-unselected');
    document.getElementById('show7').classList.add('inline-btns-unselected');
    document.getElementById('show8').classList.add('inline-btns-unselected');
    document.getElementById('show9').classList.add('inline-btns-unselected');
    canvas1.style.display  = 'none';
    canvas2.style.display  = 'block';
    canvas3.style.display  = 'none';
    canvas4.style.display  = 'none';
    canvas5.style.display  = 'none';
    canvas6.style.display  = 'none';
    canvas7.style.display  = 'none';
    canvas8.style.display  = 'none';
    canvas9.style.display  = 'none';
})
document.getElementById('show3').addEventListener("click",function(){
    document.getElementById('show1').classList.remove('inline-btns-selected');
    document.getElementById('show2').classList.remove('inline-btns-selected');
    document.getElementById('show3').classList.add('inline-btns-selected');
    document.getElementById('show3').classList.remove('inline-btns-unselected');
    document.getElementById('show4').classList.remove('inline-btns-selected');
    document.getElementById('show5').classList.remove('inline-btns-selected');
    document.getElementById('show6').classList.remove('inline-btns-selected');
    document.getElementById('show7').classList.remove('inline-btns-selected');
    document.getElementById('show8').classList.remove('inline-btns-selected');
    document.getElementById('show9').classList.remove('inline-btns-selected');

    document.getElementById('show1').classList.add('inline-btns-unselected');
    document.getElementById('show2').classList.add('inline-btns-unselected');
    document.getElementById('show4').classList.add('inline-btns-unselected');
    document.getElementById('show5').classList.add('inline-btns-unselected');
    document.getElementById('show6').classList.add('inline-btns-unselected');
    document.getElementById('show7').classList.add('inline-btns-unselected');
    document.getElementById('show8').classList.add('inline-btns-unselected');
    document.getElementById('show9').classList.add('inline-btns-unselected');
    canvas1.style.display  = 'none';
    canvas2.style.display  = 'none';
    canvas3.style.display  = 'block';
    canvas4.style.display  = 'none';
    canvas5.style.display  = 'none';
    canvas6.style.display  = 'none';
    canvas7.style.display  = 'none';
    canvas8.style.display  = 'none';
    canvas9.style.display  = 'none';
})
document.getElementById('show4').addEventListener("click",function(){
    document.getElementById('show1').classList.remove('inline-btns-selected');
    document.getElementById('show2').classList.remove('inline-btns-selected');
    document.getElementById('show3').classList.remove('inline-btns-selected');
    document.getElementById('show4').classList.add('inline-btns-selected');
    document.getElementById('show4').classList.remove('inline-btns-unselected');
    document.getElementById('show5').classList.remove('inline-btns-selected');
    document.getElementById('show6').classList.remove('inline-btns-selected');
    document.getElementById('show7').classList.remove('inline-btns-selected');
    document.getElementById('show8').classList.remove('inline-btns-selected');
    document.getElementById('show9').classList.remove('inline-btns-selected');

    document.getElementById('show1').classList.add('inline-btns-unselected');
    document.getElementById('show2').classList.add('inline-btns-unselected');
    document.getElementById('show3').classList.add('inline-btns-unselected');
    document.getElementById('show5').classList.add('inline-btns-unselected');
    document.getElementById('show6').classList.add('inline-btns-unselected');
    document.getElementById('show7').classList.add('inline-btns-unselected');
    document.getElementById('show8').classList.add('inline-btns-unselected');
    document.getElementById('show9').classList.add('inline-btns-unselected');
    canvas1.style.display  = 'none';
    canvas2.style.display  = 'none';
    canvas3.style.display  = 'none';
    canvas4.style.display  = 'block';
    canvas5.style.display  = 'none';
    canvas6.style.display  = 'none';
    canvas7.style.display  = 'none';
    canvas8.style.display  = 'none';
    canvas9.style.display  = 'none';
})
document.getElementById('show5').addEventListener("click",function(){
    document.getElementById('show1').classList.remove('inline-btns-selected');
    document.getElementById('show2').classList.remove('inline-btns-selected');
    document.getElementById('show3').classList.remove('inline-btns-selected');
    document.getElementById('show4').classList.remove('inline-btns-selected');
    document.getElementById('show5').classList.add('inline-btns-selected');
    document.getElementById('show5').classList.remove('inline-btns-unselected');
    document.getElementById('show6').classList.remove('inline-btns-selected');
    document.getElementById('show7').classList.remove('inline-btns-selected');
    document.getElementById('show8').classList.remove('inline-btns-selected');
    document.getElementById('show9').classList.remove('inline-btns-selected');
    
    document.getElementById('show1').classList.add('inline-btns-unselected');
    document.getElementById('show2').classList.add('inline-btns-unselected');
    document.getElementById('show3').classList.add('inline-btns-unselected');
    document.getElementById('show4').classList.add('inline-btns-unselected');
    document.getElementById('show6').classList.add('inline-btns-unselected');
    document.getElementById('show7').classList.add('inline-btns-unselected');
    document.getElementById('show8').classList.add('inline-btns-unselected');
    document.getElementById('show9').classList.add('inline-btns-unselected');
    canvas1.style.display  = 'none';
    canvas2.style.display  = 'none';
    canvas3.style.display  = 'none';
    canvas4.style.display  = 'none';
    canvas5.style.display  = 'block';
    canvas6.style.display  = 'none';
    canvas7.style.display  = 'none';
    canvas8.style.display  = 'none';
    canvas9.style.display  = 'none';
})
document.getElementById('show6').addEventListener("click",function(){
    document.getElementById('show1').classList.remove('inline-btns-selected');
    document.getElementById('show2').classList.remove('inline-btns-selected');
    document.getElementById('show3').classList.remove('inline-btns-selected');
    document.getElementById('show4').classList.remove('inline-btns-selected');
    document.getElementById('show5').classList.remove('inline-btns-selected');
    document.getElementById('show6').classList.add('inline-btns-selected');
    document.getElementById('show6').classList.remove('inline-btns-unselected');
    document.getElementById('show7').classList.remove('inline-btns-selected');
    document.getElementById('show8').classList.remove('inline-btns-selected');
    document.getElementById('show9').classList.remove('inline-btns-selected');

    
    document.getElementById('show1').classList.add('inline-btns-unselected');
    document.getElementById('show2').classList.add('inline-btns-unselected');
    document.getElementById('show3').classList.add('inline-btns-unselected');
    document.getElementById('show4').classList.add('inline-btns-unselected');
    document.getElementById('show5').classList.add('inline-btns-unselected');
    document.getElementById('show7').classList.add('inline-btns-unselected');
    document.getElementById('show8').classList.add('inline-btns-unselected');
    document.getElementById('show9').classList.add('inline-btns-unselected');
    canvas1.style.display  = 'none';
    canvas2.style.display  = 'none';
    canvas3.style.display  = 'none';
    canvas4.style.display  = 'none';
    canvas5.style.display  = 'none';
    canvas6.style.display  = 'block';
    canvas7.style.display  = 'none';
    canvas8.style.display  = 'none';
    canvas9.style.display  = 'none';
})
document.getElementById('show7').addEventListener("click",function(){
    document.getElementById('show1').classList.remove('inline-btns-selected');
    document.getElementById('show2').classList.remove('inline-btns-selected');
    document.getElementById('show3').classList.remove('inline-btns-selected');
    document.getElementById('show4').classList.remove('inline-btns-selected');
    document.getElementById('show5').classList.remove('inline-btns-selected');
    document.getElementById('show6').classList.remove('inline-btns-selected');
    document.getElementById('show7').classList.add('inline-btns-selected');
    document.getElementById('show7').classList.remove('inline-btns-unselected');
    document.getElementById('show8').classList.remove('inline-btns-selected');
    document.getElementById('show9').classList.remove('inline-btns-selected');
    
    document.getElementById('show1').classList.add('inline-btns-unselected');
    document.getElementById('show2').classList.add('inline-btns-unselected');
    document.getElementById('show3').classList.add('inline-btns-unselected');
    document.getElementById('show4').classList.add('inline-btns-unselected');
    document.getElementById('show5').classList.add('inline-btns-unselected');
    document.getElementById('show6').classList.add('inline-btns-unselected');
    document.getElementById('show8').classList.add('inline-btns-unselected');
    document.getElementById('show9').classList.add('inline-btns-unselected');
    canvas1.style.display  = 'none';
    canvas2.style.display  = 'none';
    canvas3.style.display  = 'none';
    canvas4.style.display  = 'none';
    canvas5.style.display  = 'none';
    canvas6.style.display  = 'none';
    canvas7.style.display  = 'block';
    canvas8.style.display  = 'none';
    canvas9.style.display  = 'none';
})
document.getElementById('show8').addEventListener("click",function(){
    document.getElementById('show1').classList.remove('inline-btns-selected');
    document.getElementById('show2').classList.remove('inline-btns-selected');
    document.getElementById('show3').classList.remove('inline-btns-selected');
    document.getElementById('show4').classList.remove('inline-btns-selected');
    document.getElementById('show5').classList.remove('inline-btns-selected');
    document.getElementById('show6').classList.remove('inline-btns-selected');
    document.getElementById('show7').classList.remove('inline-btns-selected');
    document.getElementById('show8').classList.add('inline-btns-selected');
    document.getElementById('show8').classList.remove('inline-btns-unselected');
    document.getElementById('show9').classList.remove('inline-btns-selected');

    
    document.getElementById('show1').classList.add('inline-btns-unselected');
    document.getElementById('show2').classList.add('inline-btns-unselected');
    document.getElementById('show3').classList.add('inline-btns-unselected');
    document.getElementById('show4').classList.add('inline-btns-unselected');
    document.getElementById('show5').classList.add('inline-btns-unselected');
    document.getElementById('show6').classList.add('inline-btns-unselected');
    document.getElementById('show7').classList.add('inline-btns-unselected');
    document.getElementById('show9').classList.add('inline-btns-unselected');
    canvas1.style.display  = 'none';
    canvas2.style.display  = 'none';
    canvas3.style.display  = 'none';
    canvas4.style.display  = 'none';
    canvas5.style.display  = 'none';
    canvas6.style.display  = 'none';
    canvas7.style.display  = 'none';
    canvas8.style.display  = 'block';
    canvas9.style.display  = 'none';
})
document.getElementById('show9').addEventListener("click",function(){
    document.getElementById('show1').classList.remove('inline-btns-selected');
    document.getElementById('show2').classList.remove('inline-btns-selected');
    document.getElementById('show3').classList.remove('inline-btns-selected');
    document.getElementById('show4').classList.remove('inline-btns-selected');
    document.getElementById('show5').classList.remove('inline-btns-selected');
    document.getElementById('show6').classList.remove('inline-btns-selected');
    document.getElementById('show7').classList.remove('inline-btns-selected');
    document.getElementById('show8').classList.remove('inline-btns-selected');
    document.getElementById('show9').classList.add('inline-btns-selected');
    document.getElementById('show9').classList.remove('inline-btns-unselected');
    
    document.getElementById('show1').classList.add('inline-btns-unselected');
    document.getElementById('show2').classList.add('inline-btns-unselected');
    document.getElementById('show3').classList.add('inline-btns-unselected');
    document.getElementById('show4').classList.add('inline-btns-unselected');
    document.getElementById('show5').classList.add('inline-btns-unselected');
    document.getElementById('show6').classList.add('inline-btns-unselected');
    document.getElementById('show7').classList.add('inline-btns-unselected');
    document.getElementById('show8').classList.add('inline-btns-unselected');
    canvas1.style.display  = 'none';
    canvas2.style.display  = 'none';
    canvas3.style.display  = 'none';
    canvas4.style.display  = 'none';
    canvas5.style.display  = 'none';
    canvas6.style.display  = 'none';
    canvas7.style.display  = 'none';
    canvas8.style.display  = 'none';
    canvas9.style.display  = 'block';
})




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
 document.getElementById("dis-table").style.display = "none";
 document.getElementById("dis_new").classList.add("selected");

 document.getElementById("dis_new").addEventListener("click",function(){
     document.getElementById("dis_new").classList.add("selected");
     document.getElementById("dis_prof").classList.remove("selected");
     document.getElementById("dis_dash").classList.remove("selected");
     document.getElementById("dis_table").classList.remove("selected");

     document.getElementById("profile").style.display = "none";
     document.getElementById("new").style.display = "block";
     document.getElementById("dash").style.display = "none";
     document.getElementById("dis-table").style.display = "none";
 })

 document.getElementById("dis_prof").addEventListener("click",function(){
    document.getElementById("dis_new").classList.remove("selected");
     document.getElementById("dis_prof").classList.add("selected");
     document.getElementById("dis_dash").classList.remove("selected");
     document.getElementById("dis_table").classList.remove("selected");

    document.getElementById("profile").style.display = "block";
     document.getElementById("new").style.display = "none";
     document.getElementById("dash").style.display = "none";
     document.getElementById("dis-table").style.display = "none";
})

document.getElementById("dis_dash").addEventListener("click",function(){
    document.getElementById("dis_new").classList.remove("selected");
     document.getElementById("dis_prof").classList.remove("selected");
     document.getElementById("dis_dash").classList.add("selected");
     document.getElementById("dis_table").classList.remove("selected");

    document.getElementById("profile").style.display = "none";
     document.getElementById("new").style.display = "none";
     document.getElementById("dash").style.display = "block";
     document.getElementById("dis-table").style.display = "none";
})

document.getElementById("dis_table").addEventListener("click",function(){
    document.getElementById("dis_new").classList.remove("selected");
     document.getElementById("dis_prof").classList.remove("selected");
     document.getElementById("dis_dash").classList.remove("selected");
     document.getElementById("dis_table").classList.add("selected");

    document.getElementById("profile").style.display = "none";
     document.getElementById("new").style.display = "none";
     document.getElementById("dash").style.display = "none";
     document.getElementById("dis-table").style.display = "block";
})