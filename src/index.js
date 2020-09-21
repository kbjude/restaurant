import home from './home';
import initialLoad from './initialload';
import contact from './contact';
import menu from './menu';

const onload = () => {
  initialLoad();
  home();
  const mainDiv = document.getElementById('content');

  mainDiv.addEventListener('tabContact', (e) => {
    contact();
  });
  mainDiv.addEventListener('tabMenu', (e) => {
    menu();
  });
  mainDiv.addEventListener('tabHome', (e) => {
    home();
  });
};

window.onload = onload;