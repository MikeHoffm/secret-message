
/* AUDIO FILES */
const select = new Audio ('sounds/select.mp3');
const fallenDown = new Audio ('sounds/fallenDown.mp3');
const linger = new Audio ('sounds/linger 8bit.mp3');
const damage = new Audio ('sounds/damage-taken.mp3');
const here = new Audio ('sounds/HereWeAre.mp3');
const floweyLaugh = new Audio ('sounds/floweyEvilLaugh.mp3');
const overAudio = new Audio ('sounds/gameOver.mp3');
const speech = new Audio ('sounds/speech.mp3');
const home = new Audio ('sounds/home.mp3');

/* EDIT THIS LATER */

let text = document.querySelector('p');
let textContainer = document.querySelector('.text-box');


let mainImg = document.querySelector('.main-image');
mainImg.style.display="none";
textContainer.style.display="none";



//TITLE SCREEN
linger.play();
linger.loop = true;
const date = document.querySelector('.date');
const titleScreen = document.querySelector('.title-screen');
const beginButton = document.querySelector('.begin');
const restart = document.querySelector('.restart');
restart.style.display = 'none';

beginButton.addEventListener('click', function(){
  select.play();
  linger.pause();
  titleScreen.style.display="none";
  mainImg.style.display="flex";
})

//GAME FUNCTIONALITY BEGINS HERE
//CLICK ON FLOWEY EVENT LISTENER
let flowey = document.querySelector('.flowey');

flowey.addEventListener('click', function(){
        fallenDown.play();
        fallenDown.loop = true;
        if (flowey.src = "images/floweySmile.jpg") {
          flowey.src = "images/floweyTalk.webp";  
        }
        textContainer.style.display="inline-block";
})

//define paragraph as a variable
//define yncontainer as a variable
const p = document.querySelector('p');
const ynContainer = document.querySelector('.yn-container');


//SELECT YES ON PROMPT

const floweyDialogue = ["Hello there", "Are you the Princess?", "* Are you sure you're really her?", 
                        "* Because if you're not then that would make you a liar...",
                        "* ...and that's a sin.", "...which would make you a liar AND a sinner.", "...so.","* Are you a liar and a sinner?"];

const selectYes = document.querySelector('.y');
selectYes.addEventListener('click', function () {
  select.play();
  p.textContent = floweyDialogue[2];
  selectYes.addEventListener('click', function () {
    select.play();
    fallenDown.pause();
    p.textContent = floweyDialogue[3];
      selectNo.style.display = 'none';
      selectYes.style.display = 'none';
      flowey.src='images/floweySmile.jpg';
        d4pause = setTimeout(dialogue4, 5000);
        d5pause = setTimeout(dialogue5,8000);
        d6pause = setTimeout(dialogue6, 10000);
        liarPause = setTimeout(liarSinner1, 11000);
      notLiar.addEventListener('click', function() {
        select.play();
        quizPause = setTimeout(beginQuiz,200);
        let quizTimeOut = setTimeout(quizOne, 3000);
      })
    })
  })

//Create functions to call text, this allows us to use setTimeout to add
//dramatic pauses between dialogue
//Also create new buttons for 'liar' 'not liar' options that trigger 
//the quiz seqeuence
let liar = document.querySelector('.liar');
let notLiar = document.querySelector('.not-liar');

liar.addEventListener('click', function(){
  youFail();
  p.textContent = '* Filthy liars get what they deserve.';
  if (flowey.src = "images/floweyTalk.webp") {
      flowey.src = "images/floweyEvil.jpg";  
      let overTimeOut = setTimeout(gameTimeOut, 5000);
      let gameOverScreen = setTimeout(gameOver, 7000);
    }
})

dialogue4 = function () {
  p.textContent = floweyDialogue[4]
}

dialogue5 = function(){
  p.textContent = floweyDialogue[4] + floweyDialogue[5];
}

dialogue6 = function () {
  p.textContent = floweyDialogue[4] + floweyDialogue[5] + floweyDialogue[6];
}

 liarSinner1 = function() {
  fallenDown.play();
  p.textContent = floweyDialogue[7];
  liar.style.display = 'inline-block';
  notLiar.style.display = 'inline-block';
}


      //SELECT NO ON PROMPT - END SCREEN
