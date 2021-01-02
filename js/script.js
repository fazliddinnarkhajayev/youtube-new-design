var elHeaderHumburger = document.querySelector('.js-site-header__humburger');
var elHeaderForm = document.querySelector('.js-site-header__form');
var elHeaderSearch = document.querySelector('.js-site-header__search-box');
var elBarlieList = document.querySelector('.barlie-list');

//HUMBURGER
var elHumburgerButton = document.createElement('button');
elHumburgerButton.classList.add('site-header__humburger-button');
elHumburgerButton.type='button';


var elHumburgerLink = document.createElement('a');
elHumburgerLink.classList.add('site-header__logo-link');
elHumburgerLink.setAttribute('href', '#');


var elHumburgerImg = document.createElement('img');
elHumburgerImg.classList.add('site-header__logo-img');
elHumburgerImg.src ='img/logo-black.svg';
elHumburgerImg.alt ='site-logo';
elHumburgerImg.width ='116';
elHumburgerImg.height ='25';

elHumburgerLink.appendChild(elHumburgerImg);
elHeaderHumburger.appendChild(elHumburgerButton);
elHeaderHumburger.appendChild(elHumburgerLink);

// HEADER/FORM
var elHeaderLabel = document.createElement('label');
elHeaderLabel.classList.add('site-header__label');

var elHeaderInput = document.createElement('input');
elHeaderInput.classList.add('site-header__search-input');
elHeaderInput.type='search';

elHeaderLabel.appendChild(elHeaderInput);
elHeaderForm.appendChild(elHeaderLabel);
elHeaderInput.placeholder='search';

// SEARCH



var searchImg = document.createElement('img');
searchImg.classList.add('site-header__search-img');
searchImg.src ='img/phone-18.svg';
searchImg.alt ='rasm';
searchImg.width ='20';
searchImg.height ='20';


var searchImgSecond = document.createElement('img');
searchImgSecond.classList.add('site-header__search-img');
searchImgSecond.src ='img/Combined-Shape.svg';
searchImgSecond.alt ='rasm';
searchImgSecond.width ='20';
searchImgSecond.height ='20';

var searchImgThird = document.createElement('img');
searchImgThird.classList.add('site-header__search-img');
searchImgThird.src ='img/ui-11.svg';
searchImgThird.alt ='rasm';
searchImgThird.width ='20';
searchImgThird.height ='20';

var searchImgFourth = document.createElement('img');
searchImgFourth.classList.add('site-header__search-img');
searchImgFourth.src ='img/Userpic.png';
searchImgFourth.srcset ='img/Userpic.png 1x, img/Userpic@2x.png 2x';
searchImgFourth.alt ='rasm';
searchImgFourth.width ='40';
searchImgFourth.height ='40';


elHeaderSearch.appendChild(searchImg);
elHeaderSearch.appendChild(searchImgSecond);
elHeaderSearch.appendChild(searchImgThird);
elHeaderSearch.appendChild(searchImgFourth);





var elItemBarlie = document.querySelector('.barlie-template').content;
elBarlieList.appendChild(elItemBarlie)

var elItemSlect = elItemBarlie.cloneNode(true);
elItemSlect.querySelector('.barlie-item-img').src ='mg/video-img-2.png';
elItemSlect.querySelector('.barlie-item-img').srcset ='mg/video-img-1.png 1x, img/video-img-1@2x.png 2x';
elItemSlect.querySelector('.barlie__item-title').textContent ='Selecting The Right Hotel';

elBarlieList.appendChild(elItemSlect)




// {/* <li class="barlie-item">
// <img class="barlie-item-img" src="img/video-img-1.png" alt="rasm" width="250" height="150" src="img/video-img-1.png 1x, img/video-img-1@2x.png 2x">
// <span class="barlie-item-span"><time>4:15</time></span>
// <h3 class="barlie__item-title">A Brief History Of Creation</h3>
// <div class="barlie__span-wrapper">
// <span class="barlie__span">80k views</span>
// <span class="barlie__span-day">3 days ago</span>
// <span class="barlie__span-name">Dollie Blair</span>
// </div>
// </li> */}