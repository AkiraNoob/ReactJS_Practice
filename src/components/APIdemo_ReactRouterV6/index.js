import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link> or <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Main;
