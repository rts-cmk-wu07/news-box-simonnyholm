/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaNewspaper } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { useState } from "react";
import "animate.css";
import { Color } from "../Color";
import CategoryListAutomobiles from "./CategoryListAutomobiles";

const CategorySectionAutomobiles = () => {
  const styles = {
    sectionHead: css`
      display: flex;
      justify-content: space-between;
      padding: 20px 10px 15px 10px;
      border-bottom: 2px solid ${Color.fossil};

      & h2 {
        margin: 5px 9em 0 0;
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
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
            <h2>Automobiles</h2>
            <div
              css={styles.unFoldIcon}
              className="unfoldIcon"
              onClick={(event) => setUnfold(true)}
            >
              <IoIosArrowForward />
            </div>
          </div>

          <CategoryListArts unfold={unfold} />
        </section>
      )}
      {unfold && (
        <section>
          <div css={styles.sectionHead} className="sectionHead">
            <div css={styles.sectionIcon} className="sectionIcon">
              <FaNewspaper />
            </div>
            <h2>Automobiles</h2>
            <div
              css={styles.unFoldIcon}
              className="unfoldIcon"
              onClick={(event) => setUnfold(false)}
            >
              <IoIosArrowDown />
            </div>
          </div>

          <CategoryListAutomobiles unfold={unfold} />
        </section>
      )}
    </>
  );
};

export default CategorySectionAutomobiles;
