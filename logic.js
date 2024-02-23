const images = [
    {
    path: "",
    name: "",
    date: new Date('2024-02-23T12:00:00'),
    categories: ["",""] ,
    media: ["",""]
    },
    {
    path: "",
    name: "",
    date: new Date('2024-03-23T12:00:00'),
    categories: ["",""] ,
    media: ["",""]
    }
]

function loadImages(images) {
    let newHTML = '';
    for (const image of images) {
        newHTML += `<img id="${image.path}" class="imgGallery" src="Images/${image.path}" alt="">`
    }
    document.querySelector('#imatges').innerHTML = newHTML
}

function sortImagesByAge(images, type) {
    if(type == "asc") {
        images.sort((a, b) => a.date - b.date);
    } else if(type == "desc") {
        images.sort((a, b) => b.date - a.date);
    } else {
        console.warn("The image SortByAge didnt work properly")
    }
    return images
}

function sortImagesByCategories(images, categories) {
    categories.forEach((category) => {
        images = images.filter(image => image.categories.includes(category));
    })
    return images
}

function sortImagesByMedia(images, medias) {
    medias.forEach((media) => {
        images = images.filter(image => image.media.includes(media));
    })
    return images
}

let type = "asc"
document.querySelector('#date-button').addEventListener(function() {
    type = (type == "asc") ? "desc" : "asc"; 
    categories = 

    tempImages = { ... images}
    tempImages = sortImagesByAge(tempImages, type)
    tempImages = sortImagesByCategories(tempImages)
    tempImages = sortImagesByMedia(tempImages)
    loadImages(tempImages)
})

function main() {
    loadImages(images);
}

main()
