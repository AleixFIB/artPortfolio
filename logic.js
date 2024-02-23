images = ["drac.jpg"]

function loadImages(images) {
    let newHTML = '';
    for (const image of images) {
        newHTML += `<img id="${image}" class="imgGallery" src="Images/${image}" alt="">`
    }
    document.querySelector('#imatges').innerHTML = newHTML
}

function main() {
    loadImages(images);
}

main()
