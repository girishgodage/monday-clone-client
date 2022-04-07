import React from "react";
import crm_logo from "../images/crm_logo.png";

import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="logo-container">
        <img src={crm_logo} alt="cmr-logo" />
      </div>
      <div className="controls-container">
        <div className="icon" onClick={() => navigate("/ticket")}>
          &#43;
        </div>
        <div className="icon" onClick={() => navigate("/")}>
          &larr;
        </div>
      </div>
    </nav>
  );
};

export default Nav;
