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
