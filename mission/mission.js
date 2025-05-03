let SelectElem = document.querySelector("select");
let logo = document.querySelector("img");

SelectElem.addEventListener("change", changeTheme);

function changeTheme() {
    let current = SelectElem.value;
    if (current == "dark") {
        document.body.className = "dark";
        logo.src = "byui-logo_white.png";
        }
    else if (current == "light") {
        document.body.className = "light";
        logo.src = "byui-logo_blue.webp";
    }
}

SelectElem.addEventListener("change", changeTheme);