// Step 1: Check for null or too short passwords
function verify(password) {
    if (!password || password.length < 8) {
        return "Password rejected";
    }

    // Step 2: Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return "Password rejected";
    }

    // Step 3: Check for at least one numeric character
    if (!/[0-9]/.test(password)) {
        return "Password rejected";
    }

    // Step 4: If all conditions pass
    return "Password accepted";
}

module.exports = verify;