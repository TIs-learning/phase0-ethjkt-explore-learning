// ### 11. Sistem Pendaftaran Mahasiswa
// 
// Buat object:
// 
// ```javascript
// let mahasiswa = {
//     nama: "...",
//     umur: ...,
//     nilai: ...,
//     sudahBayar: true
// };
// ```
// 
// Buat aturan:
// 
// Mahasiswa diterima jika:
// 
// * Nama tidak kosong
// * Umur minimal 17 tahun
// * Nilai minimal 75
// * Sudah membayar administrasi
// 
// Gunakan kombinasi:
// 
// * Object
// * Conditional statement
// * Logic operator
// * Type checking
// * Logging
// 
// Gunakan `console.error()` jika data tidak valid.

const mahasiswa = {
    nama: "",
    umur: 18,
    nilai: 89,
    sudahBayar: true
}
let diterima = false

if (mahasiswa.nama === "" || mahasiswa.umur < 17 || mahasiswa.nilai < 75 || mahasiswa.sudahBayar === false){
    diterima = false
    console.error(`Kamu Tidak Diterima`)
}
else if (typeof mahasiswa.nama === "string" && mahasiswa.nama !== ""&& mahasiswa.umur >= 17 && mahasiswa.nilai >= 75 && mahasiswa.sudahBayar === true){
    diterima = true
    console.log(`Selamat Kamu Diterima`)
}
