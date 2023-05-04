import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <Link to="/state">
        <button>State</button>
      </Link>
      <Link to="/ref">
        <button>Ref</button>
      </Link>
      <Link to="/callback">
        <button>Callback</button>
      </Link>
      <Link to="/memo">
        <button>Memo</button>
      </Link>
      <Link to="/reactmemo">
        <button>React.Memo</button>
      </Link>
      <Link to="/effect">
        <button>Effect</button>
      </Link>
    </>
  );
}

export default Main;
