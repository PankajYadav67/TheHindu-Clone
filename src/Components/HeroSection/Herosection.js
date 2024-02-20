document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "a8caeb81866f490fa6faaa4dbf6f0c5d"; // Replace with your NewsAPI key

  // Fetch latest headlines for the hero section
  fetchNews("headlineContainer", "top-headlines");

  // Fetch news for different sections
  fetchNews("indiaNewsContainer", "country=IN");
  fetchNews("ukNewsContainer", "country=GB");
  fetchNews("worldNewsContainer", "category=world");
  fetchNews("techNewsContainer", "category=technology");
  fetchNews("healthNewsContainer", "category=health");
  fetchNews("cryptoNewsContainer", "category=crypto");

  function fetchNews(containerId, query) {
    const container = document.getElementById(containerId);

    fetch(`https://newsapi.org/v2/q=${query}&?apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles) {
          data.articles.forEach((article) => {
            const articleElement = createArticleElement(article);
            container.appendChild(articleElement);
          });
        }
      })
      .catch((error) => console.error(error));
  }

  function createArticleElement(article) {
    const articleElement = document.createElement("div");
    articleElement.classList.add("news-article");

    const titleElement = document.createElement("h3");
    titleElement.textContent = article.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = article.description;

    const sourceElement = document.createElement("span");
    sourceElement.textContent = `Source: ${article.source.name}`;

    const linkElement = document.createElement("a");
    linkElement.href = article.url;
    linkElement.target = "_blank";
    linkElement.textContent = "Read more";

    articleElement.appendChild(titleElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(sourceElement);
    articleElement.appendChild(linkElement);

    return articleElement;
  }
});
