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

const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        300:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView:3,
        },
        1050:{
            slidesPerView:4,
        }
    },
  });

let fav2 = document.getElementById("fav2")
let fav3 = document.getElementById("fav3")
let fav4 = document.getElementById("fav4")
let fav5 = document.getElementById("fav5")
let fav6 = document.getElementById("fav6")
let fav7 = document.getElementById("fav7")
let fav8 = document.getElementById("fav8")

fav2.addEventListener('click', (e) =>{
    if(fav2.src.match('/Catalogue/Pictures/Fav_button_nc.png')){
        fav2.src = '/Catalogue/Pictures/Fav_button_c.png'
    }
    else{
        fav2.src = '/Catalogue/Pictures/Fav_button_nc.png'
    }
})

fav3.addEventListener('click', (e) =>{
    if(fav3.src.match('/Catalogue/Pictures/Fav_button_nc.png')){
        fav3.src = '/Catalogue/Pictures/Fav_button_c.png'
    }
    else{
        fav3.src = '/Catalogue/Pictures/Fav_button_nc.png'
    }
})

fav4.addEventListener('click', (e) =>{
    if(fav4.src.match('/Catalogue/Pictures/Fav_button_nc.png')){
        fav4.src = '/Catalogue/Pictures/Fav_button_c.png'
    }
    else{
        fav4.src = '/Catalogue/Pictures/Fav_button_nc.png'
    }
})

fav5.addEventListener('click', (e) =>{
    if(fav5.src.match('/Catalogue/Pictures/Fav_button_nc.png')){
        fav5.src = '/Catalogue/Pictures/Fav_button_c.png'
    }
    else{
        fav5.src = '/Catalogue/Pictures/Fav_button_nc.png'
    }
})

fav6.addEventListener('click', (e) =>{
    if(fav6.src.match('/Catalogue/Pictures/Fav_button_nc.png')){
        fav6.src = '/Catalogue/Pictures/Fav_button_c.png'
    }
    else{
        fav6.src = '/Catalogue/Pictures/Fav_button_nc.png'
    }
})

fav7.addEventListener('click', (e) =>{
    if(fav7.src.match('/Catalogue/Pictures/Fav_button_nc.png')){
        fav7.src = '/Catalogue/Pictures/Fav_button_c.png'
    }
    else{
        fav7.src = '/Catalogue/Pictures/Fav_button_nc.png'
    }
})

fav8.addEventListener('click', (e) =>{
    if(fav8.src.match('/Catalogue/Pictures/Fav_button_nc.png')){
        fav8.src = '/Catalogue/Pictures/Fav_button_c.png'
    }
    else{
        fav8.src = '/Catalogue/Pictures/Fav_button_nc.png'
    }
})

let offset = 25; //Смещения от левого края
    const spiderMan = document.getElementById("lol");
    
    document.getElementById("right").addEventListener("click", function(){
        offset = offset + 27;
        if (offset > 52) {
            offset = 25;
        }
        spiderMan.style.left = -offset + '%';
    })
    
    document.getElementById('left').addEventListener('click', function(){
        offset = offset - 27;
        if (offset < -2) {
            offset = 25;
        }
        spiderMan.style.left = -offset + '%';
    })