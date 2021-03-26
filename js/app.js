// Creating a function that will create a cookie based on which pokemon the user selects
function selectPokemon(selectedPokemon) {
    Cookies.set(`selection`, selectedPokemon);
}