export interface FumiraProduct {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  advantages: string[];
  specifications?: {
    label: string;
    value: string;
  }[];
  image: string;
}

export const fumiraProducts: FumiraProduct[] = [
  {
    id: "fumiragrip",
    name: "FUMIRAGRIP",
    category: "Baja Galvanis",
    tagline: "Lock Forming Quality",
    description: "FUMIRAGRIP diproduksi menggunakan teknologi terkini sistem Non-Oxidizing Furnace (NOF) dari Nippon Steel Corp, Jepang. Produk ini memiliki kualitas lapisan seng lock forming dengan mampu tekuk hingga celah nol ketebalan tanpa mengelupas.",
    advantages: [
      "Kualitas pelapisan seng lock forming dengan mampu tekuk hingga celah nol ketebalan tanpa mengelupas",
      "Bebas dari serangan karat laten karena menggunakan metoda pembakaran langsung",
      "Penampakan permukaan yang metallik",
      "Spangles yang minimum dan tanpa batas spangles yang dalam",
      "Menggunakan standar kualitas bahan baku zinc tidak berbahaya (kurang dari 0,03% Pb)"
    ],
    specifications: [
      { label: "Ketebalan", value: "0.20 mm - 1.20 mm" },
      { label: "Lebar", value: "650 mm - 1250 mm" },
      { label: "Diameter Dalam Coil", value: "508 mm dan 610 mm" },
      { label: "Berat Coil", value: "Min. 2.0 MT, Maks. 15 MT" },
      { label: "Standar", value: "JIS G3302 dan ASTM 653 M" }
    ],
    image: "fumiragrip-advantages"
  },
  {
    id: "colorcoat",
    name: "COLORCOAT",
    category: "Baja Lapis Warna",
    tagline: "Color Coated Steel",
    description: "Colorcoat telah menjadi merek dagang Fumira untuk lembaran baja galvanis lapis warna sejak 1979. Produk ini telah teruji dan terbukti memenuhi persyaratan untuk penggunaan iklim tropis eksterior yang membutuhkan ketahanan tinggi terhadap pudar warna dan kerusakan.",
    advantages: [
      "Ketahanan retak selama transformasi bentuk dengan roll forming dan corrugating",
      "Cocok untuk atap dan dinding pabrik, bangunan, kantor dan perumahan",
      "Dapat menggunakan berbagai material dasar: Galvanized Steel, Galvalume, Stainless Steel, Aluminum",
      "Tersedia berbagai jenis cat: Polyester, Polyurethane dan PVDF"
    ],
    specifications: [
      { label: "Material Dasar", value: "Galvanized Iron (GI), Galvalume, Stainless Steel, Aluminum" },
      { label: "Jenis Cat", value: "Polyester, Polyurethane, PVDF" }
    ],
    image: "colorcoat"
  },
  {
    id: "compodeck",
    name: "COMPODECK",
    category: "Floor Deck",
    tagline: "Cast Concrete Retaining Floor",
    description: "Fumira menyediakan lantai penahan cor beton yang mudah ditangani yaitu Compodeck-680 (lebar efektif 680 mm) dan Compodeck-1000 yang ekonomis (lebar efektif 1000 mm). Compodeck-680 memiliki profil ekor burung yang unik.",
    advantages: [
      "Penguatan (tulangan) positif searah",
      "Digunakan sebagai rangka kerja tetap (Bekisting tetap)",
      "Berfungsi sebagai plafon",
      "Mempercepat waktu pekerjaan",
      "Meningkatkan keamanan kerja",
      "Mudah dipasang pada konstruksi baja beton dan bata merah",
      "Penghematan biaya konstruksi khususnya volume beton"
    ],
    specifications: [
      { label: "Material", value: "Hot Dip Galvanized Steel Sheet" },
      { label: "Kualitas", value: "FumiraGrip Lockforming Quality" },
      { label: "Standar", value: "JIS G3302 - SGC550, ASTM A653" },
      { label: "Yield Strength", value: "Min 550 MPa" },
      { label: "Tensile Strength", value: "Min 570 MPa" }
    ],
    image: "compodeck"
  },
  {
    id: "click-330",
    name: "CLICK-330",
    category: "Atap Minimalis",
    tagline: "Minimalist Roofing System",
    description: "Click-330 adalah produk atap yang memiliki profil gelombang rendah untuk bentang pendek hingga menengah tanpa sambungan dengan cara pemasangan boltless menggunakan sistem click. Rancangan minimalis untuk memenuhi kebutuhan profil atap boltless yang mudah ditangani dan dipasang.",
    advantages: [
      "Rancangan minimalis",
      "Bebas lubang yang terpapar dengan pemasangan sistem click",
      "Mudah dalam penanganan dan pemasangan",
      "Profil rendah yang ekonomis",
      "Kapasitas tampung curah hujan hingga 100 mm/jam",
      "Dapat dibongkar pasang tanpa merusak material atap"
    ],
    specifications: [
      { label: "Kemiringan Minimum", value: "5°" },
      { label: "Variasi Profil", value: "5 jenis" },
      { label: "Diameter Lengkung Minimum", value: "4.5 m" }
    ],
    image: "click-330"
  },
  {
    id: "bl-600",
    name: "BL-600",
    category: "Atap Bentang Panjang",
    tagline: "Long Span Roof",
    description: "BL-600 adalah atap bentang panjang dengan sistem bebas lubang yang 100% anti bocor. Cocok untuk bangunan industri dengan bentang lebar lebih dari 100 meter.",
    advantages: [
      "Bebas lubang, anti bocor 100%",
      "Sudut kemiringan minimal 1° (satu derajat)",
      "Jarak gording hingga 4.00 m",
      "Kapasitas tampung curah hujan hingga 600mm/jam",
      "Bentang bangunan bisa lebih dari 100 m",
      "Dapat dibongkar-pasang tanpa merusak material"
    ],
    specifications: [
      { label: "Kemiringan Minimum", value: "1°" },
      { label: "Jarak Gording Maksimum", value: "4.00 m" },
      { label: "Kapasitas Curah Hujan", value: "600 mm/jam" },
      { label: "Bentang Maksimum", value: "> 100 m" }
    ],
    image: "bl-600"
  },
  {
    id: "sf-650",
    name: "SF-650",
    category: "Atap Bentang Panjang",
    tagline: "Long Span Roof with Seaming System",
    description: "SF-650 adalah atap bentang panjang dengan sistem seaming yang memberikan kerapatan dan ketahanan maksimal terhadap cuaca ekstrem.",
    advantages: [
      "Sistem seaming yang kuat dan tahan lama",
      "Cocok untuk bangunan industri dan komersial",
      "Bebas lubang baut yang terekspos",
      "Ketahanan tinggi terhadap angin dan hujan"
    ],
    specifications: [
      { label: "Lebar Efektif", value: "650 mm" },
      { label: "Ketebalan", value: "0.40 - 0.80 mm" }
    ],
    image: "sf-650"
  },
  {
    id: "sf-750",
    name: "SF-750",
    category: "Atap Bentang Panjang",
    tagline: "Long Span Roof - Wide Profile",
    description: "SF-750 adalah varian atap bentang panjang dengan profil lebar 750mm yang memberikan efisiensi pemasangan lebih tinggi.",
    advantages: [
      "Profil lebar 750mm yang ekonomis",
      "Sistem overlap tight frame yang kuat",
      "Cocok untuk bangunan dengan bentang panjang",
      "Pemasangan cepat dan efisien"
    ],
    specifications: [
      { label: "Lebar Efektif", value: "750 mm" },
      { label: "Ketebalan", value: "0.45 - 0.60 mm" }
    ],
    image: "sf-750"
  },
  {
    id: "gp-550",
    name: "GP-550",
    category: "Atap Bentang Panjang",
    tagline: "Long Span Roof",
    description: "GP-550 adalah atap bentang panjang dengan desain profil yang optimal untuk berbagai jenis bangunan industri.",
    advantages: [
      "Desain profil yang optimal",
      "Tersedia berbagai pilihan ketebalan",
      "Cocok untuk bentang panjang hingga menengah",
      "Mudah dalam pemasangan"
    ],
    specifications: [
      { label: "Ketebalan", value: "0.45 - 0.80 mm" }
    ],
    image: "gp-550"
  },
  {
    id: "bl-710",
    name: "BL-710",
    category: "Atap Bentang Menengah",
    tagline: "Middle Span Roof - Push Lock System",
    description: "BL-710 adalah produk atap rancangan modern original dari Fumira dengan sistem Push Lock yang bebas lubang dan mudah dalam instalasi.",
    advantages: [
      "Rancangan modern original dari Fumira",
      "Bebas lubang dengan pemasangan sistem Push Lock",
      "Mudah dalam instalasi",
      "Profil lebar yang ekonomis",
      "Dapat dibongkar-pasang tanpa merusak material"
    ],
    specifications: [
      { label: "Ketebalan", value: "0.35 - 0.50 mm" }
    ],
    image: "bl-710"
  },
  {
    id: "fumiraspan",
    name: "FUMIRASPAN",
    category: "Atap Bentang Menengah",
    tagline: "Middle Span Roof - Economical",
    description: "FUMIRASPAN memiliki profil gelombang trapezoidal dengan tulangan penguat yang memadai, kombinasi profil gelombang yang memberikan nilai dekoratif, pemasangan mudah dan murah menggunakan sekrup tanpa pengikat khusus.",
    advantages: [
      "Lebar yang ekonomis",
      "Profil gelombang trapezoidal dengan tulangan penguat yang memadai",
      "Kombinasi profil gelombang yang memberikan nilai dekoratif",
      "Pemasangan yang mudah dan murah menggunakan sekrup tanpa pengikat khusus",
      "Material baja lapis logam yang dapat diberi lapisan warna"
    ],
    specifications: [
      { label: "Lebar Efektif", value: "700 mm" },
      { label: "Ketebalan", value: "0.35 - 0.80 mm" },
      { label: "Panjang Minimum", value: "0.80 m" },
      { label: "Panjang Maksimum", value: "12 m" }
    ],
    image: "fumiraspan"
  }
];

export const productCategories = [
  "Semua",
  "Baja Galvanis",
  "Baja Lapis Warna",
  "Floor Deck",
  "Atap Minimalis",
  "Atap Bentang Panjang",
  "Atap Bentang Menengah"
];
