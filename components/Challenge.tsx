"use client";

import { motion } from "framer-motion";
import { Skull, AlertTriangle, Timer, Trophy, Flame } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

export default function Challenge() {
  const { t } = useLanguage();
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      left: number;
      hue: number;
      lightness: number;
      y: number;
      scale: number;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    const newParticles = [...Array(30)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      hue: 15 + i * 3,
      lightness: 45 + (i % 4) * 8,
      y: 400 + Math.random() * 200,
      scale: 0.3 + Math.random() * 0.4,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      id="student-offer"
      className="relative overflow-hidden py-32 bg-gradient-to-b from-bg-dark via-bg-surface to-bg-dark"
    >
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-3 h-3 rounded-full blur-sm"
            style={{
              background: `hsl(${p.hue}, 100%, ${p.lightness}%)`,
              left: `${p.left}%`,
              bottom: "-20px",
            }}
            animate={{
              y: [0, -p.y],
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.3],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[40px] border border-primary/20 bg-bg-surface/80 backdrop-blur-2xl p-8 md:p-16 shadow-[0_0_80px_rgba(255,60,0,0.15)]"
        >
          {/* Glow */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full" />

          {/* Badge */}
          <div className="flex justify-center mb-8 relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-xl"
            >
              <Flame className="w-5 h-5 text-primary animate-pulse" />

              <span className="uppercase tracking-[0.25em] text-xs font-black text-primary">
                {t("student.badge")}
              </span>
            </motion.div>
          </div>

          {/* Title */}
          <div className="text-center mb-14 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display leading-[0.85] mb-8"
            >
              <span className="block text-[clamp(3rem,8vw,7rem)] text-text-white">
                {t("student.title")}
              </span>

              <span className="block text-[clamp(3rem,8vw,7rem)] bg-gradient-to-r from-primary via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                {t("student.subtitle")}
              </span>
            </motion.h2>

            <p className="max-w-3xl mx-auto text-lg md:text-2xl text-text-muted leading-relaxed">
              {t("student.description")}
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-14 relative z-10">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group rounded-3xl border border-primary/10 bg-bg-dark/70 p-8 text-center backdrop-blur-xl hover:border-primary/30 hover:bg-bg-dark transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Flame className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-display text-text-white mb-3">
                {t("student.levelsTitle")}
              </h3>

              <p className="text-text-muted leading-relaxed">
                {t("student.levelsDesc")}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group rounded-3xl border border-primary/10 bg-bg-dark/70 p-8 text-center backdrop-blur-xl hover:border-primary/30 hover:bg-bg-dark transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Trophy className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-display text-text-white mb-3">
                {t("student.dealTitle")}
              </h3>

              <p className="text-text-muted leading-relaxed">
                {t("student.dealDesc")}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group rounded-3xl border border-primary/10 bg-bg-dark/70 p-8 text-center backdrop-blur-xl hover:border-primary/30 hover:bg-bg-dark transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Timer className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-display text-text-white mb-3">
                {t("student.timeTitle")}
              </h3>

              <p className="text-text-muted leading-relaxed">
                {t("student.timeDesc")}
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <div className="flex justify-center relative z-10">
            <Link
              href="/delivery"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-orange-500 to-yellow-400 px-10 py-5 text-lg font-black text-white shadow-[0_10px_50px_rgba(255,80,0,0.35)] transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <Flame className="relative z-10 w-6 h-6" />

              <span className="relative z-10 tracking-wide">
                {t("student.order")}
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
