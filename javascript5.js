var x = document.getElementById("petunjuk");
var xx= document.querySelector('.petunjuk');

xx.addEventListener("click",function(){
  x.classList.toggle("hilang");
})

var x1 = document.getElementById("tujuan");
var xx1= document.querySelector('.tujuan');

xx1.addEventListener("click",function(){
  x1.classList.toggle("hilang");
})

var x2 = document.getElementById("petunjuksoal");
var xx2= document.querySelector('.petunjuksoal');

xx2.addEventListener("click",function(){
  x2.classList.toggle("hilang");
})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function cek(){
    var jwb1 = document.getElementById("text1").value;
   

if(jwb1 == "5 satuan ke kanan"){
    document.getElementById("ket1").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket1").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

}

function ulang(){
  var jwb1 = document.getElementById("text1").value;
 
  document.getElementById("text1").value="";
  document.getElementById("ket1").innerHTML="";
  if(jwb1==""){
    document.getElementById("text1").value = "";
    document.getElementById("ket1").innerHTML = "";
  }

}



function cek2(){
  var jwb2 = document.getElementById("text2").value;
 

if(jwb2 == "7 satuan ke atas"){
  document.getElementById("ket2").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket2").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}

}

function ulang2(){
var jwb2 = document.getElementById("text2").value;

document.getElementById("text2").value="";
document.getElementById("ket2").innerHTML="";
if(jwb2==""){
  document.getElementById("text2").value = "";
  document.getElementById("ket2").innerHTML = "";
}

}

function cek3(){
  var jwb3 = document.getElementById("text3").value;
 

if(jwb3 == "4 satuan ke kiri"){
  document.getElementById("ket3").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket3").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}

}

function ulang3(){
var jwb3 = document.getElementById("text3").value;

document.getElementById("text3").value="";
document.getElementById("ket3").innerHTML="";
if(jwb3==""){
  document.getElementById("text3").value = "";
  document.getElementById("ket3").innerHTML = "";
}

}


function cek4(){
  var jwb4 = document.getElementById("text4").value;
 

if(jwb4 == "2 satuan ke bawah"){
  document.getElementById("ket4").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket4").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}

}

function ulang4(){
var jwb4 = document.getElementById("text4").value;

document.getElementById("text4").value="";
document.getElementById("ket4").innerHTML="";
if(jwb4==""){
  document.getElementById("text4").value = "";
  document.getElementById("ket4").innerHTML = "";
}

}


function cek5(){
  var jwb5 = document.getElementById("text5").value;
 

if(jwb5 == "9,4"){
  document.getElementById("ket5").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket5").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}

}

function ulang5(){
var jwb5 = document.getElementById("text5").value;

document.getElementById("text5").value="";
document.getElementById("ket5").innerHTML="";
if(jwb5==""){
  document.getElementById("text5").value = "";
  document.getElementById("ket5").innerHTML = "";
}

}


function cek6(){
  var jwb6 = document.getElementById("text6").value;
 

if(jwb6 == "-9,2"){
  document.getElementById("ket6").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket6").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}

}

function ulang6(){
var jwb6 = document.getElementById("text6").value;

document.getElementById("text6").value="";
document.getElementById("ket6").innerHTML="";
if(jwb6==""){
  document.getElementById("text6").value = "";
  document.getElementById("ket6").innerHTML = "";
}

}


function cek7(){
  var jwb7 = document.getElementById("text7").value;
 

if(jwb7 == "-10,-7"){
  document.getElementById("ket7").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket7").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}

}

function ulang7(){
var jwb7 = document.getElementById("text7").value;

document.getElementById("text7").value="";
document.getElementById("ket7").innerHTML="";
if(jwb7==""){
  document.getElementById("text7").value = "";
  document.getElementById("ket7").innerHTML = "";
}

}


function cek8(){
  var jwb8 = document.getElementById("text8").value;
 

if(jwb8 == "5 satuan ke kiri"){
  document.getElementById("ket8").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket8").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}

}

function ulang8(){
var jwb8 = document.getElementById("text8").value;

document.getElementById("text8").value="";
document.getElementById("ket8").innerHTML="";
if(jwb8==""){
  document.getElementById("text8").value = "";
  document.getElementById("ket8").innerHTML = "";
}

}