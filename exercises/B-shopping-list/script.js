function shoppingList(shoppingItems) {
  let content = document.getElementById('content');
  let list = document.createElement('ul');

  //li
  shoppingItems.forEach( el => {
    let itemsListed = document.createElement('li');
    itemsListed.innerHTML = el;

    content.appendChild(list);
    list.appendChild(itemsListed);
  });
  
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
