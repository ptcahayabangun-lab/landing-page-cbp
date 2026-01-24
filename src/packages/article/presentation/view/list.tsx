'use client';

import { Image } from "@/components/atoms";
import { FloatingContact, Footer, Navbar } from "@/components/templates";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { articleCategories, getArticlesByCategory } from "public/assets/data/articles";
import { useState } from "react";

export const ArticleListView = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const filteredArticles = getArticlesByCategory(activeCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getCategoryLabel = (categoryId: string) => {
    const category = articleCategories.find(c => c.id === categoryId);
    return category?.name || categoryId;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary-default/5 to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-default/10 text-primary-default rounded-full text-sm font-medium mb-4">
              Artikel & Insight
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog Material Bangunan
            </h1>
            <p className="text-lg text-gray-700">
              Tips, panduan, dan informasi terbaru seputar material bangunan dan inovasi konstruksi untuk proyek Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-gray-100 shadow sticky top-20 bg-background/95 backdrop-blur-md z-30">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-2">
            {articleCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-primary-default text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-200/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/article/${article.slug}`} className="block">
                  <div className="bg-card rounded-2xl overflow-hidden box-shadow hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                          {getCategoryLabel(article.category)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary-default transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-gray-700 text-sm mb-4 line-clamp-3 flex-1">
                        {article.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-gray-700 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-primary-default" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-primary-default" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-primary-default font-medium text-sm group-hover:gap-3 transition-all">
                        <span>Baca Selengkapnya</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-700 text-lg">
                Belum ada artikel dalam kategori ini.
              </p>
            </div>
          )}

          {/* Pagination Placeholder */}
          {/* <div className="flex justify-center items-center gap-2 mt-12">
            <button className="w-10 h-10 rounded-lg bg-primary-default text-white font-medium">
              1
            </button>
            <button className="w-10 h-10 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-200/80">
              2
            </button>
            <button className="w-10 h-10 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-200/80">
              3
            </button>
            <span className="px-2 text-gray-700">...</span>
            <button className="w-10 h-10 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-200/80">
              10
            </button>
          </div> */}
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

