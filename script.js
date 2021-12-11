
let time = 8000;
let currentImage = 0;
let imagens = document.querySelectorAll("#slider img");
let max = imagens.length;

function nextImage(){
    
    imagens[currentImage].classList.remove("selected")

    currentImage++

    if(currentImage >= max){
        currentImage = 0
    }

    imagens[currentImage].classList.add("selected")
}


function start(){
    setInterval(() => {
        nextImage()
    }, time);
}

window.addEventListener("load", start)