'use client'

import { motion, useInView } from "framer-motion";
import {
  CircleDot,
  Droplet,
  Fence,
  Grid3X3,
  Home,
  Layers,
  Shield,
  Square,
  Sun,
  Waves
} from "lucide-react";
import { useRef } from "react";

export const ProductView = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const categories = [
    {
      title: "Atap Series",
      products: [
        { name: "Zincalume", icon: Home, description: "Atap metal anti karat premium" },
        { name: "Fumira", icon: Shield, description: "Zinc-aluminium coating terbaik", featured: true },
        { name: "Majadeck", icon: Layers, description: "Rangka atap metal kokoh" },
        { name: "Bitumen", icon: Square, description: "Atap genteng fleksibel" },
        { name: "Transparan", icon: Sun, description: "Atap tembus cahaya" },
        { name: "Polycarbonate", icon: Layers, description: "Atap plastik berkualitas" },
        { name: "PVC", icon: Grid3X3, description: "Atap PVC ekonomis" },
        { name: "Fiber (FRP)", icon: CircleDot, description: "Atap fiberglass kuat" },
      ],
    },
    {
      title: "Construction Essentials",
      products: [
        { name: "Bondek/Decking", icon: Grid3X3, description: "Plat lantai baja" },
        { name: "Genteng Metal", icon: Home, description: "Genteng baja ringan" },
        { name: "Kalsiboard", icon: Square, description: "Papan kalsium silikat" },
        { name: "Wiremesh", icon: Grid3X3, description: "Besi anyaman beton" },
        { name: "Waterstop PVC", icon: Droplet, description: "Seal waterproofing" },
        { name: "Kawat Silet", icon: Waves, description: "Pengaman area" },
        { name: "Pagar BRC", icon: Fence, description: "Pagar besi welded" },
        { name: "ACP", icon: Layers, description: "Panel aluminium komposit" },
      ],
    },
  ];

  return (
    <section id="produk" className="py-24 bg-background">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full mb-4">
            KATALOG PRODUK
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Material Bangunan Lengkap
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berbagai pilihan material berkualitas untuk kebutuhan konstruksi Anda
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            className="mb-16 last:mb-0"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-accent rounded-full" />
              {category.title}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className={`card-product group cursor-pointer ${
                    product.featured
                      ? "border-accent bg-gradient-to-br from-accent/5 to-transparent"
                      : ""
                  }`}
                >
                  {product.featured && (
                    <span className="absolute -top-2 -right-2 px-2 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-md">
                      Unggulan
                    </span>
                  )}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                      product.featured
                        ? "bg-accent/20 text-accent"
                        : "bg-primary-default/10 text-primary-default group-hover:bg-primary-default group-hover:text-white"
                    }`}
                  >
                    <product.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-foreground mb-1">{product.name}</h4>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

