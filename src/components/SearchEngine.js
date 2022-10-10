
const SearchEngine = (labelText) => `
        <form>
            <label for="search-engine">
                ${labelText}
            </label>
            <input type="text" max=16 min="2" id="search-engine" autocomplete="off">
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    `
export default SearchEngine
