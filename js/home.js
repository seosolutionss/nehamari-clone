document.querySelector('.hamburger').addEventListener('click', (e) => {
  e.preventDefault()

  document.querySelector('.navigation').classList.toggle('active')
})
document.querySelector('.into').addEventListener('click', (e) => {
  e.preventDefault()

  document.querySelector('.navigation').classList.toggle('active')
})

document.querySelector('.btn_new_one').addEventListener('click', (e) => {
  e.preventDefault()

  document.querySelector('.bk_process').classList.toggle('actice_bk')
})
document.querySelector('.into_bk').addEventListener('click', (e) => {
  e.preventDefault()

  document.querySelector('.bk_process').classList.toggle('actice_bk')
})

// dark mode mobile
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
)
const currentTheme = localStorage.getItem('theme')

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme)

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }
}

toggleSwitch.addEventListener('change', switchTheme, false)

// button color change
var button = document.querySelector('.button_desc')

button.onclick = function () {
  var red = Math.floor(Math.random() * 256)
  var blue = Math.floor(Math.random() * 256)
  var green = Math.floor(Math.random() * 256)

  this.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
}
