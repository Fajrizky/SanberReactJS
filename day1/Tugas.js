//Soal 1

const sebuahObject = () => console.log("Hai Dunia Kucing!!");
sebuahObject();
// untuk menampilkan sebuah string sederhana menggunakan arraow function
// tidak diperlukan sebuah parameter dan tidak perlu juga
// untuk penggunaan tanda kurung kurawalnya


//Soal 2

// let sebuahVariabel = "apple";
// let sebuahVariabel = "orange"; // SyntaxError: Identifier 'sebuahVariabel ' has already been declared
// console.log(sebuahVariabel);
// karena untuk penggunaan variabel dengan tipe let tidak dapat melakukan
// pendeklasian yang sama untuk cakupan yang sama

var sebuahVariabel = "apple";
var sebuahVariabel = "orange";
console.log(sebuahVariabel);
// yang tertampilkan adalaah orange karena terjadi hoisting untuk pengunnaan
// variabel yg bertipe var, dia aku mengambil nilai yg paling terakhir dideklarasikan


//Soal 3

//const sebuahVariabel = {}
//sebuahVariabel.color = "red"
// pada kasus ini untuk variable const, menginisalisasikan ulang nilai
// variable const akan membuat variable bersifat read-only, tapi bukan berarti
// tidak dapat di ubah nilainya. Mungkin variabel yg menampung nilai primitif
// seperti string, number, boolean akan sulit mengubah nilainya tanpa
// melalui inisialisasi ulang


//Soal 4

var haloHalo = 1;
var haloHaloBandung = function () {
  console.log(haloHalo);
  var haloHalo = 2;
};
haloHaloBandung();

// hasilnya menjadi undefined karena pada terjadi hoisting pada variabel
// haloHalo jadi nilai tersimpan dekalarasi yang kedua sedangkan untuk
// si console.log dia memanggil nilai dari variabel haloHalo nilainya
// telah berpindah jadi lah nilainya undefined

// semoga jawaban saya dpat di pahami..
