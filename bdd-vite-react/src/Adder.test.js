import { add } from './components/Adder';

test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});