document.body.style.margin = 0;

var displays = {};
for (const element of [...document.querySelectorAll('body *')]) {
  displays[element] = getComputedStyle(element).display;
  element.style.display = 'none';
}

var intro = document.createElement('div');

intro.id = 'intro';
intro.style.background = 'linear-gradient(to bottom right, #d000ff, #006eff)';
intro.style.width = '100vw';
intro.style.height = '100vh';
intro.style.display = 'block';

document.body.appendChild(intro);

var deyranp = document.createElement('img');
