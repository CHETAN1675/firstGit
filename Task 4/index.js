// Add the Edit Button:

// Select the form and the list
const form = document.querySelector('form');
const fruitInput = document.getElementById('fruit-to-add');
const fruitList = document.querySelector('.fruits');

// Function to add Edit button to a list item
function addEditButton(li) {
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    li.appendChild(editBtn);
}

// Add Edit button to existing list items
const existingFruits = document.querySelectorAll('.fruit');
existingFruits.forEach(li => {
    addEditButton(li);
});

// Handle form submission to add new fruit
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const fruitName = fruitInput.value.trim();

    if (fruitName !== '') {
        const li = document.createElement('li');
        li.className = 'fruit';
        li.textContent = fruitName;

        // Create Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'x';
        li.appendChild(deleteBtn);

        // Create and append Edit button
        addEditButton(li);

        fruitList.appendChild(li);
        fruitInput.value = '';
    }
});

// Handle delete functionality
fruitList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const li = event.target.parentElement;
        fruitList.removeChild(li);
    }
});

// Implement the code as in video but with one extra 'Edit' button in 'li'

