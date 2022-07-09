import { ReactNode } from 'react';
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';
import get from 'lodash/get';

export interface CheckboxProps extends MuiCheckboxProps {
  label: string;
  name: string;
  subtitle?: string;
  icon?: ReactNode;
}

const Checkbox = ({ label, name, subtitle, icon, ...rest }: CheckboxProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorObj = get(errors, name);

  return (
    <FormFieldWrapper errorObject={errorObj}>
      <FormControlLabel
        control={
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <MuiCheckbox
                {...rest}
                sx={{ '& .MuiSvgIcon-root': { fontSize: subtitle ? 28 : undefined }, ...rest.sx }}
                {...field}
                checked={field.value || false}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            )}
          />
        }
        sx={{ justifyContent: 'space-between', m: 0 }}
        labelPlacement='start'
        label={
          <Stack direction='row' alignItems='center' spacing={1}>
            {icon}
            <Stack>
              <Typography>{label}</Typography>
              {subtitle && (
                <Typography variant='body2' color='text.secondary'>
                  {subtitle}
                </Typography>
              )}
            </Stack>
          </Stack>
        }
      />
    </FormFieldWrapper>
  );
};

export default Checkbox;
