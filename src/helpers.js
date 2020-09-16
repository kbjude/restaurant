const changeDom = (() => {
    const addClasses = (element, classNames) => {
      classNames.forEach(className => {
        element.classList.add(className);
      });
    };
    const addId = (element, elemId) => {
        element.id = elemId;
      };
    
    const createImage = (source, alt, arrayClassNames = []) => {
      const img = new Image();
      img.src = source;
      img.alt = alt;
  
      if (arrayClassNames !== []) {
        addClasses(img, arrayClassNames);
      }
  
      return img;
    };
  
    const createHtmlElement = ({
      tag, parentElement, arrayClassNames = [], newId = '', text = '',
    }) => {
      const newElement = document.createElement(tag);
  
      if (arrayClassNames !== []) {
        addClasses(newElement, arrayClassNames);
      }
      if (newId !== '') {
        addId(newElement, newId);
      }
      if (text !== '') {
        newElement.innerHTML = text;
      }
      parentElement.appendChild(newElement);
      return newElement;
    };
  
    return {
      createHtmlElement, createImage,
    };
  })();
  
  
  export default changeDom;
  