import { Fragment } from "react";

const Search = () => {
  return (
    <Fragment>
      <form>
        <input
          type="text"
          placeholder="Search for a country..."
          aria-label="Search bar to search for a country"
        />
      </form>

      <form>
        <select
          id="filter-region"
          name="filter-region"
          aria-label="Filter countries by their region"
        >
          <option value="africa" aria-label="Select region Africa">
            Africa
          </option>
          <option value="america" aria-label="Select region America">
            America
          </option>
          <option value="asia" aria-label="Select region Asia">
            Asia
          </option>
          <option value="europe" aria-label="Select region Europe">
            Europe
          </option>
          <option value="oceania" aria-label="Select region Oceania">
            Oceania
          </option>
        </select>
      </form>
    </Fragment>
  );
};

export default Search;
