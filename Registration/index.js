let open = document.getElementById("pop_open")
let close = document.getElementById("pop_close")
let pop_up = document.getElementById("pop_up")

open.addEventListener('click', (e) =>  {
    pop_up.style.visibility = "visible"
})

close.addEventListener('click', (e) =>  {
    pop_up.style.visibility = "hidden"
})



burger_open.addEventListener("click", () => {
    burger_menu.style.visibility = "visible"
    burger_menu.style.opacity = "1"
    burger_menu.style.right = "0"
})

burger_close.addEventListener("click", () => {
    burger_menu.style.visibility = "hidden"
    burger_menu.style.opacity = "0"
    burger_menu.style.right = "-10%"
})
