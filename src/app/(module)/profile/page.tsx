import { NewProfileView } from "@/packages/profile/presentation/view/new-profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang PT Cahaya Bangun Perkasa | Distributor Material Bangunan Terpercaya 20+ Tahun | Sidoarjo Surabaya",
  description: "PT Cahaya Bangun Perkasa - Distributor material bangunan terpercaya sudah 20+ tahun berpengalaman di Sidoarjo Surabaya Jawa Timur. Spesialis atap baja ringan, pipa galvanis, bata merah, semen berkualitas tinggi. Pelayanan kontraktor profesional untuk proyek bangunan di seluruh Jawa Timur.",
  metadataBase: new URL("https://www.ptcahayabangunperkasa.com"),
  alternates: {
    canonical: "/profile",
  },
  openGraph: {
    title: "PT Cahaya Bangun Perkasa | Distributor Material Bangunan Terpercaya di Sidoarjo Surabaya",
    description: "Perusahaan distributor material bangunan sudah 20 tahun berpengalaman. Menyediakan atap Fumira, pipa galvanis, bata merah, semen berkualitas tinggi dengan harga termurah. Pelayanan kontraktor terpercaya di Jawa Timur.",
    url: "https://www.ptcahayabangunperkasa.com/profile",
    siteName: "Cahaya Bangun Perkasa | General Trading and Contractor",
    images: [
      {
        url: "/assets/images/home/building.jpg",
        width: 1200,
        height: 630,
        alt: "PT Cahaya Bangun Perkasa - Distributor Material Bangunan Terpercaya",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Cahaya Bangun Perkasa | Distributor Material Bangunan Terpercaya",
    description: "Perusahaan material bangunan sudah 20 tahun di Sidoarjo Surabaya. Atap, pipa, bata, semen harga termurah berkualitas tinggi.",
    images: ["/assets/images/home/building.jpg"],
  },
  authors: [
    {
      name: "Brilian Rachmad",
      url: "https://brilianrachmad.vercel.app/",
    },
  ],
  publisher: "Cahaya Bangun Perkasa",
  keywords: [
    // Profil Perusahaan
    "PT Cahaya Bangun Perkasa",
    "Cahaya Bangun Perkasa",
    "profil perusahaan",
    "tentang CBP",
    "sejarah perusahaan",
    "perusahaan material bangunan",

    // Pengalaman & Keunggulan
    "sudah 20 tahun",
    "berpengalaman 20 tahun",
    "terpercaya",
    "terdepan",
    "pemimpin pasar",
    "spesialis material bangunan",
    "distributor terkemuka",
    "supplier terpercaya",
    "kontraktor profesional",

    // Lokasi Utama
    "Sidoarjo",
    "Surabaya",
    "Jawa Timur",
    "Indonesia",
    "Pulau Jawa",

    // Layanan & Produk
    "distributor material bangunan",
    "supplier konstruksi",
    "general trading",
    "kontraktor bangunan",
    "jasa konstruksi",
    "material berkualitas",
    "produk berkualitas tinggi",

    // Produk Unggulan
    "atap baja ringan",
    "atap fumira",
    "pipa galvanis",
    "bata merah press",
    "semen portland",
    "material konstruksi",

    // Kata kunci keunggulan
    "harga kompetitif",
    "harga termurah",
    "layanan prima",
    "pelayanan terbaik",
    "berkualitas tinggi",
    "garansi produk",
    "pengiriman tepat waktu",
    "stok lengkap",

    // Kata kunci pencarian
    "distributor material bangunan sidoarjo",
    "supplier konstruksi surabaya",
    "perusahaan material terpercaya jawa timur",
    "kontraktor bangunan sidoarjo",
    "toko bahan bangunan grosir",
    "supplier atap baja ringan",
    "distributor pipa galvanis",

    // Kata kunci spesifik lokasi
    "material bangunan sidoarjo",
    "konstruksi surabaya",
    "bahan bangunan jawa timur",
    "supplier gresik",
    "distributor mojokerto",
    "toko bangunan lamongan",

    // Kata kunci umum
    "proyek konstruksi",
    "bangun rumah",
    "renovasi gedung",
    "pembangunan pabrik",
    "konstruksi gudang",
    "material proyek",
    "bahan bangunan proyek",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  other: {
    "article:author": "Brilian Rachmad",
    "article:publisher": "Cahaya Bangun Perkasa",
    "article:section": "Company Profile",
    "geo.region": "ID-JI",
    "geo.placename": "Sidoarjo, Jawa Timur, Indonesia",
    "geo.position": "-7.4478;112.7183",
    "ICBM": "-7.4478, 112.7183",
    "business:contact_data:street_address": "Jl. Raya Sidoarjo",
    "business:contact_data:locality": "Sidoarjo",
    "business:contact_data:region": "Jawa Timur",
    "business:contact_data:postal_code": "61257",
    "business:contact_data:country_name": "Indonesia",
    "business:contact_data:phone_number": "+62-31-807-5779",
  },
};

export default NewProfileView;
