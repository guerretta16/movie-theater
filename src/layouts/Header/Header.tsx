import { Link } from "react-router-dom";
import Logout from "../../assets/img/logout.png";
import { useAuth } from "../../hooks/useAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./style.css";

export const Header = () => {
  const { logOut } = useAuth();
  const [token, setToken] = useLocalStorage("tokValue", undefined);
  return (
    <header className="header">
      <div className="header-btn">
        <Link className="favMovBtn" to="/home">Home</Link>
        <Link className="favMovBtn" to="/favorite">Favorites Movies</Link>
      </div>
      {typeof token !== "undefined" && (
        <a className="btn-logout" onClick={logOut}>
          <img className="img-logout" src={Logout} alt="logout" />
          <span>LOGOUT</span>
        </a>
      )}
    </header>
  );
};
