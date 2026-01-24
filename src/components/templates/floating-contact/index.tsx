'use client'

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

export const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "0318075779";
  const whatsappNumber = "6281357777867";
  const whatsappMessage = encodeURIComponent(
    "Halo PT Cahaya Bangun Perkasa, saya ingin bertanya mengenai produk material bangunan Anda."
  );

  return (
    <div className="floating-action">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Phone Button */}
            <motion.a
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              href={`tel:${phoneNumber}`}
              className="w-14 h-14 rounded-full bg-primary-default flex items-center justify-center box-shadow-elevated hover:scale-110 transition-transform"
            >
              <Phone className="w-6 h-6 text-primary-100" />
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-success-default flex items-center justify-center box-shadow-elevated hover:scale-110 transition-transform animate-pulse-glow"
            >
              <MessageCircle className="w-6 h-6 text-success-100" />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center box-shadow-float transition-all duration-300 cursor-pointer ${
          isOpen ? "bg-foreground rotate-45" : "bg-accent"
        }`}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-background" />
        ) : (
          <MessageCircle className="w-7 h-7 text-accent-foreground" />
        )}
      </motion.button>

      {/* Label */}
      {!isOpen && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -left-28 bottom-4 px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap box-shadow"
        >
          Hubungi Kami
        </motion.span>
      )}
    </div>
  );
};

