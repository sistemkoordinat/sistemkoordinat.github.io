function myFunction() {
    var x = document.getElementById("myText").value.split(' ').join('');
     var jawaban;
     if (x == "1,4") {
       jawaban = "Berhasil, jawabanmu benar";
     }else {
       jawaban = "Jawabanmu salah, jangan lupa tanda koma(,) untuk pemisah titiknya";
     }
     document.getElementById("demo").innerHTML = jawaban;
   }
  
   function Functiontwo() {
    var x = document.getElementById("Texttwo").value.split(' ').join('');
     var jawaban;
     if (x == "-2,2") {
      jawaban = "Berhasil, jawabanmu benar";
    }else {
      jawaban = "Jawabanmu salah, jangan lupa tanda koma(,) untuk pemisah titiknya";
    }
     document.getElementById("cektwo").innerHTML = jawaban;
   }
  
   function Functionthree() {
    var x = document.getElementById("Textthree").value.split(' ').join('');
     var jawaban;
     if (x == "-6,6") {
      jawaban = "Berhasil, jawabanmu benar";
    }else {
      jawaban = "Jawabanmu salah, jangan lupa tanda koma(,) untuk pemisah titiknya";
    }
     document.getElementById("cekthree").innerHTML = jawaban;
   }
  
   function Functionfour() {
    var x = document.getElementById("Textfour").value.toLowerCase();
     var jawaban;
     if (x == "f") {
      jawaban = "Berhasil, jawabanmu benar";
    }else {
      jawaban = "Jawabanmu salah";
    }
     document.getElementById("cekfour").innerHTML = jawaban;
   }
  
   function Functionfive() {
    var x = document.getElementById("Textfive").value.toLowerCase();
     var jawaban;
     if (x == "e") {
      jawaban = "Berhasil, jawabanmu benar";
    }else {
      jawaban = "Jawabanmu salah";
    }
     document.getElementById("cekfive").innerHTML = jawaban;
   }

   function Functionsix() {
    var x = document.getElementById("Textsix").value.toLowerCase().split(' ').join('');
     var jawaban;
     if (x == "f,g") {
      jawaban = "Berhasil, jawabanmu benar";
    }else {
      jawaban = "Jawabanmu salah, gunakan penghubung koma atau dan";
    }
     document.getElementById("ceksix").innerHTML = jawaban;
   }

   function Functionseven() {
    var x = document.getElementById("Textseven").value.toLowerCase().split(' ').join('');
     var jawaban;
     if (x == "b,c") {
        jawaban = "Berhasil, jawabanmu benar";
      }else {
      jawaban = "Jawabanmu salah, gunakan penghubung koma atau dan";
    }
     document.getElementById("cekseven").innerHTML = jawaban;
   }
  