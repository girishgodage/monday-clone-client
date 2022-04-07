import React from "react";

const ProgressDisplay = ({ progress }) => {
  console.log(progress);
  return (
    <div className="process-container">
      <div className="process-bar">
        <div className="process-indicator" style={{ width: progress + "%" }}>
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressDisplay;
