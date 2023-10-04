
function changeBackgroundColor(){
    const colorPicker = document.getElementById('colorPicker')
    const container = document.querySelector('.container')
    container.style.backgroundColor = colorPicker.value;
}