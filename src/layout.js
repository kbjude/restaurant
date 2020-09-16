import changeDom from './helpers';
import yummypizza from './resources/images/yummy.jpeg';
import yummychicken from './resources/images/yummychicken.jpeg';
import background from './resources/images/site11.jpg';


const displaylayout = () => {
    const content = document.getElementById('content');
    const yummypizza = changeDom.createImage(yummypizza, 'yummy pizza', ['yummy-pizza']);
    const yummychicken = changeDom.createImage(yummychicken, 'yummy chicken', ['yummy-chicken']);
    const background = changeDom.createImage(background, 'No background available', ['background']);
    const header = changeDom.createHtmlElement({tag: 'header', parentElement: content, classNames: ['header']});
    const navbar = changeDom.createHtmlElement({tag: 'nav', parentElement: header, classNames: ['navbar']})
    const mainsection = changeDom.createHtmlElement({tag: 'div', parentElement: content, classNames: ['mainsection']});
    const middlesection = changeDom.createHtmlElement({tag: 'div', parentElement: content, classNames: ['middlesection','d-flex']});
    const lowersection = changeDom.createHtmlElement({tag: 'div', parentElement: content, classNames: ['lowersection']});
    const footersection = changeDom.createHtmlElement({tag: 'div', parentElement: content, classNames: ['footersection']});
    const navlist = changeDom.createHtmlElement({tag: 'ul', parentElement: navbar, classNames: ['navlist'] });
    
    changeDom.createHtmlElement({ 
      tag: 'li', parentElement: navlist, elemId: 'Home', text: 'Home',
    })

    changeDom.createHtmlElement({ 
      tag: 'li', parentElement: navlist, elemId: 'Menu', text: 'Menu',
    })

    changeDom.createHtmlElement({ 
      tag: 'li', parentElement: navlist, elemId: 'Contact', text: 'Contact',
    })
}

  export default displaylayout;