const selectNo = document.querySelector('.n');
const selectedNo = selectNo.addEventListener('click', function(){
    select.play();
    youFail();
    if (flowey.src = "images/floweyTalk.webp") {
        flowey.src = "images/floweyEvil.jpg";  
        let overTimeOut = setTimeout(gameTimeOut, 5000);
        let gameOverScreen = setTimeout(gameOver, 7000);
      }
})


// QUIZ GAME FUNCTIONALITY

let beginQuiz = function () {
  p.textContent = "* Alright wise guy. If you really are who you claim to be. Prove it!";
  liar.style.display = 'none';
  notLiar.style.display = 'none';
  fallenDown.pause();
  here.play();
  here.loop = true;
}


const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');

const quizOne = function () {
  p.textContent = "* When is Michaels birthday?";
  one.textContent = 'December 6 1999';
  two.textContent = 'Novemeber 5 1999';
  three.textContent = 'October 8 1998';
  four.textContent = 'December 6 1998'

  one.addEventListener('click', function(){
    select.play();
    p.textContent = "* Close but no cigar.";
  })

  two.addEventListener('click', function() {
    select.play();
    p.textContent = "* Not it, you idiot.";
  })

  three.addEventListener('click',function(){
    select.play();
    p.textContent = "* You really are dumb";

  })

  four.addEventListener('click', function(){
    select.play();
    
    if(one.textContent === 'December 6 1999' && two.textContent === 'Novemeber 5 1999' 
    && three.textContent === 'October 8 1998' && four.textContent === 'December 6 1998') {
     p.textContent = "* Probably just a lucky guess." 
      one.textContent = ""
      two.textContent = "";
      three.textContent = "";
      four.textContent = "";
    }
    const secondQuiz = setTimeout(quizTwo, 3000);
  })
}

const quizTwo = function () {
  p.textContent = "* Where was your first date?";
  one.textContent = 'The Movies';
  two.textContent = 'Video Game Arcade';
  three.textContent = 'The Columbus Ohio Zoo';
  four.textContent = 'The Beach';

  one.addEventListener('click', function(){
    select.play();
    p.textContent = "* Not even close!";
  })

  two.addEventListener('click', function() {
    select.play();
    p.textContent = "* Really?";
  })

  three.addEventListener('click',function(){
    select.play();
    
    if(one.textContent === 'The Movies' && two.textContent === 'Video Game Arcade' 
    && three.textContent === 'The Columbus Ohio Zoo' && four.textContent === 'The Beach') {

      p.textContent = "* Alright pal, not too bad."
      one.textContent = ""
      two.textContent = "";
      three.textContent = "";
      four.textContent = "";
    }
    const thirdQuiz = setTimeout(quizThree, 3000);
  })

  four.addEventListener('click', function(){
    select.play();
    p.textContent = "* You're not too good at this are you?"
  })
}

const quizThree = function() {
  p.textContent = "* Who do you love with all of your heart?"
  one.textContent = 'Adam Driver';
  two.style.dipslay = 'none';
  three.textContent = 'Michael Hoffman';
  four.style.display = 'none';

  one.addEventListener('click', function(){
    one.textContent = "";
    three.textContent ="";
    select.play();
    here.pause();

    youFail2();
    if (flowey.src = "images/floweyTalk.webp") {
        flowey.src = "images/floweyEvil.jpg";  
        let overTimeOut = setTimeout(gameTimeOut, 5000);
        let gameOverScreen = setTimeout(gameOver, 7000);
      }
})

  three.addEventListener('click',function(){
    select.play();
    p.textContent = "";
    one.textContent = "";
    three.textContent = "";
    here.pause();
    const finalMessage = setTimeout(finale, 3000);
  })

}


//CREATE FUNCTIONALITY TO SHOW IMAGES WITH THE LETTER YOU WROTE UNDERNEATH
let finalImage = document.querySelector('.final-img');
let finalMsg = document.querySelector('.final-txt');

let finale = function(){
  //have flowey say I have a secret message for you
    one.textContent = "";
    two.textContent = "";
    three.textContent = "";
    four.textContent = "";
  p.textContent = "* Very well. This is just for you.";
  const slideShow = setTimeout(slide01, 3000);
}

