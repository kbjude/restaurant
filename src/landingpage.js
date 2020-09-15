import changeDom from './helpers';


const landingpage = () => {
    const content = document.getElementById('content');
    const mainsection = changeDom.createHtmlElement({tag: 'div', parentElement: 'content', arrayClassName: ['main', 'd-flex']});
    
}

export default landingpage;