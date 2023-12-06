export function ArticlesIndex(props) {
  console.log(props.articles);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold p-4">All Articles</h1>
      {props.articles.map((article) => (
        <div
          className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
          key={article.title}
        >
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={article.urlToImage}
                atl={article.title}
              />
            </div>
            <div className="p-8">
              <h2 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{article.title}</h2>
              <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                Description: {article.description}
              </p>
              <p className="mt-2 text-slate-500">Author: {article.author}</p>
              <p className="mt-2 text-slate-500">Source: {article.source.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
