import hero800w from "./images/hero-800w.jpg";
import hero1200w from "./images/hero-1200w.jpg";
import hero2000w from "./images/hero-2000w.jpg";


let content = document.getElementById("content");
export default function buildHome() {
    content.replaceChildren()
    const headline = document.createElement("h2")
    headline.textContent = "Home";
    content.appendChild(headline)
    buildHomeImages()
}

function buildHomeImages() {
    const hero = document.createElement("img");
    hero.srcset = hero800w + " 800w," + hero1200w + " 1200w," + hero2000w + " 2000w";
    // hero.srcset = "./images/hero-800w.jpg 800w, ./images/hero-1200w.jpg 1200w, ./images/hero-2000.jpg 2000w";
    hero.sizes = "(width <= 800px) 800w, (width <= 1200px) 1200px, 2000px";
    hero.src= hero2000w;
    hero.alt = "A dark, luxurious photo of fresh churros being dipped into a caramel sauce with a green paper cup of coffee in the background."

    // hero.src = hero2000w;

    content.appendChild(hero)
}