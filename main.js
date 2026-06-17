async function Start() {
    Response = await fetch("/api/getTranslation.js");
    console.log(Response)
    Response = await Response.json()
    console.log(Response)
}

Start()