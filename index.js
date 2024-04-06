const button = document.querySelector('button');
const buttons = document.querySelectorAll('button');
const special = document.getElementById('special');
const paragraphs = document.getElementsByClassName('paragraph');
const get_element_query_by_id = document.querySelector('#special');
const get_element_query_by_class = document.querySelector('.paragraph');
const list_items = document.getElementsByTagName('li');

console.log(button);
console.log(buttons[1]);
console.log(special);
console.log(paragraphs);
console.log(list_items);

const link = document.getElementById('link');

link.setAttribute('class', 'green');

console.log(link.getAttribute('href'));

link.removeAttribute('title');

console.log(link.getAttribute('title'));

const anchors = document.querySelectorAll('.anchor');

for (let i = 0; i < anchors.length; i++) {
  anchors[i].style.color = 'white';
  anchors[i].style.textDecoration = 'none';
  anchors[i].style.fontSize = '14px';
}

document.body.style.background = 'black';
document.body.style.color = 'white';

// create element

/**
 * Create element p
 * Create text node
 * appending/linking p (parent) with text node (child)
 * appending/linking body with p
 */

const p = document.createElement('p');
const text = document.createTextNode('This is a js text');

p.appendChild(text);

document.body.appendChild(p);

p.style.color = 'crimson';

p.textContent = 'this is new content';

// document.body.removeChild('p');

const bg = document.getElementById('bg');

bg.addEventListener('click', function () {
  document.body.style.background = 'yellow';
});

const text_color_button = document.getElementById('text-color');

text_color_button.addEventListener('click', function () {
  document.body.style.color = 'black';
});

/**
 * get element (queryselector, getelementbyid)
 * addevenetlistener
 */

const box = document.getElementById('box');

box.addEventListener('mouseenter', function () {
  box.style.background = 'red';
  box.style.border = 'none';
});

box.addEventListener('mouseleave', function () {
  box.style.background = 'none';
});

const form = document.querySelector('form');
const message = document.querySelector('.message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  console.log('Submitted!');
  //   console.log(e.target[1]);

  const email = e.target[0];
  const password = e.target[1];

  console.log(email.value);
  console.log(password.value);

  if (email.value === '') {
    // console.log('Enter your email');
    message.textContent = 'Enter your email';
  }

  if (password.value === '') {
    // console.log('Enter your password');
    message.textContent = 'Enter your password';
  }

  if (password.value.length < 8) {
    message.textContent = 'min password 8 characters';

    return false;
  }

  if (email.value && password.value) {
    message.textContent = '';
  }
});

const add = document.getElementById('add');
const substract = document.getElementById('substract');
const quantity = document.getElementById('quantity');
let counter = 0;

add.addEventListener('click', function () {
  counter++;

  quantity.textContent = counter;
});

substract.addEventListener('click', function () {
  counter--;

  quantity.textContent = counter;
});

const heart = document.querySelector('svg');

heart.addEventListener('click', function () {
  heart.style.fill = 'white';
});

heart.addEventListener('dblclick', function () {
  heart.style.fill = 'red';
});
