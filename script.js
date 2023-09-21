// Get references to the button and the table
const createTableBtn = document.getElementById('createTableBtn');
const myTable = document.getElementById('myTable');

// Function to create the table
function createTable() {
    // Prompt the user to enter the number of rows
    const numRows = parseInt(prompt('Input number of rows'));

    if (!isNaN(numRows) && numRows >= 0) {
        // Clear the existing table if any
        myTable.innerHTML = '';

        // Create the table rows and cells
        for (let i = 0; i < numRows; i++) {
            const row = myTable.insertRow(i);
            for (let j = 0; j < numRows; j++) {
                const cell = row.insertCell(j);
                cell.textContent = `Row-${i} Column-${j}`;
            }
        }
    } else {
        alert('Please enter a valid number of rows.');
    }
}

// Add a click event listener to the button
createTableBtn.addEventListener('click', createTable);
