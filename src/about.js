const aboutText = "Churro Stand was inspired by the simple charm of traditional churro stands—fresh dough, warm cinnamon s3img3, and the unmistakable smell of churros being made right in front of you. We started with a simple idea: take a classic treat and serve it with the same care and craftsmanship that made people fall in love with it in the first place. Every churro is made fresh throughout the day, fried until perfectly golden, and finished with thoughtfully chosen toppings, dips, and seasonal specialties. While we've added our own modern touch, our approach remains rooted in tradition. We focus on quality ingredients, made-to-order treats, and creating a welcoming place where everyone can enjoy something sweet, whether they're stopping in for a quick snack or sharing a box with friends and family. / At the end of the day, we're a small shop that loves making great churros. No shortcuts, no unnecessary fuss—just warm, crispy churros and a little bit of happiness in every order."
const aboutTextArr = aboutText.split(" / ");

const contact = "0000 N Street / City, State 00000 / 000-000-0000 / email@emaildomain.com";
const contactArr = contact.split(" / ");
const hours = "Sun - Thurs: 12:00 - 9:00pm / Fri - Sat: 12:00 - 10:00pm"
const hoursArr = hours.split(" / ");

import { 
    s1img900w, s1img450w,
    s2img1000w, s2img500w,
    s3img1900w, s3img1450w,
    s3img2900w, s3img2450w,
    s3img3900w, s3img3450w } from "./srcset-images.js";

import { currentPage, switchTab, updateTabColor } from "./index.js";

const section3ImgArr = [s3img1900w, s3img2900w, s3img3900w];

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
    section1Image.classList.add("section1-img")
    const section2Image = document.createElement("img");
    section2Image.classList.add("section2-img")
    
    const section3Images = [];
    section3ImgArr.forEach((item, index) => {
        const img = document.createElement("img");
        img.src = item;
        img.id = "about-s3-" + (index + 1);
        section3Images.push(img)
        img.classList.add("section3-img")
    });
    return {section1Image, section2Image, section3Images}
}

function createContact() {
    const toMenuButton = document.createElement("button");
    toMenuButton.id = "about-menu-button";
    toMenuButton.textContent = "Find Your Favorite";
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
    applySrcset()
}

// note: menu.js method for srcset using a master object was cleaner and more flexible.
function applySrcset() {
    const images = document.querySelectorAll("img")
    images.forEach((node) => {
        switch (node.className) {
            case ("section1-img"):
                node.srcset = s1img450w + " 450w, " + s1img900w + " 900w";
                node.alt = "A plate of churros with two cups of dipping sauces."
                node.sizes = "(width <= 800px) 450px, 900px"
                node.src = s1img900w;
                break;
            case ("section2-img"):
                node.srcset = s2img500w + " 500w, " + s2img1000w + " 1000w";
                node.alt = "A warm restaurant interior."
                node.sizes = "(width <= 800px) 500px, 1000px"
                break;
        }
    })
}


/*
image.alt = item.alt;
image.srcset = item.urlS + " 330w," + item.url + " 700w";
image.sizes = "(width <= 800px) 330w, 700w";
image.src= item.url;
*/