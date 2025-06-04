<script>
    // Selecting HTML elements
    const input = document.getElementById("itemInput"); // Select input field
    const addButton = document.getElementById("addItemButton"); // Select add button
    const shoppingList = document.getElementById("shoppingList"); // Select the list container

    // Adding a new item to the shopping list
    addButton.addEventListener("click", () => {
      const newItem = input.value.trim(); // Get and clean user input
      if (newItem) {
        // Create a new list item dynamically
        const listItem = document.createElement("li");
        listItem.innerHTML = `${newItem} <button onclick="removeItem(this)">Remove</button>`;
        shoppingList.appendChild(listItem); // Add the new item to the list
        input.value = ""; // Clear the input field
      }
    });

    // Removing an item from the shopping list
    function removeItem(button) {
      const listItem = button.parentElement; // Select the parent <li> of the button
      shoppingList.removeChild(listItem); // Remove the <li> from the list
    }
  </script>