const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

<<<<<<< HEAD
const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

const form = document.querySelector("form[name='contact-form']");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form["user-name"].value.trim();
  const phone = form["user-tel"].value.trim();
  const email = form["user-email"].value.trim();

  if (!name || !phone || !email) {
    alert("Proszę wypełnić wszystkie pola!");
    return;
  }

  if (!/^\+48[0-9]{9}$/.test(phone)) {
    alert("Proszę wprowadzić numer telefonu w formacie +48XXXXXXXXX");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Proszę wprowadzić prawidłowy adres e-mail!");
    return;
  }

  alert("Formularz został pomyślnie wysłany!");
  form.reset();
});


=======
// Функція для збереження стану модального вікна
const saveModalState = (isOpen) => {
  localStorage.setItem('modalIsOpen', isOpen ? 'true' : 'false');
};

// Функція для отримання стану модального вікна
const getModalState = () => {
  return localStorage.getItem('modalIsOpen') === 'true';
};

// Функція для переключення модального вікна
const toggleModal = () => {
  modal.classList.toggle('is-hidden');
  saveModalState(!modal.classList.contains('is-hidden'));
};

// Додайте обробники подій
modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

// Перевірте стан модального вікна при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  if (getModalState()) {
    modal.classList.remove('is-hidden');
  } else {
    modal.classList.add('is-hidden');
  }
});
>>>>>>> 7dbb439f3ddbbaa8cc02702e189bf0523b3df56d
