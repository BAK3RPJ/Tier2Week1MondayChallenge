$(document).ready(readyNow);

let containerCount = 0;
let containerArray = [];

function readyNow() {
    console.log("in jquery");
    $("#generate").on("click", generateContainer);
    $('body').on('click', ".yellowButton", makeYellow);
    $('body').on('click', "deleteButton", deleteContainer)
}

function generateContainer () {
    containerCount++;
    let container = `<div class="container" id="${containerCount}"><button class="yellowButton button">Yellow</button><button class="deleteButton button">Delete</button></div>`
    containerArray.push(container);
    $("#containerDiv").empty();
    containerArray.forEach(function(container) {
        $("#containerDiv").append(container);
    })
}

function makeYellow () {
    $(this).parent().css("background-color", "yellow");
}

