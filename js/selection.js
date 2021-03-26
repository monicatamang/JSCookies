// Getting the value of the cookie based on the user's selection, storing it into a new variable and displaying their selection on the page
var selection = Cookies.get(`selection`);
document.getElementById(`selectionContainer`).innerHTML = `<h1>You have selected: ${selection}</h1>`;

// Creating a conditional in the case where if a user has not selected a pokemon from the home page, a message will prompt them to go back to the home page and make a selection
if (selection === undefined) {
    var message = document.createElement(`h1`);
    message.innerText = "Please go back to the home page and make a selection.";
    document.getElementById(`selectionContainer`).append(message);
}

// Creating a new image element on the page and appending it to the 'main' section of the page, adding a 10% margin to the top and bottom of each image
pokemonImage = document.createElement(`img`);
selectionContainer.append(pokemonImage);
pokemonImage.style.margin = `10% 0%`;

// Creating a conditional where the image will appear on the 'selection' page based on which pokemon the user has selected from the home page
if (selection === `Pancham`) {
    pokemonImage.setAttribute(`src`, `/images/pancham.jpg`);
} else if (selection === `Charmander`) {
    pokemonImage.setAttribute(`src`, `/images/charmander.jpg`);
} else if (selection === `Umbreon`) {
    pokemonImage.setAttribute(`src`, `/images/umbreon.jpg`);
}