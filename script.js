const shoppingList = ["melk", "brød", "smør", "øl", "egg", "appelsin"];
const shoppingListEntry = document.getElementById("shoppingListEntry");
const showShoppingList = document.getElementById("showShoppingList");
const pushButton = document.getElementById("pushButton");
const popButton = document.getElementById("popButton");
const unshiftButton = document.getElementById("unshiftButton");
const shiftButton = document.getElementById("shiftButton");
const emptyButton = document.getElementById("emptyButton");
const sortButton = document.getElementById("sortButton");

showShoppingList.innerText = shoppingList.join(", ");

if (shoppingList.toString() === ""){showShoppingList.innerText = "Listen er tom."};

pushButton.addEventListener("click", pushItem);
popButton.addEventListener("click", popItem);
unshiftButton.addEventListener("click", unshiftItem);
shiftButton.addEventListener("click", shiftItem);
emptyButton.addEventListener("click", emptyList)
sortButton.addEventListener("click", sortList);

function pushItem() { //legger til på slutten av arrayet
    console.log("Pushknappen virker");
    if(shoppingListEntry.value.trim() !== ""){ //bare hvis noe er skrevet inn
    shoppingList.push(shoppingListEntry.value);
    showShoppingList.innerText = shoppingList.join(", ");
    shoppingListEntry.value = "";};
};

function popItem() {
    shoppingList.pop();
    showShoppingList.innerText = shoppingList.join(", ");
    if (shoppingList.every(item => item === "")){showShoppingList.innerText = "Listen er tom."};
};

function unshiftItem() { //legger til i starten, til venstre
    console.log("unshiftnappen virker");
    shoppingList.unshift(shoppingListEntry.value);
    showShoppingList.innerText = shoppingList.join(", ");
    shoppingListEntry.value = "";
    if (shoppingList.every(item => item === "")) showShoppingList.innerText = "Listen er tom.";
};

function shiftItem () { //fjerner første element
    console.log("shiftknappen virker");
    shoppingList.shift();
    showShoppingList.innerText = shoppingList.join(", ");
    shoppingListEntry.value = "";
    if (shoppingList.every(item => item === "")) {
        showShoppingList.innerText = "Listen er tom.";
        //shoppingList = []; funker ikke til å tømme tomrom??? sikkert fordi det bare kommer et nytt array inni funksjonen
        shoppingList.splice(0, shoppingList.length); // funker heller ikke? fordi returnerer også en kopi
        shoppingList.length = 0; //eneste som funker! for det skriver til opprinnelig array
};
};

function emptyList () {
    shoppingList.length = 0;
    showShoppingList.innerText = "Listen er tom.";
}

function sortList () {
    shoppingList.sort();
    showShoppingList.innerText = shoppingList.join(", ");
    if (shoppingList.every(item => item === "")) {
        shoppingList.length = 0;
        showShoppingList.innerText = "Listen er tom.";
};
};