const showShoppingList = document.getElementById("showShoppingList");

let shoppingList = [];
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

if (shoppingList = [""]){showShoppingList.innerText = "Listen er tom"};



