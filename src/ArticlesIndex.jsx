export function ArticlesIndex(props) {
  console.log(props.articles);
  return (
    <div>
      <h1>All Articles</h1>
      {props.articles.map((article) => (
        <div key={article.title}>
          <h2>{article.title}</h2>
          <img src={article.urlToImage} atl={article.title} />
          <p>Author: {article.author}</p>
          <p>Description: {article.description}</p>
          <p>Source: {article.source.name}</p>
        </div>
      ))}
    </div>
  );
}
