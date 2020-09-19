import logo from './images/logo.png';

const contact = () => {
    const contactDiv = document.createElement('div');
    const logoContent = document.createElement('div');
    logoContent.className = "logo-content";
    const contactContent = document.createElement('div');
    const list = document.createElement('ul');
    contactContent.innerHTML = "Phone Number: 07038920832";


    const contactLogo = document.createElement('img');
    contactLogo.src = logo;
    contactLogo.className = "contactLogo";

    contactDiv.appendChild(contactContent);
    const container = document.getElementById('container');

    container.innerHTML = '';
    container.appendChild(contactDiv);
    contactDiv.appendChild(logoContent);
    logoContent.appendChild(contactLogo);
    logoContent.appendChild(contactContent);
}
export default contact;