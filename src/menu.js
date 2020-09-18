const menu = () => {
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = "Coming Soon";
    const container = document.getElementById('container');

    container.innerHTML = '';
    container.appendChild(menuDiv)
}

export default menu