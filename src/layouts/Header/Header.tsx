import Logout from "../../assets/img/logout.png";
import { useAuth } from "../../hooks/useAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./style.css";

export const Header = () => {
  const { logOut } = useAuth();
  const [token, setToken] = useLocalStorage("tokValue", undefined);
  return (
    <header className="header">
      {typeof token !== "undefined" && (
        <a className="btn-logout" onClick={logOut}>
          <img className="img-logout" src={Logout} alt="logout" />
          <span>LOGOUT</span>
        </a>
      )}
    </header>
  );
};
