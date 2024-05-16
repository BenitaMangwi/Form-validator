const form = document.getElementById('form');
const username = document.getElementById('username');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const password2 = document.getElementById('password2');

// Show error messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success 
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//validate email
function isValidemail(Email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(Email).toLowerCase());
}
 
//check entry details

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

//Get field name

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1) ;
}

//Event Listeners

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired ([username, Email, Password, password2])
});














































/*

// Event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    if (Email.value === '') {
        showError(Email, 'Email is required');
    } else if (!isValidemail(Email.value)) {
        showError(Email, 'Email is invalid')
    } else {
        showSuccess(Email);
    }


    if (Password.value === '') {
        showError(Password, 'Password is required');
    } else {
        showSuccess(Password);
    }

    if (password2.value === '') {
        showError(password2, 'You have not confirmed your password');
    } else {
        showSuccess(password2);
    }

});
*/