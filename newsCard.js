export function updateCard(container, article) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
      <img src="${
        article.urlToImage || "https://placekitten.com/300/150"
      }" alt="News Image">
      <div class="card-content">
        <h2>${article.title}</h2>
        <p>${article.description || "No description available."}</p>
         <a href="${article.url}" target="_blank">Read more</a>
      </div>
      <div class="card-footer">
        <p>Published on ${new Date(
          article.publishedAt
        ).toLocaleDateString()}</p>
      </div>
    `;

  container.appendChild(card);
}
