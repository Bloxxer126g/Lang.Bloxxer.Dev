async function Search(Word) {
    Response = await fetch("/api/getTranslation.js");
    Response = await Response.json();

    Discovered = null;

    Response.forEach(element => {
        if (element.english_word == Word) {
            Discovered = element.gibberish_word;
        }
    });

    console.log(Discovered || "Does not exist :O")
}

Search("hello");