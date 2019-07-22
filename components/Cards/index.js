// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


let getOne = 'https://lambda-times-backend.herokuapp.com/articles';

function getArticleData (getOne) {

    axios.get(getOne)
    .then(response => {


        let articleCont = [];
        articleCont = response["data"]["articles"];

        let articleTitle = "javascript";

        createArt(articleCont, articleTitle);

        // 

        articleTitle = "bootstrap";
        createArt(articleCont, articleTitle);

        // 
       articleTitle = "technology";
        createArt(articleCont, articleTitle);
        // 
        articleTitle = "jquery";
        createArt(articleCont, articleTitle);
        // 
         articleTitle = "node.js";
        createArt(articleCont, articleTitle);
        
    })

    .catch (error => {
        console.log(error);
    })
};

function createArt(articleCont,articleTitle) {

let y = "headline";  
let z = "authorName";
let p = "authorPhoto";

 for(i in articleCont[articleTitle]) {       

    let mainContainerDiv = document.getElementsByClassName("cards-container")[0];
    let newDiv0 = document.createElement('div');
    newDiv0.classList.add('card'); 

     let newDiv1 = document.createElement('div');
    newDiv1.classList.add('headline'); 
    newDiv1.innerText = articleCont[articleTitle][i][y];

     let newDiv2 = document.createElement('div');
    newDiv2.classList.add('author'); 
    newDiv2.innerText = articleCont[articleTitle][i][z];

     let newDiv3 = document.createElement('div');
    newDiv3.classList.add('img-container');

    let newSpan = document.createElement('span');

    let newImg =  document.createElement('img');
    newImg.src = articleCont[articleTitle][i][p];    


    newDiv3.appendChild(newImg);
    newDiv2.appendChild(newDiv3);
    newDiv2.appendChild(newSpan);
    newDiv1.appendChild(newDiv2);
    newDiv0.appendChild(newDiv1);
    mainContainerDiv.appendChild(newDiv0);

    }


}


getArticleData(getOne);