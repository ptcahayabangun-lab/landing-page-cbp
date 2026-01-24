"use client";

import { dataCategories } from "@/shared/constants/categories";
import classNames from "clsx";
import { motion } from "framer-motion";
import { Boxes } from "lucide-react";
import { FC, useState } from "react";

export const ProductSectionCategories: FC<{
  itemClassName?: string;
  className?: string;
}> = ({ itemClassName, className }) => {
  const [activeCategory, setActiveCategory] = useState("Semua Kategori");

  return (
    <div
      className={classNames([
        className,
        "flex gap-3 overflow-x-auto w-full pb-3 no-scrollbar mb-6 px-6 md:px-10",
      ])}
      style={{
        scrollSnapType: "x mandatory",
      }}
    >
      {[{ label: "Semua Kategori", icon: Boxes }, ...dataCategories].map(
        (kategori, index) => {
          const Icon = kategori.icon;
          const isActive = activeCategory === kategori.label;

          return (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(kategori.label)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={classNames(
                itemClassName,
                "shrink-0 flex items-center gap-2 px-4 py-2 text-sm border rounded-full whitespace-nowrap transition cursor-pointer",
                {
                  "bg-orange-100 border-orange-300 text-orange-600 dark:bg-orange-300/10 dark:text-orange-300 dark:border-orange-500":
                    isActive,
                  "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-300/5":
                    !isActive,
                }
              )}
              style={{
                scrollSnapAlign: "center",
              }}
            >
              <Icon
                className={classNames(
                  "w-4 h-4",
                  {
                    "text-orange-600 dark:text-orange-300": isActive,
                  },
                  "text-orange-500"
                )}
              />
              {kategori.label}
            </motion.button>
          );
        }
      )}
    </div>
  );
};
