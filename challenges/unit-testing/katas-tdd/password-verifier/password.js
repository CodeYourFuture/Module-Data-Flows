function verify(password) {
    // Step 2: Check for null password
    if (password === null) {
      return 'Password rejected';
    }
    
    // Step 1: Check minimum length
    if (password.length < 8) {
      return 'Password rejected';
    }
    
    // Step 3: Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return 'Password rejected';
    }
    
    // Step 4: Check for at least one number
    if (!/[0-9]/.test(password)) {
      return 'Password rejected';
    }
    
    // If all checks pass
    return 'Password accepted';
  }