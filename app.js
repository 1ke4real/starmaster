var menu = document.querySelector("#menu")
var close = document.querySelector("#cancel-menu")
var open = document.querySelector("#open-menu")
var section = document.querySelector("section")
var proj = document.querySelector("#anime")

open.addEventListener('click', function () {
    menu.classList.add('show-menu')
    proj.classList.remove('animate__animated')


})

close.addEventListener('click', function () {
    menu.classList.remove('show-menu')
    section.classList.add('animate__animated')
})

