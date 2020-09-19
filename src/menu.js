import menuItem1 from './images/yummy.png';
import menuItem2 from './images/yummychicken.png';
import menuItem3 from './images/salad.png';
import menuItem4 from './images/dinnertables.jpg';

const menu = () => {
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = "Coming Soon";
    const container = document.getElementById('container');

    const itemsContainer = document.createElement('div');
    const menuImage = document.createElement('img');
    menuImage.className = "menu-image";
    menuImage.src = menuItem1;

    const menuImage1 = document.createElement('img');
    menuImage1.className = "menu-image";
    menuImage1.src = menuItem2;

    const menuImage2 = document.createElement('img');
    menuImage2.className = "menu-image";
    menuImage2.src = menuItem4;

    container.innerHTML = '';
    container.appendChild(menuDiv);
    menuDiv.appendChild(itemsContainer);
    itemsContainer.appendChild(menuImage);
    itemsContainer.appendChild(menuImage1);
    itemsContainer.appendChild(menuImage2);
}

export default menu