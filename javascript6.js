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

function cek(){
    var jwb1 = document.getElementById("text1").value;
    var jwb2 = document.getElementById("text2").value;
    var jwb3 = document.getElementById("text3").value;
    var jwb4 = document.getElementById("text4").value;
    var jwb5 = document.getElementById("text5").value;
    var jwb6 = document.getElementById("text6").value;
    var jwb7 = document.getElementById("text7").value;
    var jwb8 = document.getElementById("text8").value;
    var jwb9 = document.getElementById("text9").value;
    var jwb10 = document.getElementById("text10").value;

if(jwb1 == "5 satuan ke atas"){
    document.getElementById("ket1").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket1").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

if(jwb2 == "6 satuan ke atas"){
    document.getElementById("ket2").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket2").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

  if(jwb3 == "9 satuan ke kiri"){
    document.getElementById("ket3").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket3").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

  if(jwb4 == "(-8,-2)"){
    document.getElementById("ket4").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket4").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

  if(jwb5 == "(-6,-6)"){
    document.getElementById("ket5").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket5").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

  if(jwb6 == "6 satuan ke bawah"){
    document.getElementById("ket6").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket6").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

  if(jwb7 == "(2,-3)"){
    document.getElementById("ket7").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket7").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

  if(jwb8 == "2 satuan ke kanan"){
    document.getElementById("ket8").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket8").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

  if(jwb9 == "(10,-5)"){
    document.getElementById("ket9").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket9").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

  if(jwb10 == "5 satuan ke bawah"){
    document.getElementById("ket10").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket10").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }
}

function ulang(){
  var jwb1 = document.getElementById("text1").value;
  var jwb2 = document.getElementById("text2").value;
  var jwb3 = document.getElementById("text3").value;
  var jwb4 = document.getElementById("text4").value;
  var jwb5 = document.getElementById("text5").value;
  var jwb6 = document.getElementById("text6").value;
  var jwb7 = document.getElementById("text7").value;
  var jwb8 = document.getElementById("text8").value;
  var jwb9 = document.getElementById("text9").value;
  var jwb10 = document.getElementById("text10").value

  document.getElementById("text1").value="";
  document.getElementById("ket1").innerHTML="";
  if(jwb1==""){
    document.getElementById("text1").value = "";
    document.getElementById("ket1").innerHTML = "";
  }

  document.getElementById("text2").value="";
  document.getElementById("ket2").innerHTML="";
  if(jwb2==""){
    document.getElementById("text2").value = "";
    document.getElementById("ket2").innerHTML = "";
  }

  document.getElementById("text3").value="";
  document.getElementById("ket3").innerHTML="";
  if(jwb3==""){
    document.getElementById("text3").value = "";
    document.getElementById("ket3").innerHTML = "";
  }

  document.getElementById("text4").value="";
  document.getElementById("ket4").innerHTML="";
  if(jwb4==""){
    document.getElementById("text4").value = "";
    document.getElementById("ket4").innerHTML = "";
  }

  document.getElementById("text5").value="";
  document.getElementById("ket5").innerHTML="";
  if(jwb5==""){
    document.getElementById("text5").value = "";
    document.getElementById("ket5").innerHTML = "";
  }

  document.getElementById("text6").value="";
  document.getElementById("ket6").innerHTML="";
  if(jwb6==""){
    document.getElementById("text6").value = "";
    document.getElementById("ket6").innerHTML = "";
  }

  document.getElementById("text7").value="";
  document.getElementById("ket7").innerHTML="";
  if(jwb7==""){
    document.getElementById("text7").value = "";
    document.getElementById("ket7").innerHTML = "";
  }

  document.getElementById("text8").value="";
  document.getElementById("ket8").innerHTML="";
  if(jwb8==""){
    document.getElementById("text8").value = "";
    document.getElementById("ket8").innerHTML = "";
  }

  document.getElementById("text9").value="";
  document.getElementById("ket9").innerHTML="";
  if(jwb9==""){
    document.getElementById("text9").value = "";
    document.getElementById("ket9").innerHTML = "";
  }

  document.getElementById("text10").value="";
  document.getElementById("ket10").innerHTML="";
  if(jwb10==""){
    document.getElementById("text10").value = "";
    document.getElementById("ket10").innerHTML = "";
  }
}