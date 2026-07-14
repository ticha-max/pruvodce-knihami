// odstranění diakritiky
function normalize(text) {

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

}
// česká synonyma

const synonyms = {

    uzkost: [
        "uzkost",
        "uzkosti",
        "panika",
        "panicky",
        "panicka",
        "strach",
        "neklid",
        "obavy"
    ],

    trauma: [
        "trauma",
        "traumaticky",
        "sok",
        "zraneni",
        "bolest"
    ],

    sebevedomi: [
        "sebevedomi",
        "nejsem dost dobry",
        "nejistota",
        "pochybuji o sobe"
    ],

    vztahy: [
        "partner",
        "partnerka",
        "rozchod",
        "rozvod",
        "nevera",
        "manzel",
        "manzelka"
    ],

    rodicovstvi: [
        "dite",
        "deti",
        "rodice",
        "vychova",
        "mama",
        "otec",
        "syn",
        "dcera"
    ]

};
function levenshtein(a, b) {

    if (a === b) return 0;

    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {

        for (let j = 1; j <= a.length; j++) {

            if (b.charAt(i - 1) === a.charAt(j - 1)) {

                matrix[i][j] = matrix[i - 1][j - 1];

            } else {

                matrix[i][j] = Math.min(

                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1

                );

            }

        }

    }

    return matrix[b.length][a.length];

}
function similar(word, keyword) {

    word = normalize(word);
    keyword = normalize(keyword);

    if (word === keyword)
        return 5;

    if (word.includes(keyword))
        return 4;

    if (keyword.includes(word))
        return 4;

    if (levenshtein(word, keyword) <= 1)
        return 3;

    if (levenshtein(word, keyword) == 2)
        return 2;

    return 0;

}
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
