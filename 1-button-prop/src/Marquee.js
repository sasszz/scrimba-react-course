import React from "react";
import "./marquee.css";

export default function Marquee(props) {
  return (
    <div className="marquee">
      <h1>{props.children}</h1>
    </div>
  );
}
