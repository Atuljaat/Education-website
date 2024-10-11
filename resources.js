
const heading = document.querySelector("#heading");
const firstInfo = document.querySelector("#firstInfo");
const secondInfo = document.querySelector("#secondInfo");
const code = document.querySelector("#code");

function div (){
    heading.innerHTML = "Div";
    firstInfo.innerHTML = "The &ltdiv&gt element is by default a block element, meaning that it takes all available width, and comes with line breaks before and after."
    secondInfo.innerHTML = "The &ltdiv&gt element has no required attributes, but style, class and id are common."
    code.innerHTML=`
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;Page Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt/div&gt
        &lt;h2&gt;Element1&lt;/h2&gt;
        &lt;p&gt;Element2&lt;/p&gt;
        &lt;p&gt;Element3&lt;/p&gt;
    &lt/div&gt
    &lt;/body&gt;
    &lt;/html&gt;
    `
}

function anchor (){
    heading.innerHTML = "Anchor tag";
    firstInfo.innerHTML = "The anchor tag (&lta&gt) is used to create hyperlinks in HTML. It typically includes the href attribute to specify the URL of the linked page and can use the target attribute to determine how the link opens (e.g., in a new tab). ";
    secondInfo.innerHTML = " Additional attributes like rel and title enhance security and provide extra information about the link.";
    code.innerHTML = `
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;Page Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lta href="#"&gtLink&lt/a&gt
    &lt;/body&gt;
    &lt;/html&gt;
    `;
}

function html (){
    heading.innerHTML = "HTML";
    firstInfo.innerHTML = "HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!";
    secondInfo.innerHTML = "HTML, short for HyperText Markup Language, is the standard language used to create web pages. It defines the structure of a webpage, organizing content through elements such as headings, paragraphs, links, and images to build meaningful layouts.";
    code.innerHTML = `
    &lt;!DOCTYPE html&gt;
    &lthtml&gt;
    &lthead&gt;
        &lttitle&gt;Page Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lth1&gt;This is a Heading&lt;/h1&gt;
        &lt;p&gt;This is a paragraph.&lt;/p&gt;
    &lt;/body&gt;
    &lt;/html&gt;
    `
}

// function image (){
//     heading.innerHTML = "";
//     firstInfo.innerHTML = "";
//     secondInfo.innerHTML = "";
//     code.innerHTML = ``;
// }

function image (){
    heading.innerHTML = "Img tag";
    firstInfo.innerHTML = "The HTML &ltimg&gt tag is used to embed an image in a web page.";
    secondInfo.innerHTML = "Images are not technically inserted into a web page; images are linked to web pages. The &ltimg&gt tag creates a holding space for the referenced image.";
    code.innerHTML = `
    &lt;!DOCTYPE html&gt;
    &lthtml&gt;
    &lthead&gt;
        &lttitle&gt;Page Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &ltimg src="pic_trulli.jpg" alt="cool"&gt
    &lt;/body&gt;
    &lt;/html&gt;
    `;
}

function input (){
    heading.innerHTML = "Input tag";
    firstInfo.innerHTML = "The &ltimg&gt element in HTML is used to create various types of interactive fields where users can enter data.";
    secondInfo.innerHTML = "The ltimg&gt element is a crucial part of creating forms in HTML, allowing users to enter data in various formats. By using different type attributes, developers can tailor the user experience and data collection to meet their needs.";
    code.innerHTML = `
    &lt;!DOCTYPE html&gt;
    &lthtml&gt;
    &lthead&gt;
        &lttitle&gt;Page Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &ltinput type="text" id="fname" name="fname"&gt  
    &lt;/body&gt;
    &lt;/html&gt;
    `;
}
    
function css (){
    heading.innerHTML = "CSS";
    firstInfo.innerHTML = "CSS is the language we use to style an HTML document.CSS describes how HTML elements should be displayed.";
    secondInfo.innerHTML = "CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.";
    code.innerHTML = `
    body {
        background-color: lightblue;
      }
      
      h1 {
        color: white;
        text-align: center;
      }
      
      p {
        font-family: verdana;
        font-size: 20px;
      }
    `;
}

function background (){
    heading.innerHTML = "CSS Backgrounds";
    firstInfo.innerHTML = "The CSS background properties are used to add background effects for elements.";
    secondInfo.innerHTML = "The background-color property specifies the background color of an element.";
    code.innerHTML = `
    h1 {
        background-color: green;
      }
      
      div {
        background-color: lightblue;
      }
      
      p {
        background-color: yellow;
      }
    `;
}

