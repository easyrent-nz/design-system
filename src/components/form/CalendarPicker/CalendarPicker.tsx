import DateType from '@date-io/date-fns';
import {
  CalendarPicker as MuiCalendarPicker,
  CalendarPickerProps as MuiCalendarPickerProps,
} from '@mui/lab';
import { Controller, useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';
import get from 'lodash/get';

export interface CalendarPickerProps
  extends Omit<MuiCalendarPickerProps<DateType>, 'date' | 'onChange'> {
  name: string;
  label?: string;
}

const CalendarPicker = ({ name, label, ...rest }: CalendarPickerProps) => {
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
          <MuiCalendarPicker
            {...rest}
            date={value}
            onChange={(newDate) => onChange(newDate)}
            {...field}
          />
        </FormFieldWrapper>
      )}
    />
  );
};

export default CalendarPicker;
