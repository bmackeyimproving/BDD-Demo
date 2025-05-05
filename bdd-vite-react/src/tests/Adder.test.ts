import { add } from '../components/add';

describe('add', () => {
  it('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
});
