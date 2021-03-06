const initialLoad = () => {
  const mainDiv = document.getElementById('content');

  const container = document.createElement('div');
  container.id = 'container';

  const nav = document.createElement('div');
  nav.className = 'nav2';
  const btnContact = document.createElement('button');
  btnContact.className = 'men-button';
  btnContact.onclick = () => {
    btnContact.dispatchEvent(new Event('tabContact', { bubbles: true }));
    btnContact.style.background = 'blue';
    btnContact.style.color = 'white';
  };
  btnContact.innerHTML = 'Contact';

  const btnMenu = document.createElement('button');
  btnMenu.className = 'men-button';
  btnMenu.innerHTML = 'Menu';
  btnMenu.onclick = () => {
    btnMenu.dispatchEvent(new Event('tabMenu', { bubbles: true }));
    btnMenu.style.background = 'blue';
    btnMenu.style.color = 'white';
  };

  const btnHome = document.createElement('button');
  btnHome.className = 'men-button';
  btnHome.innerHTML = 'Home';
  btnHome.onclick = () => {
    btnHome.dispatchEvent(new Event('tabHome', { bubbles: true }));
    btnHome.style.background = 'blue';
    btnHome.style.color = 'white';
  };

  nav.appendChild(btnHome);
  nav.appendChild(btnContact);
  nav.appendChild(btnMenu);
  mainDiv.appendChild(nav);
  mainDiv.appendChild(container);
};

export default initialLoad;