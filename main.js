const errorText = document.querySelector('.error-text');
    const password = document.querySelector('#password');
    const passwordConfirm = document.querySelector('#password-confirm');
    const errorTextTwo = document.querySelector('#password-error-text-two');

    password.addEventListener("input", passwordValidation);
    passwordConfirm.addEventListener("input", passwordMatch);

    errorText.textContent = "add this";

   

    function passwordValidation(event){
        let greetings = "hello";
        errorText.textContent = "${greetings}";
        console.log(greetings);
        const pwValue = password.value;
    }
    
    function passwordMatch(event){
        if (passwordConfirm.value !== password.value) {
            errorTextTwo.textContent = "Passwords do not match";
        }
        if (passwordConfirm.value === password.value) {
            errorTextTwo.textContent = "match";
        }
    }