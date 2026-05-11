"use client";

import { motion } from "framer-motion";
import { ChevronDown, Flame, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();

  const scrollToSpiceLevels = () => {
    document
      .getElementById("spice-levels")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const titleClass =
    language === "hy"
      ? "text-[clamp(2.6rem,10vw,6.5rem)]"
      : language === "ru"
        ? "text-[clamp(2.8rem,11vw,5rem)]"
        : "text-[clamp(3rem,12vw,10rem)]";

  return (
    <section className="relative min-h-screen flex items-center justify-center fire-bg overflow-hidden">
      {/* Animated fire particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `hsl(${20 + i * 5}, 100%, ${50 + (i % 3) * 10}%)`,
              left: `${5 + ((i * 4.7) % 90)}%`,
              bottom: "0%",
            }}
            animate={{
              y: [0, -200 - (i % 5) * 50],
              opacity: [1, 0],
              scale: [1, 0.5 + (i % 3) * 0.2],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Brand badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 mt-2"
        >
          <Flame className="w-5 h-5 text-cn-primary animate-pulse" />
          <span className="text-sm font-semibold tracking-wider uppercase text-cn-muted">
            Street Food Reimagined
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`font-display leading-[0.95] tracking-tight mb-6 ${titleClass}`}
        >
          <span className="block fire-text">{t("hero.title")}</span>
          <span className="block text-white">{t("hero.subtitle")}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-cn-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t("hero.description")}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={scrollToSpiceLevels}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Zap className="w-6 h-6" />
              {t("hero.orderNow")}
            </span>

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cn-accent to-cn-primary"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "7", label: "Spice Levels" },
            { value: "50+", label: "Menu Items" },
            { value: "1M+", label: "Challenge Takers" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-cn-primary neon-glow-text">
                {stat.value}
              </div>
              <div className="text-sm text-cn-muted uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cn-bg to-transparent" />
    </section>
  );
}
