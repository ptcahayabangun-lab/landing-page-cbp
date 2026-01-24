'use client'

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [selectedNumber, setSelectedNumber] = useState<string | null>(null);
  
  const phoneNumbers = [
    { number: "0318075779", display: "(031) 807-5779", label: "Telepon Kantor", phoneOnly: true },
    { number: "081357777867", display: "0813-5777-7867", label: "HP 1", phoneOnly: false },
    { number: "085777772867", display: "0857-7777-2867", label: "HP 2", phoneOnly: false },
    { number: "083197777867", display: "0831-9777-7867", label: "HP 3", phoneOnly: false },
  ];

  const whatsappMessage = encodeURIComponent(
    "Halo PT Cahaya Bangun Perkasa, saya ingin bertanya mengenai produk material bangunan Anda."
  );

  const handleClose = () => {
    setSelectedNumber(null);
    onClose();
  };

  const handleBack = () => {
    setSelectedNumber(null);
  };

  const selectedPhone = phoneNumbers.find(p => p.number === selectedNumber);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-card rounded-2xl box-shadow-float z-[70] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary-default p-6 text-white relative">
              {selectedNumber && (
                <button
                  onClick={handleBack}
                  className="absolute top-4 left-4 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-xl font-bold text-center">
                {selectedNumber ? "Pilih Metode Kontak" : "Hubungi Kami"}
              </h3>
              <p className="text-primary-foreground/80 text-sm mt-1 text-center">
                {selectedNumber 
                  ? `${selectedPhone?.display}` 
                  : "Pilih nomor yang ingin Anda hubungi"}
              </p>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-3">
              <AnimatePresence mode="wait">
                {!selectedNumber ? (
                  <motion.div
                    key="numbers"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-3"
                  >
                    {phoneNumbers.map((phone) => (
                      <button
                        key={phone.number}
                        onClick={() => {
                          if (phone.phoneOnly) {
                            window.location.href = `tel:${phone.number}`;
                          } else {
                            setSelectedNumber(phone.number);
                          }
                        }}
                        className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-300 hover:border-primary-default hover:bg-primary-default/5 transition-all group text-left cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary-default transition-colors">
                          <Phone className="w-5 h-5 text-primary-default group-hover:text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-foreground">{phone.label}</p>
                          <p className="text-muted-foreground text-sm">{phone.display}</p>
                        </div>
                        {phone.phoneOnly && (
                          <span className="px-2 py-1 bg-gray-200 text-gray-darker text-xs font-medium rounded">
                            Telepon
                          </span>
                        )}
                      </button>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="options"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col gap-4"
                  >
                    {/* Phone Call */}
                    <a
                      href={`tel:${selectedNumber}`}
                      className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-300 hover:border-primary-default hover:bg-primary-default/5 transition-all group"
                    >
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary-default group-hover:text-gray-darker transition-colors">
                        <Phone className="w-6 h-6 text-primary-default group-hover:text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-foreground">Telepon (Pulsa)</p>
                        <p className="text-muted-foreground text-sm">Hubungi langsung via telepon</p>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/62${selectedNumber.slice(1)}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-300 hover:border-success-default hover:bg-success-default/5 transition-all group"
                    >
                      <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center group-hover:bg-success-default transition-colors">
                        <MessageCircle className="w-6 h-6 text-success-default group-hover:text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-foreground">Chat WhatsApp</p>
                        <p className="text-muted-foreground text-sm">Respon lebih cepat</p>
                      </div>
                      <span className="px-3 py-1 bg-success-default text-white text-xs font-semibold rounded-full">
                        Rekomendasi
                      </span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

