var intro = document.createElement('div');

intro.id = 'intro';

document.body.appendChild(intro);

var introWrapper = document.createElement('div');
introWrapper.id = 'intro-wrapper';
intro.appendChild(introWrapper);

var pfpAnimation = document.createElement('div');
pfpAnimation.id = 'pfps';
intro.appendChild(pfpAnimation)
// I hope I'm allowed to do this...
setTimeout(() => {
  var user1 = document.createElement('img');
  user1.src = 'https://avatars.githubusercontent.com/u/46546360?s=60&v=4';
  pfpAnimation.appendChild(user1);

  var user2 = document.createElement('img');
  user2.src = 'https://avatars.githubusercontent.com/u/60952646?s=60&v=4';
  pfpAnimation.appendChild(user2);
  
  var plusSign = document.createElement('div');
  plusSign.id = 'plus-sign'
  plusSign.textContent = '+';
  pfpAnimation.insertBefore(plusSign, user2);
}, 500);
