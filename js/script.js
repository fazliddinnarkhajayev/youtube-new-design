var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  }

  if (text) {
    newElement.textContent = text;
  }

  return newElement;
};



var elHeaderHumburger = document.querySelector('.js-site-header__humburger');
var elHeaderForm = document.querySelector('.js-site-header__form');
var elHeaderSearch = document.querySelector('.js-site-header__search-box');
var elBarlieList = document.querySelector('.barlie-list');
var elRecommendList = document.querySelector('.recommend__list');
var elFoodList = document.querySelector('.food__list');

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


var barlie = [

{
  time:`4:15`,
  img:`img/video-img-1.png`,
  retina:`img/video-img-1@2x.png 2x`,
  title:`A Brief History Of Creation`,
  span:`80k views`,
  day:`3 days ago`,
  name:`Dollie Blair`
},
{
  time:`8:00`,
  img:`img/video-img-2.png`,
  retina:`img/video-img-2@2x.png 2x`,
  title:`Advertising Outdoors`,
  span:`13k views`,
  day:`1 months ago`,
  name:`Dollie Blair`
},
{
  time:`5:32`,
  img:`img/video-img-3.png`,
  retina:`img/video-img-3@2x.png 2x`,
  title:`Asteroids`,
  span:`43k views`,
  day:`12 days ago`,
  name:`Dollie Blair`
},
{
  time:`6:40`,
  img:`img/video-img-4.png`,
  retina:`img/video-img-4@2x.png 2x`,
  title:`Telescopes 101`,
  span:`11k views`,
  day:`6 months ago`,
  name:`Dollie Blair`
},
{
  time:`1:45`,
  img:`img/video-img-5.png`,
  retina:`img/video-img-5@2x.png 2x`,
  title:`Medical Care Is Just`,
  span:`18k views`,
  day:`2 days ago`,
  name:`Dollie Blair`
},
{
  time:`2:45`,
  img:`img/cover.png`,
  retina:`img/cover@2x.png 2x`,
  title:`Moon Gazing`,
  span:`67k views`,
  day:`4 months ago`,
  name:`Dollie Blair`
}
];


var elBarlieTemplet = $_(`.barlie-template`).content;

elBarlieList.innerHTML = ``;
var elBarlieFragment = document.createDocumentFragment();
barlie.forEach(function (barlie, index){
  var barlieItem = elBarlieTemplet.cloneNode(true);


  $_(`.barlie-item-img`, barlieItem).src = barlie.img;
  $_(`.barlie-item-img`, barlieItem).width = `250`;
  $_(`.barlie-item-img`, barlieItem).height = `150`;
  $_(`.barlie-item-img`, barlieItem).srcset = `${barlie.img} 1x, ${barlie.retina} 2x`;
  $_(`.barlie__item-title`, barlieItem).textContent = barlie.title;
  $_(`.barlie__time`, barlieItem).textContent = barlie.time;
  $_(`.barlie__span`, barlieItem).textContent = barlie.span;
  $_(`.barlie__span-day`, barlieItem).textContent = barlie.day;
  $_(`.barlie__span-name`, barlieItem).textContent = barlie.name;
  elBarlieFragment.appendChild(barlieItem);
});
elBarlieList.appendChild(elBarlieFragment)



var recommend = [
  {
    time:`3:40`,
    img:`img/recommend-img-1.png`,
    retina:`img/recommend-img-1@2x.png 2x`,
    title:`Dude You Re Getting A Telescope`,
    span:`34k views`,
    day:`5 months ago`,
    name:`Gussie French`
  },
  {
    time:`2:12`,
    img:`img/recommend-img-2.png`,
    retina:`img/recommend-img-2@2x.png 2x`,
    title:`Moon Gazing`,
    span:`54k views`,
    day:`11 months ago`,
    name:`Edward Osborne`
  },
  {
    time:`2:40`,
    img:`img/recommend-img-3.png`,
    retina:`img/recommend-img-3@2x.png 2x`,
    title:`Dude You Re Getting A Telescope`,
    span:`125k views`,
    day:`4 months ago`,
    name:`Dollie Barlie`
  }
]

var elRecommendTemplate = $_(`.recommend__template`).content;
elRecommendList.innerHTML= ``;
var elRecommendFraagment = document.createDocumentFragment();
recommend.forEach(function (recommend ,index){
var recommendItem = elRecommendTemplate.cloneNode(true);

$_(`.recommend__img`, recommendItem).src = recommend.img;
$_(`.recommend__img`, recommendItem).width = `540`;
$_(`.recommend__img`, recommendItem).height = `250`;
$_(`.recommend__time`, recommendItem).textContent = recommend.time;
$_(`.recommend__item-title`, recommendItem).textContent = recommend.title;
$_(`.recommend__span`, recommendItem).textContent = recommend.span;
$_(`.recommend__span-month`, recommendItem).textContent = recommend.day;
$_(`.recommend__span-name`, recommendItem).textContent = recommend.name;
elRecommendFraagment.appendChild(recommendItem);
});

elRecommendList.appendChild(elRecommendFraagment);


var food = [
  {
    time:`7:36`,
    img:`img/food-img-1.png`,
    retina:`img/food-img-1.png@2x.png 2x`,
    title:`Astronomy Or Astrology`,
    span:`240k views`,
    day:`4 months ago`,
    name:`Food & Drink`
  },
  {
    time:`2:19`,
    img:`img/food-img-2.png`,
    retina:`img/food-img-2.png@2x.png 2x`,
    title:`Advertising Outdoors`,
    span:`13k views`,
    day:`15 days ago`,
    name:`Food & Drink`
  },
  {
    time:`9:05`,
    img:`img/food-img-3.png`,
    retina:`img/food-img-3.png@2x.png 2x`,
    title:`Radio Astronomy`,
    span:`1k views`,
    day:`11 months ago`,
    name:`Food & Drink`
  },
  {
    time:`3:40`,
    img:`img/food-img-4.png`,
    retina:`img/food-img-4.png@2x.png 2x`,
    title:`A Good Autorespondery`,
    span:`45k views`,
    day:`2 months ago`,
    name:`Food & Drink`
  },
  {
    time:`1.56`,
    img:`img/food-img-5.png`,
    retina:`img/food-img-5.png@2x.png 2x`,
    title:`Baby Monitor Technology`,
    span:`86k views`,
    day:`7 days ago`,
    name:`Food & Drink`
  },
  {
    time:`3:40`,
    img:`img/food-img-6.png`,
    retina:`img/food-img-6.png@2x.png 2x`,
    title:`Asteroids`,
    span:`123k views`,
    day:`4 months ago`,
    name:`Dallie Barlie`
  }
]


var elFoodTemplate = $_(`.food__template`).content;
// elFoodlist.innerHTML=``;
var elFoodFragment = document.createDocumentFragment();
food.forEach(function(food, index){
var foodItem = elFoodTemplate.cloneNode(true);

$_(`.food-item-img`, foodItem).src = food.img;
$_(`.food-item-img`, foodItem).width = `250`;
$_(`.food-item-img`, foodItem).height = `150`;
$_(`.food__time`, foodItem).textContent = food.time;
$_(`.food__item-title`, foodItem).textContent = food.title;
$_(`.food__span-day`, foodItem).textContent = food.day;
$_(`.food__span-name`, foodItem).textContent = food.name;
elFoodFragment.appendChild(foodItem);

});
elFoodList.appendChild(elFoodFragment);
