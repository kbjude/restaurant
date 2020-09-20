import menuItem1 from './images/yummy.png';
import menuItem2 from './images/yummychicken.png';
import menuItem3 from './images/salad.png';
import menuItem4 from './images/dinnertables.jpg';
import menuItem5 from './images/superg.jpg';
import menuItem6 from './images/chicken.jpg';

const menu = () => {
    const container = document.getElementById('container');

    const menuDiv = document.createElement('div');
    menuDiv.className = "menu-div";
    const itemsContainer = document.createElement('div');
    const desccontainer1 = document.createElement('div');
    desccontainer1.className = "desc-container";
    const itemsContainer1 = document.createElement('div');
    const desccontainer2 = document.createElement('div');
    desccontainer2.className = "desc-container";
    itemsContainer.className ="images-container";
    itemsContainer1.className ="images-container";

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


    const mealdesc4 = document.createElement('p');
    mealdesc4.innerText = "Fresh Salad"

    const mealdesc5 = document.createElement('p');
    mealdesc5.innerText = "Spags and Chicken";

    const mealdesc6 = document.createElement('p');
    mealdesc6.innerText = "Deep fried Chicken";


    const menuImage3 = document.createElement('img');
    menuImage3.className = "menu-image";
    menuImage3.src = menuItem3;

    const menuImage4 = document.createElement('img');
    menuImage4.className = "menu-image";
    menuImage4.src = menuItem5;

    const menuImage5 = document.createElement('img');
    menuImage5.className = "menu-image";
    menuImage5.src = menuItem6;

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
    desccontainer2.appendChild(mealdesc4);
    desccontainer2.appendChild(mealdesc5);
    desccontainer2.appendChild(mealdesc6);
};
export default menu;