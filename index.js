const navButton = document.querySelector('nav button');
const nav = document.querySelector('nav');
navButton.addEventListener('click', () => {
    const menuExpanded = nav.classList.contains('expanded');
    if(menuExpanded) {
        nav.classList.remove('expanded');
    }
    else {
        nav.classList.add('expanded');
    }
});