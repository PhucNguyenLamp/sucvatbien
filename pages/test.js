// a <p> with red text that says “Hey I’m red!”
const body = document.querySelector('body');
const p = document.createElement('p');
p.textContent = "Hey I'm red!"
body.appendChild(p)

h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';
body.appendChild(h3);

div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';
body.appendChild(div);

h1 = document.createElement('h1');
h1.textContent = "I'm in a div"
div.appendChild(h1);
p2 = document.createElement('p');
p2.textContent = "ME TOO!"
div.appendChild(p2);
