// Sets the primary menu items equal to a variable to call upon in the for loop
// Menu items are stored in an array
var menuLabels = document.getElementsByClassName('nav-links');

// Sets up a function to toggle class of sub-menu elements
// Function will be called upon in a for loop so it will apply to each item in the array of menu labels
function showSubMenu() {
    this.children[1].classList.toggle('sub-menu-collapse');
 }

// Calls on the function to run on mouseenter and mouseleave events
for (i = 0; i < menuLabels.length; i++) {
    menuLabels[i].addEventListener('mouseenter', showSubMenu);
    menuLabels[i].addEventListener('mouseleave', showSubMenu);
    
        }