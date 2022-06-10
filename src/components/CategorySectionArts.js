import { FaNewspaper } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import CategoryListArts from "./CategoryListArts";

const CategorySectionArts = () => {
  return (
    <section>
      <div className="sectionHead">
        <div className="sectionIcon">
          <FaNewspaper />
        </div>
        <h2>Arts</h2>
        <div className="unfoldIcon">
          <IoIosArrowForward />
        </div>
      </div>
      <CategoryListArts />
    </section>
  );
};

export default CategorySectionArts;
