// ## 📝 Soal 7 — Tantangan: Analisis Data Mahasiswa
// 
// Perhatikan data berikut:
// 
// ```javascript
// const dataMahasiswa = [
//     {
//         nama: "Andi",
//         nilai: 85,
//         aktif: true
//     },
//     {
//         nama: "Budi",
//         nilai: 65,
//         aktif: true
//     },
//     {
//         nama: "Citra",
//         nilai: 90,
//         aktif: false
//     },
//     {
//         nama: "Dinda",
//         nilai: 75,
//         aktif: true
//     },
//     {
//         nama: "Eko",
//         nilai: 50,
//         aktif: true
//     }
// ];
// ```
// 
// Buat sebuah function:
// 
// ```javascript
// analisisMahasiswa(data)
// ```
// 
// Gunakan perulangan untuk melakukan hal berikut:
// 
// 1. Lewati mahasiswa yang tidak aktif menggunakan `continue`.
// 2. Tampilkan nama mahasiswa yang aktif.
// 3. Tentukan status berdasarkan nilai:
// 
// | Nilai   | Status      |
// | ------- | ----------- |
// | `>= 75` | Lulus       |
// | `< 75`  | Tidak Lulus |
// 
// 4. Hitung jumlah mahasiswa aktif.
// 5. Hitung jumlah mahasiswa aktif yang lulus.
// 6. Jika ditemukan mahasiswa aktif dengan nilai `100`, hentikan perulangan menggunakan `break`.
// 
// ### Contoh Output
// 
// ```text
// Andi — Lulus
// Budi — Tidak Lulus
// Dinda — Lulus
// Eko — Tidak Lulus
// 
// Jumlah mahasiswa aktif: 4
// Jumlah mahasiswa aktif yang lulus: 2
// ```
// 
// > 💡 Tantangan ini menggabungkan:
// >
// > * `function`
// > * `for...of`
// > * `if...else`
// > * `continue`
// > * `break`
// > * object
// > * array
// > * counter

const dataMahasiswa = [
    {
        nama: "Andi",
        nilai: 85,
        aktif: true
    },
    {
        nama: "Budi",
        nilai: 65,
        aktif: true
    },
    {
        nama: "Citra",
        nilai: 90,
        aktif: false
    },
    {
        nama: "Dinda",
        nilai: 75,
        aktif: true
    },
    {
        nama: "Eko",
        nilai: 50,
        aktif: true
    }
]

function analisisMahasiswa(data){
    
}