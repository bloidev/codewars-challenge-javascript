describe('Duplicate Encoder', () => {
    test('should return the correct encoding for a string', () => {
        expect(duplicateEncoder("recede")).toBe("()()()");
    });

    test('should handle empty strings', () => {
        expect(duplicateEncoder("")).toBe("");
    });

    test('should return the correct encoding for a string with all unique characters', () => {
        expect(duplicateEncoder("abc")).toBe("((((");
    });
});