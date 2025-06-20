import { useState } from "react";
export default function Button({ lable, style, text }) {
  const [disableBtn, setIsDisabled] = useState(false);

  const [showText, setShowText] = useState(false);
  const color = style === "primary" ? "white" : "black";
  function handleClick() {
    setIsDisabled(true);
    setShowText(true);
  }
  return (
    <>
      <button
        className="levelOneBtn"
        onClick={handleClick}
        style={{ color: color }}
        disabled={disableBtn}
      >
        {lable}
      </button>
      {showText && <p>{text}</p>}
    </>
  );
}
