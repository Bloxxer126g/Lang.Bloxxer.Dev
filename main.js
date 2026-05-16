const Defined = {
    "hello": "hiyahh",
    "bye": "biham",
};

const SearchInputBox = document.getElementById("SearchInputBox");
const SearchButton = document.getElementById("SearchButton");
const SearchResult = document.getElementById("SearchResult");
const TranslateInputBox = document.getElementById("TranslateInputBox");
const TranslateButton = document.getElementById("TranslateButton");

let Search = ""

SearchButton.addEventListener("click", ClickEvent => {
    let Search = SearchInputBox.value;
    Search = Search.toLowerCase();
    let TranslatedItem = Defined[Search];
    if (TranslatedItem != null) {
        TranslateInputBox.setAttribute("Hidden", "true");
        TranslateButton.setAttribute("Hidden", "true");
        SearchResult.innerText = TranslatedItem;
    } else {
        SearchResult.innerText = Search+" has not been translated!";
        TranslateInputBox.removeAttribute("Hidden");
        TranslateButton.removeAttribute("Hidden");
    }; 
});

TranslateButton.addEventListener("click", ClickEvent => {
    
});