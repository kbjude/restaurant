import changeDom from './helpers';


const landingpage = () => {
  const content = document.getElementById('content');
  const pageMainSection = changeDom.createHtmlElement({ tag: 'section', parentElement: content, className: ['contact', 'd-flex'] });
  const pagetitle = changeDom.createHtmlElement({ tag: 'div', parentElement: section, className: ['title'] });
  changeDom.createHtmlElement({

    tag: 'p',
    parentElement: pageMainSection,
    className: ['intro'],
    text: '---------- restaurant -------------',
    tag: 'p',
    parentElement: pageMainSection,
    className: ['catch-word'],
    text: 'The Food-Hub ',
    tag: 'p',
    parentElement: pageMainSection,
    className: ['slogan'],
    text: 'nothing else but food',
  });
};

export default landingpage;