const btnMenu = document.querySelector('.btn-menu')
const menuToggle = document.querySelector('#nav')


btnMenu.addEventListener('click', () => {
  menuToggle.classList.toggle("hidden")
})