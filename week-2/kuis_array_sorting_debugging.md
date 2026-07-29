# Soal Latihan: Array, Iterasi, Sorting & Debugging

Soal ini disusun dari 5 materi yang kamu upload (Array Basics, Array Iteration, Nested Array & Matrix, Sorting & Searching, Debugging). Kerjain dulu semua soal di bawah **tanpa** liat Kunci Jawaban — baru cocokkan setelah selesai (atau kalau bener-bener stuck lama).

## Cara Mengerjakan

1. Baca 1 file materi sampai kelar → tutup file itu → kerjain section soal yang sesuai (closed book, jangan liat catatan)
2. Bener-bener blank? Boleh intip sebentar, tapi tutup lagi dan tulis ulang jawabannya dari kepala — jangan langsung nyalin
3. Selesai 1 section penuh → baru cocokkan ke Kunci Jawaban di bagian paling bawah
4. Istirahat 5-10 menit sebelum lanjut ke file & section berikutnya

Kenapa closed-book: biar prosesnya beneran "mancing" ingatan (bukan nyontek dari catatan), sekaligus melatih kondisi yang sama kayak pas ujian livecode nanti — di situ juga gak ada catatan yang bisa dibuka.

---

## Bagian A — Array Basics & Method

**A1.** Kenapa index array di JavaScript selalu dimulai dari 0, bukan 1? Warisan bahasa C, yang melambangkan jarak dari posisi awal di memori

**A2.** Prediksi output:
```js
let arr = [10, 20, 30, 40, 50];
console.log(arr[arr.length - 1]); // 4
```

**A3.** Dari method berikut, mana saja yang MENGUBAH (mutating) array aslinya?
`push()`, `slice()`, `splice()`, `concat()`, `pop()`, `indexOf()`, `reverse()` // push(), splice(), pop(), reverse()

**A4.** Prediksi output:
```js
let hewan = ["kucing", "anjing", "hamster"];
let dihapus = hewan.pop();
console.log(dihapus, hewan); // ["kucing", "anjing"] ["kucing", "anjing", "hamster"]
```

**A5.** Buat function `tambahDiDepanDanBelakang(arr, depan, belakang)` yang menambahkan `depan` ke awal array dan `belakang` ke akhir array, lalu return array yang sudah diupdate.

```js
let arr;
function tambahDiDepanDanBelakang(arr, depan, belakang){
arr = arr.shift(depan)
arr = arr.push(belakang)
return arr
}

console.log(arr = ["ayam", "Kucing"], "Sapi", "Babi")
```

**A6.** Apa perbedaan mendasar antara `.slice()` dan `.splice()`? 
Splice memiliki tiga fungsi yaitu Memotong, menghapus dan juga menambahkan sementara slice hanya 2 yaitu memotong dan menghapus

**A7.** Prediksi output:
```js
let buah = ["apel", "mangga", "jeruk", "mangga"];
console.log(buah.indexOf("mangga")); // 1
console.log(buah.includes("durian")); // true
```

**A8.** Kode ini seharusnya HANYA menghapus 1 elemen di index 2, tanpa menambahkan apapun. Tapi ada elemen baru yang ikut nyelip. Temukan dan perbaiki bug-nya:
```js
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, "x"); // arr.splice(2, 1);
```

---

## Bagian B — Array Iteration: forEach, map, filter, reduce

**B1.** Apa perbedaan utama antara `forEach()` dan `map()`? Kapan masing-masing sebaiknya dipakai? forEach sebaiknya dipakai ketika hanya untuk Logging, Update dan mengirim data sedangkan map dipakai untuk mentransformasi menjadi nilai array menjadi array baru

**B2.** Prediksi output:
```js
let angka = [1, 2, 3];
let hasil = angka.map(function(n) { return n * n; }); 
console.log(hasil); // [1, 4, 9]
console.log(angka); // [1, 2, 3]
```

**B3.** Gunakan `filter()` untuk mengambil semua angka ganjil dari array `[2, 5, 8, 11, 14, 17, 20, 23]`.
```js
let arr = [2, 5, 8, 11, 14, 17, 20, 23]
let arrFilter = arr.filter(function(a) {return a % 2 === 1})
```
**B4.** Gunakan `reduce()` untuk menghitung total dari array `[12000, 45000, 8000, 21000]`.
```js
let arr2 = [12000, 45000, 8000, 21000]
let arr3 = arr2.reduce(function(b, c)  {return b + c}, 0)

```

