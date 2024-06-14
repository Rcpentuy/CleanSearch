document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    const query = document.querySelector(".search-box").value;
    const source = document.getElementById("search-source").value;
    if (query) {
      window.location.href = source + encodeURIComponent(query);
    }
  });
