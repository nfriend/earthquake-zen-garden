import { formatDate } from './format-date';

describe('formatDate', () => {
  it.each`
    input            | formatted
    ${1523647508250} | ${'Apr 13, 2018, 07:25 PM'}
    ${1398372837333} | ${'Apr 24, 2014, 08:53 PM'}
  `('formats $input like $formatted', ({ input, formatted }) => {
    expect(formatDate(input)).toBe(formatted);
  });
});
