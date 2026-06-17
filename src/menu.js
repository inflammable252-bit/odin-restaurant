import { original330w, bites330w, chocolate330w, sundae330w, original700w, bites700w, chocolate700w, sundae700w } from "./srcset-images.js"

let content = document.getElementById("content");

const menuItems = [
        {
            name: "Classic Churro",
            info: "A timeless favorite. Freshly fried until golden and crisp, then rolled in our signature cinnamon-sugar blend for the perfect balance of crunch and sweetness.",
            urlS: original330w,
            url: original700w,
            alt: "A picture of three fresh, sugar-coated churros on a wooden board."
        },
        {
            name: "Churro Bites",
            info: "Bite-sized pieces of warm, fluffy churro tossed in cinnamon sugar. Perfect for sharing, snacking, or dipping.",
            urlS: bites330w,
            url: bites700w,
            alt: "Paper-wrapped churro bites in a cup with caramel sauce on the side."
        },
        {
            name: "Mexican Hot Chocolate Churro",
            info: "Our signature churro paired with a rich chocolate sauce infused with cinnamon and a hint of spice.",
            urlS: chocolate330w,
            url: chocolate700w,
            alt: "A churro being dipped into a decedent, rich cup of a chocolate sauce."
        },
        {
            name: "Churro Sundae",
            info: "Vanilla ice cream paired with warm churro pieces and your choice of sauce, creating the perfect hot-and-cold dessert experience.",
            urlS: sundae330w,
            url: sundae700w,
            alt: "A scoop of vanilla ice cream with fruit nestled in a bed of warm churros."
        }
    ];

const addtlItems = ["Caramel Apple Pie", "Lemon Cream", "Nutella", "Chai Spice", "Bananas Foster", "Honey Butter"]

function buildMenu() {
    content.replaceChildren()

    buildMain()
    buildSpecials()
}

function buildMain() {
    const mainSection = document.createElement("article");
    mainSection.id = "menu-section";
    const headline = document.createElement("h2");
    headline.textContent = "Menu";
    headline.classList.add("page-title");

    const menu = document.createElement("div");
    menu.id = "menu-wrapper";

    function makeBoxes() {
        menuItems.forEach((item) => {
        const box = document.createElement("section");
        box.classList.add("box")
        
        const name = document.createElement("p");
        name.classList.add("item-title");
        name.textContent = item.name;

        const info = document.createElement("p");
        info.classList.add("item-info")
        info.textContent = item.info;

        const image = document.createElement("img");

        image.alt = item.alt;

        image.srcset = item.urlS + " 330w," + item.url + " 700w";
        image.sizes = "(width <= 800px) 330px, 700px";
        image.src= item.url;

        box.appendChild(name)
        box.appendChild(info)
        box.appendChild(image)

        menu.appendChild(box)

        mainSection.appendChild(menu)
        })
    }

    content.appendChild(headline);
    makeBoxes()
    content.appendChild(mainSection)
}

function buildSpecials() {
    const specialsSection = document.createElement("article");
    specialsSection.id = "specials-section";

    const headline = document.createElement("h2");
    headline.textContent = "Featured Specials";
    headline.id = "specials-header"
    
    const para = document.createElement("p");
    para.textContent = "There's always something new to discover at Churro Stand. Our featured menu showcases a rotating selection of limited-time churros, creative flavor combinations, and unique twists on our classic favorites.";

    const headline2 = document.createElement("h3");
    headline2.textContent = "Now Serving: "

    const itemBox = document.createElement("ul");
    itemBox.classList.add("specials");
    const items = addtlItems.forEach((item) => {
        const entry = document.createElement("li");
        entry.textContent = item;
        itemBox.appendChild(entry)
    })

    content.appendChild(headline);
    specialsSection.appendChild(para);
    specialsSection.appendChild(headline2);
    specialsSection.appendChild(itemBox);

    content.appendChild(specialsSection)
}

export default buildMenu;

