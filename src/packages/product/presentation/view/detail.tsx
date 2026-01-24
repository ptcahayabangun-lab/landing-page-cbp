'use client'

import { Image } from "@/components/atoms";
import { ContactModal, FloatingContact, Navbar } from "@/components/templates";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Phone } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { fumiraProducts } from "public/assets/data/products";
import { useState } from "react";

// Import all product images
import bl600Img from "public/assets/images/product/fumira/bl-600.png";
import bl710Img from "public/assets/images/product/fumira/bl-710.png";
import click330Img from "public/assets/images/product/fumira/click-330.png";
import colorcoatImg from "public/assets/images/product/fumira/colorcoat.png";
import compodeckImg from "public/assets/images/product/fumira/compodeck.png";
import fumiraGripImg from "public/assets/images/product/fumira/fumiragrip-advantages.png";
import fumiraspanImg from "public/assets/images/product/fumira/fumiraspan.png";
import gp550Img from "public/assets/images/product/fumira/gp-550.png";
import sf650Img from "public/assets/images/product/fumira/sf-650.png";
import sf750Img from "public/assets/images/product/fumira/sf-750.png";

const imageMap: Record<string, string> = {
  "fumiragrip-advantages": fumiraGripImg,
  "colorcoat": colorcoatImg,
  "compodeck": compodeckImg,
  "click-330": click330Img,
  "bl-600": bl600Img,
  "sf-650": sf650Img,
  "sf-750": sf750Img,
  "gp-550": gp550Img,
  "bl-710": bl710Img,
  "fumiraspan": fumiraspanImg,
};

export const ProductDetailView = () => {
  const { id } = useParams();
  const [showContactModal, setShowContactModal] = useState(false);
  
  const product = fumiraProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-16 section-container text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Produk tidak ditemukan</h1>
          <Link href="/product" className="text-primary-default hover:underline">
            Kembali ke halaman produk
          </Link>
        </div>
      </div>
    );
  }

  // Get related products (same category, excluding current)
  const relatedProducts = fumiraProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <section className="pt-28 pb-4">
        <div className="section-container">
          <Link 
            href="/product"
            className="inline-flex items-center gap-2 text-gray-100-foreground hover:text-primary-default transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Produk
          </Link>
        </div>
      </section>

      {/* Product Hero */}
      <section className="pb-16">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100"
            >
              <Image
                src={imageMap[product.image as keyof typeof imageMap]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary-default/10 text-primary-default text-sm font-semibold rounded-full mb-4">
                {product.category}
              </span>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-2">
                {product.name}
              </h1>
              
              <p className="text-xl text-primary-default font-medium mb-6">
                {product.tagline}
              </p>
              
              <p className="text-gray-100-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              <button
                onClick={() => setShowContactModal(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-xl transition-all duration-300 hover:bg-accent/90 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Minta Penawaran Harga
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-gray-100/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Keunggulan {product.name}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {product.advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl"
                >
                  <div className="w-6 h-6 rounded-full bg-success-default/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-success-default" />
                  </div>
                  <p className="text-foreground">{advantage}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specifications */}
      {product.specifications && product.specifications.length > 0 && (
        <section className="py-16">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Spesifikasi Teknis
              </h2>
              
              <div className="bg-card rounded-2xl overflow-hidden box-shadow">
                <table className="w-full">
                  <tbody>
                    {product.specifications.map((spec, index) => (
                      <tr 
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-100/30" : ""}
                      >
                        <td className="px-6 py-4 font-medium text-foreground border-r border-gray-200">
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 text-gray-100-foreground">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-100/50">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Produk Terkait
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct, index) => (
                <motion.div
                  key={relProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/product/${relProduct.id}`}
                    className="group block bg-card rounded-2xl overflow-hidden box-shadow hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <Image
                        src={imageMap[relProduct.image]}
                        alt={relProduct.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-foreground group-hover:text-primary-default transition-colors">
                        {relProduct.name}
                      </h3>
                      <p className="text-gray-100-foreground text-sm">
                        {relProduct.tagline}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary-default border-y border-gray-200/20">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tertarik dengan {product.name}?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Hubungi tim kami untuk mendapatkan penawaran terbaik dan konsultasi gratis 
            mengenai kebutuhan material bangunan Anda.
          </p>
          <button
            onClick={() => setShowContactModal(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-xl transition-all duration-300 hover:bg-accent/90 hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Hubungi Kami Sekarang
          </button>
        </div>
      </section>

      <FloatingContact />
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </div>
  );
};

