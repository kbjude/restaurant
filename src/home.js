import hotel from './images/background.png';
import logo from './images/logo.png';
const home = () => {
    const container = document.getElementById('container');

    const headerDiv = document.createElement('div')
    const header = document.createElement('h1');
    header.innerHTML = "Welcome to The Food Hub";
    header.className = "heading"

    const logoImg = document.createElement('img');
    logoImg.src = logo;
    logoImg.className = "logo";

    const img = document.createElement('img');
    img.src = hotel;
    img.className = "background-img";

    container.innerHTML = '';
    container.appendChild(headerDiv);
    headerDiv.appendChild(header);
    headerDiv.appendChild(logoImg);
    container.appendChild(img);
}

export default home