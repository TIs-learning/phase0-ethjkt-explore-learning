// ### 9. Type Checking dan Validasi Data
// 
// Buat variabel:
// 
// ```javascript
// let data = ...
// ```
// 
// Nilainya bebas, misalnya:
// 
// ```javascript
// "100"
// ```
// 
// atau:
// 
// ```javascript
// 100
// ```
// 
// atau:
// 
// ```javascript
// true
// ```
// 
// atau:
// 
// ```javascript
// null
// ```
// 
// Program harus mengecek:
// 
// * Apakah data berupa `string`?
// * Apakah data berupa `number`?
// * Apakah data berupa `boolean`?
// * Apakah data berupa `null`?
// 
// Gunakan:
// 
// * `typeof`
// * Conditional statement
// * `console.log()`

let data = 100

tipedata = typeof data
if (tipedata === "string"){
   console.log("Tipe data string")
} else if ( tipedata === "number"){
   console.log("Tipe data number")
} else if (tipedata === "boolean") {
   console.log("Tipe data Boolean")
} else if (tipedata === "null") {
   console.log("Tipe data null")
}