import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@mui/lab';
import { OutlinedInput } from '@mui/material';
import { parse } from 'date-fns';
import { Controller, useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

export interface DatePickerProps
  extends Omit<MuiDatePickerProps, 'onChange' | 'value' | 'renderInput'> {
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
            value={value || null}
            onChange={(date) => {
              if (!date) {
                return onChange(null);
              }

              // Remove time zone component from date
              const dateString = JSON.stringify(date);
              const sliced = dateString?.slice(1, 11);
              const newDate = parse(sliced, 'yyyy-mm-dd', new Date());

              onChange(new Date(sliced) || undefined);
            }}
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
