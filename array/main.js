const navLinks = [
    { text: 'Home' },
    { text: 'About'},
    { text: 'Services'},
    { text: 'Contact' }
];


function createNavbar(){
    const navbar = document.getElementById('navbar')
    navLinks.forEach(link => {
        const listItem = document.createElement('li')
        const anchor = document.createElement('a')
        anchor.textContent = link.text;
        listItem.appendChild(anchor)
        navbar.appendChild(listItem)
    })
}
createNavbar()