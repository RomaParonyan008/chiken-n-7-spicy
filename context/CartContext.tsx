'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  spiceLevel: number
  customizations: string[]
  image: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string, spiceLevel: number) => void
  updateQuantity: (id: string, spiceLevel: number, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = useCallback((item: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existing = prev.find(
        i => i.id === item.id && i.spiceLevel === item.spiceLevel
      )
      if (existing) {
        return prev.map(i =>
          i.id === item.id && i.spiceLevel === item.spiceLevel
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }, [])

  const removeItem = useCallback((id: string, spiceLevel: number) => {
    setItems(prev => prev.filter(i => !(i.id === id && i.spiceLevel === spiceLevel)))
  }, [])

  const updateQuantity = useCallback((id: string, spiceLevel: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id, spiceLevel)
      return
    }
    setItems(prev =>
      prev.map(i =>
        i.id === id && i.spiceLevel === spiceLevel ? { ...i, quantity } : i
      )
    )
  }, [removeItem])

  const clearCart = useCallback(() => setItems([]), [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