**B5.** Apa yang terjadi kalau di dalam callback `map()` kita lupa menulis `return`? //tidak ada nilai yang dikembalikan
// Nilai array tidak akan dikembalikan melainkan undefined

**B6.** Dari array nilai `[68, 82, 55, 91, 74, 88, 60]`, gunakan chaining `filter()` untuk mengambil nilai yang lulus (>=70), lalu `reduce()` untuk menjumlahkan nilai-nilai yang lulus itu.
```js
let arr7 = [68, 82, 55, 91, 74, 88, 60]
let sumup70 = arr7.filter(function(p) {return p >= 70}).reduce(function(acc, cur) {return acc + cur})

**B7.** Method mana yang SELALU mengembalikan array baru dengan panjang yang SAMA seperti array aslinya?
a) `filter()`  b) `map()`  c) `reduce()`  d) `forEach()` // b

---

## Bagian C — Nested Array & Matrix

**C1.** Kalau ada matrix bernama `matrix`, gimana cara akses elemen di baris ke-2 (index 1), kolom ke-3 (index 2)?

**C2.** Prediksi output:
```js
let data = [["Rani", "B"], ["Sari", "A"], ["Tono", "A"]];
console.log(data[1][1]);
```

**C3.** Buat matrix 3x3 berisi angka 1-9 (`[[1,2,3],[4,5,6],[7,8,9]]`), lalu tulis kode untuk mencetak elemen diagonalnya (1, 5, 9).

**C4.** Diberikan `let nested = [[7, 8], [9, 10], [11]]`, ratakan (flatten) jadi satu array datar dengan DUA cara: manual (nested loop) dan pakai `.flat()`.

**C5.** Prediksi apa yang terjadi, dan jelaskan kenapa:
```js
let dataAsli = [[100, 200], [300, 400]];
let dataBackup = dataAsli.slice();
dataBackup[1].push(999);
console.log(dataAsli[1]);
```
Gimana caranya bikin `dataBackup` supaya perubahan di dalamnya TIDAK ikut mengubah `dataAsli`?

---

## Bagian D — Sorting & Searching

**D1.** Apa syarat utama supaya Binary Search bisa dipakai (dibanding Linear Search)?

**D2.** Trace Binary Search untuk mencari angka **13** dalam array `[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]`. Berapa kali proses cari "mid" dilakukan sampai ketemu, dan di index berapa angka 13 ditemukan?

**D3.** Prediksi output (dan jelaskan kenapa hasilnya begitu):
```js
let angka = [9, 80, 700, 6];
angka.sort();
console.log(angka);
```
Perbaiki kodenya supaya hasilnya terurut ascending secara numerik yang benar.

**D4.** Implementasikan `bubbleSort` sendiri (tanpa liat contoh di materi) untuk mengurutkan array `[45, 12, 78, 3, 90, 21]` dari kecil ke besar.

**D5.** Buat fungsi `findSecondLargest(arr)` yang mengembalikan angka terbesar kedua dari sebuah array. Testcase: `findSecondLargest([12, 45, 7, 89, 34])` harus return `45`.

**D6.** Kapan sebaiknya kita pakai Linear Search dibanding Binary Search?

---

## Bagian E — Debugging

**E1.** Jenis error apa yang TIDAK menghasilkan pesan error, tapi kodenya tetap jalan dengan hasil yang salah?
a) Syntax Error  b) Reference Error  c) Type Error  d) Logic Error

**E2.** Temukan dan perbaiki bug-nya:
```js
function cetakSemuaElemen(arr) {
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
cetakSemuaElemen(["a", "b", "c"]);
```

**E3.** Temukan dan perbaiki bug-nya:
```js
function kaliDua(n) {
  let hasil = n * 2;
}
console.log(kaliDua(5) + 10);
```

**E4.** Temukan dan perbaiki bug-nya:
```js
let status = "aktif";
if (status = "nonaktif") {
  console.log("User nonaktif");
} else {
  console.log("User aktif");
}
```

**E5.** Kode ini ingin bikin versi terurut BARU tanpa mengubah array asli, tapi array asli malah ikut berubah. Kenapa, dan gimana cara benerinnya?
```js
let hargaAsli = [50000, 20000, 80000];
let hargaUrut = hargaAsli.sort((a, b) => a - b);
console.log("Harga asli:", hargaAsli);
```

**E6.** Jelaskan teknik "Rubber Duck Debugging" dan kenapa teknik ini bisa membantu menemukan bug.

**E7.** Sebutkan minimal 3 langkah dari Debugging Checklist yang ada di materi kamu.

---

## Bagian F — Bonus: Soal Gabungan

**F1.** Diberikan data siswa:
```js
let siswa = [
  { nama: "Andi", nilai: 65 },
  { nama: "Budi", nilai: 90 },
  { nama: "Cici", nilai: 78 },
  { nama: "Dodi", nilai: 55 }
];
```
Buat kode untuk: (a) filter siswa yang lulus (nilai >= 60), (b) urutkan dari nilai tertinggi ke terendah, (c) tampilkan hanya nama-namanya dalam satu array.

**F2.** Diberikan matrix nilai ujian 3 siswa untuk 3 mata pelajaran:
```js
let nilai = [[80, 90, 70], [60, 75, 80], [90, 95, 85]];
```
Hitung rata-rata nilai tiap siswa, lalu urutkan dari yang rata-ratanya tertinggi ke terendah.

**F3.** Kode ini punya bug. Temukan, jelaskan kenapa salah, dan perbaiki:
```js
function cariRataRataGenap(arr) {
  let genap = arr.filter(function(n) { return n % 2 = 0; });
  let total = genap.reduce(function(acc, n) { return acc + n; }, 0);
  return total / genap.length;
}
console.log(cariRataRataGenap([1, 2, 3, 4, 5, 6]));
```

---
---

## 🔑 Kunci Jawaban

### Bagian A

**A1.** Warisan dari bahasa C, di mana index sebenarnya adalah offset (jarak) dari posisi awal di memory. Elemen pertama jaraknya 0 dari awal, makanya index-nya 0.

**A2.** `50` — karena `arr.length` = 5, jadi `arr[5-1]` = `arr[4]` = elemen terakhir.

**A3.** Mutating: `push()`, `splice()`, `pop()`, `reverse()`. Non-mutating: `slice()`, `concat()`, `indexOf()`.

**A4.** `hamster ["kucing", "anjing"]` — `.pop()` menghapus SEKALIGUS mengembalikan elemen terakhir.

**A5.**
```js
function tambahDiDepanDanBelakang(arr, depan, belakang) {
  arr.unshift(depan);
  arr.push(belakang);
  return arr;
}
```

**A6.** `.splice()` MENGUBAH array asli (bisa hapus/tambah/ganti). `.slice()` cuma bikin SALINAN sebagian array, tanpa mengubah yang asli.

**A7.** `1` (index pertama "mangga" ditemukan), `false` (karena "durian" gak ada).

**A8.** Bug: argumen ketiga `"x"` bikin splice ikut menyisipkan elemen baru. Fix: `arr.splice(2, 1);` — tanpa argumen ketiga.

### Bagian B

**B1.** `forEach()` cuma menjalankan sesuatu untuk tiap elemen (gak return array baru) — cocok buat side effect kayak `console.log`. `map()` WAJIB return array baru berisi hasil transformasi tiap elemen — cocok kalau butuh array hasil olahan.

**B2.** `[1, 4, 9]` lalu `[1, 2, 3]` — `map()` bikin array baru, `angka` aslinya gak berubah.

**B3.**
```js
let ganjil = [2, 5, 8, 11, 14, 17, 20, 23].filter(function(n) {
  return n % 2 !== 0;
});
console.log(ganjil); // [5, 11, 17, 23]
```

**B4.** `86000` (12000+45000+8000+21000).
```js
let total = [12000, 45000, 8000, 21000].reduce(function(acc, cur) {
  return acc + cur;
}, 0);
```

**B5.** Array barunya bakal isi `undefined` di setiap elemen — `map()` ngandelin nilai yang di-`return` buat ngisi array barunya. Gak ada `return` = otomatis `undefined`.

**B6.** `335` (82+91+74+88).
```js
let totalLulus = [68, 82, 55, 91, 74, 88, 60]
  .filter(function(n) { return n >= 70; })
  .reduce(function(acc, n) { return acc + n; }, 0);
```

**B7.** `b) map()` — selalu array baru dengan panjang sama kayak aslinya.

### Bagian C

**C1.** `matrix[1][2]` — bracket pertama untuk baris (index dari 0), bracket kedua untuk kolom.

**C2.** `"A"` — `data[1]` = `["Sari", "A"]`, lalu `[1]` dari situ = `"A"`.

**C3.**
```js
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i][i]); // diagonal
}
// Output: 1, 5, 9
```

**C4.**
```js
let nested = [[7, 8], [9, 10], [11]];

