import changeDom from './helpers';
//import { head } from 'lodash';


const displaylayout = () => {
    const content = document.getElementById('content');
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