import React from "react";
import axios from "axios";

export default function NASACard({ imgUrl }) {
  return (
    <div className="nasa-card">
      <img src={imgUrl} style={{ maxWidth: "700px" }} />
    </div>
  );
}
