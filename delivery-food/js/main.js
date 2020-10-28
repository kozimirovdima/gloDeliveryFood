const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

// day 1
//объявление переменных...
const btnAuth = document.querySelector('.button-auth'),
  modalAuth = document.querySelector('.modal-auth'),
  closeAuth = document.querySelector('.close-auth'),
  logInForm = document.querySelector('#logInForm'),
  loginInput = document.querySelector('#login'),
  userName = document.querySelector('.user-name'),
  buttonOut = document.querySelector('.button-out'),
  modalDialog = document.querySelector('.modal-dialog');
// объявление переменной, которая получает значения из локальных данных
let login = localStorage.getItem('gloDelivery');


// Функция открытия/закрытия модального окна
function toggleModalAuth() {
  modalAuth.classList.toggle('is-open');
  if (modalAuth.classList.contains('is-open')) {
    scrollOff();
  } else {
    scrollOn();
  }
}

// Обхявление функций авторизации
function autorized() {
  function logOut() {
    login = null;
    localStorage.removeItem('gloDelivery');
    userName.style.display = '';
    buttonOut.style.display = '';
    btnAuth.style.display = '';
    btnAuth.removeEventListener('click', logOut);
    checkAuth();
  }
  console.log('Авторизован');
  userName.textContent = login;
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';
  btnAuth.style.display = 'none';
  buttonOut.addEventListener('click', logOut);
}

function notAutorized() {
  console.log('Не авторизован');
  btnAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);

  function logIn(event) {
    event.preventDefault();
    login = loginInput.value;
    localStorage.setItem('gloDelivery', login);
    logInForm.removeEventListener('submit', logIn);
    btnAuth = removeEventListener('click', toggleModalAuth)
    closeAuth = removeEventListener('click', toggleModalAuth)
    toggleModalAuth();
    checkAuth();
  }
  logInForm.addEventListener('submit', logIn);
}
// Функция проверки авторизации, да / нет
function checkAuth() {
  if (login) {
    autorized();
  } else {
    notAutorized();
  }
}
checkAuth();

//Закрытие Модального окна при клике мимо!
modalAuth.addEventListener('click', e => {
  console.log(e.target);
  if (e.target === modalAuth) {
    toggleModalAuth();
  }
});