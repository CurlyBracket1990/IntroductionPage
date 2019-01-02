//Changes picture and adds text when snoot is booped
var myImage = document.querySelector('#profile-pic');
var myTextBubble = document.querySelector('#text-bubble');
var myOuchText = document.querySelector('#ouch-text');
var counter = 0;
var myHeading = document.querySelector('h1');
var myIntroductionText = document.querySelector('.introduction-text');
var counter2 = 0;
var myArrowContainer = document.querySelector('#arrow-container');
var myBody = document.querySelector('body');
var myLikes1 = document.querySelector('#first')
var myLikes2 = document.querySelector('#second')
var myLikes3 = document.querySelector('#third')
var myLikes4 = document.querySelector('#fourth')

myImage.onclick = function() {
  ++counter
  myArrowContainer.setAttribute ('class', 'hidden');

    switch(counter) {
        case 1:
          myImage.setAttribute ('src','images/ouch.png');
          myTextBubble.setAttribute ('class', 'visible normal-text-bubble')
          myOuchText.innerHTML = 'I said not too hard! <br /> You even made me lose my hair and change clothes. <br /> <br /> Try again, gently please.'
          break;
        case 2:
          myImage.setAttribute ('src','images/thats-me.png');
          myTextBubble.setAttribute ('class', 'visible wider-text-bubble-left')
          myOuchText.innerHTML = 'Thats better! I even regrew my hair. <br /><br /> (Business inquiries can be sent to:<br /> regrowhairwithamousclick@gmail.com)'
          introductionText()
          break;
        case 3:
          myOuchText.innerHTML = 'You can stop booping my snoot now and focus on my introduction text again, thanks.'
          myTextBubble.setAttribute ('class', 'visible wider-text-bubble')
          break;
        case 10:
          myOuchText.innerHTML = 'Seriously?'
          myTextBubble.setAttribute ('class', 'visible smaller-text-bubble')
          break;
    }
}

introductionText()

function introductionText() {

  switch(counter) {
    case 0:
      myHeading.innerHTML = 'Hi! My name is Stefan';
      myIntroductionText.innerHTML = 'A 28 year old feller that lives in Haarlem and is very excited to begin this Bootcamp. <br /><br />Boop my <a target="_blank" href="https://www.merriam-webster.com/dictionary/snoot"> snoot</a> to continue. (Not too hard please)';
      break;
    case 2:
      myHeading.innerHTML = 'Good booping, now let me introduce myself some more.';
      myIntroductionText.innerHTML = '<br />Some things i like:';
      myLikes1.setAttribute ('class', 'likes');
      likesSlide1()
      myLikes2.setAttribute ('class', 'likes');
      likesSlide2()
      myLikes3.setAttribute ('class', 'likes');
      likesSlide3()
      myLikes4.setAttribute ('class', 'likes');
      likesSlide4()
      break;
  }
}

myBody.onclick = function() {
    if (counter2 > 1 && counter === 0){
      myArrowContainer.setAttribute ('class', 'visible');
  } else {
    counter2++;
  }
}

function likesSlide1 () {
  var elem = document.getElementById("first");   
  var pos = 74;
  var id = setInterval(frame, 25);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos--; 
      elem.style.left = pos + '%'; 
    }
  }
}

function likesSlide2 () {
  var elem = document.getElementById("second");   
  var pos = -250;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
    }
  }
}

function likesSlide3 () {
  var elem = document.getElementById("third");   
  var pos = -74;
  var id = setInterval(frame, 25);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.left = pos + '%'; 
    }
  }
}

function likesSlide4 () {
  var elem = document.getElementById("fourth");   
  var pos = 0.00;
  var posFixed;
  var posFixed2;
  var id = setInterval(frame, 25);
  function frame() {
     if (posFixed2 === 1) {
      clearInterval(id);
    } else {
      pos += 0.01;
      posFixed = pos.toFixed(2);
      posFixed2 = parseInt(posFixed, 10);
      elem.style.opacity = posFixed; 
    }
  }
}
