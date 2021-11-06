/* Abre e fecha o Menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelector('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Quando clicar em um icone do Menu, esconder o Menu */
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
  nav.classList.remove('show')
}
