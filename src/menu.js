import menuItem1 from './images/yummy.png';
import menuItem2 from './images/yummychicken.png';
import menuItem3 from './images/salad.png';

const menu = () => {
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = "Coming Soon";
    const container = document.getElementById('container');

    

    container.innerHTML = '';
    container.appendChild(menuDiv)
}

export default menu