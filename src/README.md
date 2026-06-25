# Restaurant page
---
A simple website for a fictional restaurant. The purpose of this project was to generate the contents of a website with multiple pages using JavaScript and Webpack.

Part of the JavaScript course of The Odin Project curriculum.

---
## Design
The website is themed around a fictional churro restaurant that can be described as rustic with a modern twist. A earthy, neutral color palette is used in pages that are designed similarly to a restaurant menu.  

## JS, Webpack, and Minimal HTML
The base index.html page, which contains the nav, main, and footer elements, replaces the main#content through the use of imported builder functions. Each page has a .js file that erases the current content before new content is generated and appended to main#content accordingly.  
### .js File Structure
Functions generate and bundle parts of a page separately by creating and appending elements to a section element and main#content.  
#### Info Objects and Arrays
Text content, such as menu items and certain informational paragraphs, is placed at the beginning of the file as an object or array.split(" / ") string to allow for easier modification. For example, "Line 1 / Line 2 / Line 3" can be used to create an iterable array of three items that can be used to create three elements. Menu items are stored in an object containing the name, description, alt text, and img srcset urls.

#### srcset-images.js
srcset-images.js is a master file for image imports from where all responsive versions of each image is exported, to be used by the srcset values generated in each .js file.  

---
## Other Notes


