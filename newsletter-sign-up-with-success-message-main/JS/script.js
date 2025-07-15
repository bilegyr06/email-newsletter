// Variables
console.log('Script loaded succesfully');
const form = document.getElementById('form')
const validate_text = document.body.querySelector('.js_valid_text');
const submit_button = document.body.querySelector('.js_submit_btn');
const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const main_body = document.querySelector('.main_body');
const success_msg = document.querySelector('.js_success_msg');
const dismiss_btn = document.querySelector('.js_dismiss_btn');
const email_input = document.getElementById('email');
const confirmed_email = document.querySelector('.js_input_email');


form.addEventListener('submit', (e) => {
    if (document.getElementById('email').value === "" || !email_pattern.test(document.getElementById('email').value)) {
        e.preventDefault();
        validate_text.style.display = 'block';
        email_input.style.border = '1px solid var(--red)'
        email_input.style.backgroundColor = '#ffe0e0ff'
        email_input.style.color = 'var(--red)'
        console.log('The email input is not valid');
        
    }

    else if (email_pattern.test(document.getElementById('email').value)){
        e.preventDefault();
        const email = document.getElementById('email').value;
        main_body.style.display = "none";
        success_msg.style.display = 'flex';
        confirmed_email.innerText = email;
        
        
    }
})


dismiss_btn.addEventListener('click', ()=>{
    location.reload();
})

