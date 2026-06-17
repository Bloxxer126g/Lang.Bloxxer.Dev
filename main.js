async function Search(Word) {
    Response = await fetch("/api/getTranslation.js");
    Response = await Response.json();

    Discovered = null;

    Response.forEach(element => {
        if (element.english_word == Word) {
            Discovered = element.gibberish_word;
        }
    });

    SearchResult.innerHTML = Discovered || "That word hasn't been translated yet!"
}

const SearchInputBox = document.getElementById("SearchInputBox");
const SearchButton = document.getElementById("SearchButton");
const SearchResult = document.getElementById("SearchResult");
const TranslateInputBox = document.getElementById("TranslateInputBox");
const TranslateButton = document.getElementById("TranslateButton");

SearchButton.addEventListener("click", event => {
    Search(SearchInputBox);
})