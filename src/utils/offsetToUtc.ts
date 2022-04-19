import { add } from 'date-fns';

const offsetToUtc = (date: Date) => add(date, { minutes: -date.getTimezoneOffset() });

export default offsetToUtc;
