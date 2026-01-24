'use client'

import { Image } from "@/components/atoms";
import { ContactModal } from "@/components/templates/contact-modal";
import { FloatingContact } from "@/components/templates/floating-contact";
import { Navbar } from "@/components/templates/navbar";
import { motion } from "framer-motion";
import {
  Award,
  Building2,
  ChevronRight,
  Clock,
  Globe,
  Handshake,
  Leaf,
  Lightbulb,
  MessageCircle,
  Phone,
  Target,
  Users,
  Zap
} from "lucide-react";
import { useState } from "react";

// Images
import blueprintPlanning from "public/assets/images/about/blueprint-planning.png";
import constructionSite from "public/assets/images/about/construction-site.png";
import mepSystems from "public/assets/images/about/mep-systems.png";
import teamMeeting from "public/assets/images/about/team-meeting.png";

export const NewProfileView = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [activeValue, setActiveValue] = useState<number | null>(null);

  const focusAreas = [
    {
      icon: Building2,
      title: "Pekerjaan Sipil & Arsitektur",
      description: "Solusi bangunan kokoh dengan desain fungsional yang memenuhi standar tertinggi.",
      image: blueprintPlanning,
    },
    {
      icon: Zap,
      title: "Mekanikal & Elektrikal (ME)",
      description: "Sistem utilitas bangunan yang terintegrasi untuk efisiensi operasional optimal.",
      image: mepSystems,
    },
    {
      icon: Target,
      title: "EPC (Engineering Procurement Construction)",
      description: "Layanan komprehensif dari perencanaan hingga serah terima proyek.",
      image: constructionSite,
    },
    {
      icon: Leaf,
      title: "Tata Lingkungan",
      description: "Komitmen terhadap pembangunan yang berkelanjutan dan ramah lingkungan.",
      image: teamMeeting,
    },
  ];

  const missions = [
    {
      icon: Globe,
      title: "Ekonomi Nasional",
      description: "Mendukung program pemerintah dalam meningkatkan perekonomian bangsa melalui roda bisnis yang aktif.",
    },
    {
      icon: Users,
      title: "SDM Profesional",
      description: "Menciptakan lapangan kerja dan membangun budaya kerja yang mengedepankan kualitas dan profesionalisme.",
    },
    {
      icon: Target,
      title: "Global Readiness",
      description: "Menyiapkan standar kebutuhan perusahaan yang tangguh untuk menjaga kestabilan di era pasar bebas (Free Trade).",
    },
  ];

  const coreValues = [
    {
      icon: Handshake,
      title: "Orientasi Kemitraan",
      description: "Menjaga kepercayaan dan hubungan jangka panjang dengan seluruh stakeholder.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Target,
      title: "Efektivitas & Efisiensi Solusi",
      description: "Memberikan solusi tepat guna untuk setiap tantangan bisnis yang dihadapi.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Lightbulb,
      title: "Inovasi Berkesinambungan",
      description: "Inovasi tanpa henti untuk daya saing yang sehat dan berkelanjutan.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Award,
      title: "Kualitas & Profesionalisme",
      description: "Tenaga kerja handal dan berkompeten di bidangnya masing-masing.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "Komitmen Pelayanan",
      description: "Hasil kerja terbaik, tepat waktu, dan sesuai kesepakatan dengan klien.",
      color: "from-red-500 to-red-600",
    },
  ];

  const stats = [
    { value: "12+", label: "Tahun Pengalaman" },
    { value: "500+", label: "Proyek Selesai" },
    { value: "100+", label: "Klien Puas" },
    { value: "50+", label: "Tim Profesional" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-default/5 via-background to-accent/5" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-default/30 to-transparent" />
        </div>

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:pt-8 pt-0"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-default/10 text-primary-default rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                Sejak 13 Desember 2012
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Membangun Masa Depan dengan{" "}
                <span className="text-primary-default">Integritas</span> dan{" "}
                <span className="text-accent">Inovasi</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                PT. Cahaya Bangun Perkasa hadir sejak 2012 sebagai mitra terpercaya 
                dalam bidang General Trading & Contractor untuk mendukung akselerasi 
                pembangunan nasional.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="text-center p-4 bg-card rounded-xl box-shadow"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary-default mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowContactModal(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-default text-white font-semibold rounded-full hover:bg-primary-default/90 transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Hubungi Kami
                </button>
                <a
                  href="https://wa.me/6281357777867?text=Halo%20PT%20Cahaya%20Bangun%20Perkasa%2C%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20konstruksi."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-success-default text-white font-semibold rounded-full hover:bg-success-default/90 transition-all hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden box-shadow-elevated">
                <Image
                  src={teamMeeting}
                  alt="Tim PT. Cahaya Bangun Perkasa"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-default/80 to-transparent" />
                <div className="absolute bottom-4 left-44 right-6 text-white">
                  <p className="text-lg font-semibold mb-1">General Trading & Contractor</p>
                  <p className="text-sm text-white/80">
                    Solusi terpadu untuk kebutuhan konstruksi dan material bangunan Anda
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl box-shadow-elevated"
              >
                <div className="text-3xl font-bold">12+</div>
                <div className="text-sm">Tahun Berpengalaman</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section id="tentang" className="py-20 bg-muted/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-default/10 text-primary-default rounded-full text-sm font-medium mb-4">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pilar dalam Industri Konstruksi dan Pengadaan
            </h2>
            <p className="text-muted-foreground text-lg">
              Didirikan pada 13 Desember 2012, kami berkomitmen menjadi pilar dalam 
              industri konstruksi dan pengadaan material bangunan berkualitas tinggi 
              untuk seluruh Indonesia.
            </p>
          </motion.div>

          {/* Focus Areas Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl box-shadow hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video relative">
                  <Image
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-default/90 via-primary-default/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <area.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{area.title}</h3>
                  </div>
                  <p className="text-white/90 text-sm">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-default text-white rounded-2xl p-8 md:p-10 h-full box-shadow-elevated">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Visi Kami
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-6">
                  Menuju Keunggulan Bisnis Terpadu
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Menjadi perusahaan yang mengedepankan aktivitas bisnis terpadu dan 
                  terprogram demi memberikan hasil optimal serta kepuasan pelanggan 
                  melalui hubungan kemitraan yang harmonis.
                </p>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <Handshake className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">Kemitraan Harmonis</p>
                      <p className="text-sm text-white/70">
                        Membangun hubungan jangka panjang
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Misi Kami
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Tiga Pilar Misi Perusahaan
              </h3>

              <div className="space-y-6">
                {missions.map((mission, index) => (
                  <motion.div
                    key={mission.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-5 p-5 bg-card rounded-xl box-shadow hover:shadow-md transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary-default/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-default group-hover:text-white transition-colors">
                      <mission.icon className="w-7 h-7 text-primary-default group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">{mission.title}</h4>
                      <p className="text-muted-foreground text-sm">{mission.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-b from-primary-default/5 to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Nilai-Nilai Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Lima Pilar Nilai Perusahaan
            </h2>
            <p className="text-muted-foreground text-lg">
              Nilai-nilai yang menjadi fondasi dalam setiap langkah dan keputusan bisnis kami.
            </p>
          </motion.div>

          {/* Values Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <motion.a
                href={`https://wa.me/6281357777867?text=Halo%20PT%20Cahaya%20Bangun%20Perkasa%2C%20saya%20ingin%20lebih%20mengetahui%20mengenai%20${encodeURIComponent(value.title)}`}
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setActiveValue(index)}
                onMouseLeave={() => setActiveValue(null)}
                className={`relative bg-card rounded-2xl p-6 box-shadow cursor-pointer transition-all duration-300 ${
                  activeValue === index ? "scale-105 shadow-lg" : ""
                }`}
              >
                {/* Gradient Top Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${value.color}`}
                />

                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 text-white`}
                >
                  <value.icon className="w-7 h-7" />
                </div>

                <h4 className="font-bold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>

                {/* Hover Indicator */}
                <div
                  className={`mt-4 flex items-center gap-2 text-sm font-medium transition-all ${
                    activeValue === index ? "text-primary-default opacity-100" : "opacity-0"
                  }`}
                >
                  <span>Pelajari Lebih</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-primary-default box-shadow-elevated"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Siap Memulai Proyek Anda?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                Konsultasikan kebutuhan konstruksi dan material bangunan Anda dengan tim 
                profesional kami. Kami siap membantu mewujudkan proyek impian Anda.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setShowContactModal(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-default font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105 box-shadow"
                >
                  <Phone className="w-5 h-5" />
                  Telepon Sekarang
                </button>
                <a
                  href="https://wa.me/6281357777867?text=Halo%20PT%20Cahaya%20Bangun%20Perkasa%2C%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20konstruksi."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-success-default text-white font-semibold rounded-full hover:bg-success-default/90 transition-all hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat via WhatsApp
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(031) 807-5779</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>0813-5777-7867</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingContact />
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </div>
  );
};

