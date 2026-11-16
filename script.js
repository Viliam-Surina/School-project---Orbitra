const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('[data-year]').forEach((item) => {
  item.textContent = new Date().getFullYear();
});

const form = document.querySelector('#interest-form');
if (form) {
  const fields = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    trip: document.querySelector('#trip'),
    consent: document.querySelector('#consent')
  };
  const errors = {
    name: document.querySelector('#name-error'),
    email: document.querySelector('#email-error'),
    trip: document.querySelector('#trip-error'),
    consent: document.querySelector('#consent-error')
  };

  function validate() {
    let valid = true;
    Object.values(errors).forEach((element) => { element.textContent = ''; });
    Object.values(fields).forEach((element) => element.classList.remove('invalid'));

    if (fields.name.value.trim().length < 2) {
      errors.name.textContent = 'Zadajte, prosím, aspoň 2 znaky.';
      fields.name.classList.add('invalid');
      valid = false;
    }
    if (!fields.email.validity.valid || !fields.email.value.trim()) {
      errors.email.textContent = 'Zadajte platnú e-mailovú adresu.';
      fields.email.classList.add('invalid');
      valid = false;
    }
    if (!fields.trip.value) {
      errors.trip.textContent = 'Vyberte si jednu z možností.';
      fields.trip.classList.add('invalid');
      valid = false;
    }
    if (!fields.consent.checked) {
      errors.consent.textContent = 'Pre pokračovanie označte súhlas.';
      valid = false;
    }
    return valid;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const success = document.querySelector('#success-message');
    if (!validate()) {
      success.hidden = true;
      form.querySelector('.invalid, input[type="checkbox"]:not(:checked)')?.focus();
      return;
    }
    const firstName = fields.name.value.trim().split(/\s+/)[0];
    success.textContent = `Ďakujeme, ${firstName}! Váš nezáväzný záujem je zaznamenaný v tejto ukážke. Formulár neposiela údaje na server.`;
    success.hidden = false;
    form.reset();
  });

  Object.values(fields).forEach((element) => {
    element.addEventListener('input', validate);
    element.addEventListener('change', validate);
  });
}
