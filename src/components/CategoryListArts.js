import { useState } from "react";
import { useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Color } from "../Color";
import "animate.css";

const CategoryListArts = () => {
  const styles = {
    art: css`
      display: flex;
      border-bottom: 2px solid ${Color.fossil};
      padding: 0 0 0 10px;
    `,
    artImgDiv: css`
      padding: 30px 0 20px 0;
      width: 70px;
      height: 70px;

      & img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
    `,
    artText: css`
      padding: 20px;

      & a {
        text-decoration: none;
        color: ${Color.onyx};
      }

      & h2 {
        font-size: 15px;
        font-weight: bold;
        text-align: left;
      }

      & p {
        font-size: 14px;
        font-weight: lighter;
        text-align: left;
        color: ${Color.slate};
      }
    `,
  };

  const [cat, setCat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [animation, setAnimation] = useState("");

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
    <div className={animation}>
      {isLoading && <p>Content is loading...</p>}
      {cat &&
        cat.results.map((art, index) => (
          <article css={styles.art} key={art.url}>
            <p>{index}</p>
            <div css={styles.artImgDiv} className="img">
              <img
                css={styles.artImg}
                src={art.multimedia[0].url}
                alt={art.multimedia[0].caption}
                title={art.multimedia[0].caption}
              />
            </div>
            <div css={styles.artText} className="text">
              <a href={art.url}>
                <h2>{art.title}</h2>
              </a>
              <p>{art.abstract}</p>
            </div>
          </article>
        ))}

      {error && <p>{error}</p>}
    </div>
  );
};

export default CategoryListArts;
