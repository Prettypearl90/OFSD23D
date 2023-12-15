

// 1.style property - To set the inline style of an element

            const ele =document.getElementById("ex");

        // ele.style.color="green"
        // ele.style.backgroundColor="pink"


// cssText - To completely override the existing inline style and add multiple style values

        // ele.style.cssText = 'color:red;background-color:yellow';

// setAttribute() method:

        // ele.setAttribute('style','color:white;background-color:brown');

// cssText += - concatenate the new CSS property to the existing one.

        // ele.style.cssText += 'border:solid 3px green;fontWeight = bold';

//  css() function to set multiple styles for an element

        // function css(e, styles) {
        //     for (const property in styles)
        //         e.style[property] = styles[property];
        // }


        // css(ele, { background: 'yellow', border: 'solid 1px red'});


// 2. getComputedStyle() –To get all styles applied to an element


        let style = getComputedStyle(ele);

        console.log('color:', style.color);
        console.log('background color:', style.backgroundColor);
        
// 3. className property – return a list of space-separated CSS classes.

        console.log(ele.className);

// To concatenate the existing class name with a new one:

        ele.className += ' cfi';
        console.log(ele.className);

// To assign class name to class of any element

        ele.className = "class1 class2";
        console.log(ele.className);

// 4. classList property – manipulate CSS classes of an element.

        // add()
        // remove()
        // contains()
        // replace()
        // toggle()

        console.log(ele.classList);

        for (const i of ele.classList) {

                console.log(i);
                
        }

        ele.classList.add('aa');
        ele.classList.add('aa','bb','cc');

        console.log(ele.className);

        ele.classList.remove('aa');
        ele.classList.remove('aa','bb','cc');
       
        console.log(ele.className);

        ele.classList.replace('class1','aa');
        console.log(ele.className);

        ele.classList.contains('aa');

        ele.classList.toggle('class1');
        console.log(ele.className);

// 5.Element’s width & height – get the width and height of an element.

// offsetWidth and offsetHeight - element’s width and height +  the padding and border

// clientWidth and clientHeight - element’s width and height +  the padding


        console.log(ele.offsetHeight,ele.offsetWidth);
        console.log(ele.clientHeight,ele.clientWidth);

//To get the height and width of the window

        let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        console.log(width,height);