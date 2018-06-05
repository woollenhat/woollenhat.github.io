var gradients = [
  {name: 'Ocean Blue', colors: ['#2E3192', '#1BFFFF']},
  {name: 'Sanguine', colors: ['#D4145A', '#FBB03B']},
  {name: 'Luscious Lime', colors: ['#009245', '#FCEE21'], textColor: '#000000'},
  {name: 'Purple Lake', colors: ['#662D8C', '#ED1E79']},
  {name: 'Fresh Papaya', colors: ['#ED1C24', '#FCEE21']},
  {name: 'Ultramarine', colors: ['#00A8C5', '#FFFF7E']},
  {name: 'Pink Sugar', colors: ['#D74177', '#FFE98A']},
  {name: 'Lemon Drizzle', colors: ['#FB872B', '#D9E021']},
  {name: 'Victorian Purple', colors: ['#312A6C', '#852D91']},
  {name: 'Spring Greens', colors: ['#009E00', '#FFFF96']},
  {name: 'Mystic Mauve', colors: ['#B066FE', '#63E2FF']},
  {name: 'Reflex Silver', colors: ['#808080', '#E6E6E6']},
  {name: 'Neon Glow', colors: ['#00FFA1', '#00FFFF']},
  {name: 'Berry Smoothie', colors: ['#8E78FF', '#FC7D7B']},
  {name: 'New Leaf', colors: ['#00537E', '#3AA17E']},
  {name: 'Cotton Candy', colors: ['#FCA5F1', '#B5FFFF']},
  {name: 'Pixie Dust', colors: ['#D585FF', '#00FFEE']},
  {name: 'Fizzy Peach', colors: ['#F24645', '#EBC08D']},
  {name: 'Sweet Dream', colors: ['#3A3897', '#A3A1FF']},
  {name: 'Fire Brick', colors: ['#45145A', '#FF5300']},
  {name: 'Wrought Iron', colors: ['#333333', '#5A5454']},
  {name: 'Deep Sea', colors: ['#4F00BC', '#29ABE2']},
  {name: 'Coastal Breeze', colors: ['#00B7FF', '#FFFFC7']},
  {name: 'Evening Delight', colors: ['#93278F', '#00A99D']}
];

function lerpColor(a, b, amount) {

    var ah = parseInt(a.replace(/#/g, ''), 16),
        ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
        bh = parseInt(b.replace(/#/g, ''), 16),
        br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
        rr = ar + amount * (br - ar),
        rg = ag + amount * (bg - ag),
        rb = ab + amount * (bb - ab);

    return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
}

function createElement() {
  var el = document.createElement('div');
  el.className = 'inscription-container';
  var inscription = document.createElement('div');
  var headline = document.createElement('h1');
  var body = document.createElement('p');
  inscription.className = 'inscription';
  inscription.appendChild(headline);
  inscription.appendChild(body);
  el.appendChild(inscription);
  document.body.appendChild(el);
  return {
    container: el,
    headline: headline,
    body: body
  };
}

var inscription = createElement();

function random(arr) {
  return arr[Math.round(Math.random() * (arr.length - 1))];
}

// Easing (t between 0 and 1)
function easeInOut(t) {
  return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1
}

b = document.body;
p = document.getElementById('pattern');

var daysPassed = Math.floor((Date.now() - new Date('August 19, 2017')) / (1000 * 60 * 60 * 24));

var index = 0;
var gradient = random(gradients);
var gradientOld = random(gradients);
function changeGradient() {
  var newGradient = gradient;
  while (gradient.name === newGradient.name) {
    newGradient = random(gradients);
  }
  gradientOld = gradient;
  gradient = newGradient;
}

function changeSlide() {

  // Get content + gradient
  changeGradient();
  var quote = content[index];

  var headline = inscription.headline;
  var body = inscription.body;

  // Assign text
  inscription.container.style.opacity = 0;
  setTimeout(function() {
    headline.innerHTML = quote.headline(daysPassed);
    body.innerText = quote.body;
  }, 500);

  // Increment
  index = index === content.length - 1 ? 0 : index + 1;
  prog = 0;

}
changeSlide();
setInterval(changeSlide, 12000);

var prog = 1;
var speed = 50;
var drift = {x: 0, y: 0};
var tilt = {x: 1, y: 1};
var rotation = 0;
var timeLast = Date.now();

function patternDrift(delta) {

  prog = Math.min(1, prog + speed * delta / 100);
  var val = easeInOut(prog);

  var increment = speed * delta;

  drift.x = (drift.x + increment * tilt.x) % 600;
  drift.y = (drift.y + increment * tilt.y) % 600;
  p.style.backgroundPosition = drift.x + 'px ' + drift.y + 'px';

  if (val === 1) {
    inscription.container.style.opacity = 1;
  }

  var colorA = lerpColor(gradientOld.colors[0], gradient.colors[0], val);
  var colorB = lerpColor(gradientOld.colors[1], gradient.colors[1], val);
  b.style.backgroundImage = 'linear-gradient(' + rotation + 'deg, ' + colorA + ', ' + colorB + ')';

  // var grad = 'linear-gradient(' + rotation + 'deg, '
  //   + gradient.colors[0] + '0%,  '
  //   + gradient.colors[1] + ' ' + (val*100).toString() + '%,  '
  //   + gradientOld.colors[0] + ', '
  //   + gradientOld.colors[1] + ')';
  //   console.log(grad);
  //   b.style.backgroundImage = grad;

}
patternDrift(0);

function update() {

  // Calculate delta time
  var delta = (Date.now() - timeLast) / 1000;
  timeLast = Date.now();

  // Shift pattern
  patternDrift(delta);

  // Request next frame
  window.requestAnimationFrame(update);

}

update();

function radToDeg(rad) {
  return rad * (180/Math.PI);
}

function vectorToDeg(x, y) {
  return radToDeg(Math.acos(x / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))));
}

function trackDevice(e) {
  var x = e.gamma;
  var y = e.beta;
  var max = Math.max(Math.abs(x), Math.abs(y));

  tilt = { x: x/max, y: y/max };
  var r = Math.round(vectorToDeg(tilt.x, tilt.y))
  rotation = ((tilt.y > 0 ? 180 + (180 - r) : r) - 90) * -1;
}

// Event attachments
function trackMouse(e) {
  var x = (e.pageX - window.innerWidth * 0.5) / (window.innerWidth * 0.5);
  var y = (e.pageY - window.innerHeight * 0.5) / (window.innerHeight * 0.5);
  var max = Math.max(Math.abs(x), Math.abs(y));

  tilt = { x: x/max, y: y/max };
  var r = Math.round(vectorToDeg(tilt.x, tilt.y))
  rotation = ((tilt.y > 0 ? 180 + (180 - r) : r) - 90) * -1;
}

window.addEventListener('mousemove', trackMouse);
window.addEventListener('deviceorientation', trackDevice);

// window.addEventListener('click', changeSlide);
