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

var x2 = document.getElementById("petunjuksoal2");
var xx2= document.querySelector('.petunjuksoal2');

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

function myFunction(){
    var jwb1 = document.getElementById("titik1").value;
  
 if(jwb1 == "sejajar"){
    document.getElementById("ket1").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket1").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

}

function Functiontwo(){
  var jwb2 = document.getElementById("titik2").value;
  
if(jwb2 == "tegak lurus"){
  document.getElementById("ket2").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket2").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}
}

function Functionthree(){
  var jwb3 = document.getElementById("titik3").value;

if(jwb3 == "tegak lurus"){
  document.getElementById("ket3").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket3").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}
}

function Functionfour(){
    var jwb4 = document.getElementById("titik4").value;
 
 if(jwb4 == "6,3"){
    document.getElementById("ket4").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket4").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }
}

function Functionfive(){
  var jwb5 = document.getElementById("titik5").value;

if(jwb5 == "5,0"){
  document.getElementById("ket5").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket5").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}
}

function Functionsix(){
  var jwb6 = document.getElementById("titik6").value;

if(jwb6 == "-2,-1"){
  document.getElementById("ket6").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket6").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}
}

function Functionseven(){
    var jwb7 = document.getElementById("titik7").value;
  
 if(jwb7 == "1,5"){
    document.getElementById("ket7").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket7").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }
}


function Functioneight(){
 var jwb8 = document.getElementById("titik8").value;

if(jwb8 == "-1,4"){
  document.getElementById("ket8").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket8").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}
}


function Functionnine(){
 var jwb9 = document.getElementById("titik9").value;

if(jwb9 == "7,-1"){
  document.getElementById("ket9").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket9").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}
}


function ulang(){
    var jwb1 = document.getElementById("titik1").value;

    document.getElementById("titik1").value="";
    document.getElementById("ket1").innerHTML="";
    if(jwb1==""){
      document.getElementById("titik1").value = "";
      document.getElementById("ket1").innerHTML = "";
    }
  }

  function ulang2(){
    var jwb2 = document.getElementById("titik2").value;
   
    document.getElementById("titik2").value="";
    document.getElementById("ket2").innerHTML="";
    if(jwb2==""){
      document.getElementById("titik2").value = "";
      document.getElementById("ket2").innerHTML = "";
    }
 
  }

  function ulang3(){
    var jwb3 = document.getElementById("titik3").value;
  
    document.getElementById("titik3").value="";
    document.getElementById("ket3").innerHTML="";
    if(jwb3==""){
      document.getElementById("titik3").value = "";
      document.getElementById("ket3").innerHTML = "";
    }
  }

  function ulang4(){
    var jwb4 = document.getElementById("titik4").value;
   
    document.getElementById("titik4").value="";
    document.getElementById("ket4").innerHTML="";
    if(jwb4==""){
      document.getElementById("titik4").value = "";
      document.getElementById("ket4").innerHTML = "";
    }
  }

  function ulang5(){
   var jwb5 = document.getElementById("titik5").value;
   
    document.getElementById("titik5").value="";
    document.getElementById("ket5").innerHTML="";
    if(jwb5==""){
      document.getElementById("titik5").value = "";
      document.getElementById("ket5").innerHTML = "";
    }
  
  }

  function ulang6(){
    var jwb6 = document.getElementById("titik6").value;
  
    document.getElementById("titik6").value="";
    document.getElementById("ket6").innerHTML="";
    if(jwb6==""){
      document.getElementById("titik6").value = "";
      document.getElementById("ket6").innerHTML = "";
    }
  }
