    const errorText = document.querySelector('.error-text');
    const password = document.querySelector('#password');
    const passwordConfirm = document.querySelector('#password-confirm');
    const errorTextTwo = document.querySelector('#password-error-text-two');
    const firstName = document.querySelector('#first-name');

    password.addEventListener("input", passwordValidation);
    passwordConfirm.addEventListener("input", passwordMatch);
    firstName.addEventListener("input", blankChecker);

    function passwordValidation(event){
        if (password.value === ''){
            errorText.textContent = '';
        }
        else if (password.checkValidity() === false) {
            errorText.textContent = `*must contain one capital,
        one number and over 8 characters in length`;
        } else {
            errorText.textContent = '';
        }
    }
    
    function passwordMatch(event){
        if (passwordConfirm.value !== password.value) {
            errorTextTwo.textContent = "*Passwords do not match";
        }
        if (passwordConfirm.value === password.value) {
            errorTextTwo.textContent = "";
        }
    }
