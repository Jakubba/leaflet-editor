import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import useStore from '../store';

const ThemeSelector = () => {
  const theme = useStore((state) => state.theme);
  const setTheme = useStore((state) => state.setTheme);

  return (
    <section className='w-full bg-white rounded-md p-4'>
      <Typography className='text-black' variant='h6' sx={{ mt: 2 }}>
        Choose a theme:
      </Typography>
      <FormControl fullWidth sx={{ mt: 1 }}>
        <InputLabel id='theme-label'>Theme</InputLabel>
        <Select
          labelId='theme-label'
          value={theme}
          label='Theme'
          onChange={(e) => setTheme(e.target.value)}
          sx={{
            color: '#000',
            '& .MuiInputLabel-root': {
              color: '#000',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#50A379',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ccc',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#50A379',
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#50A379',
            },
            '& .MuiSelect-icon': {
              color: '#50A379',
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                '& .MuiMenuItem-root': {
                  color: '#000',
                },
                '& .Mui-selected': {
                  backgroundColor: '#E5F8F6 !important',
                  color: '#50A379',
                },
                '& .Mui-selected:hover': {
                  backgroundColor: '#D0F0E7 !important',
                },
              },
            },
          }}
        >
          <MenuItem value='default'>Default Pixel</MenuItem>
          <MenuItem value='oldschool'>Old School</MenuItem>
          <MenuItem value='red'>Hell</MenuItem>
        </Select>
      </FormControl>
    </section>
  );
};

export default ThemeSelector;
