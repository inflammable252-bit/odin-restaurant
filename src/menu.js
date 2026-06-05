export default function buildMenu() {

    let content = document.getElementById("content");
    content.replaceChildren()
    const headline = document.createElement("h2")
    headline.textContent = "Menu";
    content.appendChild(headline)
}