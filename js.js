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

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};
console.log(kkk);
function scrollFunction() {
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("soal").style.top = "0";
  } else {
    document.getElementById("soal").style.top = "-500px";
  }
}


function myFunction() {
  var x = document.getElementById("myText").value.split(' ').join('');
   var jawaban;
   if (x == "3,3") {
     jawaban = "Berhasil, jawabanmu benar";
   } else {
     jawaban = "Jawabanmu salah, jangan lupa tanda koma(,) untuk pemisah titiknya";
   }
   document.getElementById("demo").innerHTML = jawaban;
 }

 function Functiontwo() {
  var x = document.getElementById("Texttwo").value.split(' ').join('');
   var jawaban;
   if (x == "5,6") {
    jawaban = "Berhasil, jawabanmu benar";
  }else {
    jawaban = "Jawabanmu salah, jangan lupa tanda koma(,) untuk pemisah titiknya";
  }
   document.getElementById("cektwo").innerHTML = jawaban;
 }

 function Functionthree() {
  var x = document.getElementById("Textthree").value.split(' ').join('');
   var jawaban;
   if (x == "8,5") {
    jawaban = "Berhasil, jawabanmu benar";
  }else {
    jawaban = "Jawabanmu salah, jangan lupa tanda koma(,) untuk pemisah titiknya";
  }
   document.getElementById("cekthree").innerHTML = jawaban;
 }

 function Functionfour() {
  var x = document.getElementById("Textfour").value.split(' ').join('');
   var jawaban;
   if (x == "10,2") {
    jawaban = "Berhasil, jawabanmu benar";
  } else {
    jawaban = "Jawabanmu salah, jangan lupa tanda koma(,) untuk pemisah titiknya";
  }
   document.getElementById("cekfour").innerHTML = jawaban;
 }

 function Functionfive() {
  var x = document.getElementById("Textfive").value.split(' ').join('');
   var jawaban;
   if (x == "12,8") {
    jawaban = "Berhasil, jawabanmu benar";
  }else {
    jawaban = "Jawabanmu salah, jangan lupa tanda koma(,) untuk pemisah titiknya";
  }
   document.getElementById("cekfive").innerHTML = jawaban;
 }

 

function Ya1() {
  var jawaban;
   jawaban = "Berhasil, jawabanmu benar";
   document.getElementById("cekone").innerHTML = jawaban;
 }

 function Tidak1() {
  var jawaban;
   jawaban = "Maaf, Jawabanmu salahh";
   document.getElementById("cekone").innerHTML = jawaban;
 }



 function Ya2() {
  var jawaban;
  jawaban = "Maaf, Jawabanmu salahh";
   document.getElementById("cektwo").innerHTML = jawaban;
 }

 function Tidak2() {
  var jawaban;
  jawaban = "Berhasil, jawabanmu benar";
   document.getElementById("cektwo").innerHTML = jawaban;
 }



 function Ya3() {
  var jawaban;
  jawaban = "Maaf, Jawabanmu salahh";
   document.getElementById("cekthree").innerHTML = jawaban;
 }

 function Tidak3() {
  var jawaban;
  jawaban = "Berhasil, jawabanmu benar";
   document.getElementById("cekthree").innerHTML = jawaban;
 }



 function Ya4() {
  var jawaban;
   jawaban = "Berhasil, jawabanmu benar";
   document.getElementById("cekfour").innerHTML = jawaban;
 }

 function Tidak4() {
  var jawaban;
   jawaban = "Maaf, Jawabanmu salahh";
   document.getElementById("cekfour").innerHTML = jawaban;
 }



 function Ya5() {
  var jawaban;
  jawaban = "Maaf, Jawabanmu salahh";
   document.getElementById("cekfive").innerHTML = jawaban;
 }

 function Tidak5() {
  var jawaban;
  jawaban = "Berhasil, jawabanmu benar";
   document.getElementById("cekfive").innerHTML = jawaban;
 }



 function Ya6() {
  var jawaban;
  jawaban = "Maaf, Jawabanmu salahh";
   document.getElementById("ceksix").innerHTML = jawaban;
 }

 function Tidak6() {
  var jawaban;
  jawaban = "Berhasil, jawabanmu benar";
   document.getElementById("ceksix").innerHTML = jawaban;
 }



 function Ya7() {
  var jawaban;
  jawaban = "Maaf, Jawabanmu salahh";
   document.getElementById("cekseven").innerHTML = jawaban;
 }

 function Tidak7() {
  var jawaban;
  jawaban = "Berhasil, jawabanmu benar";
   document.getElementById("cekseven").innerHTML = jawaban;
 }



 function Ya8() {
  var jawaban;
   jawaban = "Berhasil, jawabanmu benar";
   document.getElementById("cekeight").innerHTML = jawaban;
 }

 function Tidak8() {
  var jawaban;
   jawaban = "Maaf, Jawabanmu salahh";
   document.getElementById("cekeight").innerHTML = jawaban;
 }
 

 
