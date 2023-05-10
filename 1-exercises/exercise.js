/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/
console.log("Does this work?")
/*
Task 1
=======

Write JavaScript below that console.logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    
    document.querySelectorAll("p");

    for (let everyP of p) {
    console.log(everyP.innerText);
}

    
    2. the first div element node
    --> should log the ".site-header" node

    document.querySelector("div");

    3. the element with id "jumbotronText"
    --> should log the "#jumbotronText" node

    document.querySelector("#jumbotronText")

    4. all the "p" elements of contained inside the .primary-content element node
    --> should log a list of nodes with a length of 3



*/


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", function() {
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/

const changeBgr = document.querySelector("#bgrChangeBtn");


/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
/*
for (const link of document.querySelectorAll("a")) {
  link.style.fontSize = "1.5em";
}
*/
/*
const largerLinksBtn = document.querySelector("#largerLinksBtn");
const allLinks = document.querySelectorAll("a");

largerLinksBtn.addEventListener("click", function() {
  for (let i = 0; i < allLinks.length; i++) {
    const currentFontSize = window.getComputedStyle(allLinks[i], null).getPropertyValue('font-size');
    const newFontSize = parseInt(currentFontSize) + 1;
    allLinks[i].style.fontSize = newFontSize + 'px';
  }
});
*/

let largerLinksBtn = document.querySelector("#largerLinksBtn");

largerLinksBtn.addEventListener("click", function (){
  for (const link of document.querySelectorAll("a")) {
    link.classList.toggle("larger");
  }
});



/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/

const addText = document.querySelector("#addArticleBtn");


addText.addEventListener("click", function(){
  const addInput = document.querySelector("#addArticleInput");
  console.log(addInput.value, '<---inout Element.value');

  const pElement = document.createElement("p");
  pElement.innerText = addInput.value;
  document.body.appendChild(pElement); 
});