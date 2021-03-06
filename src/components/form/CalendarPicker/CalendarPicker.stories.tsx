import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { Meta, Story } from '@storybook/react';
import locale from 'date-fns/locale/en-NZ';
import { useFormContext } from 'react-hook-form';
import Form from '../Form/Form';
import CalendarPicker, { CalendarPickerProps } from './CalendarPicker';

export default {
  component: CalendarPicker,
  title: 'Components/Form/Calendar Picker',
  argTypes: {
    label: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
  },
} as Meta;

const ValueRenderer = () => {
  const ctx = useFormContext();

  return (
    <div>
      <pre>value: {JSON.stringify(ctx.watch(), null, 2)}</pre>
    </div>
  );
};

const Template: Story<CalendarPickerProps> = ({ name, ...args }) => (
  <LocalizationProvider dateAdapter={DateAdapter} locale={locale}>
    <Form>
      <ValueRenderer />
      <CalendarPicker name={name} {...args} />
    </Form>
  </LocalizationProvider>
);

export const Default = Template.bind({});
Default.args = {
  name: 'moveInDate',
};
