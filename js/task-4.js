const form = document.querySelector('.login-form');

console.log(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { email, password } = e.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    form.reset();
  }
});
