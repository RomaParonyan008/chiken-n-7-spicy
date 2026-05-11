'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2, Minus, Plus, ShoppingCart, MapPin, Phone, User, Clock, Check, Flame } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { useLanguage } from '@/context/LanguageContext'
import { spiceLevelNames, products } from '@/data/products'

type OrderStep = 'cart' | 'details' | 'summary' | 'confirmation'

export default function DeliveryPage() {
  const { items, updateQuantity, removeItem, clearCart, totalPrice, addItem } = useCart()
  const { t } = useLanguage()
  const [step, setStep] = useState<OrderStep>('cart')
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    instructions: '',
  })
  const [orderNumber, setOrderNumber] = useState('')

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault()
    const generatedOrderNumber = `CN7-${Date.now().toString(36).toUpperCase()}`
    setOrderNumber(generatedOrderNumber)
    setStep('summary')
  }

  const handleConfirmOrder = () => {
    setStep('confirmation')
    clearCart()
  }

  if (step === 'confirmation') {
    return (
      <div className="min-h-screen flex items-center justify-center section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-24 h-24 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-8"
          >
            <Check className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="font-display text-5xl text-text-white mb-4">{t('delivery.orderConfirmed')}</h1>
          <p className="text-text-muted text-lg mb-2">{t('delivery.orderNumber')}</p>
          <p className="font-display text-4xl text-accent mb-6">{orderNumber}</p>
          <p className="text-text-muted mb-8">{t('delivery.preparing')}</p>
          <Link href="/" className="btn-primary">{t('delivery.backHome')}</Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen section-container">
      <div className="max-w-4xl mx-auto">
        {/* Progress steps */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {['cart', 'details', 'summary'].map((s, i) => (
            <div key={s} className="flex items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step === s ? 'bg-gradient-brand text-white' :
                  (step === 'summary' && s !== 'cart') || (step === 'details' && s === 'cart')
                    ? 'bg-green-600 text-white'
                    : 'bg-bg-surface text-text-muted'
                }`}
              >
                {i + 1}
              </motion.div>
              <span className={`ml-2 font-medium hidden sm:block ${
                step === s ? 'text-accent' : 'text-text-muted'
              }`}>
                {t(`delivery.${s}`)}
              </span>
            </div>
          ))}
        </div>

        {step === 'cart' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="font-display text-4xl md:text-5xl text-text-white mb-8 text-center">
              {t('delivery.yourOrder')}
            </h1>

            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingCart className="w-20 h-20 text-text-muted mx-auto mb-6" />
                <h2 className="font-display text-2xl text-text-white mb-4">{t('delivery.cartEmpty')}</h2>
                <p className="text-text-muted mb-8">{t('delivery.addItems')}</p>
                <Link href="/menu" className="btn-primary">{t('delivery.browseMenu')}</Link>
              </div>
            ) : (
              <div className="space-y-4">
                <AnimatePresence>
                  {items.map(item => {
                    const product = products.find(p => p.id === item.id)
                    return (
                    <motion.div
                      key={`${item.id}-${item.spiceLevel}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="bg-bg-surface rounded-xl p-4 flex items-center gap-4"
                    >
                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h3 className="font-display text-xl text-text-white">{item.name}</h3>
                        <div className="flex items-center gap-2 text-sm">
                          <Flame className="w-4 h-4 text-accent" />
                          <span className="text-text-muted">{t('delivery.level')} {item.spiceLevel} - {spiceLevelNames[item.spiceLevel]}</span>
                        </div>
                        {item.customizations.length > 0 && (
                          <p className="text-xs text-text-muted mt-1">{item.customizations.join(', ')}</p>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-text-muted">{t('delivery.spice')}:</span>
                          <select
                            value={item.spiceLevel}
                            onChange={(e) => {
                              const newLevel = Number(e.target.value)
                              removeItem(item.id, item.spiceLevel)
                              addItem({
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                spiceLevel: newLevel,
                                customizations: item.customizations,
                                image: item.image,
                              })
                            }}
                            className="bg-bg-dark text-text-white text-xs px-2 py-1 rounded border border-text-muted/30 focus:outline-none focus:border-primary"
                          >
                            {[...Array(8)].map((_, i) => (
                              <option key={i} value={i}>
                                {i} - {spiceLevelNames[i]}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.spiceLevel, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-bg-dark flex items-center justify-center text-text-muted hover:text-white hover:bg-primary transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-display text-xl text-text-white w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.spiceLevel, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-bg-dark flex items-center justify-center text-text-muted hover:text-white hover:bg-primary transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-right w-24">
                        <span className="font-display text-xl text-accent">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.spiceLevel)}
                        className="p-2 text-text-muted hover:text-primary transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </motion.div>
                    )
                  })}
                </AnimatePresence>

                <div className="bg-bg-surface rounded-xl p-6 mt-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-text-muted">{t('delivery.subtotal')}</span>
                    <span className="text-text-white">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-text-muted">{t('delivery.deliveryFee')}</span>
                    <span className="text-text-white">$3.99</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-text-muted/20">
                    <span className="font-display text-xl text-text-white">{t('delivery.total')}</span>
                    <span className="font-display text-2xl text-accent">${(totalPrice + 3.99).toFixed(2)}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStep('details')}
                  className="w-full btn-primary py-4 text-lg mt-6"
                >
                  {t('delivery.continue')}
                </motion.button>
              </div>
            )}
          </motion.div>
        )}

        {step === 'details' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="font-display text-4xl md:text-5xl text-text-white mb-8 text-center">
              {t('delivery.deliveryDetails')}
            </h1>

            <form onSubmit={handleSubmitDetails} className="max-w-xl mx-auto space-y-6">
              <div>
                <label className="block text-text-muted mb-2">{t('delivery.fullName')}</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                  <input
                    type="text"
                    required
                    value={orderDetails.name}
                    onChange={e => setOrderDetails(d => ({ ...d, name: e.target.value }))}
                    className="input-field pl-12"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-text-muted mb-2">{t('delivery.phone')}</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                  <input
                    type="tel"
                    required
                    value={orderDetails.phone}
                    onChange={e => setOrderDetails(d => ({ ...d, phone: e.target.value }))}
                    className="input-field pl-12"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-text-muted mb-2">{t('delivery.streetAddress')}</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                  <input
                    type="text"
                    required
                    value={orderDetails.address}
                    onChange={e => setOrderDetails(d => ({ ...d, address: e.target.value }))}
                    className="input-field pl-12"
                    placeholder="123 Main Street"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-muted mb-2">{t('delivery.city')}</label>
                  <input
                    type="text"
                    required
                    value={orderDetails.city}
                    onChange={e => setOrderDetails(d => ({ ...d, city: e.target.value }))}
                    className="input-field"
                    placeholder="Los Angeles"
                  />
                </div>
                <div>
                  <label className="block text-text-muted mb-2">{t('delivery.zipCode')}</label>
                  <input
                    type="text"
                    required
                    value={orderDetails.zipCode}
                    onChange={e => setOrderDetails(d => ({ ...d, zipCode: e.target.value }))}
                    className="input-field"
                    placeholder="90210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-text-muted mb-2">{t('delivery.instructions')}</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-4 w-5 h-5 text-text-muted" />
                  <textarea
                    value={orderDetails.instructions}
                    onChange={e => setOrderDetails(d => ({ ...d, instructions: e.target.value }))}
                    className="input-field pl-12 min-h-[100px] resize-none"
                    placeholder="Ring doorbell, leave at door, etc."
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setStep('cart')} className="btn-secondary">
                  {t('delivery.back')}
                </button>
                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 btn-primary py-4">
                  {t('delivery.review')}
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}

        {step === 'summary' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="font-display text-4xl md:text-5xl text-text-white mb-8 text-center">
              {t('delivery.summary')}
            </h1>

            <div className="max-w-xl mx-auto space-y-6">
              <div className="bg-bg-surface rounded-xl p-6">
                <h3 className="font-display text-xl text-text-white mb-4">{t('delivery.deliveryTo')}</h3>
                <div className="text-text-muted space-y-1">
                  <p className="text-text-white font-medium">{orderDetails.name}</p>
                  <p>{orderDetails.address}</p>
                  <p>{orderDetails.city}, {orderDetails.zipCode}</p>
                  <p>{orderDetails.phone}</p>
                </div>
                {orderDetails.instructions && (
                  <div className="mt-4 pt-4 border-t border-text-muted/20">
                    <p className="text-sm text-text-muted">{t('delivery.instructions')}:</p>
                    <p className="text-text-light">{orderDetails.instructions}</p>
                  </div>
                )}
              </div>

              <div className="bg-bg-surface rounded-xl p-6">
                <h3 className="font-display text-xl text-text-white mb-4">{t('delivery.items')}</h3>
                <div className="space-y-3">
                  {items.map(item => (
                    <div key={`${item.id}-${item.spiceLevel}`} className="flex justify-between items-center">
                      <div>
                        <span className="text-text-white">{item.quantity}x {item.name}</span>
                        <span className="text-text-muted text-sm ml-2">{t('delivery.level')} {item.spiceLevel}</span>
                      </div>
                      <span className="text-accent">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 mt-4 border-t border-text-muted/20 space-y-2">
                  <div className="flex justify-between text-text-muted">
                    <span>{t('delivery.subtotal')}</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-text-muted">
                    <span>{t('delivery.delivery')}</span>
                    <span>$3.99</span>
                  </div>
                  <div className="flex justify-between font-display text-xl text-text-white pt-2">
                    <span>{t('delivery.total')}</span>
                    <span className="text-accent">${(totalPrice + 3.99).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={() => setStep('details')} className="btn-secondary">
                  {t('delivery.back')}
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleConfirmOrder}
                  className="flex-1 btn-primary py-4"
                >
                  {t('delivery.confirm')}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
