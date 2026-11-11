# Winbox Billing

[![License: GPL v3](https://shields.io)](https://gnu.org)

**Winbox Billing** adalah aplikasi desktop manajemen billing dan pembuatan voucher otomatis yang dirancang untuk terintegrasi secara langsung dengan fitur konfigurasi router MikroTik melalui Winbox API. Aplikasi ini menggabungkan performa backend C++/Qt yang tangguh dengan antarmuka pengguna (UI) modern berbasis React.js yang berjalan langsung di dalam *window* desktop.

---

## 📌 Versi Aplikasi (App Version)

- **Versi Saat Ini:** `v0.1.0 `
- **Status Rilis:** `Under Development`

### 🔄 Catatan Rilis & Revisi (Changelog)

#### **Versi v0.1.0 — 11/11/2026**
**Apa saja yang direvisi pada versi ini:**
- 🆕 **Fitur Baru:**
  - ` ` *Pembaruan Kode Dasar*

---

## 🚀 Fitur Utama

- **Integrasi Winbox API:** Mengonfigurasi, memantau, dan mengelola perangkat MikroTik secara langsung dari aplikasi desktop tanpa browser eksternal.
- **Voucher Generator:** Membuat, mencetak langsung, dan mengelola voucher hotspot atau PPPoE secara massal dengan masa aktif serta limitasi bandwidth yang fleksibel.
- **Billing Management:** Sistem manajemen pembayaran lokal, pelacakan tagihan pelanggan, dan visualisasi laporan keuangan terpadu.
- **Bandwidth Control:** Manajemen alokasi kecepatan (upload/download) otomatis bagi pengguna aktif berdasarkan paket billing yang dipilih.
- **User Management:** Pengelolaan hak akses data pelanggan, status masa aktif, dan riwayat transaksi dari satu dasbor desktop.

---

## 🛠️ Arsitektur & Teknologi

Aplikasi desktop ini menggunakan pendekatan *hybrid* untuk performa maksimal dan UI yang interaktif:

### Core & Jaringan (Backend Desktop)
- **C++** (Versi: `C++23`) - Logika billing utama, pemrosesan data performa tinggi, dan komunikasi tingkat rendah dengan Winbox API.
- **CMake** (Versi: `CMake2026`) - Sebagai sistem build otomatis untuk mengompilasi kode C++ ke *executable* desktop.
- **Qt Framework** (Versi: `6.12.0 LTS`) - Menyediakan arsitektur aplikasi desktop window, manajemen thread, dan integrasi komponen jaringan.

### Antarmuka Pengguna (Frontend Desktop)
- **React.js** (Versi: `latest`) - Komponen UI yang dirender langsung di dalam aplikasi desktop untuk menyajikan visual dasbor yang dinamis dan responsif.

---

## 📋 Prasyarat Sistem (Prerequisites)

Sebelum melakukan kompilasi aplikasi desktop ini, pastikan lingkungan pengembangan Anda sudah terpasang perangkat lunak berikut:

- Kompiler C++ (GCC / Clang / MSVC) yang mendukung standar C++ (Versi: `C++23`)
- CMake (Versi minimum: `CMake2026`)
- Qt SDK (Versi: `6.12.0 LTS`)
- Node.js & NPM / Yarn (Versi: `24.22.0`)

---

## 🔧 Cara Kompilasi & Menjalankan Aplikasi

### 1. Kloning Repositori
```bash
git clone https://github.com
cd Winbox_Billing
```

### 2. Build Aset UI (React.js)
Sebelum mengompilasi aplikasi desktop, aset UI React harus di-build terlebih dahulu agar bisa dibundel oleh Qt/CMake:
```bash
cd path/to/ui-folder
npm install
npm run build
cd ../..
```

### 3. Build & Kompilasi Aplikasi Desktop (C++/CMake)
1. Buat direktori build baru di root proyek dan masuk ke dalamnya:
   ```bash
   mkdir build && cd build
   ```
2. Jalankan CMake untuk mendeteksi library Qt dan menyiapkan file build:
   ```bash
   cmake ..
   ```
3. Kompilasi dan hasilkan aplikasi executable desktop:
   ```bash
   cmake --build .
   ```
4. Jalankan aplikasi desktop yang berhasil di-build:
   - **Linux/macOS:** `./Winbox_Billing`
   - **Windows:** `Winbox_Billing.exe`

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **GPL-3.0 License** - Lihat file [LICENSE](LICENSE) untuk detail hak dan ketentuan penggunaan kembali kode.
