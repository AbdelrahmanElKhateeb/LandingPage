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

/**
 * Define Global Variables

*/


/**
 * starting time >> Variable used to test performance
 * section >> a variable for an empty object (to remove the error from Eslinter for section being undefined)
 * sections >> gets all elements in the document that has section as selector and putsthem in this array, used for getting each section in the document and iteration
 * navmenu >> gets the empty navigation list through its id
*/

const startingTime = performance.now();

let section = new Object();
let sections = [...document.querySelectorAll("section")];
let navmenu = document.getElementById("navbar__list");










/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/** A function that takes an element and gets its rectangular bounding box, and returns true if the element's distance to the top of the viewport is in the specified range */

function InViewSection(element){
    let x = element.getBoundingClientRect();
        return (
        (300 > x.top && x.top >= -300)
    );
}




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Function that goes through the sections, takes the section id and name, puts them as a list item (listItem), edits their html using innerHTML, adds an anchor tag, then is added to the navigation bar list (navmenu)
// href="#${section.id}"> Scrolls to section on link click 
function newNavItems(){
    let nav = '';
    for(section of sections){
        let listItem = document.createElement('li');
        nav = `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`;
        listItem.innerHTML = nav;
        navmenu.appendChild(listItem);
      
    }
     
    
}


// Goes through each section and to check if it is in view or not and removes or adds the class "active" respectively
function toggleActiveClass(){
    for(section of sections){

        if(!InViewSection(section)){
            // Removes class 'active' to section when near top of viewport
            section.classList.remove('your-active-class');
        
        }

        else{

           if(InViewSection(section) && !section.classList.contains('your-active-class')){
            // Adds class 'active' to section when near top of viewport and the section does not have it
            section.classList.add('your-active-class');

        }
 
        }



       




}
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build the navigation menu 
newNavItems();


//Event listener to call the function that checks if the section is in viewport
window.addEventListener('scroll' , toggleActiveClass);


//Testing Performance
const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');



















// Set sections as active


