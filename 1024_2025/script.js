const icon = document.getElementById('toggle')

const nav = document.querySelector('nav')

const lines = document.querySelectorAll('.line')

icon.addEventListener('click', () => {
    nav.classList.toggle('active')
})