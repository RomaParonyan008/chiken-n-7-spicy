'use client'

import { motion } from 'framer-motion'
import { Flame, Zap, Target } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section className="section-container relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-sm font-semibold tracking-wider uppercase mb-4"
          >
            {t('about.title')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-text-white mb-4"
          >
            {t('about.subtitle')}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-3xl md:text-4xl text-text-white mb-6 leading-tight">
              {t('about.value4Title')}
            </h3>
            <div className="space-y-6 text-text-muted leading-relaxed">
              <p>{t('about.description')}</p>
              <p>{t('about.description2')}</p>
              <p>{t('about.description3')}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                icon: <Flame className="w-8 h-8" />,
                titleKey: 'about.value1Title',
                descriptionKey: 'about.value1Desc',
              },
              {
                icon: <Zap className="w-8 h-8" />,
                titleKey: 'about.value2Title',
                descriptionKey: 'about.value2Desc',
              },
              {
                icon: <Target className="w-8 h-8" />,
                titleKey: 'about.value3Title',
                descriptionKey: 'about.value3Desc',
              },
            ].map((value, index) => (
              <motion.div
                key={value.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 md:gap-5 p-5 md:p-6 rounded-2xl bg-bg-surface border border-text-muted/10 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h4 className="font-display text-lg md:text-xl text-text-white mb-1 md:mb-2">{t(value.titleKey)}</h4>
                  <p className="text-text-muted text-sm">{t(value.descriptionKey)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: '2025', labelKey: 'about.founded' },
            { value: '7', labelKey: 'about.spiceLevels' },
            { value: '20K+', labelKey: 'about.ordersMonth' },
            { value: '4.9', labelKey: 'about.rating' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-display text-4xl md:text-5xl text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-text-muted uppercase tracking-wider">{t(stat.labelKey)}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
