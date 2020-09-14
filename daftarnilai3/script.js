// menguhubungkan ke firebase
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


window.load = function () {
}

function readlah() {
    var task = firebase.database().ref("kuis3/");
    let tmp = document.querySelector('.disini');
    tmp.innerHTML = "";
    kelasnya = document.getElementById('kelas');
    sekolah = document.getElementById('sekolah');
    let kelasfix = '';
    let sekolahfix = '';

    if (kelasnya.value == "1") {
        kelasfix = "8A";
    } else if (kelasnya.value == "2") {
        kelasfix = "8B";
    } 

    if (sekolah.value == "1") {
        sekolahfix = "SMP Negeri 13 Banjarmasin";
    }

    if ((sekolahfix != '') && (kelasfix != '')) {
        task.on("child_added", function (data) {
            var taskvalue = data.val();


            if ((sekolahfix == taskvalue.sekolah) && (kelasfix == taskvalue.kelas)) {
                tmp.innerHTML += `<tr>
                            <td class="ukr1">${taskvalue.sekolah}</td>
                            <td class="ukr3">${taskvalue.kelas}</td>
                            <td class="ukr1">${taskvalue.nama}</td>
                            <td class="ukr3">${taskvalue.nilai}</td>
                            <td class="ukr2">${taskvalue.hari}</td>
                            <td class="ukr2">${taskvalue.waktu}</td>
                        </tr>`;
            }
        });

    } else if (sekolahfix != '') {
        task.on("child_added", function (data) {
            var taskvalue = data.val();


            if ((sekolahfix == taskvalue.sekolah)) {
                tmp.innerHTML += `<tr>
                            <td class="ukr1">${taskvalue.sekolah}</td>
                            <td class="ukr3">${taskvalue.kelas}</td>
                            <td class="ukr1">${taskvalue.nama}</td>
                            <td class="ukr3">${taskvalue.nilai}</td>
                            <td class="ukr2">${taskvalue.hari}</td>
                            <td class="ukr2">${taskvalue.waktu}</td>
                        </tr>`;
            }
        });

    } else {
        alert('Tentukan filter pencarian');
    }



}

window.onload = function () {
    kelasnya = document.getElementById('kelas');
    sekolah = document.getElementById('sekolah');
    kelasnya.value = value = "0";
    sekolah.value = value = "0";
}



// download data

let download = document.querySelector('.download');
download.addEventListener('click', function () {
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('table_wrapper');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
    a.click();
})