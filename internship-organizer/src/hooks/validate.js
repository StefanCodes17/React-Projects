const validatePasswords = (password1, password2) => {
    const errors = []
    if (password1.length <= 6) {
        errors.push('Password must be greater than 7 characters!')
    }
    if (password1 != password2) {
        errors.push('Passwords must match!')
    }
    return { errors }
}

export {
    validatePasswords
}