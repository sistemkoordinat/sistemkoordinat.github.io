function Shuffle(JsonData){
    var currentIndex = JsonData.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random()* currentIndex);
        currentIndex -= 1;

        temporaryValue =JsonData[currentIndex];
        JsonData[currentIndex] = JsonData[randomIndex];
        JsonData[randomIndex] = temporaryValue;
        }

    }
    return JsonData;
}
 var JsonData = [
     {
         "soal" : "Manakah di antara bilangan berikut yang merupakan bilangan terkecil?",
         "j1" : "1",
         "j2" : "-5",
         "j3" : "6",
         "j4" : "-1",
         "jawaban" : "-5"
     },

     {
         "soal" : "Diketahui dua buah bilangan bulat postif A dan B. diketahui, bilangan yang benar adalah...",
         "j1" : "A >= B",
         "j2" : "A > B",
         "j3" : "A < B",
         "j4" : "Tidak ada yang benar",
         "jawaban" : "A < B"
     }
 ]

 JsonData = Shuffle(JsonData);
 console.log(JsonData);
 