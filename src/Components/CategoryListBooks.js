import { useState } from "react";
import { useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Color } from "../Color";
import "animate.css";
import { useSwipeable } from "react-swipeable";
import { BsInbox } from "react-icons/bs";

const CategoryListBooks = ({ unfold }) => {
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

  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
  });

  /*biugb*/

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/books.json?api-key=8ys3OngIk2CnakCkRcC1vXJApNERITqI"
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

  console.log("unfold", unfold);

  var archive = JSON.parse(localStorage.getItem("archive"));
  if (archive == null) archive = [];

  /*
   var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null) existingEntries = []
  */

  return (
    <div
      /*className={
        unfold === false
          ? "animate__animated animate__slideOutDown"
          : "animate__animated animate__slideOutUp"
      }*/
      style={
        unfold === false
          ? {
              maxHeight: "0",
              overflow: "hidden",
              transistion: "width 2s",
            }
          : { minHeight: "100000px", transistion: "width 2s" }
      }
    >
      {isLoading && <p>Content is loading...</p>}
      {cat &&
        cat.results.map((art, index) => (
          <article {...handlers} css={styles.art} key={art.url}>
            <div css={styles.artImgDiv} className="img">
              <img
                css={styles.artImg}
                src={art.multimedia[0].url}
                alt={art.multimedia[0].caption}
                title={art.multimedia[0].caption}
              />
            </div>
            <div css={styles.artText} className="text">
              <a href={art.url} target="_blank" rel="noreferrer">
                <h2>{art.title}</h2>
              </a>
              <p>{art.abstract}</p>
            </div>
            <div>
              <BsInbox
                onClick={(event) => {
                  console.log(art);

                  const artObject = {
                    category: "Books",
                    art,
                  };

                  localStorage.setItem("art", JSON.stringify(artObject));
                  archive.push(artObject);
                  localStorage.setItem("archive", JSON.stringify(archive));
                }}
              />
            </div>
          </article>
        ))}

      {error && <p>{error}</p>}
    </div>
  );
};

export default CategoryListBooks;
