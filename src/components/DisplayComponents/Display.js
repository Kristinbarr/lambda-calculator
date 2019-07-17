import React from "react";

const Display = (props) => {
  // console.log('props',props)
  return (
    <div className="Display">
      {props.data}
    </div>
  );
};

export default Display;
