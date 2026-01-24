import { FeaturedProductView, HomeView, ProductView, TrustIndicators } from "@/packages/dashboard/presentation/view";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Cahaya Bangun Perkasa | Distributor Material Bangunan Terpercaya di Sidoarjo Surabaya | Harga Termurah 2025",
  description: "PT Cahaya Bangun Perkasa - Distributor material bangunan terpercaya sudah 20+ tahun di Sidoarjo, Surabaya, Jawa Timur. Atap, pipa, bata, semen harga termurah berkualitas tinggi. Pelayanan terbaik untuk proyek rumah, gedung, kontraktor di seluruh Jawa Timur dan sekitarnya.",
  metadataBase: new URL("https://www.ptcahayabangunperkasa.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cahaya Bangun Perkasa | Material Bangunan Terpercaya di Sidoarjo Surabaya Jawa Timur",
    description: "Distributor material bangunan sudah 20 tahun berpengalaman. Atap Fumira, pipa, bata, semen harga grosir termurah. Pelayanan kontraktor terpercaya di Sidoarjo, Surabaya, Gresik, Mojokerto dan seluruh Jawa Timur.",
    url: "https://www.ptcahayabangunperkasa.com",
    siteName: "Cahaya Bangun Perkasa | General Trading and Contractor",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cahaya Bangun Perkasa - Distributor Material Bangunan Terpercaya di Sidoarjo Surabaya",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cahaya Bangun Perkasa | Material Bangunan Terpercaya di Sidoarjo Surabaya",
    description: "Distributor material bangunan sudah 20 tahun. Atap, pipa, bata, semen harga termurah di Jawa Timur. Pelayanan terbaik untuk proyek konstruksi.",
    images: ["/og-image.png"],
  },
  authors: [
    {
      name: "Brilian Rachmad",
      url: "https://brilianrachmad.vercel.app/",
    },
  ],
  publisher: "Cahaya Bangun Perkasa",
  keywords: [
    // Nama Perusahaan
    "Cahaya Bangun Perkasa",
    "PT Cahaya Bangun Perkasa",
    "CBP Material",
    "CBP Bangunan",

    // Lokasi - Sidoarjo
    "Sidoarjo",
    "material bangunan Sidoarjo",
    "distributor Sidoarjo",
    "toko bangunan Sidoarjo",
    "supplier Sidoarjo",
    "grosir bahan bangunan Sidoarjo",

    // Lokasi - Surabaya
    "Surabaya",
    "material bangunan Surabaya",
    "distributor Surabaya",
    "toko bangunan Surabaya",
    "supplier Surabaya",
    "grosir bahan bangunan Surabaya",

    // Lokasi - Jawa Timur & sekitarnya
    "Jawa Timur",
    "Pulau Jawa",
    "Jawa Timur bagian timur",
    "Gresik",
    "Mojokerto",
    "Lamongan",
    "Tuban",
    "Bojonegoro",
    "Ngawi",
    "Madiun",
    "Ponorogo",
    "Pacitan",
    "Trenggalek",
    "Tulungagung",
    "Blitar",
    "Kediri",
    "Nganjuk",
    "Jombang",
    "Batu",
    "Malang",
    "Pasuruan",
    "Probolinggo",
    "Lumajang",
    "Jember",
    "Banyuwangi",
    "Bondowoso",
    "Situbondo",

    // Kata kunci keunggulan
    "harga termurah",
    "harga grosir",
    "harga pabrik",
    "harga distributor",
    "terpercaya",
    "sudah 20 tahun",
    "berpengalaman",
    "berkualitas",
    "terbaik",
    "pelayanan prima",
    "kualitas tinggi",
    "garansi",
    "original",
    "asli",

    // Produk Atap
    "atap",
    "atap baja",
    "atap zincalume",
    "atap galvalume",
    "atap fumira",
    "atap bl 600",
    "atap bl 710",
    "atap click 330",
    "atap compodeck",
    "atap sf 650",
    "atap sf 750",
    "atap gp 550",
    "atap colorcoat",
    "atap minimalis",

    // Produk Pipa
    "pipa",
    "pipa besi",
    "pipa galvanis",
    "pipa pvc",
    "pipa hdpe",
    "pipa air",
    "pipa saluran",
    "sistem perpipaan",

    // Produk Bata & Semen
    "bata",
    "bata merah",
    "bata ringan",
    "semen",
    "semen portland",
    "semen gresik",
    "semen holcim",
    "material pondasi",

    // Jasa Konstruksi
    "kontraktor",
    "jasa bangun rumah",
    "jasa konstruksi",
    "jasa renovasi",
    "general trading",
    "supplier konstruksi",

    // Kata kunci umum
    "bahan bangunan",
    "material konstruksi",
    "proyek bangunan",
    "bangun rumah",
    "renovasi rumah",
    "gedung",
    "pabrik",
    "gudang",
    "ruko",

    // Kata kunci pencarian
    "harga atap fumira 2025",
    "distributor atap murah",
    "toko bahan bangunan terdekat",
    "supplier material konstruksi",
    "grosir pipa besi",
    "beli bata merah",
    "harga semen per sak",

    // Kata kunci spesifik lokasi
    "material bangunan sidoarjo murah",
    "distributor surabaya terpercaya",
    "toko bangunan jawa timur",
    "supplier konstruksi gresik",
    "grosir bahan bangunan mojokerto",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  other: {
    "article:author": "Brilian Rachmad",
    "article:publisher": "Cahaya Bangun Perkasa",
    "geo.region": "ID-JI",
    "geo.placename": "Sidoarjo, Jawa Timur, Indonesia",
    "geo.position": "-7.4478;112.7183",
    "ICBM": "-7.4478, 112.7183",
  },
};

const DashboardPage = () => {
  return (
    <React.Fragment>
      <HomeView />
      <ProductView />
      <FeaturedProductView />
      <TrustIndicators />
    </React.Fragment>
  );
};

export default DashboardPage;