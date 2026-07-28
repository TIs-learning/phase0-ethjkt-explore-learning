// ### 1. Variable Scope
// 
// Buat program dengan:
// 
// * 1 variabel **global**
// * 1 variabel **local** di dalam function
// * 1 variabel **block scope** di dalam `if`
// 
// Coba akses ketiganya dari luar function dan luar block.
// 
// **Pertanyaan:**
// 
// * Mana yang bisa diakses?
// * Mana yang menghasilkan error?
// * Mengapa?

console.log("Soal 1")

let hewan = "ular" // Variabel Global

function sapa(nama){
    let siswa = "budi"

}

if (true){
    var siswaB = "Asep"
    let siswaC = "Ujang"
}

console.log(hewan) // ular
// console.log(siswa) // error
console.log(siswaB) // "Asep"
// console.log(siswaC) // "error"