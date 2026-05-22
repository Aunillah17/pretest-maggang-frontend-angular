# Soal test maggang Backend engineer dengan Springboot

Berikut adalah soal/pertanyaan yang perlu dijawab oleh peserta maggang

## knowledge base

1. Apa yang anda ketahui tentang Rest API?
2. Apa yang anda ketahui tentang Server side and Client side processing?
4. Apa yang anda ketahui tentang Design pattern Dependency Injection?
5. Apa yang anda ketahui tentang Typescript dan Angular framework?
6. Apa yang anda ketahui tentang Microfrontend?

## Design modules

Dalam suatu schenario ada requirement membuat aplikasi e-commerse seperti Tokopedia seperti berikut:

1. Catalog, pelanggan mencari product di toko
    ![catalog](imgs/catalog.png)
2. Item, bisa melihat detail informasi produk
    ![items](imgs/item.png)
3. Cart, pelanggan bisa menambahkan produk yang ingin di beli ke keranjang
    ![cart](imgs/cart.png)
4. Setelah di checkout, masuk ke list transaction
    ![list-transaction](imgs/list-transaction.png)
5. Kita juga bisa liat detail transactionya
    ![detail-transaction](imgs/detail-transaction.png)

Kemudian temen-temen buat serta jelankan component communication terkait design UI/UX tersebut. contohnya coba breakdown componenet yang ada di module catalog trus coba dijelaskan gimana comunikasinya antara module tersebut.

## Praktek

Berdasarkan analisa tersebut, buat project monorepo (pada repository ini) dengan menggunakan framework [angular.io](https://angular.io/) seperti berikut specifikasinya:

- Data: data yang diperoleh harus menggunakan Rest API, temen-temen boleh menggunakan dummy api seperti [mockachino](https://www.mockachino.com/), [firebase](https://firebase.google.com/) atau sejenisnya
- CSS Framework: bebas, contohnya bootstrap, materialize-css, tailwindcss dan lain-lain
- arhitecture: Silahkan pilih monolith atau microfrontend




## Knowledge Base (Jawaban)

*Catatan: Berikut adalah pemahaman awal saya sejauh ini terkait konsep yang ditanyakan:*

1. **REST API:** Cara sistem berkomunikasi lewat HTTP. Saya belajar bahwa ini standar untuk mengirim dan menerima data antar aplikasi agar bisa saling terhubung.
2. **Server-side & Client-side:** Saya paham ini sebagai pembagian tugas. *Client-side* adalah apa yang dilihat dan diproses di browser pengguna, sedangkan *server-side* adalah bagian backend yang mengurus database dan logika utama.
3. **Dependency Injection:** Konsep di Angular yang saya pelajari untuk mengelola antar komponen agar tidak saling terikat kuat (*loosely coupled*), sehingga kode jadi lebih modular.
4. **TypeScript & Angular:** TypeScript adalah *superset* JavaScript yang menambahkan sistem tipe data untuk membantu mengurangi *error*. Angular sendiri menurut saya adalah framework yang sangat terstruktur untuk membangun aplikasi web.
5. **Microfrontend:** Konsep yang saya pahami sebagai cara memecah aplikasi web besar menjadi modul-modul kecil yang mandiri agar pengembangannya lebih fleksibel.

---

## Design Modules (Analisis Komponen)

Dalam pengerjaan modul *Catalog*, saya memecahnya menjadi komponen berikut:

* **`product-list.component`**: Bertugas mengambil data produk dari API dan menampilkannya dalam daftar.
* **`product-card.component`**: Komponen untuk menampilkan detail satu buah produk.

**Komunikasi antar komponen:**

* `product-list` menerima data dari *service* dan membaginya ke setiap `product-card` menggunakan `@Input()`.
* Saat tombol "Tambah ke Keranjang" ditekan, `product-card` akan mengirim *event* menggunakan `@Output()` agar data keranjang terupdate.

---

## How to Run

1. Pastikan sudah menginstall [Node.js](https://nodejs.org/).
2. Clone repository ini.
3. Masuk ke direktori proyek dan jalankan perintah: `npm install`
4. Jalankan aplikasi dengan perintah: `ng serve`
5. Buka browser dan akses `http://localhost:4200`
