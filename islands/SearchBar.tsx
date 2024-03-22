import { useState } from "preact/hooks";
import { FunctionComponent, JSX } from "preact";

export const SearchBar: FunctionComponent = () => {
  const [word, setWord] = useState<string>("");

  const submitHandler = (
    e: JSX.TargetedEvent<HTMLFormElement, Event>,
  ) => {
    e.preventDefault();
    e.currentTarget.submit();
  };

  return (
    <div class="searchbar">
      <form
        action="/wordcsr"
        method="POST"
        onSubmit={submitHandler}
      >
        <div>
          <input
            onInput={(e) => setWord(e.currentTarget.value)}
            type="text"
            id="word"
            name="word"
          />
        </div>
        <div>
          <button
            type="submit"
            class="btn"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;