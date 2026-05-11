'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Minus, Plus, ShoppingCart, Flame, Check } from 'lucide-react'
import Link from 'next/link'
import { products, spiceLevelNames } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params
  const router = useRouter()
  const { addItem } = useCart()

  const product = products.find(p => p.id === id)

  const [spiceLevel, setSpiceLevel] = useState(product?.spiceLevel || 0)
  const [customizations, setCustomizations] = useState<string[]>([])
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-text-white mb-4">Product Not Found</h1>
          <Link href="/menu" className="btn-primary">Back to Menu</Link>
        </div>
      </div>
    )
  }

  const toggleCustomization = (item: string) => {
    setCustomizations(prev =>
      prev.includes(item) ? prev.filter(c => c !== item) : [...prev, item]
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.basePrice,
      spiceLevel,
      customizations,
      image: product.image,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const priceWithExtras = product.basePrice + customizations.length * 1.5

  return (
    <div className="min-h-screen section-container">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Menu
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-brand">
                <Flame className="w-5 h-5 text-white" />
                <span className="text-lg font-bold text-white">Level {spiceLevel}</span>
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">
              {product.category}
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-text-white mb-4">
              {product.name}
            </h1>
            <p className="text-text-muted text-lg mb-6">{product.description}</p>

            {/* Spice Level Selector */}
            <div className="bg-bg-surface rounded-2xl p-6 mb-6">
              <h3 className="font-display text-xl text-text-white mb-4">CHOOSE YOUR HEAT</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-text-muted">Spice Level</span>
                  <span className="font-display text-2xl text-accent">{spiceLevel} - {spiceLevelNames[spiceLevel]}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={7}
                  value={spiceLevel}
                  onChange={(e) => setSpiceLevel(Number(e.target.value))}
                  className="spice-slider w-full"
                />
                <div className="flex justify-between text-xs text-text-muted">
                  <span>No Spice (0)</span>
                  <span>Death Zone (7)</span>
                </div>
              </div>

              {/* Visual spice indicator */}
              <div className="mt-6 flex gap-1">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-8 flex-1 rounded-full"
                    initial={{ scaleY: 0.5 }}
                    animate={{ scaleY: i <= spiceLevel ? 1 : 0.5 }}
                    style={{
                      background: i <= spiceLevel
                        ? i <= 2 ? '#FFC300' : i <= 4 ? '#F77F00' : i <= 6 ? '#D62828' : '#BA181B'
                        : '#333',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Customizations */}
            <div className="bg-bg-surface rounded-2xl p-6 mb-6">
              <h3 className="font-display text-xl text-text-white mb-4">ADD EXTRAS</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.availableCustomizations?.map(item => (
                  <button
                    key={item}
                    onClick={() => toggleCustomization(item)}
                    className={`p-3 rounded-lg border-2 text-left font-medium transition-all ${
                      customizations.includes(item)
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-text-muted/30 text-text-muted hover:border-text-muted'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{item}</span>
                      {customizations.includes(item) && <Check className="w-4 h-4" />}
                    </div>
                    <span className="text-xs text-text-muted">+$1.50</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-auto">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-12 h-12 rounded-full bg-bg-surface flex items-center justify-center text-text-white hover:bg-primary transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="font-display text-3xl text-text-white w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-12 h-12 rounded-full bg-bg-surface flex items-center justify-center text-text-white hover:bg-primary transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 text-right">
                  <div className="font-display text-4xl text-accent">${(priceWithExtras * quantity).toFixed(2)}</div>
                  <div className="text-sm text-text-muted">${priceWithExtras.toFixed(2)} each</div>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.button
                  onClick={handleAddToCart}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                    added
                      ? 'bg-green-600 text-white'
                      : 'bg-gradient-brand text-white hover:shadow-[0_0_30px_rgba(214,40,40,0.5)]'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-6 h-6" />
                      Added!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-6 h-6" />
                      Add to Cart
                    </>
                  )}
                </motion.button>
                <Link href="/delivery" className="btn-secondary py-4 px-8">
                  Order Now
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
