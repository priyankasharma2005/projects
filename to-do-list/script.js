// Function to add a new task
function addTask() {
    // Get the input box and the list container elements
    const inputBox = document.getElementById('input-box');
    const listContainer = document.getElementById('list-container');
    const taskText = inputBox.value.trim(); // Get the trimmed value of the input box

    // Check if the input is not empty
    if (taskText) {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a span element for the check/uncheck icon
        const span = document.createElement('span');
        span.textContent = '✘';  // You can replace this with an icon if you prefer
        span.onclick = function () {
            // Toggle the 'checked' class on click
            li.classList.toggle('checked');
        };

        // Append the span to the list item
        li.appendChild(span);

        // Append the list item to the list container
        listContainer.appendChild(li);

        // Clear the input box
        inputBox.value = '';
    }
}

// Optional: Add a keypress event to add tasks when pressing Enter
document.getElementById('input-box').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
