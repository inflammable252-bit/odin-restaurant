import hero800w from "./images/hero-800w.jpg";
import hero1200w from "./images/hero-1200w.jpg";
import hero2000w from "./images/hero-2000w.jpg";

let content = document.getElementById("content");

export default function buildHome() {
    content.replaceChildren()
    buildHomeContent()
    buildHomeImages()
}

function buildHomeContent() {
    const headline = document.createElement("h2")
    const h2Text = "Made fresh./Served warm./Enjoyed everywhere.";
    (h2Text.split("/")).forEach((line) => {
        const lineElement = document.createElement("p");
        lineElement.textContent = line;
        headline.appendChild(lineElement);
    })
    // headline.appendChild();
    headline.classList = "inline";
    content.appendChild(headline)

    const intro = document.createElement("p");
    intro.textContent = "At Churro Stand, we make golden, crispy churros fresh throughout the day and serve them warm with your favorite toppings and dips. Whether you're here for a quick snack or a sweet celebration, you'll always find something worth craving.";
    content.appendChild(intro)

    // const endText = document.createElement("h4");
    // endText.textContent = "Made fresh. Served warm. Enjoyed everywhere."
    // content.appendChild(endText)
}

function buildHomeImages() {
    const hero = document.createElement("img");
    hero.id = "hero";
    hero.srcset = hero800w + " 800w," + hero1200w + " 1200w," + hero2000w + " 2000w";
    hero.sizes = "(width <= 800px) 800w, (width <= 1200px) 1200px, 2000px";
    hero.src= hero2000w;
    hero.alt = "A dark, luxurious photo of fresh churros being dipped into a caramel sauce with a green paper cup of coffee in the background."

    const heroContainer = document.createElement("div");
    heroContainer.id = "heroContainer";

    const heroCover = document.createElement("div");
    heroCover.id = "heroCover";

    heroContainer.appendChild(heroCover)
    heroContainer.appendChild(hero)
    content.prepend(heroContainer)
}