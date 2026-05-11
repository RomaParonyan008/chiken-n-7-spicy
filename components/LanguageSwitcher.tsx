'use client'

import { Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { languages } from '@/data/translations'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = languages.find(l => l.code === language)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-text-light hover:text-accent transition-colors"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium">{currentLang?.nativeLabel}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-40 bg-bg-dark border border-text-muted/20 rounded-lg shadow-xl overflow-hidden z-50"
          >
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-3 text-left text-sm flex items-center justify-between transition-colors ${
                  language === lang.code
                    ? 'bg-primary/20 text-accent'
                    : 'text-text-light hover:bg-bg-surface hover:text-text-white'
                }`}
              >
                <span>{lang.nativeLabel}</span>
                <span className="text-xs text-text-muted">{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
