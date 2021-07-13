const searchBox = document.querySelector(".search");
const searchBtn = document.querySelector(".search__icon");
const cancelBtn = document.querySelector(".search__cancel");
const searchInput = document.querySelector(".search__input");
const searchData = document.querySelector(".search__data");

searchBtn.addEventListener('click', () => {
    searchBox.classList.add("active");
    searchBtn.classList.add("active");
    searchInput.classList.add("active");
    cancelBtn.classList.add("active");
    searchInput.focus();
    if (searchInput.value != "") {
        var values = searchInput.value;
        searchData.classList.remove("active");
        searchData.innerHTML = "Resultado de la busqueda: " + "<span class='search__resutl'>" + values + "</span>";
    } else {
        searchData.textContent = "";
    }
});

cancelBtn.addEventListener('click', () => {
    searchBox.classList.remove("active");
    searchBtn.classList.remove("active");
    searchInput.classList.remove("active");
    cancelBtn.classList.remove("active");
    searchData.classList.toggle("active");
    searchInput.value = "";
});