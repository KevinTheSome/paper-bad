const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}


const button = document.getElementById("lang")
var lang = "RUS"

button.onclick = changeLang

function changeLang() {
    if(lang == "LV"){
        button.innerHTML = "🇷🇺"
        lang = "RUS"
        console.log(lang);
    }else{
        button.innerHTML = "🇱🇻"
        lang = "LV"
        console.log(lang);
    }
}