export interface Page {
  title: string;
  description: string;
  image?: string;
  pageNumber: string;
}

export type Theme = 'default' | 'oldschool' | 'red';

export interface StoreState {
  pages: Page[];
  editingPageIndex: number | null;
  theme: Theme;

  setTheme: (theme: Theme) => void;
  addPage: (page: Page) => void;
  removePage: (index: number) => void;
  updatePage: (index: number, newPage: Page) => void;
  setEditingPage: (index: number | null) => void;
  clearEditingPage: () => void;
  reorderPages: (sourceIndex: number, destinationIndex: number) => void;
}
