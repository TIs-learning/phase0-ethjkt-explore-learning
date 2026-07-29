# 🔁 Latihan JavaScript — Looping & Function

Repository ini berisi kumpulan latihan JavaScript untuk memahami berbagai jenis perulangan dan penggunaan function.

## 🎯 Materi yang Dilatih

* `for loop`
* `while loop`
* `do...while loop`
* `for...of loop`
* `for...in loop`
* `break`
* `continue`
* `nested loop`
* `function`

---

## 📝 Soal 1 — Perulangan Angka dengan `for`

Buat sebuah function bernama:

```javascript
tampilkanAngka()
```

Function tersebut harus menampilkan angka dari **1 sampai 20** menggunakan `for loop`.

Namun:

* Jika angka merupakan kelipatan **5**, tampilkan:

```text
Kelipatan 5: [angka]
```

* Jika bukan kelipatan 5, tampilkan angkanya seperti biasa.

### Contoh Output

```text
1
2
3
4
Kelipatan 5: 5
6
7
8
9
Kelipatan 5: 10
...
Kelipatan 5: 20
```

---

## 📝 Soal 2 — Mencari Angka dengan `while`

Buat sebuah function:

```javascript
cariAngka(target)
```

Gunakan `while loop` untuk mencari angka dari **1 sampai 100**.

Ketika angka yang sedang diperiksa sama dengan nilai `target`:

1. Tampilkan:

```text
Angka ditemukan: [target]
```

2. Hentikan perulangan menggunakan `break`.

### Contoh Pemanggilan

```javascript
cariAngka(27);
```

### Contoh Output

```text
Angka ditemukan: 27
```

---

## 📝 Soal 3 — Validasi Angka dengan `do...while`

Buat sebuah function:

```javascript
validasiAngka()
```

Gunakan `do...while loop` untuk meminta pengguna memasukkan angka menggunakan:

```javascript
prompt()
```

Perulangan harus terus berjalan selama angka yang dimasukkan:

* Kurang dari `1`, atau
* Lebih dari `10`

Jika pengguna memasukkan angka dari **1 sampai 10**, hentikan perulangan dan tampilkan:

```text
Input valid!
```

> 💡 Ingat: nilai dari `prompt()` memiliki tipe data `string`. Perhatikan apakah nilainya perlu dikonversi terlebih dahulu.

---

## 📝 Soal 4 — Menghitung Total dengan `for...of`

Perhatikan array berikut:

```javascript
const nilaiMahasiswa = [80, 75, 90, 65, 85];
```

Buat sebuah function:

```javascript
hitungTotalNilai(data)
```

Gunakan `for...of loop` untuk:

1. Menghitung jumlah seluruh nilai.
2. Menghitung rata-rata nilai.
3. Menampilkan hasilnya ke console.

### Contoh Output

```text
Total nilai: 395
Rata-rata nilai: 79
```

> 💡 `for...of` mengambil **nilai/isi** dari setiap elemen array.

---

## 📝 Soal 5 — Menampilkan Properti dengan `for...in`

Perhatikan object berikut:

```javascript
const mahasiswa = {
    nama: "Budi",
    umur: 19,
    jurusan: "Informatika",
    semester: 1
};
```

Buat sebuah function:

```javascript
tampilkanData(data)
```

Gunakan `for...in loop` untuk menampilkan seluruh properti dan nilainya.

### Contoh Output

```text
nama: Budi
umur: 19
jurusan: Informatika
semester: 1
```

> 💡 `for...in` mengambil **nama properti/key** dari sebuah object.

---

## 📝 Soal 6 — `continue` dan Nested Loop

Buat sebuah function:

```javascript
buatPola(baris)
```

Gunakan **nested loop** untuk membuat pola bintang.

Namun, jika nomor baris merupakan kelipatan `3`, lewati baris tersebut menggunakan `continue`.

### Contoh Pemanggilan

```javascript
buatPola(7);
```

### Contoh Output

```text
*
**
****
*****
*******
```

Penjelasan:

* Baris ke-3 dilewati.
* Baris ke-6 dilewati.
* Baris lainnya tetap ditampilkan.

> 💡 Kamu membutuhkan:
>
> * Satu loop untuk mengatur jumlah baris.
> * Satu loop di dalamnya untuk membuat karakter `*`.
> * `continue` untuk melewati baris tertentu.

---

## 📝 Soal 7 — Tantangan: Analisis Data Mahasiswa

Perhatikan data berikut:

```javascript
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
];
```

Buat sebuah function:

```javascript
analisisMahasiswa(data)
```

Gunakan perulangan untuk melakukan hal berikut:

1. Lewati mahasiswa yang tidak aktif menggunakan `continue`.
2. Tampilkan nama mahasiswa yang aktif.
3. Tentukan status berdasarkan nilai:

| Nilai   | Status      |
| ------- | ----------- |
| `>= 75` | Lulus       |
| `< 75`  | Tidak Lulus |

4. Hitung jumlah mahasiswa aktif.
5. Hitung jumlah mahasiswa aktif yang lulus.
6. Jika ditemukan mahasiswa aktif dengan nilai `100`, hentikan perulangan menggunakan `break`.

### Contoh Output

```text
Andi — Lulus
Budi — Tidak Lulus
Dinda — Lulus
Eko — Tidak Lulus

Jumlah mahasiswa aktif: 4
Jumlah mahasiswa aktif yang lulus: 2
```

> 💡 Tantangan ini menggabungkan:
>
> * `function`
> * `for...of`
> * `if...else`
> * `continue`
> * `break`
> * object
> * array
> * counter

