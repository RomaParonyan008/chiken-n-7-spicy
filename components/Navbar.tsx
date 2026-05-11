"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { href: "/", labelKey: "nav.home" },
  { href: "/menu", labelKey: "nav.menu" },
  { href: "/delivery", labelKey: "nav.delivery" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/contact", labelKey: "nav.contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/95 backdrop-blur-md border-b border-text-muted/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-2xl md:text-3xl text-text-white">
              CHICKEN<span className="brand-text">N&apos;7 SPICY</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-text-light hover:text-accent"
                }`}
              >
                {t(link.labelKey)}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-brand rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Cart + Mobile menu */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/delivery"
              className="relative p-2 text-text-light hover:text-accent transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-text-light hover:text-accent transition-colors"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-surface border-t border-text-muted/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-primary/20 text-accent"
                      : "text-text-light hover:bg-bg-dark"
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
