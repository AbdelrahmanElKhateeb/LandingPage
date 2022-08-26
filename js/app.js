/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */


//Start Global Variables
const startingTime = performance.now();
let section = new Object();
let sections = [...document.querySelectorAll("section")];
let navmenu = document.getElementById("navbar__list");
// End Global Variables




// Start Helper Functions
function InViewSection(element) {
    // Gets the boundingrect for each section 
    let x = element.getBoundingClientRect();
    // Returns true if the section is in viewport
    return (
        (300 > x.top && x.top >= -300)
    );
}



// Start of scrolling function
function scrollfunction(listItem, section) {
    listItem.addEventListener("click", function(e) {
        // Prevents default anchor behavior
        e.preventDefault();
        // Smoothly scrolls to the top of the section
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
    })
}
// End of scrolling function
// End Helper Functions




// Begin Main Functions
function newNavItems() {
    let nav = '';
    for (section of sections) {
        // Create the li elements which are inside the ul
        let listItem = document.createElement('li');
        nav = `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`;
        // Insert the html text to the li
        listItem.innerHTML = nav;
        // Appends the ul to the navigation menu
        navmenu.appendChild(listItem);
        // Calls the scrolling function
        scrollfunction(listItem, section);

    }


}


// Goes through each section and to check if it is in view or not and removes or adds the class "active" respectively
function toggleActiveClass() {
    // Gets the navigation item buttons
    let menu_elements = document.querySelectorAll(".menu__link");
    let counter = 0;
    for (section of sections) {

        // Removes class 'active' to section when near top of viewport. Also removes active link class for the navigation item button 
        if (!InViewSection(section)) {
            section.classList.remove('your-active-class');
            menu_elements[counter].classList.remove("active_link");


        } else {

            // Adds class 'active' to section when near top of viewport and the section does not have it. Also adds active link class for the navigation item button 
            if (InViewSection(section) && !section.classList.contains('your-active-class')) {
                section.classList.add('your-active-class');
                menu_elements[counter].classList.add("active_link");

            }
        }
        counter++;
    }
}

// End Main Functions




// Builds the navigation menu 
newNavItems();

// Begin Events
// Event listener to call the function that checks if the section is in viewport
window.addEventListener('scroll', toggleActiveClass);
// End of Events




// Testing Performance
const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');