import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from '@mui/x-date-pickers-pro';
import { OutlinedInput } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';
import get from 'lodash/get';

export type DateString = string;

export interface DatePickerProps
  extends Omit<MuiDatePickerProps<DateString, DateString>, 'onChange' | 'value' | 'renderInput'> {
  name: string;
  label?: string;
}

const DatePicker = ({ name, label, ...rest }: DatePickerProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorObj = get(errors, name);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <FormFieldWrapper errorObject={errorObj} label={label}>
          <MuiDatePicker
            value={value ? value : null}
            onChange={(date) => onChange(date?.toString())}
            {...field}
            {...rest}
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <OutlinedInput ref={inputRef} inputProps={inputProps} {...InputProps} />
            )}
          />
        </FormFieldWrapper>
      )}
    />
  );
};

export default DatePicker;
