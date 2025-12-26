# Seldiknas OS - Landing Page

Landing page modern dan menarik untuk Seldiknas OS (Sistem Operasi Pendidikan Nasional) yang dibangun menggunakan React dan Vite.

## 🚀 Fitur

- **Hero Section** - Bagian utama dengan judul besar, tagline menarik, dan tombol download utama
- **Description Section** - Deskripsi singkat tentang OS berbasis Ubuntu Linux
- **Features Section** - Menampilkan 6 fitur unggulan OS dengan animasi menarik
- **Screenshots Section** - Preview tampilan OS dengan carousel interaktif
- **System Requirements** - Spesifikasi sistem minimum yang diperlukan
- **Footer** - Informasi kontak, links, dan tombol download tambahan
- **Download Modal** - Modal popup dengan opsi download (ISO, Torrent, Checksum)

## 🎨 Desain

- **Dark Mode** dengan color scheme modern (purple/indigo gradients)
- **Glassmorphism effects** untuk tampilan premium
- **Smooth animations** pada scroll dan hover
- **Typography yang bold dan readable** menggunakan font Inter
- **Icons dari lucide-react** untuk visual elements
- **Fully responsive** untuk semua device

## 📋 Prasyarat

- Node.js (versi 16 atau lebih baru)
- npm atau yarn

## 🛠️ Instalasi

1. Clone repository ini atau download sebagai ZIP
2. Buka terminal di direktori project
3. Install dependencies:

```bash
npm install
```

## ▶️ Menjalankan Aplikasi

Setelah dependencies terinstall, jalankan aplikasi dengan:

```bash
npm run dev
```

atau

```bash
npm start
```

Aplikasi akan berjalan di `http://localhost:5173` (atau port lain yang tersedia)

## 📁 Struktur Project

```
so/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── components/
│   │   ├── Hero.jsx & Hero.css
│   │   ├── Description.jsx & Description.css
│   │   ├── Features.jsx & Features.css
│   │   ├── Screenshots.jsx & Screenshots.css
│   │   ├── SystemRequirements.jsx & SystemRequirements.css
│   │   ├── Footer.jsx & Footer.css
│   │   └── DownloadModal.jsx & DownloadModal.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
└── README.md
```

## 🎨 Teknologi yang Digunakan

- **React 18** - Library JavaScript untuk membangun UI
- **Vite** - Build tool modern dan cepat
- **lucide-react** - Library icons modern
- **CSS3** - Styling dengan CSS modern, gradients, dan animations
- **HTML5** - Struktur markup

## 📝 Catatan

- Tombol download saat ini menampilkan modal dengan placeholder. Untuk menambahkan link download aktual, edit file `src/components/DownloadModal.jsx` dan ganti URL di tombol download.
- Email dan GitHub link di footer juga menggunakan placeholder yang dapat diganti sesuai kebutuhan.
- Screenshots menggunakan placeholder yang dapat diganti dengan gambar aktual.

## 🏗️ Build untuk Production

Untuk membuat build production:

```bash
npm run build
```

File build akan tersedia di folder `dist/` yang siap untuk di-deploy.

Preview build production:

```bash
npm run preview
```

## 📄 Lisensi

Open Source - Dibuat untuk Pendidikan Indonesia
