function puchelment(numberofstat) {

    let element = `<li class = "elmnt" id ="${numberofstat}">elment ${numberofstat}</li>`
    return element;
}
let stackallelement = [];
let numberofstat = 0;
let swapreern = 1;

function grratelment() {
    numberofstat++;
    stackallelement.push(numberofstat);
    let lielment = document.createElement("div");
    lielment.innerHTML = puchelment(numberofstat);

    document.getElementById("allelment").appendChild(lielment);
    console.log(stackallelement.length);

}

function pop() {
    let elem = document.getElementById(stackallelement.length);
    let whatisindex = numberofstat;
    elem.parentNode.removeChild(elem);
    stackallelement.pop(stackallelement.length)
    numberofstat--;
    return whatisindex;
}

function removeDummy() {

    for (let index = 1; index <= stackallelement.length; index++) {
        var elem = document.getElementById(index);
        elem.parentNode.removeChild(elem);
    }
    stackallelement = [];
    numberofstat = 0;
}

function swap() {
    let elmtone = document.getElementById(stackallelement.length).innerHTML
    let elmttwo = document.getElementById(stackallelement.length - 1).innerHTML
    document.getElementById(stackallelement.length - 1).innerHTML = elmtone;
    document.getElementById(stackallelement.length).innerHTML = elmttwo;

}

function isempty() {

    if (stackallelement.length == 0) {
        return 1;
    } else
        return 0
}

function stacksize() {
    return stackallelement.length;
}

function showempty() {
    if (isempty())
        alert("the stack is empty");
    else alert("the stack is not empty");
}

function showsize() {
    alert(`the size of  stack is ${stackallelement.length}`);
}

function peekstack() {

    alert(`the top  of  stack is ${document.getElementById(stackallelement.length).innerText}`);
}