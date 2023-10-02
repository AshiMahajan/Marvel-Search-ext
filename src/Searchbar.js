import React from "react";

function Searchbar() {
  return (
    <div className="absolute flex text-center top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
        <form
          action="https://www.google.com/search"
          method="GET"
          target="_blank"
          noValidate
          autoComplete="off"
          spellCheck="false"
        >
          <input
            id="search-input"
            className="w-100% text-center p-2 bg-transparent text-red-600 placeholder:italic placeholder:text-1xl placeholder:text-center placeholder:m-1"
            type="text"
            name="q"
            placeholder="J.A.R.V.I.S"
            required
          />
        </form>
    </div>
  );
}

export default Searchbar;