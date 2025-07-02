import type { SxProps, Theme } from '@mui/material/styles';

export const inputStyles: SxProps<Theme> = {
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
};
