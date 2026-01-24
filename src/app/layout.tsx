import { StateProvider } from "@/shared/context";
import "@/shared/styles/fonts.css";
import "@/shared/styles/globals.css";
import type { Metadata } from "next";
import "react-slideshow-image/dist/styles.css";

export const metadata: Metadata = {
  title: "Cahaya Bangun Perkasa | General Tranding and Contractor",
  description:
    "Cahaya Bangun Perkasa adalah perusahaan yang bergerak di bidang general trading dan kontraktor. Kami berkomitmen untuk memberikan pelayanan yang terbaik dan produk yang berkualitas untuk memenuhi kebutuhan pelanggan. Kami memiliki berbagai macam produk bahan bangunan yang lengkap dan harga yang terjangkau.",
  metadataBase: new URL("https://www.ptcahayabangunperkasa.com"),
  openGraph: {
    title: "Cahaya Bangun Perkasa | General Tranding and Contractor",
    description:
      "Cahaya Bangun Perkasa adalah perusahaan yang bergerak di bidang general trading dan kontraktor. Kami berkomitmen untuk memberikan pelayanan yang terbaik dan produk yang berkualitas untuk memenuhi kebutuhan pelanggan. Kami memiliki berbagai macam produk bahan bangunan yang lengkap dan harga yang terjangkau.",
    url: "https://www.ptcahayabangunperkasa.com",
    siteName: "Cahaya Bangun Perkasa | General Tranding and Contractor",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cahaya Bangun Perkasa | General Tranding and Contractor",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cahaya Bangun Perkasa | General Tranding and Contractor",
    description:
      "Cahaya Bangun Perkasa adalah perusahaan yang bergerak di bidang general trading dan kontraktor. Kami berkomitmen untuk memberikan pelayanan yang terbaik dan produk yang berkualitas untuk memenuhi kebutuhan pelanggan. Kami memiliki berbagai macam produk bahan bangunan yang lengkap dan harga yang terjangkau.",
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
    "PT CBP",

    // Lokasi Utama - Sidoarjo
    "Sidoarjo",
    "material bangunan Sidoarjo",
    "distributor Sidoarjo",
    "toko bangunan Sidoarjo",
    "supplier Sidoarjo",
    "grosir bahan bangunan Sidoarjo",
    "kontraktor Sidoarjo",
    "jasa konstruksi Sidoarjo",

    // Lokasi Utama - Surabaya
    "Surabaya",
    "material bangunan Surabaya",
    "distributor Surabaya",
    "toko bangunan Surabaya",
    "supplier Surabaya",
    "grosir bahan bangunan Surabaya",
    "kontraktor Surabaya",
    "jasa konstruksi Surabaya",

    // Lokasi Jawa Timur & Sekitarnya
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

    // Kata kunci keunggulan & pengalaman
    "harga termurah",
    "harga grosir",
    "harga distributor",
    "harga pabrik",
    "terpercaya",
    "sudah 20 tahun",
    "berpengalaman 20 tahun",
    "berkualitas tinggi",
    "kualitas terbaik",
    "produk original",
    "garansi",
    "pelayanan prima",
    "layanan terbaik",
    "pengiriman cepat",
    "stok lengkap",

    // Produk Utama
    "atap",
    "atap baja ringan",
    "atap zincalume",
    "atap galvalume",
    "atap fumira",
    "atap bl-600",
    "atap bl-710",
    "atap click-330",
    "atap compodeck",
    "atap sf-650",
    "atap sf-750",
    "atap gp-550",
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
    "bata merah press",
    "bata ringan",
    "semen",
    "semen portland",
    "semen gresik",
    "semen holcim",
    "semen padang",
    "material pondasi",

    // Jasa Konstruksi
    "general trading",
    "kontraktor",
    "jasa bangun rumah",
    "jasa konstruksi",
    "jasa renovasi",
    "supplier konstruksi",

    // Kata kunci pencarian populer
    "beli atap fumira",
    "harga atap baja ringan",
    "distributor pipa galvanis",
    "toko bata merah",
    "supplier semen",
    "material bangunan murah",
    "grosir bahan konstruksi",
    "kontraktor rumah",
    "jasa bangun gedung",

    // Kata kunci lokasi spesifik
    "material bangunan sidoarjo murah",
    "distributor surabaya terpercaya",
    "toko bangunan jawa timur",
    "supplier konstruksi gresik",
    "grosir bahan bangunan mojokerto",
    "kontraktor lamongan",
    "jasa renovasi tuban",

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
    "konstruksi",
    "bangunan",
    "Indonesia",
    "Cahaya Bangun Perkasa Indonesia",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="id">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
          precedence="default"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
          precedence="default"
        />
      </head>
      <body>
        <StateProvider>{children}</StateProvider>
      </body>
    </html>
  );
};

export default RootLayout;
