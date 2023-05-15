import "./styles.css";
import { getSuggestion, debounce } from "./utils";

// getSuggestion("ap").then((res) => {
//   console.log(res);
// });

const inputBox = document.getElementById("search-input");
const suggestionBox = document.getElementById("suggestions-wrapper");

const renderDropItems = (list) => {
  const suggFragment = document.createDocumentFragment();
  list.forEach((item) => {
    const el = document.createElement("div");
    el.innerHTML = item;
    el.classList.add("dropdown-item");
    suggFragment.appendChild(el);
  });
  suggestionBox.innerHTML = "";
  suggestionBox.appendChild(suggFragment);
};
const resetState = () => {
  console.log("reset called");
  suggestionBox.classList.remove("suggestions-visible");
};

const handleSearch = async (keyword) => {
  console.log(keyword);
  const result = await getSuggestion(keyword);
  if (result.length) {
    suggestionBox.classList.add("suggestions-visible");
    renderDropItems(result);
  }
};

const handleInputChange = (event) => {
  const value = event.target.value;

  if (value) {
    handleSearch(value);
  } else {
    resetState();
  }
};

(() => {
  inputBox.addEventListener("input", debounce(handleInputChange, 500));
})();
