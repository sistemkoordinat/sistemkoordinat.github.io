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

var ya = document.getElementById("yas3");
var yaya= document.querySelector('.yas2');

yaya.addEventListener("click",function(){
  ya.classList.toggle("hilang");
})

var no = document.getElementById("not3");
var nono= document.querySelector('.not2');

nono.addEventListener("click",function(){
  no.classList.toggle("hilang");
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
    var jwb1 = document.getElementById("titik1");

    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');
 

  
 if(y == "sejajar"){
    document.getElementById("ket1").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket1").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

}

function Functiontwo(){
  var jwb2 = document.getElementById("titik2");

  var y = jwb2.value.toLowerCase();
    y=y.replace(/\s+/g, '');
 

  
if(y == "tegaklurus"){
  document.getElementById("ket2").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket2").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}
}

function Functionthree(){
  var jwb3 = document.getElementById("titik3");

  var y = jwb3.value.toLowerCase();
    y=y.replace(/\s+/g, '');
 


if(y == "tegaklurus"){
  document.getElementById("ket3").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket3").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}
}

function Functionfour(){
    var jwb4 = document.getElementById("titik4");

    var y = jwb4.value.toLowerCase();
    y=y.replace(/\s+/g, '');
 

 
 if(y == "sejajar"){
    document.getElementById("ket4").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket4").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }
}

function Functionfive(){
  var jwb5 = document.getElementById("titik5");

  var y = jwb5.value.toLowerCase();
    y=y.replace(/\s+/g, '');
 

if(y == "berpotongan"){
  document.getElementById("ket5").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket5").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}
}

function Functionsix(){
  var jwb6 = document.getElementById("titik6");

  var y = jwb6.value.toLowerCase();
    y=y.replace(/\s+/g, '');
 


if(y == "berpotongan"){
  document.getElementById("ket6").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket6").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
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
