import { Select, SelectProps } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';
import get from 'lodash/get';

export interface DropdownProps<T> extends SelectProps<T> {
  label?: string;
  name: string;
}

const Dropdown = <T,>({ children, label, name }: PropsWithChildren<DropdownProps<T>>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorObj = get(errors, name);

  return (
    <FormFieldWrapper label={label} errorObject={errorObj}>
      <Select {...register(name)}>{children}</Select>
    </FormFieldWrapper>
  );
};

export default Dropdown;
