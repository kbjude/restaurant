import hotel from './images/background.png';
const home = () => {
    const container = document.getElementById('container');

    const header = document.createElement('h1');
    header.innerHTML = "Welcome to The Food Hub";

    const img = document.createElement('img');
    img.src = hotel;

    container.innerHTML = '';
    container.appendChild(header);
    container.appendChild(img);
}

export default home