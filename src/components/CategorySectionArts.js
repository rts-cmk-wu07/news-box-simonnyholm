/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaNewspaper } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import CategoryListArts from "./CategoryListArts";
import { useState } from "react";
import "animate.css";
import { Color } from "../Color";

const CategorySectionArts = () => {
  const styles = {
    sectionHead: css`
      display: flex;
      justify-content: space-between;
      padding: 25px 10px;

      & h2 {
        margin: 0;
      }

      & div {
        margin-top: 3px;
        font-size: 25px;
      }
    `,
    unFoldIcon: css`
      color: ${Color.onyx};
    `,
    sectionIcon: css`
      color: ${Color.rust};
    `,
  };
  const [unfold, setUnfold] = useState(false);
  return (
    <>
      {!unfold && (
        <section>
          <div css={styles.sectionHead} className="sectionHead">
            <div css={styles.sectionIcon} className="sectionIcon">
              <FaNewspaper />
            </div>
            <h2>Arts</h2>
            <div
              css={styles.unFoldIcon}
              className="unfoldIcon"
              onClick={(event) => setUnfold(true)}
            >
              <IoIosArrowForward />
            </div>
          </div>
        </section>
      )}
      {unfold && (
        <section>
          <div css={styles.sectionHead} className="sectionHead">
            <div css={styles.sectionIcon} className="sectionIcon">
              <FaNewspaper />
            </div>
            <h2>Arts</h2>
            <div
              css={styles.unFoldIcon}
              className="unfoldIcon"
              onClick={(event) => setUnfold(false)}
            >
              <IoIosArrowDown />
            </div>
          </div>
          <CategoryListArts className="animate__animated animate__BackInRight" />
        </section>
      )}
    </>
  );
};

export default CategorySectionArts;
