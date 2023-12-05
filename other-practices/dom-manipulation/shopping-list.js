const input = document.querySelector('#item');
const btn = document.querySelector('button');
const list = document.querySelector('ul');
const div = document.querySelector('div');

btn.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';

    list.appendChild(listItem);
    // console.log(listItem.textContent);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    input.focus();

});

// delete all the list (reset the list)
const reset = document.createElement('button');
reset.textContent = 'Reset list';
div.appendChild(reset);

reset.addEventListener('click', () => {
    list.textContent = '';
});

















// btn.addEventListener('click', () => {
//     let myItem = input.value;
//     input.value = '';

//     const listItem = document.createElement('li');
//     const listText = document.createElement('span');
//     const listBtn = document.createElement('button');

//     listItem.appendChild(listText);
//     listText.textContent = myItem;
//     listItem.appendChild(listBtn);
//     listBtn.textContent = 'Delete';

//     // apend the list item as a child of the list
//     list.appendChild(listItem);

//     listBtn.addEventListener('click', () => {
//         list.removeChild(listItem);
//     });

//     input.focus();
// });
