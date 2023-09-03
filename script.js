document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector(".card-container");

    fetch("https://swapi.dev/api/people/")
        .then(response => response.json())
        .then(data => {
            data.results.forEach(person => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <h2>${person.name}</h2>
                    <p>Massa: ${person.mass}</p>
                    <p>Cor do cabelo: ${person.hair_color}</p>
                    <p>Cor da pele: ${person.skin_color}</p>
                    <p>Cor dos olhos: ${person.eye_color}</p>
                    <p>Ano de nascimento: ${person.birth_year}</p>
                    <p>Gênero: ${person.gender}</p>
                `;

                cardContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Erro ao buscar dados da API:", error);
        });
});
