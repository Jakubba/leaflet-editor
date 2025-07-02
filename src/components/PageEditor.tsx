import React from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { usePageForm } from '../hooks/usePageForm';
import { inputStyles } from '../styles/formFieldStyles';
import ImagePreview from './ImagePreview';

const PageEditor: React.FC = () => {
  const {
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
  } = usePageForm();

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant='h6'>
          {editingPageIndex !== null ? 'Edit page' : 'Add new page'}
        </Typography>
        <TextField
          label='Title'
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={inputStyles}
        />
        <TextField
          label='Description'
          fullWidth
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={inputStyles}
        />
        <TextField
          label='Number of page'
          fullWidth
          value={pageNumber}
          onChange={(e) => setPageNumber(e.target.value)}
          sx={inputStyles}
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
          Add Image
          <input
            type='file'
            hidden
            onChange={(e) => handleImageChange(e.target.files?.[0])}
          />
        </Button>

        {image && <ImagePreview src={image} />}

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
            {editingPageIndex !== null ? 'Save Changes' : 'Add Page'}
          </Button>

          {editingPageIndex !== null && (
            <Button variant='text' color='secondary' onClick={resetForm} sx={{ ml: 2 }}>
              Cancel Editing
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PageEditor;
