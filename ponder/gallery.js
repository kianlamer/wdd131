//1. grab HTML elements
let gallerySection = document.querySelector(".gallery");
let modal = document.querySelector("dialog");
let modalImg = modal.querySelector("img");
const closeButton = modal.querySelector('.close-viewer');

//2. add event listener, when img clicked open modal
gallerySection.addEventListener("click", (event) => {
    console.log(event.target.src);
    if(event.target.src !== undefined)
    // display modal
    modal.showModal();
    // set the src img on the modal
    modalImg.src = event.target.src.replace("-sm", "-full");;
});

// Code to show modal  - Use event parameter 'e'   
    
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});