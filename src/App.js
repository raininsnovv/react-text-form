import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);
  const [blur, setBlur] = useState(false);

  const handleText = (e) => {
    setText(e.target.value);
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    setSent(true);
    setBlur(false);
  };

  const handleBlur = () => {
    setBlur(true);
    setSent(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleText}
          onBlur={handleBlur}
          className={!text && blur ? "is-error" : sent ? "is-sent" : "input"}
        />
        <button type="submit" disabled={!text && true}>
          Send
        </button>
      </form>
      {sent && <div className="noError">Message sent</div>}
      {!text && blur && (
        <div className="errorMsg">Message could not be send.</div>
      )}
    </div>
  );
};

export default App;
