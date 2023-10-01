
const menuIcon = document.getElementById('menuIcon')
const menu = document.getElementById('menu')
menuIcon.addEventListener('click', () => {
    if (menu.style.left === '-250px'){
        menu.style.left = '0';
        menuIcon.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menu.style.left = '-250px';
        menuIcon.innerHTML = '<i class="fas fa-bars"></i>'
    }
})