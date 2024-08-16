document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const dobInput = document.getElementById('dob');
    const submitBtn = document.getElementById('submitBtn');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const dobError = document.getElementById('dobError');

    const nameValid = document.getElementById('nameValid');
    const emailValid = document.getElementById('emailValid');
    const passwordMatchValid = document.getElementById('passwordMatchValid');

    function validateName() {
        const name = nameInput.value.trim();
        const isValid = /^[a-zA-Z\s]{3,}$/.test(name);
        if (isValid) {
            nameInput.classList.add('border-green-500');
            nameInput.classList.remove('border-red-500');
            nameError.classList.add('hidden');
            nameValid.classList.remove('hidden');
        } else {
            nameInput.classList.add('border-red-500');
            nameInput.classList.remove('border-green-500');
            nameError.classList.remove('hidden');
            nameValid.classList.add('hidden');
        }
        return isValid;
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (isValid) {
            emailInput.classList.add('border-green-500');
            emailInput.classList.remove('border-red-500');
            emailError.classList.add('hidden');
            emailValid.classList.remove('hidden');
        } else {
            emailInput.classList.add('border-red-500');
            emailInput.classList.remove('border-green-500');
            emailError.classList.remove('hidden');
            emailValid.classList.add('hidden');
        }
        return isValid;
    }

    function validatePassword() {
        const password = passwordInput.value.trim();
        const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
        if (isValid) {
            passwordInput.classList.add('border-green-500');
            passwordInput.classList.remove('border-red-500');
            passwordError.classList.add('hidden');
        } else {
            passwordInput.classList.add('border-red-500');
            passwordInput.classList.remove('border-green-500');
            passwordError.classList.remove('hidden');
        }
        return isValid;
    }

    function validateConfirmPassword() {
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const isValid = password === confirmPassword;
        if (isValid) {
            confirmPasswordInput.classList.add('border-green-500');
            confirmPasswordInput.classList.remove('border-red-500');
            confirmPasswordError.classList.add('hidden');
            passwordMatchValid.classList.remove('hidden');
        } else {
            confirmPasswordInput.classList.add('border-red-500');
            confirmPasswordInput.classList.remove('border-green-500');
            confirmPasswordError.classList.remove('hidden');
            passwordMatchValid.classList.add('hidden');
        }
        return isValid;
    }

    function validateDob() {
        const dob = dobInput.value;
        const age = new Date().getFullYear() - new Date(dob).getFullYear();
        const isValid = age >= 18;
        if (isValid) {
            dobInput.classList.add('border-green-500');
            dobInput.classList.remove('border-red-500');
            dobError.classList.add('hidden');
        } else {
            dobInput.classList.add('border-red-500');
            dobInput.classList.remove('border-green-500');
            dobError.classList.remove('hidden');
        }
        return isValid;
    }

    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isDobValid = validateDob();

        const isFormValid = isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isDobValid;
        submitBtn.disabled = !isFormValid;
        return isFormValid;
    }

    // Real-time validation as the user interacts with the form
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
    dobInput.addEventListener('input', validateDob);

    // Validate the entire form when any input field changes
    form.addEventListener('input', validateForm);

    // Final validation on form submission with success message
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission for demonstration purposes

        if (validateForm()) {
            // Display success message
            alert("Registration successful!");
        }
    });
});
