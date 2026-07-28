// ```javascript
// let a = 10;
// let b = a;
// 
// b = 20;
// ```
// 
// Kemudian:
// 
// ```javascript
// let user1 = {
//     nama: "Budi"
// };
// 
// let user2 = user1;
// 
// user2.nama = "Asep";
// ```
// 
// Buat program yang menunjukkan perbedaan perilaku antara:
// 
// * Primitive
// * Reference
// 
// Gunakan `console.log()` untuk mengamati hasilnya.
// 
// **Pertanyaan:**
// 
// * Mengapa perubahan pada `b` tidak mengubah `a`? Karena Reference variabel b menunjuk nilai variabel a, bukan malah sebaliknya
// * Mengapa perubahan pada `user2.nama` juga memengaruhi `user1.nama`? Objek User 2 tidak membuat objek ke dua melainkan sama sama dengan objek ke 1
// untuk menunjuk objek di user 1, ketika diubah objkenya nya pun berubah

let a = 10;
let b = a;
console.log(`Nilai b adalah ${b}`)

b = 20
console.log(`Nilai b adalah ${b}`)

let user1 = {
    nama: "Budi"
}

let user2 = user1;

user2.nama = "Asep";

console.log(`Nilai User1 Nama: ${user1.nama}`)
console.log(`Nilai User2 Nama: ${user2.nama}`)