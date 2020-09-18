import logo from './images/logo.png';

const contact = () => {
    const contactDiv = document.createElement('div');
    const logoContent = document.createElement('div');
    const contactContent = document.createElement('div');
    const textSection = document.createElement('div');
    textSection.innerHTML = "These are our contacts: Phone Number: 07038920832 Email: kbjude@gmail.com";

    const contactLogo = document.createElement('img');
    contactLogo.src = logo;
    contactLogo.className = "contactLogo";

    contactDiv.appendChild(contactContent);
    const container = document.getElementById('container');

    container.innerHTML = '';
    container.appendChild(contactDiv);
    container.appendChild(logoContent);
    logoContent.appendChild(contactLogo);
    logoContent.appendChild(contactContent);
    contactContent.hasPointerCapture(textSection);
}
export default contact;