import hotel from './images/background.png';

const initialLoad = () => {
    const mainDiv = document.getElementById('content');

    const container = document.createElement('div');

    const nav = document.createElement('div');
    const btnContact = document.createElement('button');
    btnContact.onclick = () => {
        console.log("Contact is coming soon");
    }
    btnContact.innerHTML = "Contact";

    const btnMenu = document.createElement('button');
    btnMenu.innerHTML = "Menu";
    btnMenu.onclick = () => {
        console.log("Menu is coming soon");
    };

    const btnHome = document.createElement('button');
    btnHome.innerHTML = "Home";
    btnHome.onclick = () => {
        loadHome(container);
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

    container.
    container.appendChild(header);
    container.appendChild(img);
}

export default initialLoad;