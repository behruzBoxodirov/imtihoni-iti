const addBtn = document.querySelector(".add-button");
const nameInput = document.getElementById("film-name");
const genreSelect = document.getElementById("genre");
const ratingInput = document.getElementById("rating");
const mainContainer = document.querySelector(".main-container");
const timeInput = document.querySelector(".time-input");

console.log(timeInput);


const listSection = document.createElement("div");
listSection.className = "list-section";
listSection.innerHTML = "<h3>Filmlar ro‘yxati</h3>";
mainContainer.appendChild(listSection);

addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const genre = genreSelect.value;
  const rating = ratingInput.value;
  const time = timeInput.value;

  if (!name || !genre || !rating || !time) {
    alert("Iltimos, barcha maydonlarni to‘ldiring!");
    return;
  }

  let image = "";
  if (genre === "Фантастика") image = "./9fedd9e4affa6cf1f04f36bb5f397155.jpg";
  if (genre === "Драма") image = "./download.jpeg";
  if (genre === "Боевик") image = "./heath-ledger-joker.avif";
  if (genre === "Триллер") image = "./images.jpeg";

  const filmItem = document.createElement("div");
  filmItem.className = "film-item";



  filmItem.innerHTML = `
    <img src="${image}" class="film-poster" />
    <div class="film-info">
      <h3>${name}</h3>
      <div class="film-details">
        Janr: ${genre} <br />
        Reyting: ⭐ ${rating}
      </div>
      <div>Vaqt: ${time}</div>
      <button class="delete-btn">O‘chirish</button>
    </div>
  `;

  
  filmItem.querySelector(".delete-btn").addEventListener("click", () => {
    filmItem.remove();
  });

  listSection.appendChild(filmItem);

  nameInput.value = "";
  genreSelect.value = "";
  ratingInput.value = "";
});
