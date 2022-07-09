var images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"]
var index = 0
var img = document.getElementById("imgs")
function prev() {
    if (index == 0)
        index = images.length - 1
    else
        index--
    imgs.src = images[index]
}

function next() {
    if (index == images.length - 1)
        index = 0
    else
        index++
    imgs.src = images[index]


}
var msg = '<i class="fa-solid fa-pause"></i>'
var msg1 = '<i class="fa-solid fa-play"></i>'
var time = setInterval(next, 1500)
ch = 1
function pause() {
    var p = document.getElementById("pause")
    if (ch == 1) {
        p.innerHTML= msg1
        clearInterval(time)
        ch = 2

    }
    else {
        p.innerHTML= msg
        time = setInterval(next, 1500)
        ch = 1
    }

}
