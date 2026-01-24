'use client'

import { ContactModal } from "@/components/templates";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Award, Droplets, Leaf, Phone, Shield } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export const FeaturedProductView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  const features = [
    {
      icon: Shield,
      title: "Anti Karat",
      description: "Lapisan zinc aluminium premium untuk ketahanan maksimal",
    },
    {
      icon: Award,
      title: "Garansi Pabrik",
      description: "Jaminan kualitas langsung dari produsen terpercaya",
    },
    {
      icon: Leaf,
      title: "Ramah Lingkungan",
      description: "Material dapat didaur ulang dengan 100% recyclable",
    },
    {
      icon: Droplets,
      title: "Tahan Cuaca",
      description: "Didesain untuk iklim tropis Indonesia",
    },
  ];

  const variants = [
    "FUMIRAGRIP",
    "COLORCOAT",
    "COMPODECK",
    "CLICK-330",
  ];

  return (
    <>
      <section id="fumira" className="relative py-24 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-default via-primary-default/95 to-primary-default/90" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div ref={ref} className="relative section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-bold rounded-full mb-6">
                PRODUK UNGGULAN
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Produk FUMIRA
              </h2>

              <p className="text-lg text-white/80 mb-8">
                Leading Innovation of Galvanized Steel. Dengan teknologi Zinc-Aluminium coating terdepan dari Jepang, 
                produk FUMIRA memberikan perlindungan maksimal dengan umur panjang hingga 25+ tahun.
              </p>

              {/* Variants */}
              <div className="flex flex-wrap gap-3 mb-8">
                {variants.map((variant, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg border border-white/20"
                  >
                    {variant}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowContactModal(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-xl transition-all duration-300 hover:bg-accent/90 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Dapatkan Penawaran
                </button>
                
                <Link
                  href="/product"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20"
                >
                  Lihat Semua Produk
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/15 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/70">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </>
  );
};

