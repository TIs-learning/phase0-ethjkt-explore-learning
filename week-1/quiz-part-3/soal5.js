// ### 5. Conditional Statement
// 
// Buat program penentuan nilai:
// 
// | Nilai  | Grade |
// | ------ | ----- |
// | 90–100 | A     |
// | 80–89  | B     |
// | 70–79  | C     |
// | 60–69  | D     |
// | < 60   | E     |
// 
// Gunakan:
// 
// * `if`
// * `else if`
// * `else`
// 
// Tambahkan validasi jika nilai:
// 
// * Lebih dari 100
// * Kurang dari 0

console.log("Soal ke 5")
if (Nilai >= 90 && Nilai <= 100){
    grade = "A"
} 
else if (Nilai >= 80 && Nilai <= 89){
    grade = "B"
}
else if (Nilai >= 70 && Nilai <= 79){
    grade = "C"
}
else if (Nilai >=  60 && Nilai <= 69){
    grade = "D"
}
else if (Nilai >= 0 && Nilai <= 59){
    grade = "E"
}
else{
    console.log("Nilai Tidak Valid")
}