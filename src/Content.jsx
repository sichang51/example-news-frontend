import { useState, useEffect } from "react";
import axios from "axios";
import { ArticlesIndex } from "./ArticlesIndex";

export function Content() {
  const [articles, setArticles] = useState([]);

  const handleArticlesIndex = () => {
    axios.get(`http://localhost:3000/articles.json?search_terms=bitcoin`).then((response) => {
      console.log(response.data.articles);
      setArticles(response.data.articles);
    });
  };

  useEffect(handleArticlesIndex, []);

  return (
    <main>
      <h1 className="text-3xl font-bold p-4 text-center">My News Site</h1>
      <ArticlesIndex articles={articles} />
    </main>
  );
}
