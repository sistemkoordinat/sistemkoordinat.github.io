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

function cek(){
    var jwb1 = document.getElementById("text1");
   
    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');


if(y == "5satuankekanan"){
    document.getElementById("ket1").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
  } else{
    document.getElementById("ket1").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
  }

}

function ulang(){
  var jwb1 = document.getElementById("text1").value;
 
  
  document.getElementById("text1").value="";
  document.getElementById("ket1").innerHTML="";
  if(jwb1==""){
    document.getElementById("text1").value = "";
    document.getElementById("ket1").innerHTML = "";
  }

}



function cek2(){
  var jwb2 = document.getElementById("text2");
 
  var y = jwb2.value.toLowerCase();
    y=y.replace(/\s+/g, '');

if(y == "7satuankeatas"){
  document.getElementById("ket2").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket2").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}

}

function ulang2(){
var jwb2 = document.getElementById("text2").value;

document.getElementById("text2").value="";
document.getElementById("ket2").innerHTML="";
if(jwb2==""){
  document.getElementById("text2").value = "";
  document.getElementById("ket2").innerHTML = "";
}

}

function cek3(){
  var jwb3 = document.getElementById("text3");
 
  var y = jwb3.value.toLowerCase();
    y=y.replace(/\s+/g, '');

if(y == "4satuankekiri"){
  document.getElementById("ket3").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket3").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}

}

function ulang3(){
var jwb3 = document.getElementById("text3").value;

document.getElementById("text3").value="";
document.getElementById("ket3").innerHTML="";
if(jwb3==""){
  document.getElementById("text3").value = "";
  document.getElementById("ket3").innerHTML = "";
}

}


function cek4(){
  var jwb4 = document.getElementById("text4");
 
  var y = jwb4.value.toLowerCase();
    y=y.replace(/\s+/g, '');

if(y == "2satuankebawah"){
  document.getElementById("ket4").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket4").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}

}

function ulang4(){
var jwb4 = document.getElementById("text4").value;

document.getElementById("text4").value="";
document.getElementById("ket4").innerHTML="";
if(jwb4==""){
  document.getElementById("text4").value = "";
  document.getElementById("ket4").innerHTML = "";
}

}


function cek5(){
  var jwb5 = document.getElementById("text5");
 
  var y = jwb5.value.toLowerCase();
    y=y.replace(/\s+/g, '');

if(y == "9,4"){
  document.getElementById("ket5").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket5").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}

}

function ulang5(){
var jwb5 = document.getElementById("text5").value;

document.getElementById("text5").value="";
document.getElementById("ket5").innerHTML="";
if(jwb5==""){
  document.getElementById("text5").value = "";
  document.getElementById("ket5").innerHTML = "";
}

}


function cek6(){
  var jwb6 = document.getElementById("text6");
 
  var y = jwb6.value.toLowerCase();
    y=y.replace(/\s+/g, '');

if(y == "-9,2"){
  document.getElementById("ket6").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket6").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}

}

function ulang6(){
var jwb6 = document.getElementById("text6").value;

document.getElementById("text6").value="";
document.getElementById("ket6").innerHTML="";
if(jwb6==""){
  document.getElementById("text6").value = "";
  document.getElementById("ket6").innerHTML = "";
}

}


function cek7(){
  var jwb7 = document.getElementById("text7");
 
  var y = jwb7.value.toLowerCase();
    y=y.replace(/\s+/g, '');

if(y == "-10,-7"){
  document.getElementById("ket7").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket7").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}

}

function ulang7(){
var jwb7 = document.getElementById("text7").value;

document.getElementById("text7").value="";
document.getElementById("ket7").innerHTML="";
if(jwb7==""){
  document.getElementById("text7").value = "";
  document.getElementById("ket7").innerHTML = "";
}

}


function cek8(){
  var jwb8 = document.getElementById("text8");
 
    var y = jwb8.value.toLowerCase();
    y=y.replace(/\s+/g, '');

if(y == "5satuankekiri"){
  document.getElementById("ket8").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket8").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}

}

function ulang8(){
var jwb8 = document.getElementById("text8").value;

document.getElementById("text8").value="";
document.getElementById("ket8").innerHTML="";
if(jwb8==""){
  document.getElementById("text8").value = "";
  document.getElementById("ket8").innerHTML = "";
}

}