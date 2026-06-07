# Cahaya Bangun Perkasa (CBP) | General Trading and Contractor

Cahaya Bangun Perkasa (CBP) adalah platform website *company profile* dan katalog produk untuk perusahaan yang bergerak di bidang *general trading* dan kontraktor. Perusahaan ini berkomitmen untuk memberikan pelayanan terbaik dan produk material bangunan berkualitas dengan harga yang terjangkau untuk memenuhi kebutuhan pelanggan.

Proyek ini dibangun untuk menampilkan profil perusahaan, katalog produk, artikel informatif, serta memiliki sistem *dashboard admin* (CMS) untuk mengelola data website secara dinamis.

---

## 🌟 Fitur Utama (Features)

1. **Home / Beranda**: Halaman utama yang menampilkan *hero section*, pengenalan singkat perusahaan, produk unggulan (*featured products*), *trust indicator*, dan testimoni klien.
2. **Company Profile**: Halaman profil perusahaan yang memuat informasi detail tentang visi, misi, dan sejarah PT Cahaya Bangun Perkasa.
3. **Katalog Produk (Product)**: Halaman untuk melihat daftar produk material bangunan yang disediakan beserta detail lengkap dari setiap produknya.
4. **Artikel / Blog**: Fitur untuk menampilkan berita, edukasi, atau artikel terbaru seputar dunia konstruksi dan bahan bangunan.
5. **Dashboard Admin (CMS)**: Halaman khusus admin untuk melakukan manajemen konten website, seperti:
   - Manajemen Daftar Produk (*Products*)
   - Manajemen Produk Unggulan (*Featured Products*)
   - Manajemen *Trust Indicator*
6. **Hubungi Kami (Contact)**: Modal *floating contact* dan informasi kontak yang terintegrasi untuk memudahkan calon pelanggan menghubungi perusahaan.

---

## 🛠️ Tech Stack

Proyek ini dikembangkan menggunakan teknologi modern berbasis ekosistem JavaScript/TypeScript:

**Frontend & Framework:**
- **[Next.js](https://nextjs.org/) (v16.1.4)** - React framework (menggunakan App Router) untuk *Server-Side Rendering* (SSR) & optimasi performa.
- **[React](https://react.dev/) (v19)** - Library utama untuk membangun *User Interface*.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript untuk penulisan kode yang lebih aman (*type-safe*).
- **[Tailwind CSS](https://tailwindcss.com/) (v4)** - *Utility-first CSS framework* untuk *styling* UI yang responsif dan modern.

**Libraries & Dependencies:**
- **[Firebase](https://firebase.google.com/) (v11.6.1)** - Digunakan sebagai *Backend as a Service* (BaaS) / Database untuk menyimpan data produk, artikel, dan pengaturan *dashboard*.
- **[Framer Motion](https://www.framer.com/motion/)** - Library animasi untuk membuat interaksi UI yang *smooth* dan dinamis.
- **[Leaflet](https://leafletjs.com/) & React Leaflet** - Integrasi peta interaktif (maps) untuk menampilkan lokasi operasional perusahaan.
- **[React Hook Form](https://react-hook-form.com/)** - *State management* untuk pengelolaan *form* yang efisien, khususnya pada *dashboard*.
- **[React Slick](https://react-slick.neostack.com/) & React Slideshow Image** - Komponen untuk membuat *carousel* atau *slider* produk dan *hero image*.
- **[Headless UI](https://headlessui.com/)** - Komponen UI *unstyled* yang dirancang untuk berintegrasi sempurna dengan Tailwind CSS.
- **[React Select](https://react-select.com/)** - Komponen *dropdown select* untuk mempermudah pemilihan opsi pada *form*.
- **[Lucide React](https://lucide.dev/)** - Kumpulan ikon vektor modern.
- **[Next Share](https://github.com/next-share/next-share)** - Integrasi tombol berbagi konten ke media sosial.

---

## 🚀 Getting Started

Untuk menjalankan proyek ini secara lokal (*development*):

1. Lakukan kloning pada repositori ini.
2. Install *dependencies* menggunakan package manager pilihan Anda:
   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```
3. Jalankan *development server*:
   ```bash
   npm run dev
   ```
4. Buka [http://localhost:4004](http://localhost:4004) di *browser* Anda untuk melihat hasilnya.

> *Catatan: Server berjalan pada port 4004 secara default (seperti yang dikonfigurasi di `package.json`: `next dev -p 4004`). Pastikan Anda juga telah mengatur file `.env` untuk *environment variables* (seperti konfigurasi Firebase) jika diperlukan agar aplikasi berjalan dengan sempurna.*
