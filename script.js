const queryInput = document.getElementById("query");
const searchButton = document.getElementById("searchButton");
const results = document.getElementById("results");

searchButton.addEventListener("click", searchBooks);

queryInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        searchBooks();
    }
});

function searchBooks() {

    const text = queryInput.value.toLowerCase().trim();
    console.log(text);
console.log(books);

    if (text === "") {

        results.innerHTML = `
            <div class="book">
                <h2>Nic jste nezadali</h2>
                <p>Napište prosím, co právě řešíte.</p>
            </div>
        `;

        return;
    }

    const found = [];
    alert("Počet knih: " + books.length);

    books.forEach(book => {

        let score = 0;

        book.keywords.forEach(word => {

            if (text.includes(word.toLowerCase())) {
                score++;
            }

        });

        if (score > 0) {

            found.push({
                ...book,
                score: score
            });

        }

    });

    found.sort((a, b) => b.score - a.score);

    if (found.length === 0) {

        results.innerHTML = `
            <div class="book">
                <h2>Bohužel jsme nenašli vhodnou knihu</h2>

                <p>
                Zkuste svůj problém popsat jinými slovy.
                </p>
            </div>
        `;

        return;
    }

    let html = "";

    found.slice(0,5).forEach(book => {

        html += `

        <div class="book">

            <h2>${book.title}</h2>

            <div class="author">

                <strong>Autor:</strong> ${book.author}

            </div>

            <p>${book.description}</p>

            <div class="why">

                <strong>Proč doporučujeme:</strong><br>

                ${book.why}

            </div>

            <div class="score">

                Shoda: ${book.score}

            </div>

        </div>

        `;

    });

    results.innerHTML = html;

}
