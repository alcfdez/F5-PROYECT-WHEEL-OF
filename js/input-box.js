const form = document.querySelector("#add-country-form");
const input = document.querySelector("#add-country-input");
const country_list = document.querySelector("#countries");

function app() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const country = input.value;
    const new_country = document.createElement("div");
    new_country.classList.add("country");
    const country_content = document.createElement("div");
    country_content.classList.add("country-content");
    new_country.appendChild(country_content);

    const new_country_input = document.createElement("input");
    new_country_input.classList.add("new_country_input");
    new_country_input.type = "text";
    new_country_input.value = country;
    new_country_input.setAttribute("readonly", "readonly");

    country_content.appendChild(new_country_input);

    const countries_actions = document.createElement("div");
    countries_actions.classList.add("button-actions");

    const country_button_edit = document.createElement("button");

    country_button_edit.classList.add("edit-button");
    country_button_edit.innerText = "EDIT";

    const country_button_delete = document.createElement("button");
    country_button_delete.classList.add("clear-button");
    country_button_delete.innerText = "CLEAR";

    countries_actions.appendChild(country_button_edit);
    countries_actions.appendChild(country_button_delete);

    new_country.appendChild(countries_actions);

    country_list.appendChild(new_country);

    input.value = "";

    country_button_edit.addEventListener("click", () => {
      if (country_button_edit.innerText.toLowerCase() == "edit") {
        country_button_edit.innerText = "SAVE";
        new_country_input.removeAttribute("readonly");
        new_country_input.focus();
      } else {
        country_button_edit.innerText = "EDIT";
        new_country_input.setAttribute("readonly", "readonly");
      }
    });

    country_button_delete.addEventListener("click", () => {
      country_list.removeChild(new_country);
    });
  });
}
app();
