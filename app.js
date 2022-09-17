// https://www.omnicalculator.com/conversion/height-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const cmRadio = document.getElementById('cmRadio');
const mRadio = document.getElementById('mRadio');
const inRadio = document.getElementById('inRadio');
const ftRadio = document.getElementById('ftRadio');

let cm;
let m = v;

// labels of the inpust
const variable = document.getElementById('variable');

cmRadio.addEventListener('click', function() {
  variable.textContent = 'm';
  m = v;
  result.textContent = '';
});

mRadio.addEventListener('click', function() {
  variable.textContent = 'cm';
  cm = v;
  result.textContent = '';
});

inRadio.addEventListener('click', function() {
  variable.textContent = 'm';
  m = v;
  result.textContent = '';
});

ftRadio.addEventListener('click', function() {
  variable.textContent = 'm';
  m = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(cmRadio.checked)
    result.textContent = `cm = ${computecm().toFixed(2)}`;

  else if(mRadio.checked)
    result.textContent = `m = ${computem().toFixed(2)}`;

  else if(inRadio.checked)
    result.textContent = `in = ${computein().toFixed(2)}`;

  else if(ftRadio.checked)
    result.textContent = `ft = ${computeft().toFixed(2)}`;
})

// calculation

function computecm() {
  return Number(m.value) * 100;
}

function computem() {
  return Number(cm.value) / 100;
}

function computein() {
  return Number(m.value) * 39.37;
}

function computeft() {
  return Number(m.value) * 3.28084;
}