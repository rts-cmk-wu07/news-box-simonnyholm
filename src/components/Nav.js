import { Link } from "react-router-dom";
import { BsInbox } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";

const Nav = () => {
  return (
    <nav>
      <div>
        <Link to="/archive">
          <BsInbox />
        </Link>
      </div>
      <h1>Newsbox</h1>
      <div>
        <Link to="/settings">
          <IoSettings />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