// Manual
let flat = [];
for (let i = 0; i < nested.length; i++) {
  for (let j = 0; j < nested[i].length; j++) {
    flat.push(nested[i][j]);
  }
}
console.log(flat); // [7, 8, 9, 10, 11]

// Pakai .flat()
console.log(nested.flat()); // [7, 8, 9, 10, 11]
```

**C5.** `dataAsli[1]` ikut berubah jadi `[300, 400, 999]` — `.slice()` cuma bikin **shallow copy**: array luarnya baru, tapi array di dalamnya masih nge-refer ke array yang SAMA. Fix: deep copy, misal `let dataBackup = JSON.parse(JSON.stringify(dataAsli));`

### Bagian D

**D1.** Array-nya HARUS udah terurut (sorted) dulu.

**D2.** 4 kali proses mid, ketemu di index 6. (mid=4→nilai 9, geser kanan; mid=7→nilai 15, geser kiri; mid=5→nilai 11, geser kanan; mid=6→nilai 13, KETEMU)

**D3.** Output: `[6, 700, 80, 9]` — SALAH secara numerik. `.sort()` tanpa compare function ngubah semua angka jadi STRING dulu, terus dibandingin karakter pertama ("6" < "700" < "80" < "9"). Fix: `angka.sort((a, b) => a - b);` → hasil benar: `[6, 9, 80, 700]`.

**D4.**
```js
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([45, 12, 78, 3, 90, 21])); // [3, 12, 21, 45, 78, 90]
```

**D5.**
```js
function findSecondLargest(arr) {
  let sorted = [...arr].sort((a, b) => b - a); // gak ubah arr asli
  return sorted[1];
}
console.log(findSecondLargest([12, 45, 7, 89, 34])); // 45
```

**D6.** Kalau array-nya BELUM terurut dan/atau datanya kecil — ngurutin dulu demi Binary Search malah bisa lebih costly daripada langsung Linear Search.

### Bagian E

**E1.** `d) Logic Error`

**E2.** Bug: loop mulai dari `i = 1`, elemen pertama (index 0) kelewatan. Fix: mulai dari `i = 0`.

**E3.** Bug: function-nya gak ada `return`, hasilnya `undefined`, lalu `undefined + 10` = `NaN`. Fix: tambahin `return hasil;`.

**E4.** Bug: `status = "nonaktif"` itu ASSIGNMENT (satu `=`), bukan perbandingan — kondisinya selalu truthy, sekaligus `status` beneran ke-reset jadi "nonaktif". Fix: `if (status === "nonaktif")`.

**E5.** `.sort()` itu MENGUBAH (mutating) array aslinya, bukan bikin versi baru. Fix: copy dulu sebelum sort — `let hargaUrut = [...hargaAsli].sort((a, b) => a - b);`

**E6.** Teknik menjelaskan kode baris per baris ke objek (bebek karet, boneka, dll) seolah-olah objek itu paham. Membantu karena proses **menjelaskan** memaksa otak mikir ulang dari sudut pandang lain — sering kali bug ketahuan sendiri di tengah proses itu.

**E7.** Contoh (ambil 3 dari materi kamu): baca error message, cek typo, taruh `console.log()` sebelum baris error, cek tipe data, cek `<` vs `<=` di loop, cek function udah `return` atau belum, google error message.

### Bagian F

**F1.**
```js
let namaLulusUrut = siswa
  .filter(function(s) { return s.nilai >= 60; })
  .sort(function(a, b) { return b.nilai - a.nilai; })
  .map(function(s) { return s.nama; });

console.log(namaLulusUrut); // ["Budi", "Cici", "Andi"]
```

**F2.**
```js
let rataRata = nilai.map(function(mapel) {
  let total = mapel.reduce(function(acc, n) { return acc + n; }, 0);
  return total / mapel.length;
});
console.log(rataRata); // [80, 71.67, 90]

let urutan = [...rataRata].sort((a, b) => b - a);
console.log(urutan); // [90, 80, 71.67]
```

**F3.** Bug: `n % 2 = 0` pakai assignment, harusnya perbandingan `=== 0`.
```js
function cariRataRataGenap(arr) {
  let genap = arr.filter(function(n) { return n % 2 === 0; });
  let total = genap.reduce(function(acc, n) { return acc + n; }, 0);
  return total / genap.length;
}
console.log(cariRataRataGenap([1, 2, 3, 4, 5, 6])); // 4 (rata-rata dari 2, 4, 6)
```
