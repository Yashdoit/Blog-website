let burger = document.querySelector('.burger')
let navbar = document.querySelector('.navbar')
let navList = document.querySelector('.ul-resp')

burger.addEventListener("click", ()=> {
    navList.classList.toggle('ul-resp')
})

let flag = 0

function controller(x){
    flag += x
    slideshow(flag)
}

function slideshow(num){
    let slides = document.getElementsByClassName('slide')
    
        if(num === slides.length){
            flag = 0
            num = 0
        }else if(num < 0){
            flag = slides.length-1
            num = slides.length-1
        }

    for(let y of slides){
        y.style.display = "none"
    }

    slides[num].style.display = "block"
}
slideshow(flag)