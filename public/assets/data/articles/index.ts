import acpFacade from "public/assets/images/article/acp-facade.png";
import bondekWiremesh from "public/assets/images/article/bondek-wiremesh.png";
import greenBuilding from "public/assets/images/article/green-building.png";
import kalsiboardInterior from "public/assets/images/article/kalsiboard-interior.png";
import pagarBrc from "public/assets/images/article/pagar-brc.png";
import pvcFiberRoof from "public/assets/images/article/pvc-fiber-roof.png";
import transparentRoof from "public/assets/images/article/transparent-roof.png";
import waterstopPvc from "public/assets/images/article/waterstop-pvc.png";
import zincalumeRoof from "public/assets/images/article/zincalume-roof.png";

export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
}

export const articleCategories = [
  { id: "all", name: "Semua" },
  { id: "atap", name: "Atap" },
  { id: "material", name: "Material Bangunan" },
  { id: "inovasi", name: "Tips & Inovasi" },
];

export const articles: Article[] = [
  // Category A: Atap (Roofing Solutions)
  {
    slug: "memilih-atap-zincalume-terbaik",
    category: "atap",
    title: "Memilih Atap Zincalume Terbaik: Panduan Lengkap untuk Properti Anda",
    excerpt: "Pelajari keunggulan, jenis ketebalan, daya tahan terhadap cuaca ekstrem, dan tips pemasangan atap Zincalume untuk rumah atau bangunan Anda.",
    image: zincalumeRoof,
    date: "2024-01-15",
    author: "Admin CBP",
    readTime: "5 menit",
    content: `
## Apa itu Atap Zincalume?

Atap Zincalume adalah jenis atap logam yang terbuat dari baja yang dilapisi dengan paduan aluminium, seng, dan silikon. Lapisan ini memberikan perlindungan superior terhadap korosi dan cuaca ekstrem, menjadikannya pilihan ideal untuk berbagai jenis bangunan di Indonesia.

## Keunggulan Atap Zincalume

### 1. Daya Tahan Korosi Tinggi
Lapisan Zincalume memberikan perlindungan 2-4 kali lebih baik dibandingkan baja galvanis biasa. Material ini sangat tahan terhadap hujan asam, kelembaban tinggi, dan kondisi pesisir.

### 2. Bobot Ringan
Dengan bobot yang relatif ringan, atap Zincalume mengurangi beban struktural pada bangunan, sehingga dapat menghemat biaya konstruksi rangka atap.

### 3. Fleksibilitas Desain
Tersedia dalam berbagai profil dan dapat dibentuk sesuai kebutuhan desain bangunan modern maupun tradisional.

### 4. Ramah Lingkungan
Material Zincalume dapat didaur ulang 100%, menjadikannya pilihan yang berkelanjutan untuk konstruksi hijau.

## Memilih Ketebalan yang Tepat

| Ketebalan | Aplikasi |
|-----------|----------|
| 0.25mm | Rumah tinggal sederhana, kanopi |
| 0.30mm | Rumah tinggal standar, ruko |
| 0.35mm | Bangunan komersial, gudang kecil |
| 0.40mm | Industri ringan, workshop |
| 0.50mm+ | Industri berat, pabrik |

## Tips Pemasangan

1. **Pastikan kemiringan yang cukup** - Minimal 10° untuk menghindari genangan air
2. **Gunakan sekrup khusus** - Pilih sekrup tahan karat dengan ring karet
3. **Berikan overlap yang tepat** - Minimal 150mm untuk sambungan horizontal
4. **Pasang flashing dengan benar** - Terutama di area bubungan dan talang

## Perawatan Atap Zincalume

- Bersihkan dari daun dan kotoran secara berkala
- Periksa kondisi sekrup dan sealant setiap 6 bulan
- Hindari berjalan langsung di atas atap tanpa alas yang tepat
- Lakukan pengecatan ulang jika diperlukan setelah 15-20 tahun

## Kesimpulan

Atap Zincalume adalah investasi jangka panjang yang memberikan perlindungan optimal untuk properti Anda. Dengan pemilihan ketebalan yang tepat dan pemasangan yang benar, atap ini dapat bertahan hingga 25-30 tahun atau lebih.

**Hubungi PT. Cahaya Bangun Perkasa** untuk konsultasi dan penawaran terbaik untuk kebutuhan atap Zincalume Anda.
    `,
  },
  {
    slug: "atap-transparan-polycarbonate",
    category: "atap",
    title: "Atap Transparan dan Polycarbonate: Estetika dan Fungsionalitas Cahaya Alami",
    excerpt: "Manfaat pencahayaan alami, perbandingan material, dan aplikasi di kanopi atau greenhouse untuk bangunan modern.",
    image: transparentRoof,
    date: "2024-01-10",
    author: "Admin CBP",
    readTime: "4 menit",
    content: `
## Memaksimalkan Cahaya Alami dengan Atap Transparan

Atap transparan dan polycarbonate menjadi solusi populer untuk menciptakan ruangan yang terang dan nyaman tanpa bergantung sepenuhnya pada pencahayaan buatan. Artikel ini membahas berbagai pilihan material dan aplikasinya.

## Jenis Material Atap Transparan

### 1. Polycarbonate Solid
- Kekuatan tinggi, tahan benturan
- Kejernihan optik yang baik
- Ideal untuk skylight dan kanopi premium

### 2. Polycarbonate Twin-wall/Multi-wall
- Ringan dengan insulasi termal lebih baik
- Tersedia dalam berbagai warna
- Cocok untuk carport, pergola, dan greenhouse

### 3. Fiberglass (FRP)
- Ekonomis dengan difusi cahaya yang baik
- Tahan terhadap bahan kimia
- Sering digunakan di area industri

## Keunggulan Penggunaan Atap Transparan

### Pencahayaan Alami
- Mengurangi kebutuhan lampu di siang hari
- Hemat energi listrik hingga 30%
- Menciptakan suasana ruang yang lebih sehat

### Estetika Modern
- Memberikan kesan luas dan terbuka
- Memadukan ruang dalam dan luar
- Fleksibel untuk berbagai gaya arsitektur

### Perlindungan UV
- Material berkualitas memblokir 99% sinar UV berbahaya
- Melindungi furnitur dan penghuni dari paparan berlebih
- Tetap mempertahankan transmisi cahaya yang baik

## Aplikasi Populer

1. **Kanopi Teras** - Nikmati ruang outdoor dengan perlindungan dari hujan
2. **Skylight** - Terangi ruang interior yang gelap
3. **Greenhouse** - Optimal untuk pertumbuhan tanaman
4. **Carport** - Lindungi kendaraan dengan pencahayaan alami
5. **Koridor Penghubung** - Jalur terang antar bangunan

## Tips Pemilihan

- **Pertimbangkan lokasi** - Perhatikan arah matahari dan intensitas panas
- **Pilih ketebalan yang sesuai** - Semakin tebal, semakin kuat dan tahan lama
- **Perhatikan garansi** - Material berkualitas biasanya bergaransi 10-15 tahun
- **Konsultasikan dengan ahli** - Pastikan struktur pendukung memadai

## Kesimpulan

Investasi dalam atap transparan memberikan nilai tambah dari segi estetika, penghematan energi, dan kenyamanan penghuni. Pilih material dan desain yang sesuai dengan kebutuhan dan anggaran Anda.

**PT. Cahaya Bangun Perkasa** menyediakan berbagai pilihan atap transparan berkualitas. Hubungi kami untuk konsultasi gratis!
    `,
  },
  {
    slug: "perbandingan-atap-pvc-fiber-frp",
    category: "atap",
    title: "Perbandingan Atap PVC dan Fiber (FRP): Mana yang Tepat untuk Kebutuhan Industri Anda?",
    excerpt: "Analisis mendalam tentang kekuatan, ketahanan kimia, isolasi panas, dan aplikasi industri vs. komersial untuk kedua jenis atap.",
    image: pvcFiberRoof,
    date: "2024-01-05",
    author: "Admin CBP",
    readTime: "6 menit",
    content: `
## Memilih Atap untuk Aplikasi Industri

Dalam dunia konstruksi industri, pemilihan material atap yang tepat sangat krusial untuk efisiensi operasional dan keawetan bangunan. Dua pilihan populer adalah atap PVC dan Fiber (FRP). Mari kita bandingkan keduanya.

## Atap PVC (Polyvinyl Chloride)

### Karakteristik
- Terbuat dari plastik termoplastik yang dapat dibentuk
- Tersedia dalam berbagai warna dan profil
- Bobot sangat ringan

### Kelebihan
- **Tahan korosi sempurna** - Tidak bereaksi dengan air atau kelembaban
- **Isolasi termal baik** - Mengurangi panas dalam ruangan
- **Mudah dipasang** - Tidak memerlukan alat khusus
- **Harga terjangkau** - Ekonomis untuk proyek besar

### Kekurangan
- Dapat memuai/menyusut pada perubahan suhu ekstrem
- Kurang cocok untuk bentang sangat panjang
- Ketahanan benturan lebih rendah

## Atap Fiber (FRP - Fiberglass Reinforced Plastic)

### Karakteristik
- Komposit serat kaca dengan resin
- Transparan hingga semi-transparan
- Struktur bergelombang untuk kekuatan

### Kelebihan
- **Kekuatan struktural tinggi** - Tahan terhadap beban dan tekanan
- **Difusi cahaya alami** - Menerangi ruang tanpa silau
- **Tahan bahan kimia** - Ideal untuk pabrik kimia
- **Umur panjang** - 20+ tahun dengan perawatan minimal

### Kekurangan
- Harga relatif lebih tinggi
- Dapat mengalami degradasi UV jika tidak dilapisi
- Pemasangan memerlukan ketelitian

## Tabel Perbandingan

| Aspek | Atap PVC | Atap Fiber (FRP) |
|-------|----------|------------------|
| Kekuatan | Sedang | Tinggi |
| Berat | Sangat Ringan | Ringan |
| Harga | Ekonomis | Menengah-Tinggi |
| Transmisi Cahaya | 50-80% | 70-90% |
| Tahan Kimia | Baik | Sangat Baik |
| Isolasi Panas | Baik | Sedang |
| Umur Pakai | 10-15 tahun | 20-25 tahun |

## Rekomendasi Aplikasi

### Pilih Atap PVC untuk:
- Gudang penyimpanan umum
- Carport dan kanopi
- Bangunan pertanian
- Proyek dengan budget terbatas

### Pilih Atap Fiber (FRP) untuk:
- Pabrik manufaktur
- Fasilitas kimia dan farmasi
- Bangunan yang memerlukan pencahayaan alami maksimal
- Proyek yang mengutamakan durabilitas jangka panjang

## Kesimpulan

Kedua material memiliki keunggulan masing-masing. Pertimbangkan faktor lokasi, anggaran, kebutuhan pencahayaan, dan jenis industri sebelum memutuskan. Konsultasi dengan ahli akan membantu Anda membuat keputusan yang tepat.

**Hubungi PT. Cahaya Bangun Perkasa** untuk mendapatkan produk dan rekomendasi terbaik sesuai kebutuhan proyek Anda.
    `,
  },

  // Category B: Material Bangunan Esensial
  {
    slug: "bondek-decking-vs-wiremesh",
    category: "material",
    title: "Bondek/Decking vs. Wiremesh: Memperkuat Struktur Lantai Beton Anda",
    excerpt: "Fungsi masing-masing material, kelebihan dalam konstruksi, dan kapan memilih salah satunya untuk proyek Anda.",
    image: bondekWiremesh,
    date: "2023-12-28",
    author: "Admin CBP",
    readTime: "5 menit",
    content: `
## Memahami Struktur Lantai Beton

Lantai beton yang kuat dan tahan lama memerlukan sistem penguatan yang tepat. Dua komponen utama yang sering digunakan adalah Bondek (Floordeck) dan Wiremesh. Keduanya memiliki fungsi berbeda namun saling melengkapi.

## Apa itu Bondek/Floordeck?

Bondek adalah lembaran baja bergelombang yang berfungsi sebagai:
- **Bekisting permanen** - Tidak perlu dilepas setelah beton mengeras
- **Penguatan tulangan positif** - Menahan gaya tarik pada bagian bawah pelat
- **Platform kerja** - Area aman untuk pekerja selama pengecoran

### Keunggulan Bondek
1. Mempercepat waktu konstruksi
2. Mengurangi biaya bekisting kayu
3. Memberikan tampilan ceiling yang rapi
4. Meningkatkan kekuatan pelat beton

## Apa itu Wiremesh?

Wiremesh adalah jaring baja yang dilas dengan pola grid teratur, berfungsi sebagai:
- **Tulangan utama/tambahan** - Mendistribusikan beban secara merata
- **Pengontrol retak** - Mencegah retakan akibat susut beton
- **Pengikat struktural** - Menghubungkan elemen beton

### Keunggulan Wiremesh
1. Pemasangan cepat dan efisien
2. Ukuran grid konsisten dan terkontrol
3. Mengurangi tenaga kerja pembesian
4. Tersedia dalam berbagai ukuran diameter

## Perbandingan Penggunaan

| Aspek | Bondek | Wiremesh |
|-------|--------|----------|
| Fungsi Utama | Bekisting + Tulangan | Tulangan murni |
| Posisi | Bagian bawah pelat | Dalam pelat beton |
| Sistem | Pengganti bekisting | Pengganti tulangan konvensional |
| Aplikasi | Lantai multi-story | Lantai, pelat, jalan |

## Kapan Menggunakan Bondek?

- Konstruksi bangunan bertingkat
- Proyek dengan deadline ketat
- Bangunan dengan bentang panjang
- Ketika ceiling baja terekspos diinginkan

## Kapan Menggunakan Wiremesh?

- Pelat lantai dasar
- Jalan beton dan area parkir
- Kolam renang dan reservoir
- Sebagai tulangan tambahan pada berbagai struktur

## Kombinasi Bondek dan Wiremesh

Untuk hasil optimal, banyak proyek menggunakan keduanya:
1. Bondek sebagai bekisting dan tulangan bawah
2. Wiremesh sebagai tulangan atas untuk mengontrol retak
3. Tulangan konvensional tambahan sesuai perhitungan struktur

## Tips Pemilihan

- **Konsultasikan dengan insinyur struktur** - Pastikan desain sesuai beban yang direncanakan
- **Perhatikan spesifikasi** - Pilih ketebalan dan ukuran yang tepat
- **Pertimbangkan akses** - Bondek lebih mudah untuk lokasi sulit dijangkau
- **Hitung biaya total** - Termasuk tenaga kerja dan waktu pengerjaan

## Kesimpulan

Bondek dan Wiremesh adalah partner sempurna untuk konstruksi lantai beton modern. Pemilihan yang tepat bergantung pada jenis proyek, anggaran, dan persyaratan struktural.

**PT. Cahaya Bangun Perkasa** menyediakan Bondek dan Wiremesh berkualitas tinggi. Hubungi kami untuk penawaran terbaik!
    `,
  },
  {
    slug: "panduan-memilih-kalsiboard",
    category: "material",
    title: "Panduan Memilih Kalsiboard yang Tepat untuk Partisi dan Plafon Interior",
    excerpt: "Berbagai jenis Kalsiboard, keunggulan tahan api/air, dan tips instalasi untuk interior bangunan Anda.",
    image: kalsiboardInterior,
    date: "2023-12-20",
    author: "Admin CBP",
    readTime: "4 menit",
    content: `
## Mengenal Kalsiboard

Kalsiboard (Calcium Silicate Board) adalah papan serat semen yang terbuat dari campuran semen, silika, dan serat selulosa. Material ini telah menjadi pilihan utama untuk partisi dan plafon interior modern.

## Jenis-Jenis Kalsiboard

### 1. Kalsiboard Standar
- Ketebalan: 3.5mm - 6mm
- Aplikasi: Plafon interior, partisi ringan
- Cocok untuk area kering

### 2. Kalsiboard Tahan Air
- Ketebalan: 6mm - 9mm
- Aplikasi: Kamar mandi, dapur, area lembab
- Perlindungan ekstra terhadap kelembaban

### 3. Kalsiboard Tahan Api
- Ketebalan: 8mm - 12mm
- Aplikasi: Jalur evakuasi, ruang mesin, dapur komersial
- Rating tahan api hingga 2 jam

### 4. Kalsiboard Eksterior
- Ketebalan: 9mm - 20mm
- Aplikasi: Fasad, lisplang, soffit
- Tahan cuaca dan UV

## Keunggulan Kalsiboard

### Keamanan
- **Tahan api** - Tidak menyebarkan api
- **Tidak beracun** - Aman untuk kesehatan
- **Anti rayap** - Tidak menjadi sarang serangga

### Kenyamanan
- **Isolasi suara** - Meredam kebisingan
- **Isolasi panas** - Menjaga suhu ruangan
- **Permukaan halus** - Siap dicat atau dilapisi

### Praktis
- **Mudah dipotong** - Dengan alat sederhana
- **Mudah dibentuk** - Fleksibel untuk berbagai desain
- **Instalasi cepat** - Sistem rangka metal standar

## Tips Instalasi

### Persiapan
1. Pastikan rangka metal terpasang rata dan kuat
2. Jarak antar rangka maksimal 60cm untuk plafon
3. Gunakan rangka double untuk partisi

### Pemasangan
1. Potong papan dengan sisi halus menghadap keluar
2. Sisakan gap 3-5mm antar papan untuk ekspansi
3. Gunakan sekrup khusus Kalsiboard
4. Jarak sekrup: 15cm di tepi, 20cm di tengah

### Finishing
1. Aplikasikan compound pada sambungan
2. Pasang paper tape untuk hasil rapi
3. Amplas halus sebelum pengecatan
4. Gunakan cat berbasis air untuk hasil terbaik

## Tabel Rekomendasi Penggunaan

| Ruangan | Jenis | Ketebalan |
|---------|-------|-----------|
| Kamar Tidur | Standar | 4mm |
| Ruang Tamu | Standar | 4-6mm |
| Kamar Mandi | Tahan Air | 6-8mm |
| Dapur | Tahan Api | 8mm |
| Koridor/Tangga | Tahan Api | 8-12mm |
| Fasad | Eksterior | 9-12mm |

## Perawatan

- Bersihkan dengan lap lembab
- Hindari benturan keras
- Perbaiki retakan kecil dengan compound
- Cat ulang setiap 3-5 tahun

## Kesimpulan

Kalsiboard adalah solusi modern untuk interior yang aman, nyaman, dan estetis. Pilih jenis dan ketebalan yang sesuai dengan kebutuhan ruangan Anda.

**PT. Cahaya Bangun Perkasa** menyediakan berbagai jenis Kalsiboard berkualitas. Konsultasikan kebutuhan Anda dengan tim kami!
    `,
  },
  {
    slug: "pagar-brc-kawat-silet",
    category: "material",
    title: "Pagar BRC dan Kawat Silet: Solusi Keamanan Optimal untuk Properti Komersial",
    excerpt: "Tingkat keamanan, material, perawatan, dan area aplikasi untuk sistem pagar keamanan properti Anda.",
    image: pagarBrc,
    date: "2023-12-15",
    author: "Admin CBP",
    readTime: "5 menit",
    content: `
## Pentingnya Keamanan Perimeter

Keamanan perimeter adalah lapisan pertahanan pertama untuk properti komersial, industri, dan residensial. Pagar BRC dan Kawat Silet telah terbukti sebagai kombinasi efektif untuk melindungi aset Anda.

## Mengenal Pagar BRC

BRC (British Reinforced Concrete) fence adalah pagar welded mesh yang terbuat dari kawat baja galvanis yang dilas dengan pola grid teratur.

### Spesifikasi Umum
- Diameter kawat: 4mm - 6mm
- Ukuran mesh: 50x150mm atau 75x150mm
- Tinggi panel: 1.5m - 2.4m
- Lebar panel: 2.4m - 3m

### Keunggulan Pagar BRC
1. **Kekuatan tinggi** - Sulit dipotong atau dirusak
2. **Visibilitas baik** - Memungkinkan pengawasan visual
3. **Ventilasi alami** - Tidak menghalangi sirkulasi udara
4. **Perawatan minimal** - Lapisan galvanis anti karat
5. **Estetika modern** - Tampilan bersih dan profesional

## Mengenal Kawat Silet (Razor Wire)

Kawat Silet adalah kawat baja dengan silet tajam yang dililit secara heliks, berfungsi sebagai penghalang tambahan di atas pagar.

### Jenis Kawat Silet
1. **Concertina** - Bentuk spiral yang dapat direntangkan
2. **Flat Wrap** - Bentuk datar untuk area sempit
3. **Welded Razor** - Panel silet las untuk keamanan maksimal

### Spesifikasi
- Diameter coil: 450mm - 980mm
- Material: Baja galvanis atau stainless steel
- Panjang per coil: 8m - 15m terkompresi

## Kombinasi Optimal

### Level 1: Keamanan Dasar
- Pagar BRC tinggi 1.8m
- Tanpa kawat silet
- Cocok untuk: Perumahan, taman, fasilitas publik

### Level 2: Keamanan Menengah
- Pagar BRC tinggi 2.1m
- 1 gulungan kawat silet di atas
- Cocok untuk: Gudang, pabrik, area komersial

### Level 3: Keamanan Tinggi
- Pagar BRC tinggi 2.4m
- 2-3 gulungan kawat silet
- Cocok untuk: Penjara, militer, instalasi kritis

## Instalasi yang Benar

### Pondasi
1. Galian lubang minimal 50cm
2. Jarak tiang 2.4-3m
3. Cor beton K-175 atau lebih

### Pemasangan Panel
1. Kaitkan panel pada post clip
2. Pastikan level dan tegak
3. Kencangkan dengan baut anti-maling

### Pemasangan Kawat Silet
1. Gunakan bracket khusus
2. Rentangkan dengan ketegangan merata
3. Pastikan tidak ada celah

## Perawatan

### Pagar BRC
- Periksa baut dan kait setiap 6 bulan
- Bersihkan dari tanaman merambat
- Touch up cat pada area yang terkelupas

### Kawat Silet
- Periksa kerusakan secara berkala
- Ganti bagian yang berkarat atau patah
- Pastikan ketegangan tetap terjaga

## Pertimbangan Legal

- Pastikan sesuai peraturan setempat
- Pasang rambu peringatan
- Pertimbangkan keselamatan publik

## Kesimpulan

Kombinasi Pagar BRC dan Kawat Silet memberikan perlindungan berlapis yang efektif untuk berbagai jenis properti. Pilih spesifikasi yang sesuai dengan tingkat keamanan yang dibutuhkan.

**PT. Cahaya Bangun Perkasa** menyediakan sistem pagar keamanan lengkap. Hubungi kami untuk survei dan penawaran gratis!
    `,
  },

  // Category C: Tips & Inovasi Konstruksi
  {
    slug: "aluminium-composite-panel-acp",
    category: "inovasi",
    title: "Mengenal Aluminium Composite Panel (ACP): Estetika Modern untuk Fasad Bangunan",
    excerpt: "Keindahan, ringan, mudah dibentuk, serta aplikasi pada fasad dan interior bangunan modern.",
    image: acpFacade,
    date: "2023-12-10",
    author: "Admin CBP",
    readTime: "5 menit",
    content: `
## Transformasi Fasad dengan ACP

Aluminium Composite Panel (ACP) telah merevolusi desain arsitektur modern. Material ini memberikan kombinasi sempurna antara estetika, durabilitas, dan kemudahan instalasi.

## Apa itu ACP?

ACP adalah panel sandwich yang terdiri dari:
- 2 lembar aluminium (0.3-0.5mm) di luar
- Core dari polyethylene (PE) atau mineral (FR) di tengah
- Total ketebalan 3-4mm

## Jenis ACP Berdasarkan Core

### 1. PE Core (Polyethylene)
- Ekonomis
- Untuk interior dan fasad rendah
- Tidak cocok untuk bangunan tinggi

### 2. FR Core (Fire Retardant)
- Tahan api
- Wajib untuk bangunan tinggi
- Memenuhi standar keselamatan

### 3. A2 Core (Non-combustible)
- Tidak terbakar sama sekali
- Untuk proyek dengan persyaratan ketat
- Investasi jangka panjang terbaik

## Keunggulan ACP

### Estetika
- **Warna tak terbatas** - Solid, metalik, hingga motif kayu
- **Permukaan premium** - Glossy, matte, atau tekstur
- **Desain fleksibel** - Dapat dibentuk melengkung

### Performa
- **Ringan** - Hanya 5kg/m²
- **Kuat** - Tahan angin dan benturan
- **Tahan cuaca** - Lapisan PVDF 20+ tahun

### Instalasi
- **Mudah dipotong** - Dengan router atau saw
- **Mudah dibentuk** - Dapat di-groove dan tekuk
- **Sistem cepat** - Bracket atau sealant

## Aplikasi ACP

### Eksterior
- Fasad bangunan tinggi
- Kanopi SPBU
- Signage dan billboard
- Cladding ruko

### Interior
- Backdrop resepsionis
- Partisi dekoratif
- Ceiling aksen
- Furniture custom

## Sistem Instalasi

### 1. Sistem Bracket
- Menggunakan rangka aluminium
- Panel dipasang dengan klem
- Cocok untuk fasad besar

### 2. Sistem Sealant
- Panel ditempel langsung
- Lebih ekonomis
- Cocok untuk interior

### 3. Sistem Cassette
- Panel difabrikasi di pabrik
- Instalasi cepat di lapangan
- Hasil paling presisi

## Tips Pemilihan

1. **Pilih grade sesuai aplikasi** - FR untuk eksterior tinggi
2. **Perhatikan ketebalan aluminium** - Minimal 0.4mm untuk eksterior
3. **Pilih coating PVDF** - Untuk ketahanan warna jangka panjang
4. **Verifikasi sertifikasi** - Pastikan memenuhi standar

## Perawatan

- Bersihkan dengan air sabun mild
- Hindari bahan kimia keras
- Periksa sealant secara berkala
- Perbaiki goresan dengan touch-up

## Kesimpulan

ACP adalah pilihan cerdas untuk fasad dan interior modern. Dengan pemilihan yang tepat, bangunan Anda akan tampil menawan selama bertahun-tahun.

**PT. Cahaya Bangun Perkasa** menyediakan ACP berkualitas dari berbagai merek terpercaya. Konsultasikan proyek Anda dengan kami!
    `,
  },
  {
    slug: "waterstop-pvc-pencegahan-kebocoran",
    category: "inovasi",
    title: "Pentingnya Waterstop PVC dalam Pencegahan Kebocoran Struktur Beton",
    excerpt: "Fungsi Waterstop, jenis-jenisnya, dan cara kerja melindungi struktur dari air di sambungan beton.",
    image: waterstopPvc,
    date: "2023-12-05",
    author: "Admin CBP",
    readTime: "4 menit",
    content: `
## Mengapa Waterstop Penting?

Sambungan beton (construction joint) adalah titik lemah dalam struktur kedap air. Waterstop PVC adalah solusi proven untuk mencegah rembesan air melalui sambungan ini.

## Apa itu Waterstop?

Waterstop adalah profil elastomer (biasanya PVC) yang ditanam di dalam sambungan beton untuk memblokir jalur air dan menciptakan seal kedap air.

## Jenis-Jenis Waterstop

### Berdasarkan Lokasi

#### 1. Internal Waterstop
- Ditanam di tengah sambungan
- Tipe paling umum
- Untuk sambungan konstruksi standar

#### 2. External Waterstop
- Dipasang di sisi luar
- Untuk retrofit atau perbaikan
- Mudah dipasang pada beton existing

### Berdasarkan Fungsi

#### 1. Non-movement Type
- Untuk sambungan konstruksi
- Beton tidak mengalami pergerakan
- Profil dengan center bulb

#### 2. Movement Type
- Untuk expansion joint
- Mengakomodasi pergerakan beton
- Profil dengan center fold

### Berdasarkan Material

#### 1. PVC Waterstop
- Paling populer
- Ekonomis dan efektif
- Tahan terhadap air dan tanah

#### 2. Rubber Waterstop
- Elastisitas tinggi
- Untuk pergerakan besar
- Tahan bahan kimia

#### 3. Bentonite Waterstop
- Mengembang saat terkena air
- Untuk perbaikan/retrofit
- Self-healing

## Cara Kerja Waterstop

1. **Barrier fisik** - Profil PVC memblokir jalur air
2. **Labyrinth effect** - Bentuk rib memperpanjang jalur rembesan
3. **Bond dengan beton** - Rib tertanam kuat dalam beton
4. **Fleksibilitas** - Mengikuti pergerakan minor tanpa retak

## Aplikasi Umum

- Basement dan underground structure
- Kolam renang dan water tank
- Terowongan dan underpass
- Dam dan reservoir
- STP dan WTP

## Tips Pemasangan

### Persiapan
1. Pilih ukuran sesuai ketebalan beton (minimal 1/2 tebal)
2. Pastikan sambungan waterstop dengan benar
3. Siapkan support untuk menjaga posisi

### Instalasi
1. Posisikan tepat di tengah ketebalan beton
2. Fiksasi dengan kawat atau support bar
3. Pastikan tidak ada lipatan atau kekusutan
4. Sambung dengan heat welding, bukan lem

### Pengecoran
1. Cor beton dengan hati-hati
2. Hindari vibrator langsung mengenai waterstop
3. Pastikan beton mengisi sempurna di sekitar profil

## Kesalahan Umum yang Harus Dihindari

- ❌ Waterstop tidak tersambung dengan benar
- ❌ Posisi tidak di tengah ketebalan
- ❌ Waterstop tertekuk atau rusak
- ❌ Beton tidak mengisi sempurna
- ❌ Menggunakan ukuran terlalu kecil

## Kesimpulan

Waterstop PVC adalah investasi kecil dengan dampak besar. Pemasangan yang benar akan menghindarkan Anda dari masalah kebocoran yang mahal di kemudian hari.

**PT. Cahaya Bangun Perkasa** menyediakan berbagai ukuran dan jenis Waterstop PVC. Hubungi kami untuk kebutuhan proyek Anda!
    `,
  },
  {
    slug: "tren-material-ramah-lingkungan",
    category: "inovasi",
    title: "Tren Material Bangunan Ramah Lingkungan untuk Proyek Masa Depan",
    excerpt: "Pengenalan material berkelanjutan, efisiensi energi, dan dampak positif terhadap lingkungan dalam konstruksi.",
    image: greenBuilding,
    date: "2023-11-28",
    author: "Admin CBP",
    readTime: "6 menit",
    content: `
## Masa Depan Konstruksi Hijau

Industri konstruksi bertanggung jawab atas sekitar 40% emisi karbon global. Penggunaan material ramah lingkungan bukan lagi pilihan, melainkan keharusan untuk masa depan planet kita.

## Prinsip Green Building Material

### 1. Sustainability
- Sumber terbarukan
- Proses produksi rendah karbon
- Dapat didaur ulang di akhir masa pakai

### 2. Efisiensi Energi
- Insulasi termal tinggi
- Mengurangi kebutuhan pendinginan/pemanasan
- Memaksimalkan pencahayaan alami

### 3. Kesehatan
- Rendah VOC (Volatile Organic Compounds)
- Tidak mengandung bahan berbahaya
- Meningkatkan kualitas udara dalam ruangan

## Material Ramah Lingkungan Populer

### 1. Baja Daur Ulang
**Keunggulan:**
- 100% dapat didaur ulang
- Kekuatan tinggi dengan material lebih sedikit
- Mengurangi limbah konstruksi

**Aplikasi:**
- Struktur bangunan
- Atap metal (Zincalume)
- Rangka baja ringan

### 2. Bambu
**Keunggulan:**
- Tumbuh sangat cepat (3-5 tahun)
- Kekuatan tarik menyamai baja
- Carbon negative

**Aplikasi:**
- Flooring
- Panel dinding
- Struktur ringan

### 3. Beton Ramah Lingkungan
**Keunggulan:**
- Menggunakan fly ash pengganti semen
- Agregat daur ulang
- Mengurangi emisi CO2

**Aplikasi:**
- Fondasi
- Struktur
- Paving block

### 4. Insulasi Alami
**Material:**
- Selulosa (kertas daur ulang)
- Wol domba
- Gabus

**Keunggulan:**
- Rendah embodied energy
- Biodegradable
- Performa termal excellent

### 5. Cat Rendah VOC
**Keunggulan:**
- Tidak berbau menyengat
- Aman untuk kesehatan
- Kualitas warna setara cat konvensional

## Sertifikasi Green Building

### Greenship (Indonesia)
- Dikembangkan oleh GBCI
- Standar lokal sesuai kondisi Indonesia
- Kriteria meliputi ASD, EEC, WAC, dll.

### LEED (Internasional)
- Sistem rating paling diakui global
- Platinum, Gold, Silver, Certified
- Meningkatkan nilai properti

### Green Mark (Singapore)
- Fokus pada efisiensi energi
- Relevan untuk proyek di Asia Tenggara
- Benchmark regional

## Manfaat Ekonomi

### Jangka Pendek
- Insentif pajak dan perizinan
- Biaya operasional lebih rendah
- Marketing advantage

### Jangka Panjang
- Nilai properti lebih tinggi
- Biaya perawatan lebih rendah
- Kenyamanan penghuni lebih baik

## Langkah Memulai

1. **Audit kebutuhan** - Identifikasi area yang dapat ditingkatkan
2. **Konsultasi ahli** - Green building consultant
3. **Pilih material tepat** - Sesuai anggaran dan target sertifikasi
4. **Implementasi bertahap** - Prioritaskan dampak terbesar
5. **Monitor dan evaluasi** - Ukur hasil secara berkala

## Kesimpulan

Material ramah lingkungan adalah investasi untuk masa depan. Dengan pemilihan yang tepat, Anda tidak hanya berkontribusi pada lingkungan, tetapi juga mendapatkan manfaat ekonomi jangka panjang.

**PT. Cahaya Bangun Perkasa** berkomitmen menyediakan material berkualitas dengan dampak lingkungan minimal. Mari bersama membangun masa depan yang lebih hijau!
    `,
  },
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug);
};

export const getRelatedArticles = (currentSlug: string, limit: number = 3): Article[] => {
  const currentArticle = getArticleBySlug(currentSlug);
  if (!currentArticle) return articles.slice(0, limit);
  
  return articles
    .filter((article) => article.slug !== currentSlug && article.category === currentArticle.category)
    .slice(0, limit);
};

export const getArticlesByCategory = (category: string): Article[] => {
  if (category === "all") return articles;
  return articles.filter((article) => article.category === category);
};
