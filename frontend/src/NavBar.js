import React from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const links = [
    { to: "/", page: "Home" },
    { to: "/about", page: "About" },
    { to: "/add", page: "AddTodo" },
  ];
  const location = useLocation();
  return (
    <>
      <nav>
        <ul>
          {links.map((link) => (
            <li>
              <Link
                to={link.to}
                className={location.pathname === link.to ? "active" : ""}
              >
                {link.page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
