// Feed lists
import { newsFeed03, newsFeed04, newsFeed05, newsFeed06, newsFeed07, newsFeed08, newsFeed09, newsFeed10, newsFeed11, newsFeed12, newsFeed13, newsFeed14 } from "./2022-02-spring.js";

import { learning } from "./learning.js";

// Menu Functions
import { isElement, writeById, createLink, getFilename, urlExists, getBase, createLMNT, appendNestLMNT, appendLMNT } from './utilities.js';

export const glossaryList = [{"cardlist" : newsFeed03}, {"cardlist":newsFeed04}, { "cardlist":newsFeed05}, {"cardlist":newsFeed06}, { "cardlist" : learning}];

function createGlossaryList(arrayList, id) {
    if (isElement(id)) {
        const container = document.getElementById(id);
        let div = `<div id="glossary">`;
        let termList = [];
        arrayList.forEach((el) => {
            el.cardlist.forEach((card) => {
                if (card.term !== "xxxx") {
                    //console.log("card.term: " + card.term + " card.termdef: " + card.termdef);
                    termList.push(`${card.term}: ${card.termdef}`);
                }
            });
        });
        termList.sort();
        termList.forEach((term) => {
            div += `<p class="glossary">${term}</p><br>`;
        });
        div += "</div>";
        container.innerHTML = div;
        return;
    }
}
createGlossaryList(glossaryList, "container");
// console.log("glossary: ", glossary);

// function createGlossary(arrayList, id) {
//     console.log("arrayList: ", arrayList);
//     if (isElement(id)) {
//       const container = document.getElementById(id);
//       let div = `<div id="glossary">`;
//       arrayList.forEach((card) => {
//               cardlist.forEach((card) => {
//                   if (card.term !== "xxxx") {
//                       console.log("card.term: " + card.term);
//                       div += `<p class="desc">`;
//                       div += `<h6 class="overlay">${card.term}: ${card.termdef}</h6>`;
//                       div += `</p>`;
//                   }
//               })
//           });
//           div += "</div>";
//           container.innerHTML = div;
//           return;
//     }
// }
// createGlossary(glossaryList, "glossary");


function createNav(array, id) {
    // create link list container element
    if (isElement(id)) {
      const container = document.getElementById(id);
      // sort array by name
      array.sort(function(a, b) {
        var nameA = a.week + a.sort + a.title; // make non-case-sensitive
        var nameB = b.week + b.sort + a.title; // make non-case-sensitive
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      // create link list element
      let menu = '<div id="newsfeed-container">';

      // get list of files to create links for each menu entry
      array.forEach((element) => {
          if (element.author == "xxxx") {
            var author = "";
          } else {
            var author = `<br>Author(s): <a href='${element.authlink}'>${element.author}</a>`;
            if (element.author2) {
              author += `, <a href='${element.authlink2}'>${element.author2}</a>`;
            }
          }
          if ( (typeof(element.imgcred) === "undefined") || (element.imgcred === "xxxx") ) {
            var imgcred = "";
          } else {
            var imgcred = `Flipside image credit: <a href='${element.imgcredlink}'>${element.imgcred}</a>`;
          }
            // TODO: save as variable for adding to index.html page as parameter? (${element.tech})
            menu += `<div class="flipcard">`;
            menu += `<div class="flipcard-inner">`;
            menu += `<div class="flipcard-front">`;
            menu += `<div><h3 class="overlay">${element.title}</h3>`;
            menu += `<img src="./img/${element.img}" alt="Image for ${element.title}"></div>`;
            menu += `</div>`;
            menu += `<div class="flipcard-back">`;
            menu += `<p class='desc date'>Article Date: ${element.date}${author}</p>`;
            if (imgcred !== "") {
              //console.log(imgcred);
              //console.log(element.title);
              menu += `<p class='desc imgcred'>${imgcred}</p>`;
            }
            menu += `<p class="desc descrip">${element.desc}<a href="${element.url}" target="_blank">Go to webpage</a></p>`;
            menu += `</div> </div> </div> `;
      })
      menu += "</div>";
      container.innerHTML = menu;
      return;
    }
}

createNav(newsFeed03,'newsfeed03');
createNav(newsFeed04,'newsfeed04');
createNav(newsFeed05,'newsfeed05');
createNav(newsFeed06,'newsfeed06');
createNav(newsFeed07,'newsfeed07');
createNav(newsFeed08,'newsfeed08');
createNav(newsFeed09,'newsfeed09');
//createNav(newsFeed10,'newsfeed10');
//createNav(newsFeed11,'newsfeed11');
//createNav(newsFeed12,'newsfeed12');
//createNav(newsFeed13,'newsfeed13');
//createNav(newsFeed14,'newsfeed14');
createNav(learning, 'learning');
