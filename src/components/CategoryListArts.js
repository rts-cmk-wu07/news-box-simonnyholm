import { useState } from "react";
import { useEffect } from "react";

const CategoryListArts = () => {
  const [cat, setCat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=8ys3OngIk2CnakCkRcC1vXJApNERITqI"
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("Unable to get articles from source");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setCat(data);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  console.log("fetch", cat);

  return (
    <>
      {isLoading && <p>Content is loading...</p>}
      {cat &&
        cat.results.map((art) => (
          <article key={art.url}>
            <div className="img">
              <img
                src={art.multimedia[0].url}
                alt={art.multimedia[0].caption}
                title={art.multimedia[0].caption}
              />
            </div>
            <div className="text">
              <a href={art.url}>
                <h2>{art.title}</h2>
              </a>
              <p>{art.abstract}</p>
            </div>
          </article>
        ))}

      {error && <p>{error}</p>}
    </>
  );
};

export default CategoryListArts;
