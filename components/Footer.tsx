"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.37-4.96 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { nameKey: "nav.menu", href: "/menu" },
  { nameKey: "spice.title", href: "/#spice-levels" },
  { nameKey: "nav.delivery", href: "/delivery" },
  { nameKey: "nav.about", href: "/about" },
  { nameKey: "nav.contact", href: "/contact" },
];

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-bg-surface border-t border-text-muted/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-4xl text-text-white mb-4">
              CHICKEN
              <br />
              <span className="brand-text">N&apos;7 SPICY</span>
            </h3>
            <p className="text-text-muted text-sm mb-6 leading-relaxed">
              {t("footer.whereFire")}
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 rounded-full bg-bg-dark flex items-center justify-center text-text-muted hover:text-accent hover:bg-accent/10 transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xl text-text-white mb-6 uppercase tracking-wider">
              {t("footer.quickAccess")}
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.nameKey}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-accent transition-colors relative group"
                  >
                    {t(link.nameKey)}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent group-hover:w-full transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-text-white mb-6 uppercase tracking-wider">
              {t("footer.findUs")}
            </h4>

            <ul className="space-y-4 text-text-muted">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1" />
                <span>666 Spice Avenue, LA 90210</span>
              </li>

              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span>(555) 7-SPICY-7</span>
              </li>

              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span>heat@chickenn7.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-xl text-text-white mb-6 uppercase tracking-wider">
              {t("footer.hours")}
            </h4>

            <ul className="space-y-3 text-text-muted">
              <li className="flex justify-between">
                <span>{t("footer.monThu")}</span>
                <span>11am - 10pm</span>
              </li>

              <li className="flex justify-between">
                <span>{t("footer.friSat")}</span>
                <span>11am - 12pm</span>
              </li>

              <li className="flex justify-between">
                <span>{t("footer.sunday")}</span>
                <span>12pm - 9pm</span>
              </li>
            </ul>

            <Link
              href="/delivery"
              className="mt-6 inline-flex w-full btn-primary justify-center"
            >
              {t("footer.orderNow")}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-text-muted/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
          <p>&copy; 2024 Chicken N&apos;7 Spicy. {t("footer.rights")}</p>

          <div className="flex gap-6">
            <a className="hover:text-accent transition" href="#">
              {t("footer.privacy")}
            </a>
            <a className="hover:text-accent transition" href="#">
              {t("footer.terms")}
            </a>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
