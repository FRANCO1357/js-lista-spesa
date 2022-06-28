// 1. creare l'arrey con tutti gli elementi della lista
// 2. recuperare l'ul
// 3. creare i li
// 4. aggiungere gli li all'ul
// 5. stampare in pagina l'ul

// CREO LA LISTA
const shoppingList = ['uova', 'pane', 'latte', 'biscotti', 'pasta', 'affettati', 'formaggio', 'verdura', 'frutta']

// RECUPERO IL TAG UL
const list = document.querySelector('#shopping-list ul')

// CREO I TAG LI CON IL CICLO FOR

// let item = ``;

// for (i = 0; i < shoppingList.length; i++){
//     item += `<li>${shoppingList[i]}</li>`
// }

// list.innerHTML = item

// CREO I TAG LI CON WHILE

let item = ``;
i = 0
while (i < shoppingList.length) {
    item += `<li>${shoppingList[i]}</li>`
    i++
}

list.innerHTML = item
