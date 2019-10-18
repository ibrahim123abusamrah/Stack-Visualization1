function puchelment(numberofstat) {
    let element = `<li class = "elmnt" id ="${numberofstat}">elment ${numberofstat}</li>`
    return element;
}
let stackallelement = [];
let numberofstat = 0;
let swapreern = 1;

function grratelment() {
    if (stackallelement.length == 15) {
        alert("stack is full")
        return
    }
    numberofstat++;
    stackallelement.push(numberofstat);
    let lielment = document.createElement("div");
    lielment.innerHTML = puchelment(numberofstat);
    var list = document.getElementById("allelment");
    list.insertBefore(lielment, list.childNodes[0]);
    var elem = document.getElementById(stackallelement.length);
    elem.style.right = 500 + "px";
    myMovepush();
    console.log(stackallelement.length);
}

function pop() {
    let elem = document.getElementById(stackallelement.length);
    let whatisindex = numberofstat;
    elem.parentNode.removeChild(elem);
    stackallelement.pop(stackallelement.length)
    numberofstat--;
    document.getElementById("pop").disabled = false;
    document.getElementById("push").disabled = false;
    return whatisindex;
}

function removeDummy() {
    if (stackallelement.length == 0) {
        alert("stack is empty")
        return
    }
    for (let index = 1; index <= stackallelement.length; index++) {
        var elem = document.getElementById(index);
        elem.parentNode.removeChild(elem);
    }
    stackallelement = [];
    numberofstat = 0;
}

function swap() {
    if (stackallelement.length == 0) {
        alert("stack is empty")
        return
    }
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
    if (stackallelement.length == 0) {
        alert("stack is empty")
        return
    }
    alert(`the top  of  stack is ${document.getElementById(stackallelement.length).innerText}`);
}

function myMovepop() {
    if (stackallelement.length == 0) {
        alert("stack is empty")
        return
    }
    document.getElementById("pop").disabled = true;
    document.getElementById("push").disabled = true;
    var elem = document.getElementById(stackallelement.length);
    var pos = 0;
    var id = setInterval(frame, 1);

    function frame() {
        if (pos == 500) {
            pop();
            clearInterval(id);

            return 0;
        } else {
            pos++;
            elem.style.right = pos + "px";
        }
    }
    return 0;
}

function myMovepush() {
    var elem = document.getElementById(stackallelement.length);
    var pos = 500;
    var id = setInterval(frame, 1);

    function frame() {

        if (pos == 0) {
            clearInterval(id);

            return 0;
        } else {
            pos--;
            elem.style.right = pos + "px";
        }
    }
    ispushfinshed = true;
    return 0;
}