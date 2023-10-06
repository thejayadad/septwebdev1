
btn.addEventListener("mouseover", dark)
btn.addEventListener("mouseout", light)
const head = document.getElementById('head')
function dark(){
    document.body.style.background = "black";
    btn.style.color = "orange"
    head.style.color = "white"
}
function light(){
    document.body.style.background = "white"
    btn.style.color =  "black";
    head.style.color = "black";
}