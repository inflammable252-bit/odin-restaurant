export default function buildHome() {

    let content = document.getElementById("content");
    content.replaceChildren()
    const headline = document.createElement("h2")
    headline.textContent = "Home";
    content.appendChild(headline)
    console.log("on home!")
}