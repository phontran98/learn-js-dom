// Demo - 1
// const buttonOne = document.querySelector('button');
// function handleClickBtn(e) {
//   console.log(this);
// }
// buttonOne.addEventListener('click', function (event) {
//   // this = buttonOne; => nếu dùng arrow function thì this chính là window
//   // event.target; => chưa chắc là button
//   this.style.fontSize = '30px';
// });
// buttonOne.addEventListener('click', handleClickBtn);

// ========================== CUSTOM SELEC BOX ========================== //

const selectEl = document.getElementById('select-box');
const options = document.querySelectorAll('#select-box option');

const divWrapper = document.createElement('div');
divWrapper.classList.add('wrapper-select');

const divSelected = document.createElement('div');
divSelected.classList.add('selected');
divSelected.setAttribute('my-value', 'att tạm');
divSelected.innerText = [...options][0].innerText;
divSelected.addEventListener('click', function (event) {
  this.parentElement.classList.toggle('open');
});

const ulEl = document.createElement('ul');
ulEl.classList.add('list-options');

[...options].forEach((option, index) => {
  const valueOption = option.getAttribute('value');
  const textOption = option.innerText;

  if (option.getAttribute('selected') !== null) {
    divSelected.innerText = textOption;
    divSelected.setAttribute('my-value', valueOption);
  }

  const liEl = document.createElement('li');
  liEl.innerText = textOption;
  liEl.setAttribute('my-value', valueOption);

  liEl.addEventListener('click', function (event) {
    divSelected.innerText = this.innerText;
    divSelected.setAttribute('my-value', this.getAttribute('my-value'));

    // Remove selected
    [...options].forEach((op) => {
      op.removeAttribute('selected');
    });

    const option = selectEl.querySelector(
      `option[value=${this.getAttribute('my-value')}]`
    );

    option.setAttribute('selected', '');

    this.parentElement.parentElement.classList.remove('open');
  });

  ulEl.appendChild(liEl);
});

divWrapper.appendChild(divSelected);
divWrapper.appendChild(ulEl);

const paretNode = selectEl.parentNode;
paretNode.insertBefore(divWrapper, selectEl);

document.addEventListener('click', function (event) {
  const check = event.target.closest('.wrapper-select');
  if (check === null) {
    divWrapper.classList.remove('open');
  }
});
/*
  insertBefore | paretNode.insertBefore(divWrapper, selectEl);
  insertAfter | paretNode.insertBefore(divWrapper, selectEl.nextSibling);
*/

/*
body
  divWrapper
    divSelected
    ul
      li
*/
