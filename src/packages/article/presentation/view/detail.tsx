'use client'

import { Image } from "@/components/atoms";
import { FloatingContact, Footer, Navbar } from "@/components/templates";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, User } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { articleCategories, getArticleBySlug, getRelatedArticles } from "public/assets/data/articles";
import { useEffect } from "react";

export const ArticleDetailView = () => {
  const { slug } = useParams<{ slug: string }>();
  const {push: navigate} = useRouter();
  
  const article = getArticleBySlug(slug || "");
  const relatedArticles = getRelatedArticles(slug || "", 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-16">
          <div className="section-container text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Artikel Tidak Ditemukan
            </h1>
            <p className="text-gray-800 mb-8">
              Maaf, artikel yang Anda cari tidak tersedia.
            </p>
            <Link
              href="/article"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-default text-white font-medium rounded-lg hover:bg-primary-default/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link artikel berhasil disalin!");
    }
  };

  // Simple markdown-like content renderer
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let listType: "ul" | "ol" | null = null;

    const flushList = () => {
      if (currentList.length > 0 && listType) {
        if (listType === "ul") {
          elements.push(
            <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-gray-800">
              {currentList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
        } else {
          elements.push(
            <ol key={`list-${elements.length}`} className="list-decimal list-inside space-y-2 mb-6 text-gray-800">
              {currentList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          );
        }
        currentList = [];
        listType = null;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (!trimmedLine) {
        flushList();
        return;
      }

      // Headers
      if (trimmedLine.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-foreground mt-10 mb-4">
            {trimmedLine.replace("## ", "")}
          </h2>
        );
      } else if (trimmedLine.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-foreground mt-8 mb-3">
            {trimmedLine.replace("### ", "")}
          </h3>
        );
      } else if (trimmedLine.startsWith("#### ")) {
        flushList();
        elements.push(
          <h4 key={index} className="text-lg font-semibold text-foreground mt-6 mb-2">
            {trimmedLine.replace("#### ", "")}
          </h4>
        );
      }
      // List items
      else if (trimmedLine.startsWith("- ") || trimmedLine.startsWith("* ")) {
        if (listType !== "ul") {
          flushList();
          listType = "ul";
        }
        currentList.push(trimmedLine.replace(/^[-*] /, "").replace(/\*\*(.*?)\*\*/g, "$1"));
      } else if (/^\d+\. /.test(trimmedLine)) {
        if (listType !== "ol") {
          flushList();
          listType = "ol";
        }
        currentList.push(trimmedLine.replace(/^\d+\. /, "").replace(/\*\*(.*?)\*\*/g, "$1"));
      }
      // Table
      else if (trimmedLine.startsWith("|")) {
        flushList();
        // Skip table processing for simplicity, just show as text
        if (!trimmedLine.includes("---")) {
          const cells = trimmedLine.split("|").filter(c => c.trim());
          if (cells.length > 0) {
            elements.push(
              <div key={index} className="grid grid-cols-2 gap-4 py-2 border-b border-gray-300 text-sm">
                {cells.map((cell, i) => (
                  <span key={i} className={i === 0 ? "font-medium text-foreground" : "text-gray-800"}>
                    {cell.trim()}
                  </span>
                ))}
              </div>
            );
          }
        }
      }
      // Regular paragraph
      else {
        flushList();
        // Handle bold text
        const formattedLine = trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        elements.push(
          <p 
            key={index} 
            className="text-gray-800 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: formattedLine }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-8">
        <div className="section-container">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <button
              onClick={() => navigate("/artikel")}
              className="inline-flex items-center gap-2 text-gray-800 hover:text-primary-default transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Blog
            </button>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-10"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              {getCategoryLabel(article.category)}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            
            {/* Meta */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-800">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary-default" />
                <span>{article.author}</span>
              </div>
              <span className="hidden sm:block">•</span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary-default" />
                <span>{formatDate(article.date)}</span>
              </div>
              <span className="hidden sm:block">•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-default" />
                <span>{article.readTime} baca</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="aspect-video rounded-2xl overflow-hidden box-shadow">
              <Image
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {renderContent(article.content)}
            </motion.div>

            {/* Share Button */}
            <div className="mt-12 pt-8 border-t border-gray-300">
              <div className="flex items-center justify-between">
                <span className="text-gray-800">Bagikan artikel ini:</span>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-foreground rounded-lg hover:bg-gray-100/80 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Bagikan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-100/30">
          <div className="section-container">
            <h2 className="text-2xl font-bold text-foreground text-center mb-10">
              Artikel Terkait
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((related, index) => (
                <motion.article
                  key={related.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/article/${related.slug}`} className="block">
                    <div className="bg-card rounded-xl overflow-hidden box-shadow hover:shadow-lg transition-all duration-300">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-foreground mb-2 group-hover:text-primary-default transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary-default text-sm font-medium">
                          <span>Baca Selengkapnya</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingContact />
    </div>
  );
};

