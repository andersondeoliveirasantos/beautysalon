const nav = document.querySelector('#header nav')
const toggle = document.querySelector('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}