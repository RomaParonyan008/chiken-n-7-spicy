"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface GalleryImage {
  src: string;
  alt: string;
  span?: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1626645738196-c2a72c4a6a05?w=600&h=600&fit=crop",
    alt: "Crispy chicken close-up with sauce dripping",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=600&fit=crop",
    alt: "Stack of spicy chicken wings",
  },
  {
    src: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49e8?w=600&h=600&fit=crop",
    alt: "Street food style chicken with flame",
  },
  {
    src: "https://images.unsplash.com/photo-1606755456206-b2529a2bd39c?w=600&h=600&fit=crop",
    alt: "Loaded fries with cheese and jalapeños",
  },
  {
    src: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&h=600&fit=crop",
    alt: "Crispy golden chicken wings",
  },
  {
    src: "https://images.unsplash.com/photo-1589647363585-f4a7d3887b09?w=600&h=600&fit=crop",
    alt: "Spicy sauce texture close-up",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1529007196863-d07650a3f0ea?w=600&h=600&fit=crop",
    alt: "Chicken burger with fresh ingredients",
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section
      id="gallery"
      className="section-container relative overflow-hidden"
    >
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-sm font-semibold tracking-wider uppercase mb-4"
        >
          {t("gallery.badge")}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-7xl text-text-white mb-4"
        >
          <span className="brand-text">{t("gallery.title1")}</span>{" "}
          {t("gallery.title2")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-muted text-lg"
        >
          {t("gallery.description")}
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-7xl mx-auto">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            onClick={() => setSelectedImage(image)}
            className={`relative rounded-xl overflow-hidden cursor-pointer group min-h-[200px] md:min-h-[250px] ${image.span || ""}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />

            <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-bg-dark/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-bg-dark/95 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl max-h-[90vh]"
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-bg-surface flex items-center justify-center text-text-white hover:bg-primary transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <p className="text-center text-text-muted mt-4">
              {selectedImage.alt}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
