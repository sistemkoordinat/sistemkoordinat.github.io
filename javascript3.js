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

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
}

function cek(){
    var jwb1 = document.getElementById("no1").innerText;

if(jwb1 == "Segitiga"){
    document.getElementById("ket1").innerHTML = "<img src='benar.png' style='width:30px; height:30px; margin:-22px;'>"
  } else{
    document.getElementById("ket1").innerHTML = "<img src='salah.png' style='width:30px; height:30px; margin:-22px;'>"
  }
}

function cek2(){
  var jwb2 = document.getElementById("no2").innerText;

if(jwb2 == "Persegi Panjang"){
  document.getElementById("ket2").innerHTML = "<img src='benar.png' style='width:30px; height:30px; margin:-22px;'>"
} else{
  document.getElementById("ket2").innerHTML = "<img src='salah.png' style='width:30px; height:30px; margin:-22px;'>"
}
}

function cek3(){
  var jwb3 = document.getElementById("no3").innerText;

if(jwb3 == "Trapesium"){
  document.getElementById("ket3").innerHTML = "<img src='benar.png' style='width:30px; height:30px; margin:-22px;'>"
} else{
  document.getElementById("ket3").innerHTML = "<img src='salah.png' style='width:30px; height:30px; margin:-22px;'>"
}
}

function ulang(){
  var plhn1 = "<p ondragstart='dragStart(event)' ondrag='dragging(event)' draggable='true' id='dragtarget'>Segitiga</p>";
  var plhn2 = "<p ondragstart='dragStart(event)' ondrag='dragging(event)' draggable='true' id='dragtarget1'>Persegi</p>";
  var plhn3 = "<p ondragstart='dragStart(event)' ondrag='dragging(event)' draggable='true' id='dragtarget2'>Trapesium</p>";

  document.getElementById("no1").innerHTML="";
  document.getElementById("plhn1").innerHTML = plhn1;
  document.getElementById("plhn2").innerHTML = plhn2;
  document.getElementById("plhn3").innerHTML = plhn3;

  document.getElementById("ket1").innerHTML="";
  var kosong1 = document.getElementById("no1").innerText;
  if(kosong1==""){
    document.getElementById("no1").innerHTML = "";
    document.getElementById("ket1").innerHTML = "";
  }

}

function ulang2(){
  var plhn4 = "<p ondragstart='dragStart(event)' ondrag='dragging(event)' draggable='true' id='dragtarget4'>Persegi</p>";
  var plhn5 = "<p ondragstart='dragStart(event)' ondrag='dragging(event)' draggable='true' id='dragtarget5'>Persegi Panjang</p>";
  var plhn6 = "<p ondragstart='dragStart(event)' ondrag='dragging(event)' draggable='true' id='dragtarget6'>Trapesium</p>";
  
  document.getElementById("no2").innerHTML="";
  document.getElementById("plhn4").innerHTML = plhn4;
  document.getElementById("plhn5").innerHTML = plhn5;
  document.getElementById("plhn6").innerHTML = plhn6;
  document.getElementById("ket2").innerHTML="";
  var kosong1 = document.getElementById("no2").innerText;
  if(kosong1==""){
    document.getElementById("no2").innerHTML = "";
    document.getElementById("ket2").innerHTML = "";
  }
}

function ulang3(){
  var plhn7 = "<p ondragstart='dragStart(event)' ondrag='dragging(event)' draggable='true' id='dragtarget7'>Persegi</p>";
  var plhn8 = "<p ondragstart='dragStart(event)' ondrag='dragging(event)' draggable='true' id='dragtarget8'>Persegi Panjang</p>";
  var plhn9 = "<p ondragstart='dragStart(event)' ondrag='dragging(event)' draggable='true' id='dragtarget9'>Trapesium</p>";

  document.getElementById("no3").innerHTML="";
  document.getElementById("plhn7").innerHTML = plhn7;
  document.getElementById("plhn8").innerHTML = plhn8;
  document.getElementById("plhn9").innerHTML = plhn9;
  document.getElementById("ket3").innerHTML="";
  var kosong1 = document.getElementById("no3").innerText;
  if(kosong1==""){
    document.getElementById("no3").innerHTML = "";
    document.getElementById("ket3").innerHTML = "";
  }
}