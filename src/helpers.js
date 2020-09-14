const changedom = (() => {
    const addClasses = (element, arrayClassNames) => {
      arrayClassNames.forEach(className => {
        element.classList.add(className);
      });
    };
    const addId = (element, newId) => {
        element.id = newId;
      };
    })();