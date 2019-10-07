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
function appendContainers () {
    $("#containerDiv").empty();
    containerArray.forEach(function(containerInArray) {
        $("#containerDiv").append(containerInArray.container);
        console.log(containerInArray.color); 
     
     
        //   if (containerInArray.color == "yellow") {
     //       containerInArray.container.style.backgroundColor = "yellow";
      //  }
      // messes up the container appending but Im not sure why
    
    })
}

// adds to container counters, pushes new container to array, calls appendContainers()
function pushContainerToArray () {
    containerCount++;
    let container = `<div class="container" id="${containerCount}"><h3 class="counter">${containerCount}</h3><button class="yellowButton button">Yellow</button><button class="deleteButton button">Delete</button></div>`
    containerArray.push( {
        container: container,
        arrayNumber: `${containerCount}`,
        color: "red"
    });
    appendContainers();
}

// makes container yellow, changes color property of array object to yellow
function makeYellow () {
    $(this).parent().css("background-color", "yellow");
    let id = $(this).parent().attr('id');
    for (container of containerArray) {
        if (id == container.arrayNumber) {
            container.color = "yellow";
        }
    }
}

// removes matching object of container from array, calls appendContainers() to empty container div and reappend containers
function deleteContainer () {
    let id = $(this).parent().attr('id');
    console.log(id);
    console.log(this);
    let newArray = containerArray.filter(container => id != container.arrayNumber);
    containerArray = newArray;
    appendContainers();
}

// when deleting a container, all divs turn back to red, I need to find a way to set a property that stays with that container when the array is re pushed.

