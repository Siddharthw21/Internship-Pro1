const btn = document.querySelector('#addbutton');
const inputForm = document.getElementById('inputForm');

btn.addEventListener('click', () => {
    if (inputForm.style.display === 'none' || inputForm.style.display === '') {
        inputForm.style.display = 'block'; // Show the form
    } else {
        inputForm.style.display = 'none'; // Hide the form
    }
});

const addForm = document.getElementById('addForm');
addForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const itemValue = document.getElementById('item').value;
    inputForm.style.display = 'none';
    addForm.reset();

    const li = document.createElement('li');

    const iconSpan = document.createElement('span');
    iconSpan.classList.add('icon'); // Add the icon class for styling
    iconSpan.innerHTML = '&#10004;'; // Set the checkmark character

    li.appendChild(iconSpan);
    li.appendChild(document.createTextNode(itemValue)); // Add the item text

    li.classList.add('list-item'); // Make sure this class is defined in your CSS

    const list = document.querySelector('ul');
    list.appendChild(li);
});
