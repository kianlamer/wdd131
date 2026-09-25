// 1. Functions
    function nameOfFunction(name) {
      console.log('Hello Functions!' + name);
      // string template
      console.log(`Your name is ${name}`);
    }
// call the function 
    nameOfFunction('Kian');
// 2. Event Listeners
    //Grab an element from the DOM to "listen" for an event
let selectBox = document.querySelector("#theme-select");
// register an event listener on the element
// when the event occurs, run a function
selectBox.addEventListener("change", changeTheme);

function changeTheme(event) {
    console.log("Change theme!");
}
// 3. If Statements


let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
          