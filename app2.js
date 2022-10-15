var menu = document.querySelector("#menu")
var close = document.querySelector("#cancel-menu")
var open = document.querySelector("#open-menu")
var section = document.querySelector("section")
var projet = document.querySelector("#projet")

open.addEventListener('click', function () {
    menu.classList.add('show-menu')
    projet.classList.remove('animate__animated')

})

close.addEventListener('click', function () {
    menu.classList.remove('show-menu')
    projet.classList.add('animate__animated')
})

