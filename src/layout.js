import changeDom from './helpers';
import yummypizza from './images/yummy.png';
import yummychicken from './images/yummychicken.png';
import background from './images/background.png';


const displayLayout = () => {
    const content = document.getElementById('content');
    const yummyPizza = changeDom.createImage(yummypizza, 'yummy pizza', ['yummy-pizza']);
    const yummyChicken = changeDom.createImage(yummychicken, 'yummy chicken', ['yummy-chicken']);
    const backGround = changeDom.createImage(background, 'No background available', ['background']);
    const header = changeDom.createHtmlElement({tag: 'header', parentElement: content, classNames: ['header']});
    const navbar = changeDom.createHtmlElement({tag: 'nav', parentElement: header, classNames: ['navbar']})
    const mainSection = changeDom.createHtmlElement({tag: 'div', parentElement: content, classNames: ['mainsection']});
    const middleSection = changeDom.createHtmlElement({tag: 'div', parentElement: content, classNames: ['middlesection','d-flex']});
    const lowerSection = changeDom.createHtmlElement({tag: 'div', parentElement: content, classNames: ['lowersection']});
    const footerSection = changeDom.createHtmlElement({tag: 'div', parentElement: content, classNames: ['footersection']});
    const navlist = changeDom.createHtmlElement({tag: 'ul', parentElement: navbar, classNames: ['navlist'] });
    
    changeDom.createHtmlElement({ 
      tag: 'li', parentElement: navlist, elemId: 'Home', text: 'Home',
    });

    changeDom.createHtmlElement({ 
      tag: 'li', parentElement: navlist, elemId: 'Menu', text: 'Menu',
    });

    changeDom.createHtmlElement({ 
      tag: 'li', parentElement: navlist, elemId: 'Contact', text: 'Contact',
    });

      mainSection.appendChild(backGround);
      middleSection.appendChild(yummyPizza);
      lowerSection.appendChild(yummyChicken)
};

  export default displayLayout;