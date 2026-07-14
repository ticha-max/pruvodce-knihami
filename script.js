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

// ==========================
// Pomocné funkce
// ==========================

// odstranění diakritiky
function normalize(text) {

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

}

// Levenshteinova vzdálenost
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

// podobnost slov
function similar(word, keyword) {

    word = normalize(word);
    keyword = normalize(keyword);

    if (word === keyword)
        return 12;

    if (word.includes(keyword))
        return 8;

    if (keyword.includes(word))
        return 8;

    const d = levenshtein(word, keyword);

    if (d === 1)
        return 6;

    if (d === 2)
        return 3;

    return 0;

}

// Synonyma

const synonyms = {

    uzkost: [
        "uzkost",
        "uzkosti",
        "panika",
        "panicke",
        "panicky",
        "neklid",
        "strach",
        "obavy",
        "napeti",
        "sevreny hrudnik"
    ],

    trauma: [
        "trauma",
        "traumaticky",
        "sok",
        "zraneni",
        "bolest",
        "vnitrni dite"
    ],

    vztahy: [
        "partner",
        "partnerka",
        "manzel",
        "manzelka",
        "rozchod",
        "rozvod",
        "nevera",
        "opustil",
        "opustila",
        "laska"
    ],

    sebevedomi: [
        "sebevedomi",
        "nejsem dost dobry",
        "nejistota",
        "pochybuji o sobe",
        "potrebuji uznani"
    ],

    rodicovstvi: [
        "dite",
        "deti",
        "rodice",
        "mama",
        "otec",
        "vychova",
        "puberta"
    ],

    psychosomatika: [
        "psychosomatika",
        "bolest zad",
        "migrena",
        "ekzem",
        "nemoc",
        "telo"
    ]

};
// ==========================
// Vyhledávání knih
// ==========================

function searchBooks() {

    const text = normalize(queryInput.value.trim());

    if (!text) {

        results.innerHTML = `
        <div class="book">
            <h2>Nic jste nezadali</h2>
            <p>Napište prosím, co právě řešíte.</p>
        </div>
        `;

        return;

    }

    const words = text
        .split(/[\s,.;:!?()\n]+/)
        .filter(w => w.length > 1);

    const found = [];

    books.forEach(book => {

        let score = 0;

        book.keywords.forEach(keyword => {

            const key = normalize(keyword);

            // přímá shoda
            words.forEach(word => {

                score += similar(word, key);

            });

            // synonyma
            Object.values(synonyms).forEach(group => {

                if (group.includes(key)) {

                    words.forEach(word => {

                        group.forEach(syn => {

                            score += similar(word, syn);

                        });

                    });

                }

            });

        });

        if (score > 0) {

            found.push({
                ...book,
                score
            });

        }

    });

    found.sort((a, b) => b.score - a.score);

    if (found.length === 0) {

        results.innerHTML = `
        <div class="book">

            <h2>Bohužel jsme nenašli vhodnou knihu.</h2>

            <p>
                Zkuste problém popsat jinými slovy.
            </p>

            <p><strong>Například:</strong></p>

            <ul>
                <li>úzkost</li>
                <li>stres</li>
                <li>trauma</li>
                <li>vztahy</li>
                <li>rozvod</li>
                <li>psychosomatika</li>
                <li>sebevědomí</li>
                <li>výchova dětí</li>
            </ul>

        </div>
        `;

        return;

    }

    let html = "";

    found.slice(0, 5).forEach(book => {

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

                Relevance: ${book.score}

            </div>

        </div>

        `;

    });

    results.innerHTML = html;

}
