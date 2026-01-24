'use client'

import { Image } from "@/components/atoms";
import { ContactModal } from "@/components/templates";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { HeroImage } from "public/assets/images";
import { useState } from "react";

export const HomeView = () => {
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  const features = [
    "Distributor Resmi Atap FUMIRA",
    "Pengiriman Seluruh Indonesia",
    "Harga Kompetitif Langsung Pabrik",
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-20 text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={HeroImage}
            alt="Konstruksi bangunan industri"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
          <div className="gradient-overlay" />
        </div>

        {/* Content */}
        <div className="relative section-container py-20 lg:py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Melayani Sejak 2012
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Supplier & Kontraktor{" "}
              <span className="text-accent">Material Bangunan</span>{" "}
              Terpercaya Seluruh Indonesia
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl"
            >
              Menyediakan berbagai kebutuhan atap, bahan konstruksi, dan material bangunan berkualitas tinggi untuk proyek manufaktur, properti, dan institusi pemerintah.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button
                onClick={() => setShowContactModal(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-xl transition-all duration-300 hover:bg-accent/90 hover:scale-105 active:scale-100"
              >
                <Phone className="w-5 h-5" />
                Hubungi Sekarang
              </button>
              <a
                href="#produk"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl transition-all duration-300 hover:bg-white/20"
              >
                Lihat Produk
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-white/90"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </>
  );
};

