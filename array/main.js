const navLinks = [
    { text: 'Home', url: 'index.html' },
    { text: 'About', url: 'about.html' },
    { text: 'Services', url: 'services.html' },
    { text: 'Contact', url: 'contact.html' }
];

function createNavbar() {
    const navbar = document.getElementById('navbar');

    navLinks.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.textContent = link.text;
        anchor.href = link.url;

        listItem.appendChild(anchor);
        navbar.appendChild(listItem);
    });
}

createNavbar();
