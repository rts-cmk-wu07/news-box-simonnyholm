import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { BsInbox } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { Color } from "../Color";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const Nav = () => {
  const styles = {
    nav: css`
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid ${Color.sage};
        padding: 20px 0 20px 0;
        & div {
            margin: 4px 10px 0 10px;
            font-size: 25px;
        }
        & a {
            color: ${Color.onyx};
        }
        & h1 {
            font-size: 25px;
            margin: 0;
        }
    `,
};

const [navHome, setNavHome] = useState(true);
const [navSettings, setNavSettings] = useState(false);
console.log("navHome", navHome);
console.log("navSettings", navSettings);

return (
    <>
        {navHome && (
            <nav css={styles.nav}>
                <div>
                    <Link
                        onClick={(event) => {
                            setNavHome(false);
                            setNavSettings(false);
                        }}
                        to="/archive"
                    >
                        <BsInbox />
                    </Link>
                </div>
                <h1>Newsbox</h1>
                <div>
                    <Link
                        to="/settings"
                        onClick={(event) => {
                            setNavHome(false);
                            setNavSettings(true);
                        }}
                    >
                        <IoSettings />
                    </Link>
                </div>
            </nav>
        )}
        {!navHome && (
            <nav css={styles.nav}>
                <div>
                    <Link
                        to="/"
                        onClick={(event) => {
                            setNavHome(true);
                            setNavSettings(false);
                        }}
                    >
                        <IoIosArrowBack />
                    </Link>
                </div>
                {navSettings && <h1>Settings</h1>}
                {!navSettings && <h1>Archive</h1>}
                <div>
                    {!navSettings && (
                        <Link
                            to="/settings"
                            onClick={(event) => {
                                setNavHome(false);
                                setNavSettings(true);
                            }}
                        >
                            <IoSettings />
                        </Link>
                    )}
                    {navSettings && <div></div>}
                </div>
            </nav>
        )}
    </>
);
};

export default Nav;
