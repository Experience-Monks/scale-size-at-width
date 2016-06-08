var scaleSize = require('../index.js');

var body = document.getElementsByTagName('body')[0];
body.style.position = 'absolute';
body.style.overflow = 'hidden';
body.style.width = '100%';
body.style.height = '100%';
body.style.margin = 0;

var box = document.createElement('div');
box.style.position = 'absolute';
box.style.top = '50%';
box.style.left = '50%';
box.style.transform = 'translateX(-50%) translateY(-50%)';
box.style.background = '#212121';

var text = document.createElement('div');
text.style.position = 'relative';
text.style.display = 'inline-block';
text.style.top = '50%';
text.style.left = '50%';
text.style.color = '#fff';
text.style.transform = 'translateX(-50%) translateY(-50%)';
text.innerHTML = 'TEST';

document.body.appendChild(box);
box.appendChild(text);

resize();
window.addEventListener('resize', resize);

function resize() {
  var baseWidth = 1280;

  var limits = {
    minScaleWidth: 1024,
    maxScaleWidth: 1920
  };

  var boxSize = scaleSize(200, baseWidth, limits);
  box.style.width = boxSize + 'px';
  box.style.height = boxSize + 'px';

  var textSize = scaleSize(40, baseWidth, limits);
  text.style.fontSize = textSize + 'px';
}