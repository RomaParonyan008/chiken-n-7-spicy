"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Flame, ArrowRight, Utensils, Plus } from "lucide-react";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop";
import { products, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function Menu() {
  const { addItem } = useCart();
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  return (
    <section className="section-container relative bg-bg-surface">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-sm font-semibold tracking-wider uppercase mb-4"
          >
            {t("menu.title")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-text-white mb-4"
          >
            {t("menu.subtitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg"
          >
            {t("menu.description")}
          </motion.p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-brand text-white shadow-lg"
                  : "bg-bg-dark text-text-muted hover:text-text-white border border-text-muted/20"
              }`}
            >
              {t(`menu.${cat.id}`)}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-bg-dark rounded-2xl overflow-hidden card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-bg-dark/90 backdrop-blur-sm">
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-brand">
                  <Flame className="w-4 h-4 text-white" />
                  <span className="text-sm font-bold text-white">
                    Level {product.spiceLevel ?? 0}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-2xl text-text-white group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-xl font-bold text-primary">
                    ${product.basePrice}
                  </span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex gap-2">
                  <Link
                    href={`/product/${product.id}`}
                    className="flex-1 btn-primary py-2 rounded-lg flex items-center justify-center"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.basePrice,
                        spiceLevel: product.spiceLevel ?? 0,
                        customizations: [],
                        image: product.image,
                      })
                    }
                    className="flex-1 btn-primary py-2 rounded-lg flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && filteredProducts.length > 8 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-bg-dark text-text-white rounded-full font-bold hover:bg-gradient-brand transition-all border border-text-muted/20 hover:border-transparent"
            >
              {t("menu.more")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
