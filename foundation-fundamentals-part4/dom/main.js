const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”
const redP = document.createElement('p');
redP.style.color = 'red';
redP.textContent = "Hey I'm red!";
container.appendChild(redP);

// an <h3> with blue text that says “I’m a blue h3!”
const blueH3 = document.createElement('h3');
blueH3.style.color = 'blue';
blueH3.textContent = "I'm a blue h3!";
container.appendChild(blueH3);

// a <div> with a black border and pink background color with the following elements inside of it:
const newDiv = document.createElement('div');
newDiv.setAttribute('style', 'border: 1px solid black; background: pink');

// another <h1> that says “I’m in a div”
const anotherh1 = document.createElement('h1');
anotherh1.textContent = "I'm in a div";
newDiv.appendChild(anotherh1);

// a <p> that says “ME TOO!”
const anotherP = document.createElement('p');
anotherP.textContent = 'ME TOO!';
newDiv.appendChild(anotherP);

// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
container.appendChild(newDiv);

// Method 2 : index.html line 21
const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World 2');

// Method 3 : index.html line 25
const btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', () => {
    alert('Hello World 3');
})


//--------------
const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    e.target.style.background = 'blue';
})