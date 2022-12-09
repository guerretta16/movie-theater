import Logout from "../../assets/img/logout.png";
import { useAuth } from "../../hooks/useAuth";
import "./style.css";

export const Header = () => {
  const { logOut } = useAuth();
  return (
    <header className="header">
      <a className="btn-logout" onClick={logOut}>
        <img className="img-logout" src={Logout} alt="logout" />
        <span>LOGOUT</span>
      </a>
    </header>
  );
};
