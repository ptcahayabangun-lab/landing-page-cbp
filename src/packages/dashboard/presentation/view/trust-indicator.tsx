'use client'

import { motion, useInView } from "framer-motion";
import { Building2, Factory, Landmark, MapPin } from "lucide-react";
import { useRef } from "react";

export const TrustIndicators = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "20+", label: "Tahun Pengalaman", icon: Factory },
    { value: "500+", label: "Proyek Selesai", icon: Building2 },
    { value: "50+", label: "Kota Terlayani", icon: MapPin },
    { value: "100%", label: "Kepuasan Pelanggan", icon: Landmark },
  ];

  const clients = [
    { type: "Manufacturers", description: "Pabrik dan industri manufaktur" },
    { type: "Property Projects", description: "Developer properti dan perumahan" },
    { type: "Government Institutions", description: "Instansi pemerintah dan BUMN" },
  ];

  return (
    <section id="tentang" className="py-24 bg-muted/50">
      <div ref={ref} className="section-container">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 box-shadow text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary-default/10 flex items-center justify-center mb-4">
                <stat.icon className="w-7 h-7 text-primary-default" />
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-primary-default mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Dipercaya Berbagai Sektor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami telah melayani berbagai jenis proyek di seluruh Jawa dan Indonesia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.type}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-card rounded-2xl p-8 box-shadow border-l-4 border-primary-default hover:box-shadow-elevated transition-shadow"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">
                {client.type}
              </h3>
              <p className="text-muted-foreground">{client.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary-default/10 rounded-full">
            <MapPin className="w-5 h-5 text-primary-default" />
            <span className="font-semibold text-foreground">
              Pengiriman ke Seluruh Indonesia
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

