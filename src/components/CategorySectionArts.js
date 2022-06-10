import { FaNewspaper } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import CategoryListArts from "./CategoryListArts";

import { Link } from "react-router-dom";

const CategorySectionArts = () => {
  return (
    <section>
      <div className="sectionHead">
        <div className="sectionIcon">
          <Link>
            <FaNewspaper />
          </Link>
        </div>
        <h2>Arts</h2>
        <div className="unfoldIcon">
          <Link>
            <IoIosArrowForward />
          </Link>
        </div>
      </div>
      <CategoryListArts />
    </section>
  );
};

export default CategorySectionArts;
