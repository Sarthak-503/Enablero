import { CommonFormHelperTextProps } from '@/types';
import { FormHelperText } from '@mui/material';

export const CommonFormHelperText: React.FC<CommonFormHelperTextProps> = ({
  error,
}) =>
  Boolean(error) && (
    <FormHelperText sx={{ color: '#FF0000' }}>{error?.message}</FormHelperText>
  );
