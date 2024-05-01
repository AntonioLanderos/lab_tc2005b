const password = document.getElementById('psw');
const confirm_password = document.getElementById('verify');
const message = document.getElementById('message');

password.addEventListener('input', validatePassword);
confirm_password.addEventListener('input', validatePassword);

function validatePassword() {
  if (password.value !== confirm_password.value || (password.value === '' && confirm_password.value === '')) {
    message.style.color = 'red'; 
    message.textContent = 'La contraseña no coincide';
  } else {
    message.style.color = 'green'; 
    message.textContent = 'La contraseña coincide';
  }
}
