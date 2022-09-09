const switchThemeButton = document.querySelector('#switch-theme-button');
const lightTitle = document.querySelector('#light-title')
const darkTitle = document.querySelector('#dark-title')


switchThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  lightTitle.classList.toggle('hidden')
  darkTitle.classList.toggle('hidden')

});