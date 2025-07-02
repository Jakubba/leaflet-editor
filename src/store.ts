// src/store.ts
import { create } from 'zustand';
import type { StoreState, Page, Theme } from './types';

const useStore = create<StoreState>((set) => ({
  pages: [],
  editingPageIndex: null,
  theme: 'default',

  setTheme: (theme: Theme) => set({ theme }),

  addPage: (page: Page) => set((state) => ({ pages: [...state.pages, page] })),

  removePage: (index: number) =>
    set((state) => ({
      pages: state.pages.filter((_, i) => i !== index),
    })),

  updatePage: (index: number, newPage: Page) =>
    set((state) => {
      const updated = [...state.pages];
      updated[index] = newPage;
      return { pages: updated };
    }),

  setEditingPage: (index: number | null) => set({ editingPageIndex: index }),
  clearEditingPage: () => set({ editingPageIndex: null }),

  reorderPages: (sourceIndex: number, destinationIndex: number) =>
    set((state) => {
      const newPages = [...state.pages];
      const [moved] = newPages.splice(sourceIndex, 1);
      newPages.splice(destinationIndex, 0, moved);
      return { pages: newPages };
    }),
}));

export default useStore;
