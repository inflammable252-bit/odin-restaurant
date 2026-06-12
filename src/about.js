const aboutText = "Churro Stand was inspired by the simple charm of traditional churro stands—fresh dough, warm cinnamon sugar, and the unmistakable smell of churros being made right in front of you. We started with a simple idea: take a classic treat and serve it with the same care and craftsmanship that made people fall in love with it in the first place. Every churro is made fresh throughout the day, fried until perfectly golden, and finished with thoughtfully chosen toppings, dips, and seasonal specialties. While we've added our own modern touch, our approach remains rooted in tradition. We focus on quality ingredients, made-to-order treats, and creating a welcoming place where everyone can enjoy something sweet, whether they're stopping in for a quick snack or sharing a box with friends and family. / At the end of the day, we're a small shop that loves making great churros. No shortcuts, no unnecessary fuss—just warm, crispy churros and a little bit of happiness in every order."
const aboutTextArr = aboutText.split(" / ");

const contact = "0000 N Street / City, State 00000 / 000-000-0000 / email@emaildomain.com";
const contactArr = contact.split(" / ");
const hours = "Sun - Thurs: 12:00 - 9:00pm / Fri - Sat: 12:00 - 10:00pm"
const hoursArr = hours.split(" / ");

import { interior1000w as interior1000w, tall900w, two900w, cooking900w, sugar900w } from "./srcset-images.js";

import { currentPage, switchTab, updateTabColor } from "./index.js";

const section3ImgArr = [two900w, cooking900w, sugar900w];

let content = document.getElementById("content");

export default function buildAbout() {
    content.replaceChildren()

    const headline = document.createElement("h2")
    headline.textContent = "About Us";
    headline.classList.add("page-title")
    content.appendChild(headline)
    
    createText();
    createSections();
    createContact();
    combiner();    
}
function createText() {
        aboutTextArr.forEach((textBlock, index) => {
        const para = document.createElement("p");
        para.textContent = textBlock,
        para.id = `about-${index + 1}`

        content.appendChild(para)
    })
}
function createSections() {
    const sectionWrapper = document.createElement("article");
    sectionWrapper.id = "section-wrapper";
    for (let i=1; i<=3; i++) {
        const section = document.createElement("section");
        section.id = "about-section-" + i;
        sectionWrapper.appendChild(section)
    }
    content.appendChild(sectionWrapper)
}

function getImages() {
    const section1Image = document.createElement("img");
    section1Image.src = tall900w;
    const section2Image = document.createElement("img");
    section2Image.src = interior1000w;
    
    const section3Images = [];
    section3ImgArr.forEach((item, index) => {
        const img = document.createElement("img");
        img.src = item;
        img.id = "about-s3-" + (index + 1);
        section3Images.push(img)
    });
    return {section1Image, section2Image, section3Images}

    // image.alt = item.alt;

    // image.srcset = item.urlS + " 330w," + item.url + " 700w";
    // image.sizes = "(width <= 800px) 330w, 700w";
    // image.src= item.url;
}

function createContact() {
    const toMenuButton = document.createElement("button");
    toMenuButton.id = "about-menu-button";
    toMenuButton.textContent = "Check out our menu";
    toMenuButton.addEventListener("click", () => {
        switchTab("menu");
        updateTabColor()
        scroll(0,0)
    })

    const contactInfo = document.createElement("address")
    contactInfo.id = "contact-box";
    contactArr.forEach((text) => {
        const line = document.createElement("p");
        line.textContent = text;
        line.classList.add("contact-info");
        contactInfo.appendChild(line)
    });

    const contactWrapper = document.createElement("div");
    contactWrapper.classList.add("contact");
    contactWrapper.id = "contact-wrapper";
    contactWrapper.append(contactInfo)
    content.append(contactWrapper, toMenuButton)
}

function combiner() {
    const text = document.querySelectorAll("p")
    const section1 = document.getElementById("about-section-1")
    const section2 = document.getElementById("about-section-2")
    const section3 = document.getElementById("about-section-3")
    const contactBox = document.getElementById("contact-wrapper")
    const button = document.getElementById("about-menu-button")
    const imgs = new getImages();
    const headlineSection = document.createElement("section");
    headlineSection.id = "headline-section"

    section1.append(text[0], imgs.section1Image, button)
    section1.after(headlineSection)
    headlineSection.append(text[1])
    section2.append(contactBox, imgs.section2Image)
    imgs.section3Images.forEach((img) => {
        section3.append(img)
    })
}

