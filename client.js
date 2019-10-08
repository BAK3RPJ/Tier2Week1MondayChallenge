$(document).ready(readyNow);

let containerCount = 0;
let containerArray = [];

function readyNow() {
    console.log("in jquery");
    $("#generate").on("click", pushContainerToArray);
    $('body').on('click', ".yellowButton", makeYellow);
    $('body').on('click', ".deleteButton", deleteContainer);
}

// empties container div and loops through array to append all remaining containers in array
/* This function is only necessary if I use an array, and push from there. I wanted to do this because
it seemed more of along the lines of where we are headed, wiping the DOM and pulling the information from the 
database everytime we alter it, but I couldn't get the yellow color to remain. I think this problem is solvable more
intuitively once we get to "state" in react. */
/* function appendContainers () {
    $("#containerDiv").empty();
    containerArray.forEach(function(containerInArray) {
        $("#containerDiv").append(containerInArray.container);
        console.log(containerInArray.color);
       // containerInArray.container.style.backgroundColor = "yellow";
     
     
        //   if (containerInArray.color == "yellow") {
     //       containerInArray.container.style.backgroundColor = "yellow";
      //  }
      // messes up the container appending but Im not sure why
    
    })
} */

// adds to container counters, pushes new container to array, calls appendContainers()
function pushContainerToArray () {
    containerCount++;
    let container = `<div class="container" id="${containerCount}"><p class="counter">${containerCount}</p><button class="yellowButton button">Yellow</button><button class="deleteButton button">Delete</button></div>`
    $("#containerDiv").append(container);
    // only need object if I use array.
    /*  containerArray.push( {
        container: container,
        arrayNumber: `${containerCount}`,
        color: "red"
    }); */
    //appendContainers();
}

// makes container yellow, changes color property of array object to yellow
function makeYellow () {
    $(this).parent().css("background-color", "yellow");
  // only necessary with objects in array.
    /*  let id = $(this).parent().attr('id');
    for (container of containerArray) {
        if (id == container.arrayNumber) {
            container.color = "yellow";
        }
    } */
}

// removes matching object of container from array, calls appendContainers() to empty container div and reappend containers
function deleteContainer () {
    $(this).parent().remove();
    console.log($(this).parent());
    // code for using an array.
    /* let id = $(this).parent().attr('id');
    console.log(id);
    console.log(this);
    let newArray = containerArray.filter(container => id != container.arrayNumber);
    containerArray = newArray;
    appendContainers(); */
}

// when deleting a container, all divs turn back to red, I need to find a way to set a property that stays with that container when the array is re pushed.

