# 🧠 Latihan JavaScript — Fundamental Syntax

Materi yang dilatih:

* Variable Scope

  * Global Scope
  * Local Scope
  * Block Scope
* Logging

  * `console.log()`
  * `console.error()`
  * `console.warn()`
  * `console.info()`
  * `console.table()`
  * `console.group()`
  * `console.groupEnd()`
  * `console.time()`
  * `console.timeEnd()`
* Data Type

  * Primitive
  * Reference
* Type Checking
* Type Conversion
* Conditional Statement
* Logic Operator

  * `&&`
  * `||`
  * `!`

---

## 🟢 Level 1 — Fundamental

### 1. Variable Scope

Buat program dengan:

* 1 variabel **global**
* 1 variabel **local** di dalam function
* 1 variabel **block scope** di dalam `if`

Coba akses ketiganya dari luar function dan luar block.

**Pertanyaan:**

* Mana yang bisa diakses?
* Mana yang menghasilkan error?
* Mengapa?

---

### 2. Logging Dasar

Buat beberapa output menggunakan:

```javascript
console.log()
console.error()
console.warn()
console.info()
```

Tampilkan:

* Nama
* Umur
* Status mahasiswa
* Pesan error pura-pura
* Peringatan pura-pura

---

### 3. Data Type

Buat minimal 8 variabel dengan tipe data berbeda:

* String
* Number
* Boolean
* Undefined
* Null
* Object
* Array
* Function

Lalu gunakan:

```javascript
typeof
```

untuk mengecek tipe masing-masing.

---

### 4. Type Conversion

Buat variabel:

```javascript
let angka = "100";
```

Lakukan konversi menjadi:

* Number
* String kembali
* Boolean

Lalu amati hasil `typeof` masing-masing.

---

## 🟡 Level 2 — Mulai Menggabungkan Konsep

### 5. Conditional Statement

Buat program penentuan nilai:

| Nilai  | Grade |
| ------ | ----- |
| 90–100 | A     |
| 80–89  | B     |
| 70–79  | C     |
| 60–69  | D     |
| < 60   | E     |

Gunakan:

* `if`
* `else if`
* `else`

Tambahkan validasi jika nilai:

* Lebih dari 100
* Kurang dari 0

---

### 6. Logic Operator

Buat sistem login sederhana:

```javascript
let username = "...";
let password = "...";
```

Syarat login berhasil:

* Username benar **DAN**
* Password benar

Gunakan:

```javascript
&&
||
!
```

Tambahkan kondisi:

* Jika username salah
* Jika password salah
* Jika keduanya benar

---

### 7. Primitive vs Reference

Perhatikan kode berikut:

```javascript
let a = 10;
let b = a;

b = 20;
```

Kemudian:

```javascript
let user1 = {
    nama: "Budi"
};

let user2 = user1;

user2.nama = "Asep";
```

Buat program yang menunjukkan perbedaan perilaku antara:

* Primitive
* Reference

Gunakan `console.log()` untuk mengamati hasilnya.

**Pertanyaan:**

* Mengapa perubahan pada `b` tidak mengubah `a`?
* Mengapa perubahan pada `user2.nama` juga memengaruhi `user1.nama`?

---

### 8. Console Table

Buat array berisi minimal 5 data mahasiswa:

```javascript
[
    {
        nama: "...",
        umur: ...,
        jurusan: "..."
    }
]
```

Tampilkan menggunakan:

```javascript
console.table()
```

---

## 🔴 Level 3 — Debugging & Mini Project

### 9. Type Checking dan Validasi Data

Buat variabel:

```javascript
let data = ...
```

Nilainya bebas, misalnya:

```javascript
"100"
```

atau:

```javascript
100
```

atau:

```javascript
true
```

atau:

```javascript
null
```

Program harus mengecek:

* Apakah data berupa `string`?
* Apakah data berupa `number`?
* Apakah data berupa `boolean`?
* Apakah data berupa `null`?

Gunakan:

* `typeof`
* Conditional statement
* `console.log()`

---

### 10. Console Group dan Timer

Buat simulasi proses login:

```text
LOGIN PROCESS
  Username: ...
  Password: ...
  Status: ...
```

Gunakan:

```javascript
console.group()
console.groupEnd()
```

Lalu ukur waktu proses menggunakan:

```javascript
console.time()
console.timeEnd()
```

---

### 11. Sistem Pendaftaran Mahasiswa

Buat object:

```javascript
let mahasiswa = {
    nama: "...",
    umur: ...,
    nilai: ...,
    sudahBayar: true
};
```

Buat aturan:

Mahasiswa diterima jika:

* Nama tidak kosong
* Umur minimal 17 tahun
* Nilai minimal 75
* Sudah membayar administrasi

Gunakan kombinasi:

* Object
* Conditional statement
* Logic operator
* Type checking
* Logging

Gunakan `console.error()` jika data tidak valid.

---

### 12. 🚀 Mini Project — Sistem Login & Dashboard

Buat data user:

```javascript
let users = [
    {
        username: "louis",
        password: "12345",
        role: "admin"
    },
    {
        username: "budi",
        password: "abcde",
        role: "user"
    }
];
```

Program harus:

1. Menerima username dan password.
2. Mengecek apakah user ditemukan.
3. Mengecek password.
4. Jika login berhasil:

   * Tampilkan informasi user dengan `console.table()`.
   * Gunakan `console.group()`.
   * Tampilkan pesan dengan `console.info()`.
5. Jika login gagal:

   * Gunakan `console.error()`.
6. Gunakan `console.time()` dan `console.timeEnd()` untuk mengukur proses login.
7. Gunakan logic operator untuk validasi.

#### Bonus

Bedakan dashboard berdasarkan `role`:

```text
admin → "Selamat datang Admin"
user  → "Selamat datang User"
```

---

## 📌 Urutan Pengerjaan yang Disarankan

Kerjakan secara bertahap:

```text
1 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → 11 → 12
```

> Jangan langsung melihat solusi. Coba pahami masalahnya terlebih dahulu dan gunakan dokumentasi JavaScript jika menemukan sintaks yang belum diketahui.
