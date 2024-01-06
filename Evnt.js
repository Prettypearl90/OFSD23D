
// Event
// Event handler or Listner
// Event Flow 
//      --> Event Bubbling 
//      --> Event Capturing
// DOM Level 2 Event flow

//Three ways of assign event handlers are..
//       --> Using HTML event handler attributes
//       --> Using DOM property
//       --> Using event handlers Methods

// Examples of HTML event handler attributes


// function welcome() {
//     document.write("Hello, Everyone!");
//     }

// // Examples for Using DOM property

        // let ele = document.getElementById("in");

        // ele.onclick = function() {
        // document.write("I'm DOM Level 0 event handlers") 
        // //document.write(this.id);
        // };

// // To remove the event handler
//         //ele.onclick = null;

// // Examples for Using event handlers Methods

//         // --> addEventListener() 
//         // --> removeEventListener() 

// // Examples for addEventListener()         

// let el = document.getElementById("inpt");

// el.addEventListener('click',function(event) {
//     console.log("This session is about JS-DOM Event Handlers")
    
// });

// el.addEventListener('click',function(event) {
//     console.log("There are Two methods");
    
// });

// Examples for removeEventListener() 

// document.getElementById("po").addEventListener("mousemove", disp);

// function disp() {
//      //document.getElementById("ps").innerHTML +="Mouseovered!" + "<br>";
//     document.getElementById("ps").innerHTML = Math.random(); // mousemove

// }

// function rmvhndlr() {
//   document.getElementById("po").removeEventListener("mousemove", disp);
// }