import hero800w from "./images/hero-800w.jpg";
import hero1200w from "./images/hero-1200w.jpg";
import hero2000w from "./images/hero-2000w.jpg";

import { currentPage, switchTab, updateTabColor } from "./index.js";
import { h1img900w, h2img900w, h1img450w, h2img450w } from "./srcset-images.js";

let content = document.getElementById("content");

const images = [
    {
        url: h1img900w,
        urlS: h1img450w,
        alt: "Churros on a wooden plate surrounded by three cups of sauces, sitting on a white wooden table with a red napkin."
    },
    {
        url: h2img900w,
        urlS: h2img450w,
        alt: "A close picture of an enticing pile of fresh churros, gently tossed with powdered sugar."
    }
]


export default function buildHome() {
    content.replaceChildren()

    buildHero()
    buildHomeContent()
    buildHomeImages()
}

function buildHero() {
    const headline = document.createElement("div");
    headline.classList = "hero-text";
    const heroString = "Made fresh./Served warm./Enjoyed everywhere.";
    (heroString.split("/")).forEach((line) => {
        const lineElement = document.createElement("p");
        lineElement.textContent = line;
        headline.appendChild(lineElement);
    })

    const heroImg = document.createElement("img");
    heroImg.id = "hero";
    heroImg.srcset = hero800w + " 800w," + hero1200w + " 1200w," + hero2000w + " 2000w";
    heroImg.sizes = "(width <= 800px) 800w, (width <= 1200px) 1200px, 2000px";
    heroImg.src= hero2000w;
    heroImg.alt = "A dark, luxurious photo of fresh churros being dipped into a caramel sauce with a green paper cup of coffee in the background."

    const heroContainer = document.createElement("div");
    heroContainer.id = "heroContainer";

    const heroCover = document.createElement("div");
    heroCover.id = "heroCover";

    const button = document.createElement("button");
    button.id = "go-to-menu";
    button.textContent = "Explore Our Menu";
    button.addEventListener("click", (e) => {
        switchTab("menu");
        updateTabColor()
        scroll(0,0)
    });

    heroContainer.append(heroCover)
    heroCover.append(headline)
    headline.append(button)
    heroContainer.append(heroImg)
    content.prepend(heroContainer)
}

function buildHomeContent() {
    const sections = document.createElement("article");
    sections.id = "home-section-wrapper";
    buildSection1();
    buildSection2();
    content.append(sections)

    function buildSection1() {
        const section1 = document.createElement("section");
        section1.id = "section-1";
        
        const intro = document.createElement("p");
        intro.textContent = "At Churro Stand, we make golden, crispy churros fresh throughout the day and serve them warm with your favorite toppings and dips. Whether you're here for a quick snack or a sweet celebration, you'll always find something worth craving.";
        section1.append(intro)

        sections.append(section1)
    }
    function buildSection2() {
        const section2 = document.createElement("section");
        section2.id = "section-2";

        const box1 = document.createElement("section");
        box1.classList.add("home-box1")
        const box1header = document.createElement("h3");
        box1header.textContent = "Fresh Twists";
        const box1text = document.createElement("p");
        box1text.textContent = "There's always something new to discover at Churro Stand. Our rotating selection of featured specials brings exciting flavors, unique toppings, and limited-time creations to the menu throughout the year. Check back often and find your next favorite."
        box1.append(box1header)
        box1.append(box1text)
        
        const box2 = document.createElement("section");
        box2.classList.add("home-box2");
        const box2header = document.createElement("h3");
        box2header.textContent = "Inspired by Tradition";
        const box2text = document.createElement("p");
        box2text.textContent = "Fresh dough, warm cinnamon sugar, and churros made right before your eyes. We've given that experience a modern touch while staying true to what matters most: quality ingredients, made-to-order treats, and warm hospitality."
        box2.append(box2header);
        box2.append(box2text);

        section2.append(box1);
        section2.append(box2)

        sections.append(section2)
    }
}

function buildHomeImages() {
    const boxes = document.querySelectorAll("#section-2 section");
    images.forEach((item) => {
        const image = document.createElement("img");
        let box;
        item === images[0] ? box = boxes[0] : box = boxes[1];
        image.alt = item.alt;
        image.srcset = item.urlS + " 450w," + item.url + " 900w";
        image.sizes = "(width <= 800px) 450px, 900px";
        image.src = item.url;

        box.append(image)
    })
}