import { sum } from './sum';

describe('Sum', () => {
  let sumResult: number;

  beforeAll(() => {
    sumResult = 5;
  });

  afterAll(() => {
    sumResult = 0;
  });

  test('sum of 2 and 3 must be 5', () => {
    const result = sum(2, 3);
    expect(result).toBe(sumResult);
  });

  it('should return 4 when adding 2 and 2', () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });
});
