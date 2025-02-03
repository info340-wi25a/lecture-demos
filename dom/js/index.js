'use strict';

//STATE
//data
const songArray = [
  { artist: "Queen", title: "Don't Stop Me Now", youtubeUrl: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
  { artist: "David Bowie", title: "Starman", youtubeUrl: "https://www.youtube.com/watch?v=rpO1U-nEgRU"
  },
  { artist: "Taylor Swift", title: "Cruel Summer", youtubeUrl: "https://www.youtube.com/watch?v=ic8j13piAhQ"
  }
];

let puppyIsGrown = false;


function getSongName(song){
  return song.title + " by " + song.artist;
}

// const songNameArray = songArray.map(getSongName);
// console.log(songNameArray);

const theH1Element = document.querySelector("h1")
// console.log(theH1Element);
const puppyImg = document.querySelector('img');
// console.log(puppyImg);
const dataHeading = document.querySelector('#dataSection h2');
// console.log(dataHeading);

theH1Element.textContent = "I have been changed!";

// puppyImg.src = "img/husky.jpg";
// puppyImg.alt = "a grown puppy";

const headerElem = document.querySelector('header');
// headerElem.classList.add('p-5');

/* adding elements */
const newLiElem = document.createElement("li")
newLiElem.textContent = "The Beatles - Lucy in the Sky with Diamonds";
// console.log(newLiElem);

const songListElem = document.querySelector('#dataSection ol');
songListElem.appendChild(newLiElem);

//input: {artist: '', title: '', url: ''}
//output: <li><a href="">Artist - Title<a/></li>
function createSongLinkElem(songObj){
  //make the <a>
  const newAnchorElem = document.createElement('a');
  newAnchorElem.textContent = songObj.artist + ' - ' + songObj.title;
  newAnchorElem.href = songObj.youtubeUrl;

  //make the <li>
  const newLiElem = document.createElement("li")
  newLiElem.appendChild(newAnchorElem); //put <a> inside the <li>

  //return the <li>
  return newLiElem;
}

//input: [{},{}]
//action: add <li> elements to the <ol>
function renderSongList(songArray){
  songListElem.innerHTML = '';
  for(const songObj of songArray){
    const songLinkElem = createSongLinkElem(songObj);
    songListElem.appendChild(songLinkElem); //add the <li> to the <ol>
  }  
}

//have 1 function, call that function to put data on the screen
renderSongList(songArray);

/* INTERACTIVTY! */
const puppyButton = document.querySelector('#puppySection button');

function whatToDoWhenPressedFunction(event) {
  console.log("You clicked me!");
}


//what should I show based on the status?
function renderPuppy() {
  if(puppyIsGrown) { //currently is grown
    //show as grown
    puppyImg.src = "img/husky.jpg";
    puppyImg.alt = "a grown puppy";
  } else { //is puppy
    //show it as a puppy
    puppyImg.src = "img/puppy.jpg";
    puppyImg.alt = "a cute puppy";
  }  
}

puppyButton.addEventListener('click', function(event) {
  console.log("You clicked me!");

  //when should the puppy grow?
  puppyIsGrown = !puppyIsGrown; //modify the state

  renderPuppy(); //show puppy however it should be
})

const formElem = document.querySelector('#formSection form');

formElem.addEventListener('submit', function(event) {
  event.preventDefault();
  // console.log('form submitted'); //know that our event works!

  //1. add the song to the data
  const artistInputElem = document.querySelector('#artistInput');
  const artistValue = artistInputElem.value;
  const titleInputElem = document.querySelector('#titleInput');
  const titleValue = titleInputElem.value;

  const newSongData = {
    artist: artistValue, 
    title: titleValue,
    youtubeUrl: "",
  }
  songArray.push(newSongData);

  //2. re-render content
  renderSongList(songArray)
})
