
const mulai = document.getElementById("mulai");
const kuis = document.getElementById("kuis");
const soal = document.getElementById("soal");
const qImg = document.getElementById("gambar");
const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const D = document.getElementById("D");
const perpindahan = document.getElementById("progress");
const skor = document.getElementById("skor");


let soall = [
    {
        soal : "1). Perhatikan gambar disamping berikut ini, Dimanakah letak toko buku ?",
        imgSrc : "kosong.png",
        A : "a. ( 4 , 5 )",
        B : "b. ( 9 , 2 )",
        C : "c. ( 11, 7 )",
        D : "d. ( 5 , 4 )",
        benar : "A"
    },{
        soal : "2). Perhatikan gambar disamping berikut ini, Dimanakah letak Supermarket ?",
        imgSrc : "kosong.png",
        A : "a. ( 5 , 4 )",
        B : "b. ( 4 , 5 )",
        C : "c. ( 11, 7 )",
        D : "d. ( 9 , 2 )",
        benar : "D"

    },{
        soal : "3). Berdasarkan gambar disamping, titik mana yang berada di kuadran III?",
        imgSrc : "no3.png",
        A : "a. Titik A",
        B : "b. Titik B",
        C : "c. Titik C",
        D : "d. Titik D",
        benar : "D"
    },{
        soal : "4). Pada gambar bidang koordinat disamping disamping, titik E berada di kuadran?",
        imgSrc : "no3.png",
        A : "a. Kuadran IV",
        B : "b. Kuadran III",
        C : "c. Kuadran II",
        D : "d. Kuadran I",
        benar : "A"
    },{
        soal : "5).Pada gambar disamping, Bangun datar apa yang akan terbentuk apabila titik A,C,E,F dihubungkan menggunakan sebuah garis lurus?",
        imgSrc : "no4.png",
        A : "a. Segitiga",
        B : "b. Trapesium",
        C : "c. Jajar genjang",
        D : "d. Persegi",
        benar : "B"
    },{
        soal : "6). Diketahui segiempat ABCD dengan koordinat titik A(-2,5), B(-2,1), C(4,1) dan D(4,5). Segiempat ABCD berbentuk . . .",
        A : "a. Persegi",
        B : "b. Persegi Panjang",
        C : "c. Jajargenjang",
        D : "d. Trapesium",
        benar : "B"
    },{
        
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
    D.innerHTML = q.D;
}

mulai.addEventListener("click",mulaikuis);

// Memulai Kuis
function mulaikuis(){
    mulai.style.display = "none";
    tampil();
    kuis.style.display = "block";
    pindahsoal();
}

// bulat 
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
    skor.innerHTML += "<p>"+ persentaseskor +"</p>";
}
