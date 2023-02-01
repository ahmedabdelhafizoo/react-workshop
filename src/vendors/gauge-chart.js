// https://codepen.io/gobiyau/pen/gOeWbPM?editors=0110

export function renderGauge(node) {
const value = node.getAttribute('value');
const degree = node.getAttribute('degree');
const title = node.getAttribute('title');
const min = node.getAttribute('min') ? node.getAttribute('min') : 0;
const max = node.getAttribute('max') ? node.getAttribute('max') : 100;

const width = 200;
const height = 200;
const innerRadius = 80;
const strokeWidth = 1;

const circumference = innerRadius * 2 * Math.PI;
const arc = circumference * (degree / 360);

const svgNS = 'http://www.w3.org/2000/svg';
const svg = document.createElementNS(svgNS, 'svg');
svg.setAttribute('fill', 'none');
svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
// svg.setAttribute('stroke', 'black');
svg.classList.add('gauge');

svg.addEventListener('click', function() {
  animePointer();
  animeProgress();
  animeMask();
});

const main = document.createElementNS(svgNS, 'g');
if (degree === "270") {
  main.setAttributeNS(null, 'transform', `rotate(-45)`);
  main.setAttributeNS(null, 'transform-origin', 'center');
} else if (degree === "360") {
  main.setAttributeNS(null, 'transform', `rotate(90)`);
  main.setAttributeNS(null, 'transform-origin', 'center');
}

const getPath = function() {
  if (degree === "180") {
     return `M ${width/2-innerRadius} ${height/2} A ${innerRadius} ${innerRadius} 0 0 1 ${width/2+innerRadius} ${height/2}`

  } else if (degree === "270") {
     return `M ${width/2-innerRadius} ${height/2} A ${innerRadius} ${innerRadius} 0 1 1 ${width/2} ${width/2+innerRadius}`

  } else if (degree === "360") {
     return `M ${width/2-innerRadius} ${height/2}
            A ${innerRadius} ${innerRadius} 0 0 1 ${width/2+innerRadius} ${height/2}
            A ${innerRadius} ${innerRadius} 0 0 1 ${width/2-innerRadius} ${height/2}
            `
  }
}

const drawGauge = function() {
  const path = document.createElementNS(svgNS, 'path');
  path.setAttribute(
    'd', getPath()
  );
  path.setAttributeNS(null, 'stroke','red');
  path.setAttributeNS(null, 'stroke-width', '1');
  return path;
}

const drawGaugebg = function() {
  const bgColor = "#eee";
  const path = document.createElementNS(svgNS, 'path');
  path.setAttribute(
    'd', getPath()
  );
  path.setAttributeNS(null, 'fill', 'none');
  path.setAttributeNS(null, 'stroke', `${bgColor}`);
  path.setAttributeNS(null, 'stroke-width', `${width / 9}`);
  return path;
}

const drawGaugeBase1 = function() {
  const bgColor = "#FDE47F";
  const path = document.createElementNS(svgNS, 'path');

  const rotateDegree = (degree==180) ? 0 : (degree==270) ? 270 : 180;
  path.setAttribute(
    'd', getPath()
  );
  path.setAttributeNS(null, 'fill', 'transparent');
  path.setAttributeNS(null, 'stroke-dasharray', `${arc} ${circumference}`);
  path.setAttributeNS(null, 'stroke', `${bgColor}`);
  path.setAttributeNS(null, 'stroke-width', `${width / 9}`);
  // path.setAttributeNS(null, 'transform', `scale (-1, 1) rotate(${rotateDegree})`);
  path.setAttributeNS(null, 'transform', `scale (-1, 1) rotate(${rotateDegree})`);
  path.setAttributeNS(null, 'transform-origin', 'center');
  return path;
}
const drawGaugeBase2 = function() {
  const bgColor = "lightgreen";
  const path = document.createElementNS(svgNS, 'path');
  const level_mid = arc - (49 / 100) * arc;
  const rotateDegree = (degree==180) ? 0 : (degree==270) ? 270 : 180;
  path.setAttribute(
    'd', getPath()
  );
  path.setAttributeNS(null, 'fill', 'transparent');
  path.setAttributeNS(null, 'stroke-dasharray', `${level_mid} ${circumference}`);
  path.setAttributeNS(null, 'stroke', `${bgColor}`);
  path.setAttributeNS(null, 'stroke-width', `${width / 9}`);
  path.setAttributeNS(null, 'transform', `scale (-1, 1) rotate(${rotateDegree})`);
  // path.setAttributeNS(null, 'transform', `scale (-1, 1)`);
  path.setAttributeNS(null, 'transform-origin', 'center');
  return path;
}
const drawGaugeBase3 = function() {
  const bgColor = "pink";
  const path = document.createElementNS(svgNS, 'path');
  const level_high = arc - (79 / 100) * arc;
  const rotateDegree = (degree==180) ? 0 : (degree==270) ? 270 : 180;
  path.setAttribute(
    'd', getPath()
  );
  path.setAttributeNS(null, 'fill', 'transparent');
  path.setAttributeNS(null, 'stroke-dasharray', `${level_high} ${circumference}`);
  path.setAttributeNS(null, 'stroke', `${bgColor}`);
  path.setAttributeNS(null, 'stroke-width', `${width / 9}`);
  path.setAttributeNS(null, 'transform', `scale (-1, 1) rotate(${rotateDegree})`);
  path.setAttributeNS(null, 'transform-origin', 'center');
  return path;
}

const marker = function(label, percent) {
  const rotationDegree = percent / 100 * degree;
  const group = document.createElementNS(svgNS, 'g');
  group.setAttributeNS(null, 'transform', `rotate(${rotationDegree})`);
  group.setAttributeNS(null, 'transform-origin', 'center');
  const line = document.createElementNS(svgNS,'line');
  line.setAttributeNS(null, 'x1', '12');
  line.setAttributeNS(null, 'y1', height /2);
  line.setAttributeNS(null, 'x2', width / 2 - innerRadius +  strokeWidth /2);
  line.setAttributeNS(null, 'y2', height /2);
  line.setAttributeNS(null, "stroke", "red");
  const text = document.createElementNS(svgNS,'text');
  text.setAttributeNS(null, 'x', '0');
  text.setAttributeNS(null, 'y', '100');
  text.setAttributeNS(null, 'text-anchor', 'middle');
  text.setAttributeNS(null, 'transform', 'translate(-90,100) rotate(-90)');
  text.setAttributeNS(null, "fill", "red");
  text.setAttributeNS(null,"font-size","12");
  text.innerHTML = label;
  group.appendChild(line);
  group.appendChild(text);
  return group;
}

const setMarkers = function(ticks) {
  const markers = document.createElementNS(svgNS, 'g');

  for (let i=0; i<=ticks; i++) {
    markers.appendChild(marker(`${i * (max-min) / ticks + Number(min)}`, i * 100 / ticks))
  }
  return markers;
}

const animeProgress = function () {
  const progress = svg.querySelector(".progress");
  if (progress) {
    let i =0;
    const myInterval = setInterval(() => {
      progress.setAttributeNS(null, 'stroke-dasharray', `${i / 100 * arc}, ${circumference}`);
      if (i < value) { i++ } else {clearInterval(myInterval)}
    }, 10)
  }
}

const drawMask = function() {
  const color = "gray";
  const path = document.createElementNS(svgNS, 'path');
  let mask = arc - ((100 - value) / 100) * arc;
  const rotateDegree = (degree==180) ? 0 : (degree==270) ? 270 : 180;
  path.setAttribute(
    'd', getPath(innerRadius)
  );
  path.setAttributeNS(null, 'class', 'mask');
  path.setAttributeNS(null, 'fill', 'transparent');
  path.setAttributeNS(null, 'stroke-dasharray', `${arc} ${circumference}`);
  path.setAttributeNS(null, 'stroke-dashoffset', `${mask}`);
  path.setAttributeNS(null, 'stroke', `${color}`);
  path.setAttributeNS(null, 'stroke-width', `${width / 9}`);
  path.setAttributeNS(null, 'transform', `scale (-1, 1) rotate(${rotateDegree})`);
  path.setAttributeNS(null, 'transform-origin', 'center');
  let i = 0
  const myInterval = setInterval(() => {
    path.setAttributeNS(null, 'stroke-dashoffset', `${arc - ((100 - i) / 100) * arc}`);
     if (i < value) { i++ } else {clearInterval(myInterval)}
  }, 10)

  return path;
}

const animeMask = function () {
  const mask = svg.querySelector(".mask");
  if (mask) {
    let i =0;
    const myInterval = setInterval(() => {
      mask.setAttributeNS(null, 'stroke-dashoffset', `${arc - ((100 - i) / 100) * arc}`);
      if (i < value) { i++ } else {clearInterval(myInterval)}
    }, 10)
  }
}

const drawPointer = function () {
  const needleLength = 90;
  const needleCenter = 5;
  const pointer = document.createElementNS(svgNS, 'g');
  pointer.setAttributeNS(null, 'class', 'needle');
  pointer.setAttributeNS(null, 'x', width / 2);
  pointer.setAttributeNS(null, 'y', height / 2);

  let i =0;
  const myInterval = setInterval(() => {
    pointer.setAttributeNS(null, 'transform', `rotate(${i * degree / 100},100,100)`);
    if (i < value) { i++ } else {clearInterval(myInterval)}
  }, 10)

  pointer.setAttributeNS(null, 'fill', 'black');
  const path = document.createElementNS(svgNS, 'path');

  path.setAttribute(
    'd', `M ${width/2} ${height/2-needleCenter} A 2 2 0 0 1 ${width/2} ${height/2+needleCenter} L ${width/2-needleLength} ${height/2} Z`
  );
  pointer.appendChild(path);
  return pointer;

}

const animePointer = function () {
  const needle = svg.querySelector(".needle");
  if (needle) {
    let i =0;
    const myInterval = setInterval(() => {
      needle.setAttributeNS(null, 'transform', `rotate(${i * degree / 100},100,100)`);
      if (i < value) { i++ } else {clearInterval(myInterval)}
    }, 10)
  }
}


svg.appendChild(main);
main.appendChild(drawGaugeBase1());
main.appendChild(drawGaugeBase2());
main.appendChild(drawGaugeBase3());
main.appendChild(drawMask());
main.appendChild(drawPointer());
return node.appendChild(svg);
}
