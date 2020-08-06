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
    var jwb2 = document.getElementById("no2").innerText;
    var jwb3 = document.getElementById("no3").innerText;

if(jwb1 == "Segitiga Siku-siku"){
    document.getElementById("ket1").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket1").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

if(jwb2 == "Persegi Panjang"){
    document.getElementById("ket2").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket2").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

  if(jwb3 == "Trapesium"){
    document.getElementById("ket3").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket3").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }
}

function ulang(){
  var plhn1 = "<p ondragstart='dragStart(event)' ondrag='dragging(event)' draggable='true' id='dragtarget'>Segitiga Siku-siku</p>";
  var plhn2 = "<p ondragstart='dragStart(event)' ondrag='dragging(event)' draggable='true' id='dragtarget1'>Segitiga Sama Kaki</p>";
  var plhn3 = "<p ondragstart='dragStart(event)' ondrag='dragging(event)' draggable='true' id='dragtarget2'>Persegi</p>";
  var plhn4 = "<p ondragstart='dragStart(event)' ondrag='dragging(event)' draggable='true' id='dragtarget3'>Persegi Panjang</p>";
  var plhn5 = "<p ondragstart='dragStart(event)' ondrag='dragging(event)' draggable='true' id='dragtarget4'>Trapesium</p>";

  document.getElementById("no1").innerHTML="";
  document.getElementById("plhn1").innerHTML = plhn1;
  document.getElementById("plhn2").innerHTML = plhn2;
  document.getElementById("plhn3").innerHTML = plhn3;
  document.getElementById("plhn4").innerHTML = plhn4;
  document.getElementById("plhn5").innerHTML = plhn5;
  document.getElementById("ket1").innerHTML="";
  var kosong1 = document.getElementById("no1").innerText;
  if(kosong1==""){
    document.getElementById("no1").innerHTML = "";
    document.getElementById("ket1").innerHTML = "";
  }

  document.getElementById("no2").innerHTML="";
  document.getElementById("plhn1").innerHTML = plhn1;
  document.getElementById("plhn2").innerHTML = plhn2;
  document.getElementById("plhn3").innerHTML = plhn3;
  document.getElementById("plhn4").innerHTML = plhn4;
  document.getElementById("plhn5").innerHTML = plhn5;
  document.getElementById("ket2").innerHTML="";
  var kosong1 = document.getElementById("no2").innerText;
  if(kosong1==""){
    document.getElementById("no2").innerHTML = "";
    document.getElementById("ket2").innerHTML = "";
  }

  document.getElementById("no3").innerHTML="";
  document.getElementById("plhn1").innerHTML = plhn1;
  document.getElementById("plhn2").innerHTML = plhn2;
  document.getElementById("plhn3").innerHTML = plhn3;
  document.getElementById("plhn4").innerHTML = plhn4;
  document.getElementById("plhn5").innerHTML = plhn5;
  document.getElementById("ket3").innerHTML="";
  var kosong1 = document.getElementById("no3").innerText;
  if(kosong1==""){
    document.getElementById("no3").innerHTML = "";
    document.getElementById("ket3").innerHTML = "";
  }
}
