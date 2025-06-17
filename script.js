const shoppingList = [];
const shoppingListEntry = document.getElementById("shoppingListEntry");
const showShoppingList = document.getElementById("showShoppingList");
const pushButton = document.getElementById("pushButton");
const popButton = document.getElementById("popButton");
const unshiftButton = document.getElementById("unshiftButton");
const shiftButton = document.getElementById("shiftButton");
const emptyButton = document.getElementById("emptyButton");
const sortButton = document.getElementById("sortButton");

console.log(shoppingList);
shoppingList.push("milk", "bread", "beer");
console.log(shoppingList)
console.log(shoppingList[1]);
console.log(shoppingList.toString())
console.log(shoppingList.join(", "))

showShoppingList.innerText = shoppingList.join("--");

let removedShoppingItem = shoppingList.pop(); //fjerner siste element
console.log(removedShoppingItem);
console.log(shoppingList.join(", "));
shoppingList.push("beef");
console.log(shoppingList.join(", "));

showShoppingList.innerText = shoppingList.join("--");

shoppingList.shift(); //fjerner første element
console.log(shoppingList.join("-"))

showShoppingList.innerText = shoppingList.join("--");

shoppingList.unshift("butter"); // legg til element i starten
console.log(shoppingList.join(", "));
shoppingList.pop()
shoppingList.pop()
shoppingList.pop()
console.log(shoppingList.toString())
console.log(shoppingList)

if (shoppingList.toString() === ""){showShoppingList.innerText = "Listen er tom"};

pushButton.addEventListener("click", pushItem);
popButton.addEventListener("click", popItem);
unshiftButton.addEventListener("click", unshiftItem);
shiftButton.addEventListener("click", shiftItem);
emptyButton.addEventListener("click", emptyList)
sortButton.addEventListener("click", sortList);

function pushItem() { //legger til på slutten av arrayet
    console.log("Pushknappen virker");
    console.log(shoppingListEntry.value);
    shoppingList.push(shoppingListEntry.value);
    showShoppingList.innerText = shoppingList.join(", ");
    shoppingListEntry.value = "";
    if (shoppingList.toString() == "" || shoppingList.every(item => item === '')){showShoppingList.innerText = "Listen er tom"};
};

function popItem() {
    shoppingList.pop();
    showShoppingList.innerText = shoppingList.join(", ");
    if (shoppingList.toString() == "" || shoppingList.every(item => item === "")){showShoppingList.innerText = "Listen er tom"};
};

function unshiftItem() { //legger til i starten, til venstre
    console.log("unshiftnappen virker");
    shoppingList.unshift(shoppingListEntry.value);
    showShoppingList.innerText = shoppingList.join(", ");
    shoppingListEntry.value = "";
    if (shoppingList.every(item => item === "")) showShoppingList.innerText = "Listen er tom";
};

function shiftItem () { //fjerner første element
    console.log("shiftknappen virker");
    shoppingList.shift();
    showShoppingList.innerText = shoppingList.join(", ");
    shoppingListEntry.value = "";
    if (shoppingList.every(item => item === "")) {
        showShoppingList.innerText = "Listen er tom";
        //shoppingList = []; funker ikke til å tømme tomrom??? sikkert fordi det bare kommer et nytt array inni funksjonen
        shoppingList.splice(0, shoppingList.length); // funker heller ikke? fordi returnerer også en kopi
        shoppingList.length = 0; //eneste som funker! for det skriver til opprinnelig array
};
};

function emptyList () {
    shoppingList.length = 0;
    showShoppingList.innerText = "Listen er tom";
}

function sortList () {
    shoppingList.sort();
    showShoppingList.innerText = shoppingList.join(", ");
    if (shoppingList.every(item => item === "")) {
        shoppingList.length = 0;
        showShoppingList.innerText = "Listen er tom";
};
};

let text = "Hello world, welcome to the universe.";
let result = text.includes("olrld");
console.log(result);

