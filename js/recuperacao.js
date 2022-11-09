function onChangeEmail() {
    toggleEmailErrors();
}

function toggleEmailErrors() {
    const email = form.email();
    form.emailRequiredError().style.display = email ? "none" : "block";
    
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function isEmailValid() {
    const email = form.email();
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
}