$(document).ready(readyNow);

let containerCount = 0;
let containerArray = [];

function readyNow() {
    console.log("in jquery");
    $("#generate").on("click", pushContainerToArray);
    $('body').on('click', ".yellowButton", makeYellow);
    $('body').on('click', ".deleteButton", deleteContainer);
}

function appendContainers () {
    $("#containerDiv").empty();
    containerArray.forEach(function(container) {
        $("#containerDiv").append(container.container);
    })
}

function pushContainerToArray () {
    containerCount++;
    let container = `<div class="container" id="${containerCount}"><h3 class="counter">${containerCount}</h3><button class="yellowButton button">Yellow</button><button class="deleteButton button">Delete</button></div>`
    containerArray.push( {
        container: container,
        arrayNumber: `${containerCount}`
    });
    appendContainers();
}

function makeYellow () {
    $(this).parent().css("background-color", "yellow");
}
function deleteContainer () {
    let id = $(this).parent().attr('id');
    console.log(id);
    console.log(this);
    let newArray = containerArray.filter(container => id != container.arrayNumber);
    containerArray = newArray;
    appendContainers();
}

