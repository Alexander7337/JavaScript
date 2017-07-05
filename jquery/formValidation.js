function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let company = $('#company');
    let companyNumber = $('#companyNumber');
    let companyInfo = $('#companyInfo');
    let submitBtn = $('#submit');
    let validateDiv = $('#valid');
    let meetAllConditions = true;

    company.on('change', function(){
        if (company.is(':checked')) {
            companyInfo.css('display', 'block');
        } else {
            companyInfo.css('display', 'none');
        };
    });

    //Events
    submitBtn.on('click', function(ev) {
        ev.preventDefault();

        validateForm();

        if (!meetAllConditions) {
            validateDiv.css('display', 'none')
            meetAllConditions = true;
        } else {
            validateDiv.css('display', 'block');
        }
    });

    function validateForm() {
        validateInputWithRegex(username, /(^[a-zA-Z0-9]{3,20}$)/g);
        validateInputWithRegex(email, /(^.*?@.*?\..*?$)/g);
        if (password.val() === confirmPassword.val()) {
            validateInputWithRegex(password, /(^[\w]{5,15}$)/g);
            validateInputWithRegex(confirmPassword, /(^[\w]{5,15}$)/g);
        } else {
            password.css('border', 'solid red');
            confirmPassword.css('border', 'solid red');
            meetAllConditions = false;
        };

        if (company.is(':checked')) {
            let number = +companyNumber.val();
            if (number >= 1000 && number <= 9999) {
                companyNumber.css('border', 'none');
            } else {
                companyNumber.css('border', 'solid red');
                meetAllConditions = false;
            };
        };
    };

    function validateInputWithRegex(input, pattern) {
        if (pattern.test(input.val())) {
            input.css('border', 'none');
        } else {
            input.css('border', 'solid red');
            meetAllConditions = false;
        };
    };
}