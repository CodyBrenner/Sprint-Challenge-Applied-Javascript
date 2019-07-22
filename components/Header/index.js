// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
function Header() {


   let headerContainer = document.getElementsByClassName("header-container")[0];

   let newDiv = document.createElement('div');
   newDiv.classList.add('header'); 

   let newSpan0 = document.createElement('span');
   newSpan0.classList.add('date');
   newSpan0.innerText = 'July 21, 2019'; 

   let newH1 = document.createElement('h1');
   newH1.innerText = 'Lambda Times';

   let newSpan1 = document.createElement('span');
   newSpan1.classList.add('temp'); 
   newSpan1.innerText = '140°';

   newDiv.appendChild(newSpan0);
   newDiv.appendChild(newH1);
   newDiv.appendChild(newSpan1);

   headerContainer.appendChild(newDiv);

}


Header();