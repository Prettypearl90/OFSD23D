
console.log("Welcome");

let div= document.createElement("div");

div.id="online";

div.innerHTML="<div>FSD23A</div>"

document.body.appendChild(div);

 

console.log(document.getElementById("online").innerText="OFSD23A");

console.log(document.getElementById("para").innerText);
console.log(document.getElementById("para").textContent="JavaScript Session");


let ele = document.getElementById("email");

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
