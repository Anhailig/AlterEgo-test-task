import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';

import type { IFormInput } from '../../types';


export const FormInput: React.FC<IFormInput> = ({ name, label, value, errorTitle, onChange, ...props}) => {
  return (
    <FormControl error={!!errorTitle} sx={{
      mb: '20px',
      alignItems: 'start'
    }}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input
        name={name}
        placeholder=''
        value={value}
        sx={{ width: '100%' }}
        onChange={onChange}
        {...props}
      />
      <FormHelperText>{errorTitle}</FormHelperText>
    </FormControl>
  );
}
