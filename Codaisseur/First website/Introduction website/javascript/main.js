


//Changes picture and adds text when snoot is booped
var myImage = document.querySelector('#profile-pic');
var myTextBubble = document.querySelector('#text-bubble');
var myOuchText = document.querySelector('#ouch-text');
var counter = 0;
var myHeading = document.querySelector('h1');
var myIntroductionText = document.querySelector('p');
var counter2 = 0;
var myArrowContainer = document.querySelector('#arrow-container');
var myBody = document.querySelector('body');

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
          myOuchText.innerHTML = 'Thats better! I even regrew my hair. <br /><br /> (Business inquiries can be sent to:<br /> regrowhairwithasinglemousclick@gmail.com)'
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
      myIntroductionText.innerHTML = 'A 28 year old feller that lives in Haarlem and is very excited to begin this Bootcamp.<br /><br />Boop my snoot to continue. (Not too hard please)';
      break;
    case 2:
      myHeading.innerHTML = 'Good booping, now let me introduce myself some more.';
      myIntroductionText.innerHTML = 'Some things i like:';
      break;
  }
}

myBody.onclick = function() {
    if (counter2 > 3 && counter === 0){
      myArrowContainer.setAttribute ('class', 'visible');
  } else {
    counter2++;
  }
}
