import { Link } from "react-router-dom";
import IconLeftDiv from "./IconLeftDiv";

const Nav = ({ linkPath, linkIcon, appHeading }) => {
  return (
    <nav>
      <Link path={linkPath}>
        <IconLeftDiv />
      </Link>
      <h1>{appHeading}</h1>
      <Link></Link>
    </nav>
  );
};

export default Nav;
