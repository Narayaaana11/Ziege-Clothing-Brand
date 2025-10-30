import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface RecentlyViewedItem {
  id: string;
  name: string;
  price: number;
  image: string;
  viewedAt: string;
  category?: string;
}

interface RecentlyViewedStore {
  items: RecentlyViewedItem[];
  addItem: (item: Omit<RecentlyViewedItem, 'viewedAt'>) => void;
  removeItem: (id: string) => void;
  clearAll: () => void;
}

export const useRecentlyViewed = create<RecentlyViewedStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => {
        const items = get().items;
        const existingIndex = items.findIndex(i => i.id === item.id);
        
        const newItem: RecentlyViewedItem = {
          ...item,
          viewedAt: new Date().toLocaleDateString()
        };
        
        let newItems;
        if (existingIndex >= 0) {
          // Update existing item and move to front
          newItems = [newItem, ...items.filter(i => i.id !== item.id)];
        } else {
          // Add new item to front
          newItems = [newItem, ...items];
        }
        
        // Keep only last 12 items
        newItems = newItems.slice(0, 12);
        
        set({ items: newItems });
      },
      
      removeItem: (id) => {
        set(state => ({
          items: state.items.filter(item => item.id !== id)
        }));
      },
      
      clearAll: () => {
        set({ items: [] });
      }
    }),
    {
      name: 'recently-viewed'
    }
  )
);
