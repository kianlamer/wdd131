const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

const gallery = document.querySelector(".gallery");
let modal = document.createElement("dialog");
modal.innerHTML = `<img /><button class='close-viewer'>X</button>`;
document.body.appendChild(modal);
const modalImg = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

function openImageViewer(event) {
    const img = event.target.closest("img");
    if (!img) return;

    const src = img.src;
    const alt = img.alt;
    const fullSrc = src.split("-")[0] + "-full.jpeg";

    modalImg.src = fullSrc;
    modalImg.alt = alt;
    modal.showModal();
}

function closeImageViewer() {
    modal.close();
}

gallery.addEventListener("click", openImageViewer);
closeButton.addEventListener("click", closeImageViewer);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});