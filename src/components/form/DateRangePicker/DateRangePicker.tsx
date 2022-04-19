import {
  StaticDateRangePicker as MuiDateRangePicker,
  DateRangePickerProps as MuiDateRangePickerProps,
} from '@mui/lab';
import { TextField, Box } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import offsetToUtc from '../../../utils/offsetToUtc';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

export interface DateRangePickerProps
  extends Omit<MuiDateRangePickerProps<any>, 'onChange' | 'value' | 'renderInput'> {
  name: string;
  label?: string;
}

const DateRangePicker = ({ name, label, ...rest }: DateRangePickerProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[null, null]}
      render={({ field: { value, onChange, ...field } }) => (
        <FormFieldWrapper errorObject={errors[name]} label={label}>
          <MuiDateRangePicker
            displayStaticWrapperAs='desktop'
            calendars={1}
            value={value}
            onChange={(date) =>
              onChange([
                date[0] ? offsetToUtc(date[0]) : null,
                date[1] ? offsetToUtc(date[1]) : null,
              ])
            }
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
