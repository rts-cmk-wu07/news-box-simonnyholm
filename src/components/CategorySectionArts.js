const CategorySectionArts = () => {
  const [cat, setCat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=8ys3OngIk2CnakCkRcC1vXJApNERITqI",
      {}
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("Unable to get articles from source");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setRandomQuote(data);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  });

  console.log("fetch", data);

  return (
    <section>
      {isLoading && <p css={styles.quoteText}>Vi tænker...</p>}
      {randomQuote &&
        randomQuote.results.map((pla) => (
          <li css={styles.quoteText} key={pla.name}>
            Der er {pla.name} i Gentofte.
          </li>
        ))}

      {error && <p css={styles.quoteText}>{error}</p>}
    </section>
  );
};

export default CategorySectionArts;
