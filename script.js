// Bruk det du har lært om å legge inn data i arrays og hvordan å hente data fra arrays og lag en handlevogn!
// Når du trykker på knappen "add to cart", tar du inn input fra brukeren og legger til og oppdaterer listen din i viewet.



//Modell
let cartShowing = 'false';
let openOrClose = 'Show Cart';
let ShoppingCartItems = [];
let lookInTheCart = 'What have you got?';

//View
updateView()
function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <br/>
    <input onchange="addItemToCart()" id="inputItem" type="text">
    <button class="shoppingButtons" onclick="addItemToCart()">Add to cart</button>
    <br/>
    <br/>
    <button class="shoppingButtons" onclick="showTheCart()">${openOrClose}</button>
    <button class="shoppingButtons" onclick="emptyTheCart()">Empty cart</button>
    <br/>
    <br/>
    <div id="theCart">${lookInTheCart}</div>
    `;
}

//controll
function addItemToCart() {
    let newItem = document.getElementById("inputItem").value;
    ShoppingCartItems.push(newItem);
    updateView()
}

function showTheCart() {
    cartShowing = !cartShowing;
    if (cartShowing == true) {
        lookInTheCart = 'What have you got?';
        openOrClose = 'Show Cart';
    } else {
        lookInTheCart = ShoppingCartItems;
        openOrClose = 'Hide Cart';
    }
    updateView()

}

function emptyTheCart() {
    ShoppingCartItems.splice(0, ShoppingCartItems.length)
    updateView()
}