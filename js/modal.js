const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

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