function borders (){
    heading.innerHTML = "CSS Borders";
    firstInfo.innerHTML = "The CSS border properties allow you to specify the style, width, and color of an element's border.";
    secondInfo.innerHTML = "The border-style property can have from one to four values (for the top border, right border, bottom border, and the left border).";
    code.innerHTML = `
    p.dotted {border-style: dotted;}
    p.dashed {border-style: dashed;}
    p.solid {border-style: solid;}
    p.double {border-style: double;}
    `;
}

function Padding (){
    heading.innerHTML = "CSS Padding";
    firstInfo.innerHTML = "Padding is used to create space around an element's content, inside of any defined borders..";
    secondInfo.innerHTML = "The CSS padding properties are used to generate space around an element's content, inside of any defined borders With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).";
    code.innerHTML = `
    div {
        padding-top: 50px;
        padding-right: 30px;
        padding-bottom: 50px;
        padding-left: 80px;
      }
      
    `;
}

function Padding (){
    heading.innerHTML = "CSS Padding";
    firstInfo.innerHTML = "Padding is used to create space around an element's content, inside of any defined borders..";
    secondInfo.innerHTML = "The CSS padding properties are used to generate space around an element's content, inside of any defined borders With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).";
    code.innerHTML = `
    div {
        padding-top: 50px;
        padding-right: 30px;
        padding-bottom: 50px;
        padding-left: 80px;
      }
      
    `;
}

function Flexbox (){
    heading.innerHTML = "CSS Flexbox";
    firstInfo.innerHTML = "The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.";
    secondInfo.innerHTML = "Use flexbox to create a responsive image gallery that varies between four, two or full-width images, depending on screen size";
    code.innerHTML = `
    .flex-container {
        display: flex;
        flex-direction: column;
        height: 200px;
        align-items: center;
      }
    `;
}

function JavaScript (){
    heading.innerHTML = "JavaScript";
    firstInfo.innerHTML = "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web..";
    secondInfo.innerHTML = "In HTML, JavaScript code is inserted between &ltscript&gt and &lt/script&gt tags.";
    code.innerHTML = `
    &ltscript&gt
    document.getElementById("demo").innerHTML = "My First JavaScript";
    function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
      }
    &ltscript&gt
    `;
}

function Variables (){
    heading.innerHTML = "JavaScript Variables";
    firstInfo.innerHTML = "Variables are Containers for Storing Data";
    secondInfo.innerHTML = "JavaScript Variables can be declared in 4 ways : Automatically , Using var ,Using let , Using const";
    code.innerHTML = `
    &ltscript&gt
    x = 5;
    y = 6;
    z = x + y;
    
    var x = 5;
    var y = 6;
    var z = x + y;
    &ltscript&gt
    `;
}

function Let (){
    heading.innerHTML = "JavaScript Let";
    firstInfo.innerHTML = "The let keyword was introduced in ES6 (2015).Variables declared with let have Block Scope";
    secondInfo.innerHTML = "Redeclaring a variable using the let keyword can solve this problem.Redeclaring a variable inside a block will not redeclare the variable outside the block:";
    code.innerHTML = `
    &ltscript&gt
    let x = 10;
    // Here x is 10

    {
    let x = 2;
    // Here x is 2
    }

    // Here x is 10
    &ltscript&gt
    `;
}

function Const (){
    heading.innerHTML = "JavaScript Const";
    firstInfo.innerHTML = "The const keyword was introduced in ES6 (2015).Variables defined with const cannot be Redeclared.Variables defined with const cannot be Reassigned.Variables defined with const have Block Scope";
    secondInfo.innerHTML = "However, it’s important to understand that while the variable cannot be reassigned, the data it holds can still be mutable in certain cases, especially for objects and arrays.";
    code.innerHTML = `
    &ltscript&gt
    const PI = 3.141592653589793;
    PI = 3.14;      // This will give an error
    PI = PI + 10;   // This will also give an error
    &ltscript&gt
    `;
}

function Functions (){
    heading.innerHTML = "JavaScript Functions";
    firstInfo.innerHTML = "A JavaScript function is a block of code designed to perform a particular task.A JavaScript function is executed when something invokes it (calls it).";
    secondInfo.innerHTML = "A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).";
    code.innerHTML = `
    &ltscript&gt
    // Function is called, the return value will end up in x
    let x = myFunction(4, 3);
    
    function myFunction(a, b) {
    // Function returns the product of a and b
      return a * b;
    }
    &ltscript&gt
    `;
}



