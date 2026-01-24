import { FloatingContact, Footer, Navbar } from "@/components/templates";
import { Metadata } from "next";

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
    "Cahaya Bangun Perkasa",
    "General Trading",
    "Kontraktor",
    "Bahan Bangunan",
    "Perusahaan Konstruksi",
    "Material Bangunan",
    "Pipa",
    "Atap",
    "Bata",
    "Semen",
    "Perpipaan",
    "Konstruksi",
    "Bangunan",
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

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default DashboardLayout;
