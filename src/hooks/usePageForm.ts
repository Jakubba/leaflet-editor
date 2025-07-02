import { useEffect, useState } from 'react';
import useStore from '../store';
import type { Page } from '../types';

export const usePageForm = () => {
  const { pages, editingPageIndex, addPage, updatePage, clearEditingPage } = useStore();

  const editingPage: Page | null =
    editingPageIndex !== null ? pages[editingPageIndex] : null;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pageNumber, setPageNumber] = useState('');
  const [image, setImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (editingPage) {
      setTitle(editingPage.title || '');
      setDescription(editingPage.description || '');
      setPageNumber(editingPage.pageNumber || '');
      setImage(editingPage.image || undefined);
    }
  }, [editingPage]);

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setPageNumber('');
    setImage(undefined);
    clearEditingPage();
  };

  const handleSave = () => {
    const newPage: Page = { title, description, pageNumber, image };

    if (editingPageIndex !== null) {
      updatePage(editingPageIndex, newPage);
    } else {
      addPage(newPage);
    }

    resetForm();
  };

  const handleImageChange = (file?: File) => {
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    pageNumber,
    setPageNumber,
    image,
    handleImageChange,
    handleSave,
    resetForm,
    editingPageIndex,
  };
};
