export const fetchQuotes = () => {
  return new Promise((resolve, reject) => {
    fetch("https://api.quotable.io/quotes/random?limit=3")
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => console.error(error));
  });
};
