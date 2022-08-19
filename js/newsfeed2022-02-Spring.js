// Feed lists
import { spring202203, spring202204, spring202205, spring202206, spring202207, spring202208, spring202209, spring202210, spring202211, spring202212, spring202213 } from "./2022-02-spring.js";

import { summer2022 } from "./2022-07-summerbreak.js";

import { learning } from "./learning.js";

// Menu Functions
import { isElement } from './utilities.js';

export const glossaryList = [
  {"cardlist" : spring202203},
  {"cardlist" : spring202204},
  {"cardlist" : spring202205},
  {"cardlist" : spring202206},
  {"cardlist" : spring202207},
  {"cardlist" : spring202208},
  {"cardlist" : spring202209},
  {"cardlist" : spring202210},
  {"cardlist" : spring202211},
  {"cardlist" : spring202212},
  {"cardlist" : spring202213},
  {"cardlist" : summer2022},
  // {"cardlist" : fall202203},
  // {"cardlist" : fall202204},
  // {"cardlist" : fall202205},
  // {"cardlist" : fall202206},
  // {"cardlist" : fall202207},
  // {"cardlist" : fall202208},
  // {"cardlist" : fall202209},
  // {"cardlist" : fall202210},
  // {"cardlist" : fall202211},
  // {"cardlist" : fall202212},
  // {"cardlist" : fall202213},
  {"cardlist" : learning}
];

function createGlossaryList(arrayList, id) {
    if (isElement(id)) {
        //console.log(glossaryList);
        const container = document.getElementById(id);
        let termList = [];
        arrayList.sort();
        arrayList.forEach((el) => {
            el.cardlist.forEach((card) => {
                if (card.term !== "xxxx") {
                    //console.log("card.term: " + card.term + " card.termdef: " + card.termdef);
                    termList.push(`${card.term}: ${card.termdef}`);
                }
            });
            let div = `<div id="glossary">`;
                termList.forEach((term) => {
                    div += `<div class="flipcard">`;
                    div += `<div class="flipcard-inner">`;
                    div += `<div class="flipcard-front">`;
                    div += `<h2 class="overlay">${term.term}</h2>`;
                    div += `<p class="term">${term.term}</p><br>`;
                    div += `<div class="flipcard-back">`;
                    div += `<h4 class='termdef'> ${term.termdef}</h4>`;
                    div += "</div></div></div></div>";
                });
            div += "</div>";
            container.innerHTML = div;
        });
        return;
    }
}
createGlossaryList(glossaryList, "glossary-container");

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
      let menu = '<div id="spring2022--container" class="container">';

      // get list of files to create links for each menu entry
      array.forEach((element) => {
          if (element.author == "xxxx") {
            var author = "";
          } else {
            var author = `<br>Author(s): <a href='${element.authlink}'>${element.author}</a>`;
            if (element.author2) {
              author += `, <a href='${element.authlink2}'>${element.author2}</a>`;
            }
            if (element.author3) {
              author += `, <a href='${element.authlink3}'>${element.author3}</a>`;
            }
            if (element.author4) {
              author += `, <a href='${element.authlink4}'>${element.author4}</a>`;
            }
          }
          if ( (typeof(element.imgcred) === "undefined") || (element.imgcred === "xxxx") ) {
            var imgcred = "";
          } else {
            var imgcred = `Image credit: <a href='${element.imgcredlink}'>${element.imgcred}</a>`;
          }
            // TODO: save as variable for adding to index.html page as parameter? (${element.tech})
            menu += `<div class="flipcard">`;
            menu += `<div class="flipcard-inner">`;
            menu += `<div class="flipcard-front">`;
            menu += `<div><h4 class="overlay">${element.title}</h4>`;
            if (element.video) {
              // menu += `<video width="200" height="200" controls><source src="${element.video}" type="video/mp4">Your browser does not support the video tag. </video>`;
            } else {
              menu += `<img src="./img/${element.img}" alt="Image for ${element.title}"></div>`;
            }
            menu += `</div>`;
            menu += `<div class="flipcard-back">`;
            menu += `<p class='desc date'>Article Date: ${element.date}${author}</p>`;
            if (imgcred !== "") {
              //console.log(imgcred);
              //console.log(element.title);
              menu += `<p class='desc imgcred'>${imgcred}</p>`;
            }
            menu += `<p class="desc descrip">${element.desc}<a href="${element.url}" target="_blank"> Go to webpage </a></p>`;
            menu += `</div> </div> </div> `;
      menu += "</div>";
      container.innerHTML = menu;
    })
      return;
    }
}

createNav( spring202203, 'spring202203' );
createNav( spring202204, 'spring202204' );
createNav( spring202205, 'spring202205' );
createNav( spring202206, 'spring202206' );
createNav( spring202207, 'spring202207' );
createNav( spring202208, 'spring202208' );
createNav( spring202209, 'spring202209' );
createNav( spring202210, 'spring202210' );
createNav( spring202211, 'spring202211' );
createNav( spring202212, 'spring202212' );
createNav( spring202213, 'spring202213' );
createNav( summer2022,'summer2022');
// createNav( fall202201, 'fall202201' );
// createNav( fall202202, 'fall202202' );
// createNav( fall202203, 'fall202203' );
// createNav( fall202204, 'fall202204' );
// createNav( fall202205, 'fall202205' );
// createNav( fall202206, 'fall202206' );
// createNav( fall202207, 'fall202207' );
// createNav( fall202208, 'fall202208' );
// createNav( fall202209, 'fall202209' );
// createNav( fall202210, 'fall202210' );
// createNav( fall202211, 'fall202211' );
// createNav( fall202212, 'fall202212' );
// createNav( fall202213, 'fall202213' );
createNav(learning, 'learning');
