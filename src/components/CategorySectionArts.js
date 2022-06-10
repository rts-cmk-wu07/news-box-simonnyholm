import { FaNewspaper } from "react-icon/fa";

const CategorySectionArts = () => {
  return (
    <section>
      <div className="sectionHead">
        <div className="sectionIcon">
          <FaNewspaper />
        </div>
        <h2>Arts</h2>
        <div className="unfoldIcon"></div>
      </div>
      <CategoryListArts />
    </section>
  );
};

export default CategorySectionArts;
