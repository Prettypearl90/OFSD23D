//Selecting elements

// getElementsById()

const p = document.getElementById("B-Name");
console.log(p)

//getElementsByName()

const q = document.getElementsByName("Gender");
console.log(q)

//getElementsByTagName()

const r = document.getElementsByTagName("h1")
console.log(r)

//getElementsByClassName()

const s = document.getElementsByClassName("ex")
console.log(s)

const items = document.getElementsByClassName("item")
console.log(items)

const Menu = document.getElementById("menu");
const itemss = Menu.getElementsByClassName("item")
console.log(itemss)

//  querySelector()

let elt = document.querySelector('*');



// Traversing elements

// Get the parent element – get the parent node of an element.
// Get child elements – get children of an element.
// Get siblings of an element – get siblings of an element.

// Get the parent element

let element = document.querySelector('.OFSD23C');

// let pe=element.parentNode;
// console.log(pe); or

console.log(element.parentNode);

// Get child elements 

let e2 = document.getElementById('batches');
console.log(e2.firstElementChild);// for get first child of an element
console.log(e2.lastElementChild);// for get last child of an element
console.log(e2.children);// for get all child of an element


// Get siblings of an element

//Get the next siblings

let e3 = document.querySelector('.current');

let nextSibling = e3.nextElementSibling;

console.log(nextSibling);

// Get all the next siblings of an element

while (nextSibling) {
    console.log(nextSibling);
    nextSibling = nextSibling.nextElementSibling;
}

// //Get the previous siblings


let prevSibling = e3.previousElementSibling;

console.log(prevSibling);

// // Get all the previous siblings of an element

let e4 = document.querySelector('.current');
let prevSiblings = e4.previousElementSibling;

while (prevSiblings) {
    console.log(prevSiblings);
    prevSiblings = prevSiblings.previousElementSibling;
}

// // Get all siblings of an element

let getSiblings = function (ele) {
    // for collecting siblings
    let siblings = [];
    // if no parent, return no sibling
    if (!ele.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling = ele.parentNode.firstChild;
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== ele) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

let siblings = getSiblings(document.querySelector('.current'));
// siblingText = siblings.map(ele => ele.innerHTML);
// console.log(siblingText);
console.log(siblings);


//Manipulating Elements

let div = document.createElement('div');
div.id = 'online';
div.innerHTML = '<div>FSD23A</div>';

document.body.appendChild(div);

console.log(document.getElementById("online"));
console.log(document.getElementById("online").innerText = "This is Text content");

console.log(document.getElementById("online").innerHTML = "<div>FSD23A</div>");

console.log(document.getElementById("online"));

console.log(document.querySelector(".session"));
console.log(document.querySelector(".session").textContent)


// Works on Attributes

console.log(ele.getAttribute("name"));

ele.setAttribute('name','user');

console.log(ele.name);

console.log(ele.hasAttribute("type"));

ele.removeAttribute("placeholder");

console.log(ele.attributes);



for(let attr of ele.attributes) {
    console.log(`${attr.name} = ${attr.value}` )  
}
