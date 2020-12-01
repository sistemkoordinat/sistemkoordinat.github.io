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

function myFunction(){
  var jwb1 = document.getElementById("titik1").value.toLowerCase();

if(jwb1 == "segitiga"){
  document.getElementById("ket1").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
  document.getElementById("ket1").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}

}

function Functiontwo(){
var jwb2 = document.getElementById("titik2").value.toLowerCase();

if(jwb2 == "persegi panjang"){
document.getElementById("ket2").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
document.getElementById("ket2").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
}
}

function Functionthree(){
var jwb3 = document.getElementById("titik3").value.toLowerCase();

if(jwb3 == "trapesium"){
document.getElementById("ket3").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>"
} else{
document.getElementById("ket3").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>"
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