var myText = "I still remember the warm feeling I got when I laid eyes on you in that airport in 2016. I still get that feeling, when I make you laugh or smile and it reminds me how lucky I am to have you. I never take that for granted. Happy Anniversary Gabbie.";
let myArray = myText.split("");
var loopTimer;
let love = document.querySelector('#love');
love.style.display = 'none';
function frameLooper() {
  speech.play();
  love.style.display = "inline-block";
    if(myArray.length > 0) {
        document.getElementById('love').innerHTML += myArray.shift();
    } else {
        clearTimeout(loopTimer);
    return false;
    }
        loopTimer = setTimeout('frameLooper()',100);

}

/* SLIDE 1*/
let slide01 = function() {
  p.textContent = "";
  textContainer.style.display = 'none';
  mainImg.style.display = "none";
  finalImage.src = "images/0.png";
  home.play();
  home.loop = true;
  finalMsg.textContent
  = 'Sometimes life can be tough. Sometimes darkness seeps its way in, and it can be a lot.';

  finalImage.addEventListener('click', function(){
    finalImage.src = "images/02.png";
  finalImage.addEventListener('click', function(){
    finalImage.src= "images/03.png";
    finalMsg.textContent = 'But then I think about you, and like magic the darkness goes away.';
  finalImage.addEventListener('click', function(){
    finalImage.src = "images/05.png";
    finalMsg.textContent = 'In those thoughts, I let my mind linger on all of the things that we have been through together';
  finalImage.addEventListener('click', function(){
    finalMsg.textContent = "I remember all of the good times that we've had.";
  finalImage.addEventListener('click', function(){
    finalImage.src = "images/broke.png";
    finalMsg.textContent = "All of the rough times as well.";
  finalImage.addEventListener('click', function(){
    finalMsg.textContent = "We were broke, no car, struggling to even pay for food sometimes.";
  finalImage.addEventListener('click', function(){
    finalImage.src = "images/vegas.png";
    finalMsg.textContent = "I was far from perfect. I was a broken kid, who had scraps to offer.";
  finalImage.addEventListener('click', function(){
    finalMsg.textContent = "Yet you stayed, and you loved me. I didn't deserve that, I didn't deserve you.";
    finalImage.src = "images/paint.png";
  finalImage.addEventListener('click', function() {
    finalImage.src = "images/disney.png";
    finalMsg.textContent = "I am utterly grateful for all of the memories that we've made in this life together."
  finalImage.addEventListener('click', function(){
    finalImage.src = "images/smile.png";
    finalMsg.textContent = "As well as the ones that we continue to make."
  finalImage.addEventListener('click', function () {
    finalImage.src = "images/camp.png";
    finalMsg.textContent = "I'm grateful for all of the adventures that we've had together. Both small...";
  finalImage.addEventListener('click', function() {
    finalImage.src = "images/canyon.png";
    finalMsg.textContent = "and big";
  finalImage.addEventListener('click', function() {
    finalImage.src = "images/black.png";
    finalMsg.textContent = "You are my everything.";
  finalImage.addEventListener('click', function(){
    select.play();
    finalImage.src = "images/black0.png";
    finalMsg.textContent = "You are the light of my life Gabbie.";
  finalImage.addEventListener('click', function() {
    home.pause();
    finalImage.style.display = 'none';
    finalMsg.style.display = "none";
    //SCROLLING TEXT
frameLooper()
const finalSong = setTimeout(linger.play(), 3000);
  })
  })
  })
  })
  })
  })
  })
  })
  })
  })
  })
  })
  })
  })
  })
}

// Game Over Functionality //
//Split into 3 parts for reuse in code

//Stops main song playing, and gives you a death screen
const youFail = function () {
  fallenDown.pause();
  damage.play();
  floweyLaugh.play();
  ynContainer.style.display = 'none';
  p.textContent = "You should've never come here...";
}

const youFail2 = function () {
  fallenDown.pause();
  damage.play();
  floweyLaugh.play();
  ynContainer.style.display = 'none';
  p.textContent = "What a shame. So close.";
}

//Will timeout the death screen
const gameTimeOut = function () {
  ynContainer.style.display = 'none';
  textContainer.style.display = 'none';
  mainImg.style.display = 'none';
}

// Will give a game over screen 
const gameOver = function () {
  overAudio.play();
  overAudio.loop = true;
  titleScreen.style.display = 'flex';
  date.src = "images/gameOver.png";
  date.style.margin = '10px';
  beginButton.style.display = 'none';
  restart.style.display = 'flex';
}

let tryAgain = document.querySelector('.restarted');
tryAgain.addEventListener('click', function () {
  select.play();
})