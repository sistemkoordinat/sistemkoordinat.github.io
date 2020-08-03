function cek(){
    var jwb1 = document.getElementById("text1").value.toLowerCase().split(' ').join('');
    var jwb2 = document.getElementById("text2").value.toLowerCase().split(' ').join('');
    var jwb3 = document.getElementById("text3").value.toLowerCase().split(' ').join('');
    var jwb4 = document.getElementById("text4").value.toLowerCase().split(' ').join('');
    var jwb5 = document.getElementById("text5").value.toLowerCase().split(' ').join('');
    var jwb6 = document.getElementById("text6").value.toLowerCase().split(' ').join('');
    var jwb7 = document.getElementById("text7").value.toLowerCase().split(' ').join('');
    var jwb8 = document.getElementById("text8").value.toLowerCase().split(' ').join('');
    var jwb9 = document.getElementById("text9").value.toLowerCase().split(' ').join('');
    var jwb10 = document.getElementById("text10").value.toLowerCase().split(' ').join('');

if(jwb1 == "7 satuan ke atas"){
    document.getElementById("ket1").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket1").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

if(jwb2 == "4 satuan ke kiri"){
    document.getElementById("ket2").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket2").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

  if(jwb3 == "2 satuan ke bawah"){
    document.getElementById("ket3").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket3").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

  if(jwb4 == "(9,4)"){
    document.getElementById("ket4").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket4").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

  if(jwb5 == "(-9,2)"){
    document.getElementById("ket5").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket5").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

  if(jwb6 == "9 satuan ke kiri"){
    document.getElementById("ket6").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket6").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

  if(jwb7 == "(-10,-7)"){
    document.getElementById("ket7").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket7").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

  if(jwb8 == "7 satuan ke bawah"){
    document.getElementById("ket8").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket8").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

  if(jwb9 == "(4,-5)"){
    document.getElementById("ket9").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket9").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

  if(jwb10 == "4 satuan ke kanan"){
    document.getElementById("ket10").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket10").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }
}