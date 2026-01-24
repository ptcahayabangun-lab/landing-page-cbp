'use client'

import { Image } from "@/components/atoms";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoAll } from "public/assets/images";
import { useState } from "react";
import { ContactModal } from "../contact-modal";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/profile", label: "Tentang Kami" },
    { href: "/product", label: "Produk" },
    { href: "/article", label: "Artikel" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 z-50">
        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl box-shadow px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={LogoAll} 
                alt="PT Cahaya Bangun Perkasa" 
                height={100}
                width={212}
                className="h-10 md:h-12 w-auto rounded-xl min-w-[212px]" 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                link.href.startsWith("/#") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive(link.href)
                        ? "bg-primary-default text-white"
                        : "text-foreground/80 hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive(link.href)
                        ? "bg-primary-default text-white"
                        : "text-foreground/80 hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setShowContactModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 cursor-pointer bg-accent text-accent-foreground font-semibold rounded-full transition-all duration-200 hover:bg-accent/90 hover:scale-105"
              >
                Kontak Kami
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center gap-2 text-foreground/80 font-medium"
            >
              MENU
              {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 max-w-7xl mx-auto bg-card/98 backdrop-blur-md rounded-2xl box-shadow overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  link.href.startsWith("/#") ? (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="py-4 px-2 text-foreground/80 font-medium hover:text-primary transition-colors border-b border-gray-300/50 last:border-0"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="py-4 px-2 text-foreground/80 font-medium hover:text-primary transition-colors border-b border-gray-300/50 last:border-0"
                    >
                      {link.label}
                    </Link>
                  )
                ))}
                
                <div className="flex items-center gap-3 mt-4 pt-2">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setShowContactModal(true);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-accent-foreground font-semibold rounded-full transition-all duration-200 hover:bg-accent/90"
                  >
                    Kontak Kami
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </>
  );
};

