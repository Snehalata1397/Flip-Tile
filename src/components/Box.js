import React from "react";

export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#6495ED" : "#f5deb3",
  };

  return <div style={styles} className="box" onClick={props.toggle}></div>;
}
