import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface WishlistItem {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  isNew?: boolean;
  isAICustomizable?: boolean;
  rating: number;
  reviews: number;
}

interface WishlistStore {
  items: WishlistItem[];
  isOpen: boolean;
  addItem: (item: WishlistItem) => void;
  removeItem: (id: number) => void;
  isInWishlist: (id: number) => boolean;
  clearWishlist: () => void;
  openWishlist: () => void;
  closeWishlist: () => void;
  getTotalItems: () => number;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      addItem: (item) => {
        const { items } = get();
        const existingItem = items.find(i => i.id === item.id);
        
        if (!existingItem) {
          set({ items: [...items, item] });
        }
      },
      
      removeItem: (id) => {
        const { items } = get();
        set({ items: items.filter(item => item.id !== id) });
      },
      
      isInWishlist: (id) => {
        const { items } = get();
        return items.some(item => item.id === id);
      },
      
      clearWishlist: () => {
        set({ items: [] });
      },
      
      openWishlist: () => {
        set({ isOpen: true });
      },
      
      closeWishlist: () => {
        set({ isOpen: false });
      },
      
      getTotalItems: () => {
        const { items } = get();
        return items.length;
      },
    }),
    {
      name: 'akuma-wishlist-storage',
    }
  )
);