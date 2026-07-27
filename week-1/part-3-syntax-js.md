// Mendeklarasikan variabel ada 3

// 1. Menggunakan var
```js
var nama = "Louis"
var umur = 17
```

// 2. Menggunakan let (bisa diubah)
```js
let pakaian = "abu-abu merah"
let lamaPerjalanan = 32
```

// 3. Menggunakan const (constan / tidak bisa diubah)
```js
const sekolah = "SMAN 1 Cibadak"
```

// Akses Variabel

// 1. Global Scope
```js
let nama = "Louis"

function sapa(nama){
    console.log(nama)
}
```

// 2. Local Scope
```js
function hello(){
    // misalnya kita punya variabel dalam fungsi
    nama = "kita tidak bisa akses ini"

    console.log(nama) // bisa
}

console.log(nama) // tidak bisa
```

// 3. Block Scope (khusus let dan const)
```js
 if (a == 0){
    let b = 3 // tidak bisa
    const c = 7 // tidak bisa
    var d = 8 // bisa
 }
console.log(d) // bisa
console.log(b) // tidak bisa
console.log(c) // tidak bisa
```

// tips: var bisa diakses sebelum deklarasi

// Cara menampilkan pesan (Logging)

// 1. Console.log
```js
console.log("manusia: ", {nama: "Louis", umur: 17})
```

// 2. Console.error (Menampilkan Error)
```js
console.error("Kesalahan Fungsi Ayam")
```

// 3. Console warn (untuk Peringatan)
```js
console.warn("Data yang dimiliki belum lengkap")
```

// 4. Console info(untuk informasi)
```js
console.info("Aplikasi berhasil dipasang")
```

// 5. Console table (menampilkan dalam bentuk table)
```js
const users = [
    { nama: "Budi", umur: 25 },
    { nama: "Ani", umur: 23 }
];
console.table(users);
```

// 6. Console Group
```js
console.group("User Detail");
console.log("Nama: Budi");
console.log("Umur: 25");
console.groupEnd();
```

// 7. Console time dan dan Console time End
```js
console.time("Loop");
for(let i = 0; i < 1000000; i++) {
    // proses
}
console.timeEnd("Loop");
```

// Data Type
```js
// 1. Primitive Data Type: Menyimpan data secara langsung

// String - untuk teks
let nama = "Budi";
let pesan = 'Halo';

// Number - untuk angka (integer dan decimal)
let umur = 25;
let tinggi = 1.75;

// Boolean - true/false
let aktif = true;
let menikah = false;

// Undefined - variable yang belum diberi nilai
let alamat;
console.log(alamat); // undefined

// Null - nilai kosong yang disengaja
let dataSiswa = null;

// Symbol - nilai unik dan immutable
const id = Symbol('id');
```

// 2. reference types: referensi ke lokasi memori

```js
// Array - kumpulan data terurut
let buah = ["Apel", "Jeruk", "Mangga"];

// Object - kumpulan property dan value
let siswa = {
    nama: "Budi",
    umur: 25,
    aktif: true
};

// Function - blok kode yang bisa dipanggil
function sapaan(nama) {
    return `Halo ${nama}!`;
}
```

// 1. Memeriksa tipe data: typeof()
// 2. Type Conversion: String(), Number(), Boolean(), Automatic Conversion

// Contoh Syntax
```js
length, Substring, toUpperCase, toLowerCase, indexOf
```

```js
// Template literal memungkinkan ekspansi variabel dan multiple line
let profil = `Nama: ${nama}
Umur: ${umur} tahun`;
```

// Conditional Statement: if, else, else if, opeartor ternary, switch case deafult, 
// Gerbang Logika: NAND, OR(||), XOR, AND (&&), NOT(!), NOR, NOR, XNOR






