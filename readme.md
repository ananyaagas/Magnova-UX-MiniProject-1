Frontend Overview
This application displays a selection of coffee types and allows users to filter the list based on coffee type using a simple, user-friendly interface. The frontend is structured around HTML, CSS, and JavaScript, which interact with a JSON data file to dynamically generate and filter coffee cards.

Components and Process
HTML Structure (index.html)

The HTML file is the backbone of the user interface, consisting of several key sections:

Hero Section: Contains welcome text to introduce users to the coffee selection.
Navigation Bar: Links for filtering coffees by type (All, Espresso, Latte, Cappuccino).
Coffee Cards Container: A div where coffee cards will be dynamically inserted.
Script Inclusion: Links to an external JavaScript file for interactivity.
CSS Styling (styles.css)

The CSS file provides visual styling for the application, including:

Resetting Styles: Ensures consistency across different browsers.
Body and Hero Section: Styles the text and layout.
Navigation Styling: Ensures the navigation links are visually appealing and interactive.
Coffee Card Styling: Styles the coffee cards, including image size, layout, and hover effects.

JavaScript Logic (script.js)

The JavaScript file handles the dynamic behavior of the application:

Event Listeners:

Attaches click event listeners to navigation links to handle filtering.
Prevents the default link behavior to avoid page reloads.
Fetching Data:

Uses the fetch API to retrieve the coffee data from data.json.
Filters the coffee data based on the selected type and updates the display accordingly.
Displaying Data:

Clears the existing coffee cards.
Loops through the filtered coffee data to create and append new coffee cards to the container.
JSON Data (data.json)

The JSON file contains the coffee data:

Coffee Objects: Each object includes the name, type, description, and photo URL for a coffee.
The JavaScript code reads this data, filters it based on user selection, and displays it dynamically.
Process Flow
Initial Setup:

The application is served using python3 -m http.server 8000, making it accessible at http://[::]:8000/.
Page Load:

When the page loads, JavaScript fetches the coffee data from data.json and displays all coffee types initially.

Filtering:

Users click on a filter link (e.g., Espresso, Latte).
JavaScript intercepts the click, prevents the default behavior, and calls the fetchCoffees function with the selected filter type.
fetchCoffees fetches and filters the coffee data, then calls displayCoffees to update the UI with the filtered list.
Dynamic Updates:

The coffee cards are dynamically generated based on the filtered data, ensuring the displayed list reflects the user's selection.