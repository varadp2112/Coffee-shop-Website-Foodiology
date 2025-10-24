let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission and page reload

    // Get the search query from the input field
    var query = document.getElementById('search-input').value.trim();

    // Perform search operation (e.g., redirect to search results page or filter content)
    performSearch(query);
});

document.addEventListener("DOMContentLoaded", function() {
    var paymentSelect = document.getElementById("payment");
    var addressFields = document.getElementById("addressFields");

    paymentSelect.addEventListener("change", function() {
        if (paymentSelect.value === "Cash on Delivery") {
            addressFields.style.display = "block";
        } else {
            addressFields.style.display = "none";
        }
    });
});


function performSearch(query) {
    function performSearch(query) {
        // Perform AJAX request to fetch search results from the server
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'search.php?query=' + encodeURIComponent(query), true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                // Update the page with the fetched search results
                var searchResults = JSON.parse(xhr.responseText);
                displaySearchResults(searchResults);
            } else {
                console.error('Error fetching search results: ' + xhr.statusText);
            }
        };
        xhr.onerror = function() {
            console.error('Error fetching search results: ' + xhr.statusText);
        };
        xhr.send();
    }
    
    function displaySearchResults(results) {
        function displaySearchResults(results) {
            var resultsContainer = document.getElementById('searchResults'); // Get the container where search results will be displayed
        
            // Clear any previous search results
            resultsContainer.innerHTML = '';
        
            // Check if there are any search results
            if (results.length === 0) {
                resultsContainer.textContent = 'No results found.';
                return;
            }
        
            // Iterate through the search results and create HTML elements to display them
            results.forEach(function(result) {
                var resultElement = document.createElement('div');
                resultElement.classList.add('searchResult');
                resultElement.textContent = result.title; // Assuming each result has a 'title' property
        
                // Add click event listener to handle result selection or further action
                resultElement.addEventListener('click', function() {
                    // Handle result selection or further action
                    console.log('Selected result:', result);
                });
        
                // Append the result element to the results container
                resultsContainer.appendChild(resultElement);
            });
        }
    }

}
