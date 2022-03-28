let text = document.querySelector("#text");
let randomButton = document.querySelector("#random");
let facts = [
    "Z",
    "why do i always wish i were somewhere else why ca'nt i just be happy where i am",
    "I can see you.",
    "I'm inside your house.",
    "god stays in heaven because he is scared of what he created",
    "Nobody asked",
    "every 60 seconds in africa a minute passes",
    "every second you're not running i'm only getting closer",
    "i am behind you",
    "that was a funny joke",
    "this space left blank intentionally"
]

text.addEventListener("input", () => {
    if(text.value == "") {
        text.style = "border: 2px black solid";
        randomButton.removeAttribute("style")
    } else {
        text.style = "";
        randomButton.setAttribute("style", "display: none;")
    }
})

randomButton.addEventListener("click", () => {
    text.style = "";
    randomButton.setAttribute("style", "display: none;");

    text.value = facts[Math.round(Math.random() * facts.length - 1)]
    text.focus()
})