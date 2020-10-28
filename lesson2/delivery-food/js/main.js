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
  modalDialog = document.querySelector('.modal-dialog'),
  cardsRestaurants = document.querySelector('.cards-restaurants'),
  containerPromo = document.querySelector('.container-promo'),
  restaurants = document.querySelector('.restaurants'),
  menu = document.querySelector('.menu'),
  logo = document.querySelector('.logo'),
  cardsMenu = document.querySelector('.cards-menu');
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
  closeAuth.addEventListener("click", toggleModalAuth);

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

function createCardRest() {
  const card = `
  <a class="card card-restaurant">
  <img src="img/pizza-plus/preview.jpg" alt="image" class="card-image" />
  <div class="card-text">
    <div class="card-heading">
      <h3 class="card-title">Пицца плюс</h3>
      <span class="card-tag tag">50 мин</span>
    </div>
    <!-- /.card-heading -->
    <div class="card-info">
      <div class="rating">
        4.5
      </div>
      <div class="price">От 900 ₽</div>
      <div class="category">Пицца</div>
    </div>
    <!-- /.card-info -->
  </div>
  <!-- /.card-text -->
</a>
  `;
  cardsRestaurants.insertAdjacentHTML('afterbegin', card);
}
createCardRest();

function openGoods(event) {
  const target = event.target;
  const restaurant = target.closest('.card-restaurant');
  if (restaurant) {
    containerPromo.classList.add('hide');
    restaurants.classList.add('hide');
    menu.classList.remove('hide');
  }
  createCardGood();
  
}

function createCardGood() {
  const card = document.createElement('div');
  card.className = 'card';
  card.insertAdjacentHTML('beforeend', `
  <img src="img/pizza-plus/pizza-vesuvius.jpg" alt="image" class="card-image" />
  <div class="card-text">
    <div class="card-heading">
      <h3 class="card-title card-title-reg">Пицца Везувий</h3>
    </div>
    <!-- /.card-heading -->
    <div class="card-info">
      <div class="ingredients">Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец
        «Халапенье», соус «Тобаско», томаты.
      </div>
    </div>
    <!-- /.card-info -->
    <div class="card-buttons">
      <button class="button button-primary button-add-cart">
        <span class="button-card-text">В корзину</span>
        <span class="button-cart-svg"></span>
      </button>
      <strong class="card-price-bold">545 ₽</strong>
    </div>
  </div>
  `)
  console.log(card);
  cardsMenu.insertAdjacentElement('beforeend', card);
}
cardsRestaurants.addEventListener('click', openGoods);
logo.addEventListener("click", function () {
  containerPromo.classList.remove('hide');
  restaurants.classList.remove('hide');
  menu.classList.add('hide');

  
})