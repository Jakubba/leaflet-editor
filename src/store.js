import { create } from 'zustand';

const useStore = create((set) => ({
  pages: [],
  editingPageIndex: null,
  theme: 'default',

  setTheme: (theme) => set({ theme }),

  addPage: (page) => set((state) => ({ pages: [...state.pages, page] })),
  removePage: (index) =>
    set((state) => ({
      pages: state.pages.filter((_, i) => i !== index),
    })),
  updatePage: (index, newPage) =>
    set((state) => {
      const updated = [...state.pages];
      updated[index] = newPage;
      return { pages: updated };
    }),
  setEditingPage: (index) => set({ editingPageIndex: index }),
  reorderPages: (sourceIndex, destinationIndex) =>
    set((state) => {
      const newPages = [...state.pages];
      const [moved] = newPages.splice(sourceIndex, 1);
      newPages.splice(destinationIndex, 0, moved);
      return { pages: newPages };
    }),
}));

export default useStore;
