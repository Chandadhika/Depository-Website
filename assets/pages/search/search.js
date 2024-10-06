$(document).ready(function() {
    // Search button click event
    $('#searchBtn').click(function() {
        let searchTerm = $('#searchInput').val().toLowerCase();

        if (searchTerm === "") {
            alert("Please enter an item name or ID to search.");
            return;
        }

        // Call the function to search for inventory items
        searchInventory(searchTerm);
    });

    // Function to search inventory items from local JSON data
    function searchInventory(searchTerm) {
        $.getJSON('inventory.json', function(data) {
            let items = data.items;
            let filteredItems = items.filter(item => 
                item.name.toLowerCase().includes(searchTerm) || 
                item.id.includes(searchTerm)
            );

            // Display the results
            displayResults(filteredItems);
        });
    }

    // Function to display results
    function displayResults(items) {
        let resultContainer = $('#searchResults');
        resultContainer.empty(); // Clear previous results

        if (items.length === 0) {
            resultContainer.append('<p>No items found.</p>');
            return;
        }

        items.forEach(item => {
            resultContainer.append(`
                <div class="result-item">
                    <h5>${item.name}</h5>
                    <p>Item ID: ${item.id}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
            `);
        });
    }
});

