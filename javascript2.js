function ftampil(){
	/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
	var dropdown = document.getElementsByClassName("dropdown-btn");
	var i;

	for (i = 0; i < dropdown.length; i++) {
		console.log(dropdown.length);
  		dropdown[i].addEventListener("click", function() {
  			this.classList.toggle("active2");
  			var dropdownContent = this.nextElementSibling;
  			if (dropdownContent.style.display === "block") {
  				dropdownContent.style.display = "none";
  			} else {
  				dropdownContent.style.display = "block";
  			}
  		});
	}
}

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
    var x = document.getElementById("Textsix").value.split(' ').join('');
     var jawaban;
     if (x == "f,g") {
      jawaban = "Berhasil, jawabanmu benar";
    } else if (x=="f dan g"){
      jawaban = "Berhasil, jawabanmu benar";
    } else if (x=="F,G"){
        jawaban = "Berhasil, jawabanmu benar";
    } else if (x=="F dan G"){
        jawaban = "Berhasil, jawabanmu benar";
    }else if (x=="g dan f"){
      jawaban = "Berhasil, jawabanmu benar";  
    }else if (x=="G dan F"){
      jawaban = "Berhasil, jawabanmu benar";  
    }else if (x=="g,f"){
      jawaban = "Berhasil, jawabanmu benar";  
    }else if (x=="G,F"){
    jawaban = "Berhasil, jawabanmu benar";  
    }else if (x=="gdanf"){
      jawaban = "Berhasil, jawabanmu benar";  
    }else if (x=="GdanF"){
      jawaban = "Berhasil, jawabanmu benar";  
    }else if (x=="fdang"){
      jawaban = "Berhasil, jawabanmu benar";  
    }else if (x=="FdanG"){
      jawaban = "Berhasil, jawabanmu benar";  
    }else {
      jawaban = "Jawabanmu salah, gunakan penghubung koma atau dan";
    }
     document.getElementById("ceksix").innerHTML = jawaban;
   }

   function Functionseven() {
    var x = document.getElementById("Textseven").value;
     var jawaban;
     if (x == "b,c") {
        jawaban = "Berhasil, jawabanmu benar";
      } else if (x=="b dan c"){
        jawaban = "Berhasil, jawabanmu benar";
      } else if (x=="B,C"){
          jawaban = "Berhasil, jawabanmu benar";
      } else if (x=="B dan C"){
          jawaban = "Berhasil, jawabanmu benar";
      }else if (x=="c dan b"){
        jawaban = "Berhasil, jawabanmu benar";  
    }else if (x=="C dan B"){
      jawaban = "Berhasil, jawabanmu benar";  
  }else if (x=="c,b"){
    jawaban = "Berhasil, jawabanmu benar";  
}else if (x=="C,B"){
  jawaban = "Berhasil, jawabanmu benar";  
}else if (x=="cdanb"){
  jawaban = "Berhasil, jawabanmu benar";  
}else if (x=="CdanB"){
jawaban = "Berhasil, jawabanmu benar";  
}else if (x=="bdanc"){
  jawaban = "Berhasil, jawabanmu benar";  
}else if (x=="BdanC"){
jawaban = "Berhasil, jawabanmu benar";  
}else {
      jawaban = "Jawabanmu salah, gunakan penghubung koma atau dan";
    }
     document.getElementById("cekseven").innerHTML = jawaban;
   }
  