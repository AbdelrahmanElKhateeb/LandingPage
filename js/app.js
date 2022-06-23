//const startingTime = performance.now();

//sections : gets all sections in the document
//navmenu : gets the navigation bar empty list
let sections = [...document.querySelectorAll("section")];
let navmenu = document.getElementById("navbar__list");


//Adds new navigation bar items(sections) 
function newNavItems(){


    //nav : empty string to hold the html list element
    let nav = '';

    for(section of sections){

        //secName and secID : get the section name and id respectively from each section
        secName = section.dataset.nav;
        secID = section.id;

        nav = nav + `<li><a class="menu__link" href="#${secID}">${secName}</a></li>`;
            
        }

        //after populating nav, we use it to fill navmenu (the empty one we got earlier) using .innerHTML

        navmenu.innerHTML = nav;

}

//intializes the function

newNavItems();




//function controlling the activation and deactivation of sections using scrolling

let ActivateSection = function(){
    for(section of sections){

        //for every section we get the boundingClientRect which gets the smallest rectangle which contains the contents of the element(section)
        const BoundingOffset = Math.floor(section.getBoundingClientRect().top);


        //Remove Activation : removing activation by removing "your-active-class" from class list
        section.classList.remove('your-active-class');
        //this style effect returns background color back to it's original
        section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 100%)";


        //Activate Section : if the smallest rectangle that we got is between these values, then we activate the section by adding "your-active-class" to the section's classlist and change the background color of the section
        if(BoundingOffset < 220 && BoundingOffset >= -220){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: #4d004d;";
        section.style.transition = "all 0.3s";
    };
    }

};

//Activates the function when the user scrolls whether directly, or indirectly(using anchors)
window.addEventListener('scroll' ,ActivateSection);

//Testing Performance
//const endingTime = performance.now();
//console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
