// DEKLARASI VARIABEL
const mulai = document.getElementById("mulai");
const kuis = document.getElementById("kuis");
const soal = document.getElementById("soal");
const qImg = document.getElementById("gambar");
const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const perpindahan = document.getElementById("progress");
const skor = document.getElementById("skor");

// DATABASE SOAL
let soall = [
    {
        soal : "1. Pada gambar kedudukan dua garis disamping, merupakan garis?",
        imgSrc : "img/sejajar.png",
        A : "Sejajar",
        B : "Berpotongan",
        C : "Berhimpit",
        benar : "A"
    },{
        soal : "2. Pada gambar kedudukan dua garis disamping, merupakan garis?",
        imgSrc : "img/potong.png",
        A : "Sejajar",
        B : "Berpotongan",
        C : "Berhimpit",
        benar : "B"
    },{
        soal : "3. Pada gambar kedudukan dua garis disamping, merupakan garis?",
        imgSrc : "img/himpit.png",
        A : "Sejajar",
        B : "Berpotongan",
        C : "Berhimpit",
        benar : "C"
    }
];

// MEMBUAT VARIABEL BARU

const pertanyaan_akhir = soall.length - 1;//karena array dimulai dari 0 harus dikurang satu
let gantisoal = 0;//menjalankan soal
let count = 0;//nilai awalnya 0
let score = 0;

// menampilkan soalnya   
function tampil(){
    let q = soall[gantisoal];
    
    soal.innerHTML = "<p>"+ q.soal +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    A.innerHTML = q.A;
    B.innerHTML = q.B;
    C.innerHTML = q.C;
}

mulai.addEventListener("click",mulaikuis);

// Memulai Kuis
function mulaikuis(){
    mulai.style.display = "none";
    tampil();
    kuis.style.display = "block";
    pindahsoal();
}

// bulat 3 buting mun salah merah mun benar hijau
function pindahsoal(){
    for(let qIndex = 0; qIndex <= pertanyaan_akhir ; qIndex++){
        perpindahan.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// mengecek jawabannya

function cekjawaban(jawaban){
    if( jawaban == soall[gantisoal].benar){
        // jawaban benar
        score++;
        // jika jawaban benar mengganti warna lawan  fungsi dibawah ini
        jawabanbenar();
    }else{
        // ini jawaban salah
        // amun jawaban salah yg keluar fungsi bawah nih
        jawabansalah();
    }
    count = 0;
    if(gantisoal < pertanyaan_akhir){
        gantisoal++;
        tampil();
    }else{
        
        sekor();
    }
}

//jawaban benar 
function jawabanbenar(){
    document.getElementById(gantisoal).style.backgroundColor = "#0f0";
}

// jawaban salah
function jawabansalah(){
    document.getElementById(gantisoal).style.backgroundColor = "#f00";
}

// menampilkan skor
function sekor(){
    skor.style.display = "block";
    
    // menghitung skor yg dijawab oleh pengguna
    const persentaseskor = Math.round(100 * score/soall.length);
    
    // menentukan kategori gambar
    let img = (persentaseskor >= 80) ? "img/5.png" :
              (persentaseskor >= 60) ? "img/4.png" :
              (persentaseskor >= 40) ? "img/3.png" :
              (persentaseskor >= 20) ? "img/2.png" :
              "img/1.png";
    
    skor.innerHTML = "<img src="+ img +">";
    skor.innerHTML += "<p>"+ persentaseskor +"%</p>";
}
