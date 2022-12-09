import { useNavigate } from "react-router-dom";
import ArrowLeft from "../../assets/img/arrowLeft.png";
import "./style.css";

export const NavigateButton = () => {
  const navigate = useNavigate();
  return (
    <a className="navigateButton" onClick={() => navigate(-1)}>
      <img src={ArrowLeft} alt="arrowLeft" />
      <span>Previous Page</span>
    </a>
  );
};
