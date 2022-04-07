import React from "react";

const AvatarDisplay = ({ avatar }) => {
  return (
    <div className="avatar-container">
      <div className="img-container">
        <img src={avatar} alt="avatar" width="24" height="24" />
      </div>
    </div>
  );
};

export default AvatarDisplay;
