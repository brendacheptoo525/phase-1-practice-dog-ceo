console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const imgElement = document.createElement("img");
                imgElement.src = imageUrl;
                document.body.appendChild(imgElement);
            });
        })
        .catch(error => console.error("Error fetching images:", error));
});

document.addEventListener("DOMContentLoaded", function() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.getElementById("breed-list");

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const liElement = document.createElement("li");
                liElement.textContent = breed;
                breedList.appendChild(liElement);
            });
        })
        .catch(error => console.error("Error fetching breeds:", error));
});


document.addEventListener("DOMContentLoaded", function() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.getElementById("breed-list");

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const liElement = document.createElement("li");
                liElement.textContent = breed;
                breedList.appendChild(liElement);

                liElement.addEventListener("click", function() {
                    liElement.style.color = "blue"; // Change color to blue on click
                });
            });
        })
        .catch(error => console.error("Error fetching breeds:", error));
});

document.addEventListener("DOMContentLoaded", function() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.getElementById("breed-list");
    const filterDropdown = document.getElementById("filter-dropdown");

    let allBreeds = [];

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            allBreeds = Object.keys(data.message);
            renderBreeds(allBreeds);
        })
        .catch(error => console.error("Error fetching breeds:", error));

    function renderBreeds(breeds) {
        breeds.forEach(breed => {
            const liElement = document.createElement("li");
            liElement.textContent = breed;
            liElement.id = breed.toLowerCase(); // Set ID to lowercase breed name
            breedList.appendChild(liElement);
        });
    }

    filterDropdown.addEventListener("change", function() {
        const selectedLetter = filterDropdown.value.toLowerCase();
        allBreeds.forEach(breed => {
            const breedName = breed.toLowerCase();
            const breedElement = document.getElementById(breedName);
            if (breedName.startsWith(selectedLetter)) {
                breedElement.style.display = "block";
            } else {
                breedElement.style.display = "none";
            }
        });
    });
});
