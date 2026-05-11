"use client";

import { motion } from "framer-motion";
import { Flame, Droplet, Thermometer, Skull, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface SpiceLevel {
  level: number;
  nameKey: string;
  descriptionKey: string;
  heat: string;
  color: string;
  bgClass: string;
  icon: React.ReactNode;
}

const spiceLevels: SpiceLevel[] = [
  {
    level: 0,
    nameKey: "spice.level0name",
    descriptionKey: "spice.level0desc",
    heat: "Safe Zone",
    color: "#A1A1A1",
    bgClass: "spice-0",
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    level: 1,
    nameKey: "spice.level1name",
    descriptionKey: "spice.level1desc",
    heat: "Mild Heat",
    color: "#FFC300",
    bgClass: "spice-1",
    icon: <Droplet className="w-8 h-8" />,
  },
  {
    level: 2,
    nameKey: "spice.level2name",
    descriptionKey: "spice.level2desc",
    heat: "Light Heat",
    color: "#FFBA08",
    bgClass: "spice-2",
    icon: <Droplet className="w-8 h-8" />,
  },
  {
    level: 3,
    nameKey: "spice.level3name",
    descriptionKey: "spice.level3desc",
    heat: "Medium Heat",
    color: "#FF8800",
    bgClass: "spice-3",
    icon: <Flame className="w-8 h-8" />,
  },
  {
    level: 4,
    nameKey: "spice.level4name",
    descriptionKey: "spice.level4desc",
    heat: "Hot Heat",
    color: "#F77F00",
    bgClass: "spice-4",
    icon: <Flame className="w-8 h-8" />,
  },
  {
    level: 5,
    nameKey: "spice.level5name",
    descriptionKey: "spice.level5desc",
    heat: "Very Hot",
    color: "#D62828",
    bgClass: "spice-5",
    icon: <Flame className="w-8 h-8" />,
  },
  {
    level: 6,
    nameKey: "spice.level6name",
    descriptionKey: "spice.level6desc",
    heat: "Extreme Heat",
    color: "#BA181B",
    bgClass: "spice-6",
    icon: <Thermometer className="w-8 h-8" />,
  },
  {
    level: 7,
    nameKey: "spice.level7name",
    descriptionKey: "spice.level7desc",
    heat: "⚠️ EXTREME WARNING ⚠️",
    color: "#7F1D1D",
    bgClass: "spice-7 danger-pulse",
    icon: <Skull className="w-10 h-10" />,
  },
];

export default function SpiceLevels() {
  const { t } = useLanguage();

  return (
    <section
      id="spice-levels"
      className="section-container relative overflow-hidden"
    >
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-sm font-semibold tracking-wider uppercase mb-4"
        >
          {t("spice.subtitle")}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl brand-text mb-4"
        >
          {t("spice.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-muted text-lg max-w-2xl mx-auto"
        >
          {t("spice.description")}
          <br />
          {t("spice.onlyWorthy")}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
        {spiceLevels.map((spice, index) => (
          <motion.div
            key={spice.level}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className={`
              relative rounded-2xl p-5 md:p-6 cursor-pointer card-hover
              ${spice.bgClass}
              ${spice.level === 7 ? "col-span-full lg:col-span-2 lg:row-span-2" : ""}
            `}
            style={{ minHeight: spice.level === 7 ? "320px" : "220px" }}
          >
            <div
              className="absolute top-3 right-3 md:top-4 md:right-4 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-display text-xl md:text-2xl"
              style={{
                background: spice.level >= 4 ? spice.color : `${spice.color}20`,
                color: spice.level >= 4 ? "#FFFFFF" : spice.color,
                boxShadow:
                  spice.level >= 4 ? `0 0 20px ${spice.color}` : "none",
              }}
            >
              {spice.level === 7 ? (
                <span className="text-lg md:text-xl font-black">7</span>
              ) : (
                spice.level
              )}
            </div>

            <div style={{ color: spice.level === 7 ? "#FF6B6B" : spice.color }}>
              {spice.icon}
            </div>

            <div className="relative z-10">
              <h3
                className="font-display text-2xl md:text-3xl mb-2"
                style={{
                  color: spice.level >= 4 ? "#FFFFFF" : "#0B0B0B",
                  textShadow:
                    spice.level >= 4
                      ? `0 0 20px ${spice.color}80, 0 2px 8px rgba(0,0,0,0.8)`
                      : "none",
                }}
              >
                {t(spice.nameKey)}
              </h3>
              <p
                className="text-sm mb-4"
                style={{
                  color: spice.level >= 4 ? "#F5F5F5" : "#4A4A4A",
                }}
              >
                {t(spice.descriptionKey)}
              </p>

              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2.5 h-5 md:w-3 md:h-6 rounded-full"
                      style={{
                        background:
                          i < spice.level ? spice.color : `${spice.color}30`,
                        boxShadow:
                          i < spice.level && spice.level >= 4
                            ? `0 0 12px ${spice.color}`
                            : "none",
                      }}
                    />
                  ))}
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{
                    color:
                      spice.level === 7
                        ? "#FF8888"
                        : spice.level >= 4
                          ? "#FFFFFF"
                          : spice.color,
                    textShadow:
                      spice.level >= 4 ? `0 0 10px ${spice.color}60` : "none",
                  }}
                >
                  {spice.heat}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="text-center mt-16"
      >
        <p className="text-text-muted mb-6 text-lg">{t("spice.thinkYouCan")}</p>
        <a
          href="#challenge"
          className="btn-primary inline-flex items-center gap-3"
        >
          <Skull className="w-6 h-6" />
          {t("spice.takeChallenge")}
        </a>
      </motion.div>
    </section>
  );
}
