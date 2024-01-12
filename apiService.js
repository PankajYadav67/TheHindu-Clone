const apiKey = "a8caeb81866f490fa6faaa4dbf6f0c5d";
// const apiUrl = `https://newsapi.org/v2/top-headlines?q=${china}&apiKey=${apiKey}`;
const queryApiUrl =  `https://newsapi.org/v2/everything?q=Apple&from=2023-01-11&sortBy=popularity&apiKey=${apiKey}`;

const apiUrl = `https://newsapi.org/v2/top-headlines?q=china&apiKey=${apiKey}`;
export async function getNews() {
  try {

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === 'ok' && data.articles.length > 0) {
      return data.articles[1];
    } else {
      console.error('Unable to fetch news.');
    }
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}




