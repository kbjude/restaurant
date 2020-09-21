import home from './home';
import initialLoad from './initialload';
import contact from './contact';
import menu from './menu';

const onload = () => {
  initialLoad();
  home();
  const mainDiv = document.getElementById('content');

  mainDiv.addEventListener('tabContact', () => {
    contact();
  });
  mainDiv.addEventListener('tabMenu', () => {
    menu();
  });
  mainDiv.addEventListener('tabHome', () => {
    home();
  });
};

window.onload = onload;