import { ProductDetailView } from "@/packages/product/presentation/view";
import { Metadata } from "next";
import { fumiraProducts } from "public/assets/data/products";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({ params }: ProductPageProps): Promise<Metadata> => {
  const { id } = await params;
  const product = fumiraProducts.find(p => p.id === id);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | Cahaya Bangun Perkasa",
      description: "Produk yang Anda cari tidak dapat ditemukan. Kembali ke halaman produk untuk melihat koleksi lengkap produk material bangunan kami.",
    };
  }

  const title = `${product.name} | ${product.category} - Cahaya Bangun Perkasa`;
  const description = `${product.description.substring(0, 160)}... Pelajari lebih lanjut tentang ${product.name} dan keunggulannya.`;

  return {
    title,
    description,
    metadataBase: new URL("https://www.ptcahayabangunperkasa.com"),
    alternates: {
      canonical: `/product/${product.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.ptcahayabangunperkasa.com/product/${product.id}`,
      siteName: "Cahaya Bangun Perkasa | General Trading and Contractor",
      images: [
        {
          url: `/assets/images/product/fumira/${product.image}.png`,
          width: 1200,
          height: 630,
          alt: `${product.name} - ${product.category}`,
        },
      ],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/assets/images/product/fumira/${product.image}.png`],
    },
    authors: [
      {
        name: "Brilian Rachmad",
        url: "https://brilianrachmad.vercel.app/",
      },
    ],
    publisher: "Cahaya Bangun Perkasa",
    keywords: [
      // Nama perusahaan
      "Cahaya Bangun Perkasa",
      "PT Cahaya Bangun Perkasa",

      // Nama produk
      product.name,
      `harga ${product.name.toLowerCase()}`,
      `beli ${product.name.toLowerCase()}`,
      `${product.name} sidoarjo`,
      `${product.name} surabaya`,
      `${product.name} jawa timur`,

      // Kategori produk
      product.category,
      `${product.category} berkualitas`,
      `${product.category} terbaik`,

      // Tagline produk
      product.tagline,

      // Lokasi - Sidoarjo
      "Sidoarjo",
      "material bangunan Sidoarjo",
      "distributor Sidoarjo",
      "toko bangunan Sidoarjo",
      "supplier Sidoarjo",

      // Lokasi - Surabaya
      "Surabaya",
      "material bangunan Surabaya",
      "distributor Surabaya",
      "toko bangunan Surabaya",
      "supplier Surabaya",

      // Lokasi - Jawa Timur & sekitarnya
      "Jawa Timur",
      "Pulau Jawa",
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

      // Kata kunci keunggulan
      "harga termurah",
      "harga grosir",
      "harga pabrik",
      "harga distributor",
      "terpercaya",
      "sudah 20 tahun",
      "berpengalaman",
      "berkualitas tinggi",
      "kualitas terbaik",
      "pelayanan prima",
      "garansi",
      "original",
      "asli",
      "murah",
      "promo",

      // Produk terkait
      "Material Bangunan",
      "Atap",
      "Baja",
      "Fumira",
      "Pipa",
      "Bata",
      "Semen",
      "Konstruksi",
      "Bangunan",
      "Indonesia",

      // Jasa & Bisnis
      "General Trading",
      "Kontraktor",
      "Bahan Bangunan",
      "Distributor Atap",
      "Supplier Material",
      "Grosir Bangunan",

      // Kata kunci pencarian spesifik produk
      `harga ${product.name.toLowerCase()} 2025`,
      `${product.name.toLowerCase()} murah`,
      `${product.name.toLowerCase()} grosir`,
      `${product.name.toLowerCase()} distributor`,
      `${product.name.toLowerCase()} sidoarjo harga`,
      `${product.name.toLowerCase()} surabaya harga`,

      // Kata kunci umum
      "proyek bangunan",
      "bangun rumah",
      "renovasi rumah",
      "gedung",
      "pabrik",
      "gudang",
      "ruko",
      "konstruksi rumah",
      "material konstruksi",
    ],
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
    other: {
      "article:author": "Brilian Rachmad",
      "article:publisher": "Cahaya Bangun Perkasa",
      "article:section": product.category,
      "article:tag": product.name,
    },
  };
}

export default ProductDetailView;
