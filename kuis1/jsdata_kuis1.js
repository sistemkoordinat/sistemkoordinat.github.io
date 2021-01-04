//mengkoneksikan ke firebase
var firebaseConfig = {
    apiKey: "AIzaSyBNS_wz_CMntH55l8Rb0lVfYmo66zRfkO4",
    authDomain: "sistemkoordinat.firebaseapp.com",
    databaseURL: "https://sistemkoordinat.firebaseio.com",
    projectId: "sistemkoordinat",
    storageBucket: "sistemkoordinat.appspot.com",
    messagingSenderId: "322719063336",
    appId: "1:322719063336:web:6702959c04f1874f85841d"
  };

  firebase.initializeApp(firebaseConfig);

 
      let temp = document.querySelector(".full");
      let task =firebase.database().ref('kontrolkuis1/');
      task.on("child_added", function(data){
        let values=data.val();
        console.log("NILAI" +values.nilai);
        console.log("Task "+task);
        if(values.nilai==1){
            temp.classList.toggle("hidde");
        }
      });
  




let selanjutnya = document.querySelector('.lanjut');
let datadiri = document.querySelector('.data_diri');
namanya = document.getElementById('nama');
kelasnya = document.getElementById('kelas');
sekolah = document.getElementById('sekolah');
let sekolahfix = '';
let kelasfix = '';

selanjutnya.addEventListener('click', function () {

    let cek = 0;
    if (namanya.value == "") {
        if (namanya.className.indexOf('tt_salah') == -1) {
            namanya.className += ' tt_salah';
        }
    } else {
        namanya.className = namanya.className.replace('tt_salah', '');
        cek += 1;

    }

    if (kelasnya.value == "0") {
        if (kelasnya.className.indexOf('tt_salah') == -1) {
            kelasnya.className += ' tt_salah';
        }
    } else {
        kelasnya.className = kelasnya.className.replace('tt_salah', '');
        if (kelasnya.value == "1") {
            kelasfix = "8A";
        } else if (kelasnya.value == "2") {
            kelasfix = "8B";
        } 
        cek += 1;
    }

    if (sekolah.value == "0") {
        if (sekolah.className.indexOf('tt_salah') == -1) {
            sekolah.className += ' tt_salah';
        }
    } else {
        sekolah.className = sekolah.className.replace('tt_salah', '');
        if (sekolah.value == "1") {
            sekolahfix = "SMP Negeri 13 Banjarmasin";
        }
        cek += 1;
    }

    console.log(sekolahfix);

    if (cek != 3) {
        alert("lengkapi dulu data dari anda");
    } else if (cek == 3) {
        document.getElementById('dafis').className += ' hilang';
        document.getElementById('data').className += ' hilang';
        datadiri.className += ' hilang';
        document.getElementById('kiri').className = document.getElementById('kiri').className.replace('hilang', '');
        document.getElementById('kanan').className = document.getElementById('kanan').className.replace('hilang', '');
    }
});

window.onload = function () {
    namanya.value = "";
    kelasnya.value = value = "0";
    sekolah.value = value = "0";


    document.getElementById('kiri').className += ' hilang';
    document.getElementById('kanan').className += ' hilang';


}

// -----------------------------------------------------------------------------------------
// mengambil data dan menampilkanya

