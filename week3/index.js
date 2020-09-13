// Import Article
// import Article from './Article.js';

//***common Javascritp style - Same as above 'Import' comment
const Article = require("./Article.js");

// Pass the values to the constructor method of Article
let a = new Article ({
    title: "This is the Title!",
    authors: "Rob & Dan",
    text: "This is an example article!"
  });

// Shows its HTML on the console
console.log(a.render());
