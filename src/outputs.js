import changeDom from './helpers';
import { head } from 'lodash';


const displaylayout = () => {
    const content = document.getElementById('content');
    const header = changeDom.createHtmlElement({tag: 'header', parentElement: content, arrayClassName: ['header']});
    const navbar = changeDom.createHtmlElement({tag: 'nav', parentElement: header, arrayClassName: ['navbar']})
    const mainsection = changeDom.createHtmlElement({tag: 'div', parentElement: content, arrayClassName: ['mainsection']});
    const middlesection = changeDom.createHtmlElement({tag: 'div', parentElement: content, arrayClassName: ['middlesection','d-flex']});
    const lowersection = changeDom.createHtmlElement({tag: 'div', parentElement: content, arrayClassName: ['lowersection']});
    const footersection = changeDom.createHtmlElement({tag: 'div', parentElement: content, arrayClassName: ['footersection']});
    const navlist = changeDom.createHtmlElement({tag: 'ul', parentElement: navbar, arrayClassName: ['navlist'] });
    
    changeDom.createHtmlElement({ 
      tag: 'li', parentElement: navlist, elementid: 'Home', text: 'Home',
    })

    changeDom.createHtmlElement({ 
      tag: 'li', parentElement: navlist, elementid: 'Menu', text: 'Menu',
    })

    changeDom.createHtmlElement({ 
      tag: 'li', parentElement: navlist, elementid: 'Contact', text: 'Contant',
    })
}

  export default displaylayout