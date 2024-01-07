export interface QuoteType {
  _id: string;
  author: string;
  authorSlug: string;
  content: string;
  dateAdded: string;
  dateModified: string;
  length: number;
  tags: string[];
}

// Define an array type using the previously defined Quote interface


export const fetchQuotes = (): Promise<QuoteType[]> => {
  return new Promise((resolve, reject) => {
    fetch("https://api.quotable.io/quotes/random?limit=3")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const quotes: QuoteType[] = json;
        resolve(quotes);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

export const fetchQuotesWithTags = (tags:string[]): Promise<QuoteType[]> => {
  return new Promise((resolve, reject) => {
    const lowercaseTags = tags.map(tag => tag.toLowerCase());
    let string = lowercaseTags.join('|')
    console.log(string);
    
    fetch(`https://api.quotable.io/quotes?tags=${string}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const quotes: QuoteType[] = json?.results;
        resolve(quotes);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
