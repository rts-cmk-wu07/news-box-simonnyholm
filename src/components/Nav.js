import { Link } from "react-router-dom";


const Nav = ({ linkPath, linkIcon, appHeading }) => {
  return (
    <nav>
      <Link path={linkPath}>
        
      </Link>
      <h1>{appHeading}</h1>
      <Link></Link>
    </nav>
  );
};

export default Nav;
