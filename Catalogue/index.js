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

open_filter.addEventListener("click", () => {
    burger2.style.visibility = "visible"
    burger2.style.right = "0%"
    burger2.style.opacity = "1"
})

close_filter.addEventListener("click", () => {
    burger2.style.visibility = "hidden"
    burger2.style.right = "10%"
    burger2.style.opacity = "0"
})

let fav = document.getElementById("fav")

fav.addEventListener('click', (e) =>{
        if(fav.src.match('/Catalogue/Pictures/Fav_button_nc.png')){
            fav.src = '/Catalogue/Pictures/Fav_button_c.png'
        }
        else{
            fav.src = '/Catalogue/Pictures/Fav_button_nc.png'
        }
})

let fav1 = document.getElementById("fav1")

fav1.addEventListener('click', (e) =>{
        if(fav1.src.match('/Catalogue/Pictures/Fav_button_nc.png')){
            fav1.src = '/Catalogue/Pictures/Fav_button_c.png'
        }
        else{
            fav1.src = '/Catalogue/Pictures/Fav_button_nc.png'
        }
})

let filter_all = true; 
let filter_snes = false;
let filter_genesis = false;


function check() {
    if(filter_all == true || filter_snes == true){
        lot1.style.visibility = "visible"
        lot2.style.visibility = "visible"
    } else {
        lot1.style.visibility = "hidden"
        lot2.style.visibility = "hidden"
    }
}

genesis.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

all.addEventListener('click', (e) =>{
    filter_all = true;
    filter_snes = false;
    filter_genesis = false;
    check();
})

snes.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = true;
    filter_genesis = false;
    check();
})

saturn.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

dream.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

n64.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

cube.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

nes.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

gb.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

gba.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

ps1.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

ps2.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

neogeo.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

//

genesis1.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

all1.addEventListener('click', (e) =>{
    filter_all = true;
    filter_snes = false;
    filter_genesis = false;
    check();
})

snes1.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = true;
    filter_genesis = false;
    check();
})

saturn1.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

dream1.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

n641.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

cube1.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

nes1.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

gb1.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

gba1.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

ps11.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

ps21.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})

neogeo1.addEventListener('click', (e) =>{
    filter_all = false;
    filter_snes = false;
    filter_genesis = true;
    check();
})
