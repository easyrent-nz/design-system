import {
  StaticDateRangePicker as MuiDateRangePicker,
  DateRangePickerProps as MuiDateRangePickerProps,
} from '@mui/x-date-pickers-pro';
import { TextField, Box } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';
import get from 'lodash/get';

export interface DateRangePickerProps
  extends Omit<MuiDateRangePickerProps<string, string>, 'onChange' | 'value' | 'renderInput'> {
  name: string;
  label?: string;
}

const DateRangePicker = ({ name, label, ...rest }: DateRangePickerProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorObj = get(errors, name);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[null, null]}
      render={({ field: { value, onChange, ...field } }) => (
        <FormFieldWrapper errorObject={errorObj} label={label}>
          <MuiDateRangePicker
            displayStaticWrapperAs='desktop'
            calendars={1}
            value={value}
            onChange={(date) => onChange(date)}
            {...field}
            {...rest}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </FormFieldWrapper>
      )}
    />
  );
};

export default DateRangePicker;
