"use client"

import type React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"

interface WishlistItem {
  id: string
  productId: string
  name: string
  price: number
  compareAtPrice?: number
  image: string
  inStock: boolean
}

interface WishlistState {
  items: WishlistItem[]
  itemCount: number
}

type WishlistAction =
  | { type: "ADD_ITEM"; payload: WishlistItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "CLEAR_WISHLIST" }
  | { type: "LOAD_WISHLIST"; payload: WishlistItem[] }

const WishlistContext = createContext<{
  state: WishlistState
  dispatch: React.Dispatch<WishlistAction>
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (productId: string) => void
  clearWishlist: () => void
  isInWishlist: (productId: string) => boolean
} | null>(null)

function wishlistReducer(state: WishlistState, action: WishlistAction): WishlistState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.productId === action.payload.productId)
      if (existingItem) return state

      const newItems = [...state.items, action.payload]
      return { items: newItems, itemCount: newItems.length }
    }
    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.productId !== action.payload)
      return { items: newItems, itemCount: newItems.length }
    }
    case "CLEAR_WISHLIST":
      return { items: [], itemCount: 0 }
    case "LOAD_WISHLIST":
      return { items: action.payload, itemCount: action.payload.length }
    default:
      return state
  }
}

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, {
    items: [],
    itemCount: 0,
  })

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) {
      dispatch({ type: "LOAD_WISHLIST", payload: JSON.parse(savedWishlist) })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.items))
  }, [state.items])

  const addToWishlist = (item: WishlistItem) => {
    dispatch({ type: "ADD_ITEM", payload: item })
  }

  const removeFromWishlist = (productId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: productId })
  }

  const clearWishlist = () => {
    dispatch({ type: "CLEAR_WISHLIST" })
  }

  const isInWishlist = (productId: string) => {
    return state.items.some((item) => item.productId === productId)
  }

  return (
    <WishlistContext.Provider
      value={{
        state,
        dispatch,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
