// main.js
const apiKey = "a8caeb81866f490fa6faaa4dbf6f0c5d";

const apiUrl = (query) =>
  query
    ? `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
    : `https://newsapi.org/v2/top-headlines?q=india&apiKey=${apiKey}`;


async function getNews(query) {
  try {
    const response = await fetch(apiUrl(query));
    const data = await response.json();

    if (data.status === "ok" && data.articles.length > 0) {
      return data.articles;
    } else {
      console.error("Unable to fetch news.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

function updateCard(container, articles) {
  container.innerHTML = ""; // Clear container before updating with new articles

  articles.forEach((article) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${
        article.urlToImage || "/public/404.jpg"
      }" alt="News Image">
      <div class="card-content">
        <h2>${article.title}</h2>
        <p>${article.source.name}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      </div>
    `;

    container.appendChild(card);
  });
}

function initialize() {
  const containerClass = "card-container";
  const containers = document.querySelectorAll(`.${containerClass}`);
  const searchInput = document.getElementById("searchInput");
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Fetch news on page load
  updateContainers();

  // Add event listener for search
  searchInput.addEventListener("input", handleSearch);

  // Add click event listeners to nav links
  navLinks.forEach(navLink => {
    navLink.addEventListener('click', function() {
      const searchTerm = this.getAttribute('data-search');
      searchInput.value = searchTerm;
      updateContainers(searchTerm);
    });
  });
}

async function updateContainers(query) {
  const containerClass = "card-container";
  const containers = document.querySelectorAll(`.${containerClass}`);

  for (let i = 0; i < containers.length; i++) {
    const container = containers[i];
    const articles = await getNews(query);
    const limitedArticles = articles.slice(i * 12, (i + 1) * 12);
    updateCard(container, limitedArticles);
  }
}

function handleSearch() {
  const searchInputValue = document.getElementById("searchInput").value;
  updateContainers(searchInputValue);
}


initialize();
