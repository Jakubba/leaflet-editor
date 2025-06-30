import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import useStore from '../store';

const ThemeSelector = () => {
  const theme = useStore((state) => state.theme);
  const setTheme = useStore((state) => state.setTheme);

  return (
    <section className='w-full bg-white rounded-md p-4'>
      <Typography className='text-black' variant='h6' sx={{ mt: 2 }}>
        🎨 Wybierz styl gazetki:
      </Typography>
      <FormControl fullWidth sx={{ mt: 1 }}>
        <InputLabel id='theme-label'>Styl</InputLabel>
        <Select
          labelId='theme-label'
          value={theme}
          label='Styl'
          onChange={(e) => setTheme(e.target.value)}
        >
          <MenuItem value='default'>🧾 Default</MenuItem>
          <MenuItem value='oldschool'>🧓 Old School</MenuItem>
          <MenuItem value='red'>🔴 New Ege</MenuItem>
        </Select>
      </FormControl>
    </section>
  );
};

export default ThemeSelector;
