import React from "react";
import rectangle1 from "../../../assets/Rectangle Copy.png";
import rectangle2 from "../../../assets/Rectangle Copy 2.png";
import rectangle3 from "../../../assets/Rectangle Copy 3.png";
import rectangle4 from "../../../assets/Rectangle Copy 4.png";

const ThumbnailImages = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        marginTop: "30px",
      }}
    >
      <img
        src={rectangle1}
        alt="Thumbnail 1"
        style={{ width: "88px", height: "88px", borderRadius: "8px" }}
      />
      <img
        src={rectangle2}
        alt="Thumbnail 2"
        style={{ width: "88px", height: "88px", borderRadius: "8px" }}
      />
      <img
        src={rectangle3}
        alt="Thumbnail 3"
        style={{ width: "88px", height: "88px", borderRadius: "8px" }}
      />
      <img
        src={rectangle4}
        alt="Thumbnail 4"
        style={{ width: "88px", height: "88px", borderRadius: "8px" }}
      />
    </div>
  );
};

export default ThumbnailImages;