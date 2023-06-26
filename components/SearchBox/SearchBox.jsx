import { useRef } from "react";

function SearchBox({ handleSearch }) {
  const inputRef = useRef();
  const onSearch = async (text) => {
    handleSearch(text);
  };

  return (
    <div className="w-64">
      <h1 className="text-lg px-3 py-2 font-semibold">Weather</h1>
      <div className="relative">
        <button
          onClick={() => {
            onSearch(inputRef.current.value);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 absolute top-1.5 left-2 text-secondary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>

        <input
          type="text"
          placeholder="Type here"
          className="input input-primary input-sm caret-secondary w-full max-w-lg px-8 m-0"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              onSearch(inputRef.current.value);
            }
          }}
        />
      </div>
    </div>
  );
}

export default SearchBox;
