/* https://restcountries.com/ */

document.addEventListener("DOMContentLoaded", function() {
    var searchButton = document.getElementById("search-button");
    var searchName = document.getElementById("search-name");
    var resultDiv = document.getElementsByClassName("result-display")[0];

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Object: " + searchName);
        console.log(searchName.value);
        
        var lastSearch = document.createElement("h2")
        lastSearch.textContent = searchName.value.trim();
        resultDiv.appendChild(lastSearch);

    var apiURL = 'https://restcountries.com/v3.1/name/' + searchName.value

        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                var searchCapital = document.createElement("h2")
                searchCapital.textContent = data[0]?.capital?.[0];
                resultDiv.appendChild(searchCapital);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    // Attach the event listener using addEventListener
    searchButton.addEventListener("click", handleFormSubmit);
});

fetch('https://restcountries.com/v3.1/all?fields=name,flags')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
