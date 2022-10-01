import textSanitization from '../src/utils/text-sanitization/index.js';

test('replace newline with whitespace', () => {
    expect(textSanitization("My name is Aviraj Khare.\n")).toBe("My name is Aviraj Khare. ");
});

test('text is not changed if no newline', () => {
    expect(textSanitization("My name is Aviraj Khare.")).toBe("My name is Aviraj Khare.");
});

test('text is not changed if no text', () => {
    expect(textSanitization("")).toBe("");
});