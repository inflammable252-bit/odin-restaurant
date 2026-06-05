export default function buildAbout() {

    let content = document.getElementById("content");
    content.replaceChildren()
    const headline = document.createElement("h2")
    headline.textContent = "About";
    content.appendChild(headline)
}