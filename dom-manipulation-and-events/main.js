// a <p> with red text that says “Hey I’m red!”

const container = document.querySelector('#container');

const pTag = document.createElement('p');
pTag.style.color = 'red';
pTag.textContent = 'Hey I\'m red.';

container.appendChild(pTag);

// an <h3> with blue text that says “I’m a blue h3!”
const h3Tag = document.createElement('h3');
h3Tag.style.color = 'blue';
h3Tag.textContent = 'Hey I\'m blue h3!';

container.appendChild(h3Tag);

// a <div> with a black border and pink background color with the following elements inside of it:

const anotherDiv = document.createElement('div');
anotherDiv.setAttribute('style', 'border: black; background-color: pink');
const h1Tag = document.createElement('h1');
h1Tag.textContent = 'I\'m in a div';
const pToo = document.createElement('p');
pToo.textContent = 'ME TOO!';

anotherDiv.appendChild(h1Tag);
anotherDiv.appendChild(pToo);
container.appendChild(anotherDiv);

//     another <h1> that says “I’m in a div”
//     a <p> that says “ME TOO!”
//     Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const button = document.querySelector('#btn');
button.onclick = () => alert('Hello World 2!')

const button2 = document.querySelector('#btn2');
button2.addEventListener('click', () => {
    alert('Hello World 3!');
});

