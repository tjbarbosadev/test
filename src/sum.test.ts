import { sum } from './server';

describe('Sum', () => {
  test('sum of 2 and 3 must be 5', () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });

  it('should return 4 when adding 2 and 2', () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });
});
