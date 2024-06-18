// Wait for the DOM content to load before executing the script
document.addEventListener("DOMContentLoaded", () => {
    const coffeesContainer = document.querySelector('.coffees'); // Select the container for coffee cards
    const filterLinks = document.querySelectorAll('.filter-nav a'); // Select all filter links

    // Add click event listeners to each filter link
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const filter = e.target.id; // Get the filter type from the clicked link's ID
            fetchCoffees(filter); // Fetch and display coffees based on the selected filter
        });
    });

    fetchCoffees('all'); // Fetch and display all coffees initially

    /**
     * Fetches coffee data from the JSON file and filters it based on the selected filter.
     * @param {string} filter - The filter type to apply (e.g., 'all', 'espresso').
     */
    function fetchCoffees(filter) {
        fetch('data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const filteredCoffees = data.coffees.filter(coffee => 
                    filter === 'all' || coffee.type.toLowerCase() === filter
                );
                displayCoffees(filteredCoffees); // Display the filtered coffees
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    /**
     * Displays the coffee cards in the container.
     * @param {Array} coffees - The array of coffee objects to display.
     */
    function displayCoffees(coffees) {
        coffeesContainer.innerHTML = ''; // Clear existing content
        coffees.forEach(coffee => {
            const coffeeCard = document.createElement('div');
            coffeeCard.classList.add('coffee-card');

            coffeeCard.innerHTML = `
                <img src="${coffee.photo}" alt="${coffee.name}">
                <div class="coffee-card-content">
                    <span class="coffee-type-badge">${coffee.type}</span>
                    <h3>${coffee.name}</h3>
                    <p>${coffee.description}</p>
                </div>
            `;
            coffeesContainer.appendChild(coffeeCard); // Append the coffee card to the container
        });
    }
});
