import changeDom from './helpers';


const displaylayout = () => {
    const content = document.getElementById('content');
    const mainsection = changeDom.createHtmlElement({tag: 'div', parentElement: 'content', arrayClassName: ['main']});
    const middlesection = changeDom.createHtmlElement({tag: 'div', parentElement: 'content', arrayClassName: ['middle','d-flex']});
    const footersection = changeDom.createHtmlElement({tag: 'div', parentElement: 'content', arrayClassName: ['footer']});
  }

  export default displaylayout