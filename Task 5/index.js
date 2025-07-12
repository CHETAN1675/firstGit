function manualTrim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

const form = document.querySelector('form');
const descriptionInput = document.createElement('input');
descriptionInput.setAttribute('type', 'text');
descriptionInput.setAttribute('id', 'description');
descriptionInput.setAttribute('placeholder', 'Enter fruit description');
form.insertBefore(descriptionInput, form.querySelector('button'));

const fruitsList = document.querySelectorAll('.fruit');
for (let i = 0; i < fruitsList.length; i++) {
    const li = fruitsList[i];

    if (!li.querySelector('span')) {
        const text = manualTrim(li.firstChild.textContent);
        li.firstChild.textContent = '';
        const span = document.createElement('span');
        span.textContent = text;
        li.insertBefore(span, li.firstChild);
    }

    let p = li.querySelector('p');
    if (!p) {
        p = document.createElement('p');
        li.insertBefore(p, li.querySelector('button'));
    }

    if (manualTrim(p.textContent) === '') {
        p.textContent = li.querySelector('span').textContent;
    }
}

const deleteButtons = document.querySelectorAll('.fruit .delete-btn');
for (let i = 0; i < deleteButtons.length; i++) {
    const btn = deleteButtons[i];
    btn.addEventListener('click', function () {
        btn.parentElement.remove();
    });
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fruitName = manualTrim(document.getElementById('fruit-to-add').value);
    const description = manualTrim(document.getElementById('description').value);

    if (fruitName === '' || description === '') return;

    const li = document.createElement('li');
    li.className = 'fruit';

    const nameSpan = document.createElement('span');
    nameSpan.textContent = fruitName;

    const descPara = document.createElement('p');
    descPara.textContent = description;
    descPara.style.fontStyle = 'italic';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(nameSpan);
    li.appendChild(descPara);
    li.appendChild(deleteBtn);

    document.querySelector('.fruits').appendChild(li);

    document.getElementById('fruit-to-add').value = '';
    document.getElementById('description').value = '';
});

document.getElementById('filter').addEventListener('keyup', function (event) {
    const searchText = event.target.value.toLowerCase();
    const fruits = document.getElementsByClassName('fruit');

    for (let i = 0; i < fruits.length; i++) {
        const fruit = fruits[i];
        const nameEl = fruit.querySelector('span');
        const descEl = fruit.querySelector('p');

        const name = nameEl ? nameEl.textContent.toLowerCase() : '';
        const desc = descEl ? descEl.textContent.toLowerCase() : '';

        fruit.style.display = (name.indexOf(searchText) !== -1 || desc.indexOf(searchText) !== -1) ? 'flex' : 'none';
    }
});
