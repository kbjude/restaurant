const contact = () => {
    const contactDiv = document.createElement('div');
    const contactContent = document.createElement('p');
    contactContent.innerHTML = " These are our contacts: Phone Number: 07038920832 Email: kbjude@gmail.com"

    contactDiv.appendChild(contactContent);
    const container = document.getElementById('container');

    container.innerHTML = '';
    container.appendChild(contactDiv);
}
export default contact;