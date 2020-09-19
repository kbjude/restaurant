import logo from './images/logo.png';

const contact = () => {
    const contactDiv = document.createElement('div');
    const logoContent = document.createElement('div');
    logoContent.className = "logo-content";
    const contactContent = document.createElement('div');
    contactContent.innerHTML = "OUR CONTACTS"
    const unOrderedList = document.createElement('ul');
    unOrderedList.className = "list";
    const list = document.createElement('li');
    list.innerHTML = "Phone Contact: 0701-042-287, 0712-042-287";
    list.className = "listitem";
    const list1 = document.createElement('li');
    list1.innerHTML = "Email: foodhub@foodeats.org";
    list1.className = "listitem";
    const list2 = document.createElement('li');
    list2.innerHTML = "Website: WWW.foodhub.com";
    list2.className = "listitem";

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
    contactContent.appendChild(unOrderedList);
    unOrderedList.appendChild(list);
    unOrderedList.appendChild(list1);
    unOrderedList.appendChild(list2);
}
export default contact;