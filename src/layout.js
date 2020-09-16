import changeDom from './helpers';
//import { head } from 'lodash';


const displaylayout = () => {
    const content = document.getElementById('content');
    const header = changeDom.createElement({tag: 'header', parentElement: content, classNames: ['header']});
    const navbar = changeDom.createElement({tag: 'nav', parentElement: header, classNames: ['navbar']})
    const mainsection = changeDom.createElement({tag: 'div', parentElement: content, classNames: ['mainsection']});
    const middlesection = changeDom.createElement({tag: 'div', parentElement: content, classNames: ['middlesection','d-flex']});
    const lowersection = changeDom.createElement({tag: 'div', parentElement: content, classNames: ['lowersection']});
    const footersection = changeDom.createElement({tag: 'div', parentElement: content, classNames: ['footersection']});
    const navlist = changeDom.createElement({tag: 'ul', parentElement: navbar, classNames: ['navlist'] });
    
    changeDom.createElement({ 
      tag: 'li', parentElement: navlist, elemId: 'Home', text: 'Home',
    })

    changeDom.createElement({ 
      tag: 'li', parentElement: navlist, elemId: 'Menu', text: 'Menu',
    })

    changeDom.createElement({ 
      tag: 'li', parentElement: navlist, elemId: 'Contact', text: 'Contact',
    })
}

  export default displaylayout;