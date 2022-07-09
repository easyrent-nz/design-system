import { FormControlLabel, FormControlLabelProps, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';
import get from 'lodash/get';

export interface RadioButtonProps {
  label: string;
  value: any;
  disabled?: boolean;
}

export interface RadioSelectionProps {
  name: string;
  label: string;
  options: (Partial<FormControlLabelProps> & { label: string; value: any })[];
}

const RadioSelection = ({ name, label, options }: RadioSelectionProps) => {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext();

  const errorObj = get(errors, name);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={options[0]?.value}
      render={({ field }) => (
        <FormFieldWrapper label={label} disabled={isSubmitting} errorObject={errorObj}>
          <RadioGroup {...field}>
            {options.map((option) => (
              <FormControlLabel key={option.value} {...option} control={<Radio />} />
            ))}
          </RadioGroup>
        </FormFieldWrapper>
      )}
    />
  );
};

export default RadioSelection;
