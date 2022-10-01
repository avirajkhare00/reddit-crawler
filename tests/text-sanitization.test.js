import textSanitization from '../src/utils/text-sanitization/index';

describe('text-sanitization test suite', () => {
  test('replace newline with whitespace', () => {
    expect(textSanitization('My name is Aviraj Khare.\n')).toBe('My name is Aviraj Khare. ');
  });

  test('text is not changed if no newline', () => {
    expect(textSanitization('My name is Aviraj Khare.')).toBe('My name is Aviraj Khare.');
  });

  test('text is not changed if no text', () => {
    expect(textSanitization('')).toBe('');
  });
  test('textSanitization should be a string', () => {
    expect(typeof textSanitization('')).toBe('string');
  });
});
