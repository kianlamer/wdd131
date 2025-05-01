let SelectElem = document.querySelector("select");
let logo = document.querySelector("img");

SelectElem.addEventListener("change", changeTheme);

function changeTheme() {
    let current = SelectElem.value;
    if (current == "dark") {
        document.body.className = "dark";
    }
    else {
        
    }
        
    
}