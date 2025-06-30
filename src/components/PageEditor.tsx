// src/components/PageEditor.jsx
import React, { useState, useEffect } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import useStore from '../store';

const PageEditor = () => {
  const { pages, addPage, updatePage, editingPageIndex, clearEditingPage } = useStore();

  const editingPage = editingPageIndex !== null ? pages[editingPageIndex] : null;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pageNumber, setPageNumber] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (editingPage) {
      setTitle(editingPage.title || '');
      setDescription(editingPage.description || '');
      setPageNumber(editingPage.pageNumber || '');
      setImage(editingPage.image || null);
    }
  }, [editingPage]);

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSave = () => {
    const newPage = { title, description, pageNumber, image };

    if (editingPageIndex !== null) {
      updatePage(editingPageIndex, newPage);
      clearEditingPage();
    } else {
      addPage(newPage);
    }

    setTitle('');
    setDescription('');
    setPageNumber('');
    setImage(null);
  };

  const handleCancel = () => {
    clearEditingPage();
    setTitle('');
    setDescription('');
    setPageNumber('');
    setImage(null);
  };

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant='h6'>
          {editingPageIndex !== null ? 'Edytuj stronę' : 'Dodaj nową stronę'}
        </Typography>
        <TextField
          label='Tytuł'
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{
            my: 1,
            input: { color: '#000' },
            '& label.Mui-focused': {
              color: '#50A379',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#50A379',
              },
            },
          }}
        />
        <TextField
          label='Opis'
          fullWidth
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{
            my: 1,
            input: { color: '#000' },
            '& label.Mui-focused': {
              color: '#50A379',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#50A379',
              },
            },
          }}
        />
        <TextField
          label='Numer strony'
          fullWidth
          value={pageNumber}
          onChange={(e) => setPageNumber(e.target.value)}
          sx={{
            my: 1,
            input: { color: '#000' },
            '& label.Mui-focused': {
              color: '#50A379',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#50A379',
              },
            },
          }}
        />
        <Button
          variant='contained'
          component='label'
          sx={{
            my: 1,
            backgroundColor: '#50A379',
            '&:hover': { backgroundColor: '#388e3c' },
            color: '#fff',
          }}
        >
          Dodaj zdjęcie
          <input type='file' hidden onChange={handleImageChange} />
        </Button>
        {image && (
          <img src={image} alt='Podgląd' style={{ width: '100%', marginTop: 10 }} />
        )}
        <div style={{ marginTop: 16 }}>
          <Button
            variant='outlined'
            onClick={handleSave}
            sx={{
              borderColor: '#50A379',
              color: '#50A379',
              '&:hover': { backgroundColor: '#388e3c', color: '#fff' },
            }}
          >
            {editingPageIndex !== null ? 'Zapisz zmiany' : 'Dodaj stronę'}
          </Button>
          {editingPageIndex !== null && (
            <Button
              variant='text'
              color='secondary'
              onClick={handleCancel}
              sx={{ ml: 2 }}
            >
              Anuluj edycję
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PageEditor;
