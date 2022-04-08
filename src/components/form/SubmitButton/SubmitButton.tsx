import Button, { ButtonProps } from '@mui/material/Button';
import { PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';

export interface SubmitButtonProps extends Omit<ButtonProps, 'type'> {}

const SubmitButton = ({ children, onClick, ...rest }: PropsWithChildren<SubmitButtonProps>) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button
      disabled={isSubmitting}
      onClick={isSubmitting ? undefined : onClick}
      variant='contained'
      type='submit'
      {...rest}
    >
      {isSubmitting ? '...' : children}
    </Button>
  );
};

export default SubmitButton;
