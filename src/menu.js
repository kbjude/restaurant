import menuItem1 from './images/yummy.png';
import menuItem2 from './images/yummychicken.png';
import menuItem3 from './images/salad.png';
import menuItem4 from './images/dinnertables.jpg';

const menu = () => {
    const menuDiv = document.createElement('div');
    menuDiv.className = "menu-div";
    const itemsContainer = document.createElement('div');
    const desccontainer1 = document.createElement('div');
    desccontainer1.className = "desc-container";
    const itemsContainer1 = document.createElement('div');
    const desccontainer2 = document.createElement('div');
    desccontainer2.className = "desc-container";
    itemsContainer.className ="images-container";

    const container = document.getElementById('container');

    const menuImage = document.createElement('img');
    menuImage.className = "menu-image";
    menuImage.src = menuItem1;

    const menuImage1 = document.createElement('img');
    menuImage1.className = "menu-image";
    menuImage1.src = menuItem2;

    const menuImage2 = document.createElement('img');
    menuImage2.className = "menu-image";
    menuImage2.src = menuItem4;

    const mealdesc1 = document.createElement('p');
    mealdesc1.innerText = "Boiled Chicken"

    const mealdesc2 = document.createElement('p');
    mealdesc2.innerText = "Fresh Juice, Beef & Potato";

    const mealdesc3 = document.createElement('p');
    mealdesc3.innerText = "Three meal course Buffet";


    const menuImage3 = document.createElement('img');
    menuImage.className = "menu-image";
    menuImage.src = menuItem3;

    const menuImage4 = document.createElement('img');
    menuImage1.className = "menu-image";
    menuImage1.src = menuItem4;

    const menuImage5 = document.createElement('img');
    menuImage1.className = "menu-image";
    menuImage1.src = menuItem4;

    container.innerHTML = '';
    container.appendChild(menuDiv);
    menuDiv.appendChild(itemsContainer);
    itemsContainer.appendChild(menuImage);
    itemsContainer.appendChild(menuImage1);
    itemsContainer.appendChild(menuImage2);
    menuDiv.appendChild(desccontainer1);
    desccontainer1.appendChild(mealdesc1);
    desccontainer1.appendChild(mealdesc2);
    desccontainer1.appendChild(mealdesc3);

    menuDiv.appendChild(itemsContainer1);
    itemsContainer1.appendChild(menuImage3);
    itemsContainer1.appendChild(menuImage4);
    itemsContainer1.appendChild(menuImage5);
    menuDiv.appendChild(desccontainer2);

}

export default menu