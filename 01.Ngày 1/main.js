/*
================== SELECTOR ==================
getElementById('demo)
getElementsByClassName('demo');
getElementsByName(div)

================== QUERY ==================
document.querySelector('[href="#home"]');
querySelectorAll('.demo')

================== ATTRIBUTE ==================
getAttribute
setAttribute

================== CLASSLIST ==================
document.getElementById('data-title').classList.add('add-class');

Add | Contains | Entries | forEach | Remove | Toggle | toString | replace | values

================== Adding and Deleting Elements ==================
createElement(element)
removeChild(element)
appendChild(element)
replaceChild(new, old)

================== STYLE ==================
element.style.backgroundColor = 'red';

================== HTML Collections, NodeList ==================
HTML Collections , NodeList giống array nhưng không phải Array nên cần convert về Array

*/

/* Demo 1 */
const elementDiv = document.getElementById('data-title');
const getAttributeOfElementDiv = elementDiv.getAttribute('data-title');
const setAttributeOfElementDiv = elementDiv.setAttribute(
  'data-title', // thuộc tính
  'Update data-title' // giá trị mới
);

/* Demo 2 */
const elementH1 = document.getElementById('h1');
setInterval(() => {
  if (elementH1.style.color === 'red') {
    elementH1.style.color = 'blue';
  } else {
    elementH1.style.color = 'red';
  }
}, 1000);

/* Demo 3 */
const body = document.getElementsByTagName('body')[0]; // HTML Collections
const createElementDiv = document.createElement('div');
createElementDiv.classList.add('demo-1');
body.appendChild(createElementDiv);
