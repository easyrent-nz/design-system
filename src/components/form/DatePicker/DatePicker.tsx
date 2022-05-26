import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from '@mui/x-date-pickers-pro';
import { OutlinedInput } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

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

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <FormFieldWrapper errorObject={errors[name]} label={label}>
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
