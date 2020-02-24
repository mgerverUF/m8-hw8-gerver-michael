// Trigger for hover
var menuLabels = document.getElementsByClassName('nav-links');
// console.log(menuLabels);


function showSubMenu() {
    this.children[1].classList.toggle('sub-menu-collapse');
 }

for (i = 0; i < menuLabels.length; i++) {
    menuLabels[i].addEventListener('mouseenter', showSubMenu);
    menuLabels[i].addEventListener('mouseleave', showSubMenu);
    
        }