let json = new XMLHttpRequest();
json.onreadystatechange = function () {
    
    cek = [];
    jwbn = [];
    hasilakhir = 0;
    jwbnbnr = 0;
    jwbnslh = 0;

    if (json.readyState == 4 && json.status == 200) {
        let data = JSON.parse(this.responseText);
        // melihat data 

        
    for (let i = 0; i < 100; i++) {
            let acak = Math.floor(Math.random() * data.length) + 0;
            cek.push(acak);
        }
        cek = Array.from(new Set(cek));
        for (let i = 0; i < cek.length; i++) {
            let nilai = cek[i];
            let soaldata = data[nilai]["soal" + nilai]["soal"];
            let jwb0 = data[nilai]["soal" + nilai]["a"];
            let jwb1 = data[nilai]["soal" + nilai]["b"];
            let jwb2 = data[nilai]["soal" + nilai]["c"];
            let jwb3 = data[nilai]["soal" + nilai]["d"];
            let bnr = data[nilai]["soal" + nilai]["benar"];
            jwbn.push(bnr);

           
            for(let i=1; i<=10; i++){
                let radio = document.getElementById("radio"+i);
                radio.checked = false;
            }

            //nomor ke-
            let nomor = document.querySelectorAll(".soal #nomornya");
            nomor[i].innerHTML = i+1;

            //soal
            let soal = document.querySelectorAll(".bg_pertanyaan #soalnya");
            soal[i].innerHTML = soaldata;
            
            //pilihan a
            let piliha = document.querySelectorAll(".textnya #pilihannya0");
            piliha[i].innerHTML = jwb0;

            //pilihan b
            let pilihb = document.querySelectorAll(".textnya #pilihannya1");
            pilihb[i].innerHTML = jwb1;
            
            //pilihan c
            let pilihc = document.querySelectorAll(".textnya #pilihannya2");
            pilihc[i].innerHTML = jwb2;

            //pilihan d
            let pilihd = document.querySelectorAll(".textnya #pilihannya3");
            pilihd[i].innerHTML = jwb3;
            
            let bg_pertanyaan = document.getElementsByClassName("bg_pertanyaan");
            
            for(let u=0; u<bg_pertanyaan.length; u++){
                if(u!=0){
                    if(bg_pertanyaan[u].className.indexOf('hilang') == -1){
                        bg_pertanyaan[u].className += " hilang";
                            
                        }
                }
            }
            


        }

        let bg_pertanyaan = document.getElementsByClassName("bg_pertanyaan");
        
        //fungsi tombol lanjut
        let lanjut = document.querySelectorAll(".nav_selanjut");
        for(let y=0; y<lanjut.length; y++){
            lanjut[y].addEventListener('click', function(){
                if(lanjut[y].className.indexOf('disable') == -1){
                    if(bg_pertanyaan[y].className.indexOf('hilang') == -1){
                        bg_pertanyaan[y+1].className = bg_pertanyaan[y+1].className.replace("hilang","");
                        bg_pertanyaan[y].className += " hilang";
                    }
                    console.log(bg_pertanyaan[y+1]);       
                }
            })
        }

        //fungsi tombol sebelumnya
        let sebelum = document.querySelectorAll(".nav_sebelum");
        for(let y=0; y<sebelum.length; y++){
            sebelum[y].addEventListener('click', function(){
                if(sebelum[y].className.indexOf('disable') == -1){
                    if(bg_pertanyaan[y].className.indexOf('hilang') == -1){
                        bg_pertanyaan[y-1].className = bg_pertanyaan[y-1].className.replace("hilang","");
                        bg_pertanyaan[y].className += " hilang";
                    }
                }
            })
        }

        //navigasi soal
        let soal_nav = document.querySelectorAll(".soal_nav");
        for(let y=0; y<soal_nav.length; y++){
            soal_nav[y].addEventListener('click', function(){
                for(let u=0; u<bg_pertanyaan.length; u++){
                    if(bg_pertanyaan[u].className.indexOf('hilang') == -1){
                        bg_pertanyaan[u].className += " hilang";
                    }
                }
                bg_pertanyaan[y].className = bg_pertanyaan[y].className.replace("hilang","");
            })
        }
        
        //mewarnai soal yang sdh dijawab
        let soall = document.querySelectorAll(".soall");
        for(let y=0; y<soall.length; y++){
            soall[y].addEventListener('click',function(){
                let pilih = document.querySelectorAll(".bg_pilihan input");
                for(let j=0; j<pilih.length; j++){
                    pilih[j].addEventListener('click',function(){
                        soal_nav[y].className = soal_nav[y].className.replace("belum","sudah");
                    })
                }
            })
        }

        //cek jawaban
        let selesai = document.querySelector(".selesai");

        let jawaban = [];
        new_jwb_urut = [];
        new_jwb_urut_no = [];

        selesai.addEventListener("click", function(){
            let kunci = 0;
            
            for (let t = 0; t < jwbn.length; t++) {
                if ((soal_nav[t].className.indexOf('belum') == -1)) {
                    kunci = kunci + 1;
                    
                }
            }
            console.log(kunci);

            if (kunci == jwbn.length) {
                // array kunci
                hasilakhir = 0;
                jwbnbnr = 0;
                jwbnslh = jwbn.length;

                for (let i = 0; i < jwbn.length; i++) {
                    let x = i+1;
                    let radiobutton = document.getElementsByName("radio"+x);
                    let checked = false;
                    for (let j = 0; j < radiobutton.length; j++) {
                        if(radiobutton[j].checked){
                            checked = true;
                            jawaban.push(radiobutton[j].value);
                            if(radiobutton[j].value == jwbn[i]){
                                hasilakhir = hasilakhir + 10;
                                jwbnbnr = jwbnbnr + 1;
                            } else {
                                hasilakhir = hasilakhir;
                            }}}}

                for (let i = 0; i < cek.length; i++) {
                    for (let j = 0; j < cek.length; j++) {
                        if (i == cek[j]) {
                            new_jwb_urut.push(jawaban[j]);
                            new_jwb_urut_no.push(cek[j]);
                        }
                    }
                }
                console.log("jwb_user_urut_no :" + new_jwb_urut_no);
                console.log("jwb_user_urut :" + new_jwb_urut);

                
                // simpan kedatabase----------
                console.log(namanya.value);
                console.log(sekolahfix);
                console.log(kelasfix);
                console.log(hasilakhir);
                let waktunya = waktu();
                let harinya = hari();

                createTask(sekolahfix, namanya.value, kelasfix, hasilakhir, waktunya, harinya,new_jwb_urut);

                let namainput = document.querySelector('.nama');
                namainput.innerText = namanya.value;

                let sekolahinput = document.querySelector('.sekolah');
                sekolahinput.innerText = sekolahfix;

                let kelasinput = document.querySelector('.kelas');
                kelasinput.innerText = kelasfix;

                let hariinput = document.querySelector('.hari');
                hariinput.innerText = harinya;

                let waktuinput = document.querySelector('.waktu');
                waktuinput.innerText = waktunya;

                let hasillinput = document.querySelector('.hasill');
                hasillinput.innerText = hasilakhir;

                let kirihilang = document.querySelector('.kiri');
                kirihilang.className += ' hilang';

                let kananhilang = document.querySelector('.kanan');
                kananhilang.className += ' hilang';

                let datanya = document.querySelector('.dataaa');
                datanya.className = datanya.className.replace('hilang', '');

                if(hasilakhir<=69){
                    let ulang = document.getElementById("ulang");
                    ulang.className = ulang.className.replace("hilang","");
                }
            } else {
                alert('Masih Ada Soal Yang Belum Dijawab, Periksa Kembali . . . !');
            }
            
        })


        

    }
}
json.open('GET', 'kuis1.json', true);
json.send();

//FUNGSI WAKTU DAN HARI
var d = new Date();
var t = d.getTime();
var counter = t;

// ambil jamnya
window.setTimeout("waktu()", 1000);

function waktu() {
    var tanggal = new Date();
    setTimeout("waktu()", 1000);
    return (tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds());
}

// harinya
function hari() {
    tanggallengkap = new String();
    namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namahari = namahari.split(" ");
    namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    tgl = new Date();
    hari = tgl.getDay();
    tanggal = tgl.getDate();
    bulan = tgl.getMonth();
    tahun = tgl.getFullYear();
    tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
    return (tanggallengkap);
}


function createTask(sekolah, nama, kelas, nilai, waktunya, hari,jwb) {
    counter += 1;
    var task = {
        id: counter,
        sekolah: sekolah,
        nama: nama,
        kelas: kelas,
        nilai: nilai,
        waktu: waktunya,
        hari: hari,
        jawabannya: jwb
    }

    let db = firebase.database().ref("kuis1/" + counter);
    db.set(task);

}


