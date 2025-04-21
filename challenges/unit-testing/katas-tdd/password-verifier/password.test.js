describe('Password Verifier', () => {
    // Step 1 Tests
    test('rejects passwords shorter than 8 characters', () => {
      expect(verify('short')).toBe('Password rejected');
      expect(verify('1234567')).toBe('Password rejected');
    });
    
    // Step 2 Tests
    test('rejects null password', () => {
      expect(verify(null)).toBe('Password rejected');
    });
    
    // Step 3 Tests
    test('rejects passwords without uppercase letters', () => {
      expect(verify('alllowercase')).toBe('Password rejected');
      expect(verify('12345678')).toBe('Password rejected');
      expect(verify('lowercase1')).toBe('Password rejected');
    });
    
    // Step 4 Tests
    test('rejects passwords without numbers', () => {
      expect(verify('NoNumbersHere')).toBe('Password rejected');
      expect(verify('AnotherOne')).toBe('Password rejected');
    });
    
    test('accepts valid passwords', () => {
      expect(verify('ValidPass1')).toBe('Password accepted');
      expect(verify('AnotherValid1')).toBe('Password accepted');
      expect(verify('1TwoThree')).toBe('Password accepted');
    });
  });