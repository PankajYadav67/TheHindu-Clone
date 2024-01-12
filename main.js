

import { getNews  } from './apiService.js';
import { updateCard } from './newsCard.js';

async function initialize() {
  const container1 = document.getElementById('container1');
  const container2 = document.getElementById('container2');
  const container3 = document.getElementById('container3');

  const article1 = await getNews();
  const article2 = await getNews();
  const article3 = await getNews();

  updateCard(container1, article1);
  updateCard(container2, article2);
  updateCard(container3, article3);
}


 



// Fetch news on page load
initialize();
