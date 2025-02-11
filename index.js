const navButton = document.querySelector('nav button');
const navLinks = document.querySelectorAll('nav a');
const nav = document.querySelector('nav');
const overlay = document.getElementById('overlay');

const expandNav = () => {
    nav.classList.add('expanded');
    overlay.classList.add('visible');
};
const collapseNav = () => {
    nav.classList.remove('expanded');
    overlay.classList.remove('visible');
}

navButton.addEventListener('click', () => {
    const menuExpanded = nav.classList.contains('expanded');
    menuExpanded ? collapseNav() : expandNav();
});
overlay.addEventListener('click', collapseNav);
navLinks.forEach(link => link.addEventListener('click', collapseNav));

//Remove collapse menu if layout changed to desktop
const mediaQuery = window.matchMedia('(min-width: 1025px)')
function handleDesktopChange(e) {
  if (e.matches) {
    collapseNav();
  }
}
mediaQuery.addListener(handleDesktopChange)
