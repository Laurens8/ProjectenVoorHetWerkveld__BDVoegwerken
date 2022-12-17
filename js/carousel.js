let lijstfotos = new Array()
carousel()
let teller = 0
const btn = document.getElementById("btn_carousel_2").onclick = VolgendeFoto
const btn2 = document.getElementById("btn_carousel_1").onclick = VorigeFoto

function carousel() {

    lijstfotos[0] = new Image().src = 'img/1.jpg'
    lijstfotos[1] = new Image().src = 'img/2.jpg'
    lijstfotos[2] = new Image().src = 'img/3.jpg'
    lijstfotos[3] = new Image().src = 'img/4.jpg'
    lijstfotos[4] = new Image().src = 'img/5.jpg'
}

function VolgendeFoto() {
    if (teller == 0) {
        document.getElementById("foto_2").src = lijstfotos[0]
    }
    console.log(teller)
    document.getElementById("foto_1").src = lijstfotos[teller]
    document.getElementById("foto_2").src = lijstfotos[teller + 1]
    document.getElementById("foto_3").src = lijstfotos[teller + 2]
    if (teller == 3) {
        document.getElementById("foto_3").src = lijstfotos[0]
    }
    if (teller == 4) {
        document.getElementById("foto_2").src = lijstfotos[0]
        document.getElementById("foto_3").src = lijstfotos[1]
    }
    teller++
    if (teller == 5) {
        teller = 0
    }
}

function VorigeFoto() {
    if (teller == 0) {
        teller = 5
    }
    document.getElementById("foto_1").src = lijstfotos[teller - 2]
    document.getElementById("foto_2").src = lijstfotos[teller - 1]
    document.getElementById("foto_3").src = lijstfotos[teller]
    if (teller == 1) {
        document.getElementById("foto_1").src = lijstfotos[4]
    }
    if (teller == 5) {
        document.getElementById("foto_1").src = lijstfotos[3]
        document.getElementById("foto_3").src = lijstfotos[0]
    }
    teller--
    console.log(teller)
}