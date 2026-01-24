'use client'

import { Image } from "@/components/atoms";
import { FloatingContact, Footer, Navbar } from "@/components/templates";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { fumiraProducts, productCategories } from "public/assets/data/products";
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

export const ProductListView = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Semua" as const);

  const filteredProducts = activeCategory === "Semua"
    ? fumiraProducts
    : fumiraProducts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-default/5 to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Produk <span className="text-primary-default">FUMIRA</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Leading Innovation of Galvanized Steel - Produk baja galvanis berkualitas tinggi 
              dengan teknologi Jepang untuk berbagai kebutuhan konstruksi Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-gray-100 shadow">
        <div className="section-container">
          <div className="flex flex-wrap gap-2 justify-center">
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-primary-default text-white"
                    : "bg-gray-200 text-primary-default/70 hover:bg-gray-200/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/product/${product.id}`}
                  className="group block bg-card rounded-2xl overflow-hidden box-shadow hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={imageMap[product.image]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary-default/10 text-primary-default text-xs font-semibold rounded-full mb-3">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary-default transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.tagline}
                    </p>
                    <div className="flex items-center text-primary-default font-medium text-sm">
                      Lihat Detail
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

