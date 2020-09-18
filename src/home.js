import hotel from './images/background.png';
const home = () => {
    const mainDiv = document.getElementById('content');

    const container = document.createElement('div');
    container.id = 'container';

    const nav = document.createElement('div');
    const btnContact = document.createElement('button');
    btnContact.onclick = () => {
        btnContact.dispatchEvent(new Event('tabContact', { bubbles: true }))
    }
    btnContact.innerHTML = "Contact";

    const btnMenu = document.createElement('button');
    btnMenu.innerHTML = "Menu";
    btnMenu.onclick = () => {
        btnMenu.dispatchEvent(new Event('tabMenu', { bubbles: true }))
    };

    const btnHome = document.createElement('button');
    btnHome.innerHTML = "Home";
    btnHome.onclick = () => {
        btnHome.dispatchEvent(new Event('tabContact', { bubbles: true }));
    };

    nav.appendChild(btnHome);
    nav.appendChild(btnContact);
    nav.appendChild(btnMenu);
    mainDiv.appendChild(nav);
    mainDiv.appendChild(container);
    
    loadHome(container);
}
const loadHome = (container) => {
    const header = document.createElement('h1');
    header.innerHTML = "Welcome to The Food Hub";

    const img = document.createElement('img');
    img.src = hotel;

    container.innerHTML = '';
    container.appendChild(header);
    container.appendChild(img);
}

export default home;