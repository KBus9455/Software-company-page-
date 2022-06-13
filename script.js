const btnMenu = document.querySelector('i');
const listMenu = document.querySelector('nav');

btnMenu.addEventListener('click', function () {
  listMenu.classList.toggle('active');
});
