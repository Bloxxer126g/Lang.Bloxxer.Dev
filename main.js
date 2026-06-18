async function Search(Word) {
    Response = await fetch("/api/getTranslation.js");
    Response = await Response.json();

    console.log(Response);

    Discovered = null;

    Response.forEach(element => {
        if (element.english_word == Word) {
            console.log("MATCH :D")
            Discovered = element.gibberish_word;
        }
    });

    console.log(Discovered);

    if (Discovered != null) {
        SearchResult.innerHTML = Discovered;
    } else {
        SearchResult.innerHTML = "That word hasn't been defined yet!";
    }
}

const SearchInputBox = document.getElementById("SearchInputBox");
const SearchButton = document.getElementById("SearchButton");
const SearchResult = document.getElementById("SearchResult");
const TranslateInputBox = document.getElementById("TranslateInputBox");
const TranslateButton = document.getElementById("TranslateButton");

SearchButton.addEventListener("click", event => {
    Search(SearchInputBox.value);
})

async function test() {
    console.log(await fetch("/api/addTranslation.js", {
        method: "POST",
        body: {
            "hello": "world",
        },
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }))
}

test();