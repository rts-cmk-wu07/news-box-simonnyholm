import { useEffect } from "react";

const Archive = () => {
  /*Brug nedenstående i hvert fetch*/
  useEffect(() => {
    const archItems = JSON.parse(localStorage.getItem("archive"));
    console.log(archItems);

    const findByCategory = archItems.filter((object) => {
      return object.category === "Arts";
    });

    console.log("findByCategory", findByCategory);
  }, []);

  return (
    <div>
      <h2>Archive</h2>
    </div>
  );
};

export default Archive;
