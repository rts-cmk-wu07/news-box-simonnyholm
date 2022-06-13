/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Color } from "../Color";

const Search = () => {
  const styles = {
    searchDiv: css`
      padding: 15px 0 15px 0;
      border-bottom: 2px solid ${Color.fossil};
    `,
  };
  return (
    <div css={styles.searchDiv}>
      <input type="search" name="" id="" placeholder="Search News" />
    </div>
  );
};

export default Search;
