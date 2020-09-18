import hotel from './images/background.png';
const initialLoad = () => {
    const mainDiv = document.getElementById('content');
    const header = document.createElement('h1');
    header.innerHTML = "Welcome to The Food Hub";
    mainDiv.appendChild(header);
    mainDiv.appendChild(hotel);

}

export default initialLoad;