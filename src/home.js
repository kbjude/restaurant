import hotel from './images/background.png';
const home = () => {
    const container = document.getElementById('container');

    const header = document.createElement('h1');
    header.innerHTML = "Welcome to The Food Hub";
    header.className = "heading"

    const img = document.createElement('img');
    img.src = hotel;
    img.className = "background-img";

    container.innerHTML = '';
    container.appendChild(header);
    container.appendChild(img);
}

export default home