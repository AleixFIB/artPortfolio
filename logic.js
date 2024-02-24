const images = [
    {
    path: "Castell.jpg",
    name: "castell",
    date: new Date('2024-02-23T12:00:00'),
    categories: ["Arquitectura","Fantasia"] ,
    media: ["Llapis"]
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
document.querySelector('#date-button').addEventListener('click', function() {
    type = (type == "asc") ? "desc" : "asc"; 
    categories = "hola"

    tempImages = [ ... images]
    tempImages = sortImagesByAge(tempImages, type)
    tempImages = sortImagesByCategories(tempImages)
    tempImages = sortImagesByMedia(tempImages)
    loadImages(tempImages)
})

function createCheckBoxCategories(images) {
    let uniqueSet = new Set()
    images.forEach((img) => {
        img.categories.forEach((cat) => {
            uniqueSet.add(cat)
        })
    })
    let newHTML = ''
    uniqueSet.forEach((cat) => {
        newHTML += `<input type="checkbox" id="checkbox${cat}" name="checkbox${cat}">`
        newHTML += `<label for="checkbox${cat}">${cat}</label><br></br>`
    })
    document.querySelector('#llistaCategories').innerHTML = newHTML
}

function createCheckBoxMedias(images) {
    let uniqueSet = new Set()
    images.forEach((img) => {
        img.media.forEach((med) => {
            uniqueSet.add(med)
        })
    })
    let newHTML = ''
    uniqueSet.forEach((med) => {
        newHTML += `<input type="checkbox" id="checkbox${med}" name="checkbox${med}">`
        newHTML += `<label for="checkbox${med}">${med}</label><br></br>`
    })
    document.querySelector('#llistaMedias').innerHTML = newHTML
}

document.getElementById('mostraMedia').addEventListener('click', function() {
    let llista = document.getElementById('llistaMedias');
    llista.style.display = (llista.style.display === 'none') ? 'block' : 'none';
});

document.getElementById('mostraCategories').addEventListener('click', function() {
    let llista = document.getElementById('llistaCategories');
    llista.style.display = (llista.style.display === 'none') ? 'block' : 'none';
});

function StartUp(images) {
    createCheckBoxCategories(images)
    createCheckBoxMedias(images)
    loadImages(images)
}

function main(images) {
    StartUp(images)
}

main(images)
