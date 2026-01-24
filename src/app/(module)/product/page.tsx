import { Metadata } from "next";
import { ProductListView } from "@/packages/product/presentation/view";

export const metadata: Metadata = {
  title: "Katalog Produk Material Bangunan | Atap, Pipa, Bata, Semen | Cahaya Bangun Perkasa Sidoarjo Surabaya",
  description: "Katalog lengkap produk material bangunan berkualitas tinggi. Atap Fumira BL-600 BL-710, Click-330, Compodeck, pipa galvanis, bata merah, semen harga grosir termurah di Sidoarjo Surabaya Jawa Timur. Distributor terpercaya sudah 20+ tahun.",
  metadataBase: new URL("https://www.ptcahayabangunperkasa.com"),
  alternates: {
    canonical: "/product",
  },
  openGraph: {
    title: "Katalog Produk Material Bangunan Lengkap | Cahaya Bangun Perkasa",
    description: "Temukan semua produk material bangunan berkualitas: Atap baja ringan, pipa galvanis, bata merah press, semen, dan material konstruksi lainnya. Harga termurah di Sidoarjo Surabaya Jawa Timur.",
    url: "https://www.ptcahayabangunperkasa.com/product",
    siteName: "Cahaya Bangun Perkasa | General Trading and Contractor",
    images: [
      {
        url: "/assets/images/product/fumira/logo.png",
        width: 1200,
        height: 630,
        alt: "Katalog Produk Material Bangunan Cahaya Bangun Perkasa",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katalog Produk Material Bangunan | Cahaya Bangun Perkasa",
    description: "Katalog lengkap atap, pipa, bata, semen harga termurah di Sidoarjo Surabaya. Distributor terpercaya sudah 20 tahun.",
    images: ["/assets/images/product/fumira/logo.png"],
  },
  authors: [
    {
      name: "Brilian Rachmad",
      url: "https://brilianrachmad.vercel.app/",
    },
  ],
  publisher: "Cahaya Bangun Perkasa",
  keywords: [
    // Katalog & Produk
    "katalog produk",
    "daftar produk",
    "produk material bangunan",
    "produk konstruksi",
    "produk atap",
    "produk pipa",
    "produk bata",
    "produk semen",

    // Atap Produk
    "atap fumira bl-600",
    "atap fumira bl-710",
    "atap fumira click-330",
    "atap fumira compodeck",
    "atap fumira sf-650",
    "atap fumira sf-750",
    "atap fumira gp-550",
    "atap fumira colorcoat",
    "atap baja ringan",
    "atap zincalume",
    "atap galvalume",

    // Pipa Produk
    "pipa galvanis",
    "pipa besi",
    "pipa pvc",
    "pipa hdpe",
    "pipa air bersih",
    "pipa saluran",
    "pipa konduit",

    // Bata & Semen
    "bata merah",
    "bata merah press",
    "bata ringan",
    "semen portland",
    "semen gresik",
    "semen holcim",
    "semen padang",

    // Lokasi
    "Sidoarjo",
    "Surabaya",
    "Jawa Timur",
    "Gresik",
    "Mojokerto",
    "Lamongan",

    // Keunggulan
    "harga termurah",
    "harga grosir",
    "harga distributor",
    "terpercaya",
    "sudah 20 tahun",
    "berkualitas tinggi",
    "original",
    "garansi",

    // Kata kunci pencarian
    "beli atap fumira",
    "harga atap bl-600",
    "distributor pipa galvanis",
    "toko bata merah",
    "supplier semen",
    "material bangunan murah",
    "grosir bahan konstruksi",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  other: {
    "article:author": "Brilian Rachmad",
    "article:publisher": "Cahaya Bangun Perkasa",
    "article:section": "Product Catalog",
  },
};

export default ProductListView;
