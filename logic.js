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

function activateDateSort() {
    document.querySelector('#date-button').addEventListener('click', function() {
        type = (type == "asc") ? "desc" : "asc"; 
        sortImages()
    })
}


function activateCheckBoxes() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Iterate through each checkbox and attach an event listener
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', sortImages);
    });
}

function sortImages() {
    //images i type son globals
    let checkboxesCats = document.querySelectorAll('.checkboxCategories');
    // Iterate through each checkbox and check if it's checked
    categories = []
    checkboxesCats.forEach(function(checkbox) {
        if (checkbox.checked) {
            categories.push(checkbox.id.substring('checkbox'.length))
        }
    })

    let checkboxesMeds = document.querySelectorAll('.checkboxMedias');
    medias = []
    checkboxesMeds.forEach(function(checkbox) {
        if (checkbox.checked) {
            categories.push(checkbox.id.substring('checkbox'.length))
        }
    })  

    tempImages = [ ... images]
    tempImages = sortImagesByAge(tempImages, type)
    tempImages = sortImagesByCategories(tempImages, categories)
    tempImages = sortImagesByMedia(tempImages, medias)
    loadImages(tempImages)
}

/*
// Select all checkboxes using querySelectorAll
let checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Iterate through each checkbox and attach an event listener
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        // Your event handler code here
        console.log('Checkbox with ID', checkbox.id, 'was clicked');
    });
});
*/

function createCheckBoxCategories(images) {
    let uniqueSet = new Set()
    images.forEach((img) => {
        img.categories.forEach((cat) => {
            uniqueSet.add(cat)
        })
    })
    let newHTML = ''
    uniqueSet.forEach((cat) => {
        newHTML += `<input type="checkbox" class="checkboxCategories" id="checkbox${cat}" name="checkbox${cat}">`
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
        newHTML += `<input type="checkbox" class="checkboxMedias" id="checkbox${med}" name="checkbox${med}">`
        newHTML += `<label for="checkbox${med}">${med}</label><br></br>`
    })
    document.querySelector('#llistaMedias').innerHTML = newHTML
}

function activateMostrarMedia() {
    document.getElementById('mostraMedia').addEventListener('click', function() {
        let llista = document.getElementById('llistaMedias');
        llista.style.display = (llista.style.display === 'none') ? 'block' : 'none';
    });
}

function activateMostrarCategories() {
    document.getElementById('mostraCategories').addEventListener('click', function() {
        let llista = document.getElementById('llistaCategories');
        llista.style.display = (llista.style.display === 'none') ? 'block' : 'none';
    });
}

function StartUp(images) {
    activateCheckBoxes()
    activateDateSort()
    activateMostrarCategories()
    activateMostrarMedia()
    createCheckBoxCategories(images)
    createCheckBoxMedias(images)
    loadImages(images)
}

function main(images) {
    StartUp(images)
}

main(images)
