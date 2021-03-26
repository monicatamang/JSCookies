// Creating a function that will create a cookie based on which pokemon the user selects, creating a toast message that will indicate which pokemon the user selected and prompt them to proceed to checkout
function selectPokemon(selectedPokemon) {
    Cookies.set(`selection`, selectedPokemon);
    var popUp = document.getElementById(`toastMessage`);
    popUp.innerText = `${selectedPokemon} has been selected. Proceed to Checkout.`;
    popUp.style.opacity = `1`;
    popUp.style.bottom = `10vh`;
}